import { AbilityAware, AbilityPluginBinding,
  BinaryMessageHandler,
  BinaryMessenger,
  EventChannel,
  FlutterPlugin, Log,
  MethodCall,
  MethodCallHandler,
  MethodChannel,
  MethodResult } from '@ohos/flutter_ohos';
import { FlutterPluginBinding } from '@ohos/flutter_ohos/src/main/ets/embedding/engine/plugins/FlutterPlugin';
import { scanBarcode, scanCore } from '@kit.ScanKit';
import { EventSink, StreamHandler } from '@ohos/flutter_ohos/src/main/ets/plugin/common/EventChannel';
import { abilityAccessCtrl, bundleManager, ErrorCode } from '@kit.AbilityKit';
import { camera } from '@kit.CameraKit';
import { ScanResult, ResultType, Configuration, BarcodeFormat } from './protos.js';
import FormatTrans from './formatTrans';
import { BusinessError } from '@kit.BasicServicesKit';

const TAG = "BarcodeScanPlugin";

export default class BarcodeScanPlugin implements FlutterPlugin, AbilityAware, MethodCallHandler, StreamHandler {

  private channel: MethodChannel | null = null;
  private sink: EventSink | null = null;
  private messenger: BinaryMessenger | null = null;
  private eventChannel: EventChannel | null = null;

  private context: Context | null = null;
  private options: scanBarcode.ScanOptions = {
    scanTypes: [scanCore.ScanType.ALL],
    enableMultiMode: true,
    enableAlbum: true
  };

  private tokenId : number | null = null;
  private atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();


  getUniqueClassName(): string {
    return TAG;
  }

  onAttachedToEngine(binding: FlutterPluginBinding): void {
    Log.d(TAG, "attached to engine");
    this.messenger = binding.getBinaryMessenger();
    this.startListening();
  }

  onDetachedFromEngine(binding: FlutterPluginBinding): void {
    Log.d(TAG,"onDetachedFromEngine");
    this.stopListening();
  }

  onAttachedToAbility(binding: AbilityPluginBinding): void {
    this.context = binding.getAbility().context;
  }

  onDetachedFromAbility(): void {
    Log.d(TAG,"onDetachedFromAbility");
  }

  startListening() : void {
    Log.d(TAG, "start listening");
    if(this.channel != null) {
      this.stopListening();
    }
    this.channel = new MethodChannel(this.messenger!, "de.mintware.barcode_scan");
    this.channel.setMethodCallHandler(this);

    if(this.eventChannel != null) {
      this.stopListening();
    }
    this.eventChannel = new EventChannel(this.messenger!, "de.mintware.barcode_scan/events");
    this.eventChannel.setStreamHandler(this);
  }

  stopListening():void {
    Log.d(TAG, "stop listening");
    this.channel?.setMethodCallHandler(null);
    this.channel = null;
    this.eventChannel?.setStreamHandler(null);
    this.eventChannel = null;
  }

  onMethodCall(call: MethodCall, result: MethodResult): void {
    Log.d(TAG, "received a flutter call:" + String(call.method) + ", args=" + JSON.stringify(call.args));
    if(call.method == "scan") {
      if(call.args != null && call.args != undefined) {
        let config = Configuration.decode(call.args);
        if(config.restrictFormat.length > 0) {
          this.options.scanTypes = config.restrictFormat.map((value)=>FormatTrans.getScanType(value));
        }
      }
      Log.d(TAG, "scanTypes=" + JSON.stringify(this.options.scanTypes));
      this.onScan(result);
    } else if(call.method == "requestCameraPermission") {
      this.onRequestPermission(result);
    } else if(call.method == "numberOfCameras") {
      result.success(camera.getCameraManager(this.context).getSupportedCameras().length);

    }
  }

  checkPermission() : boolean {
    Log.d(TAG, "check permission");
    this.getTokenID();
    let cameraPermissionState = this.atManager.verifyAccessTokenSync(this.tokenId, "ohos.permission.CAMERA");
    Log.d(TAG, "check result=" + String(cameraPermissionState == abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED));
    return cameraPermissionState == abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED;
  }

  onRequestPermission(result: MethodResult) : void {
    Log.d(TAG, "on request permission");
    result.success(false);
    this.sink?.success("PERMISSION_GRANTED");
    return;
    if(this.checkPermission()) {
      result.success(false);
      Log.d(TAG, "has permission");
      return;
    }
    Log.d(TAG, "request permission from user");
    this.atManager?.requestPermissionsFromUser(this.context, ["ohos.permission.CAMERA"]).then((data)=>{
      Log.d(TAG, "data=" + String(data.authResults));
      if(data.authResults[0] == abilityAccessCtrl.GrantStatus.PERMISSION_GRANTED) {
        result.success(false);
        this.sink?.success("PERMISSION_GRANTED");
      }
      else {
        result.success(true);
        this.sink?.success("PERMISSION_NOT_GRANTED");
      }
    }).catch((e: Error)=>{
      result.error("error", JSON.stringify(e), null);
    })
  }

  private onScan(result: MethodResult) : void {
    scanBarcode.startScanForResult(this.context, this.options).then((scanResult: scanBarcode.ScanResult) => {
      let data = ScanResult.create({
        type: ResultType.Error,
        rawContent: "",
        format: BarcodeFormat.unknown
      })
      if(scanResult != undefined || scanResult != null) {
        data.type = ResultType.Barcode;
        data.rawContent = scanResult.originalValue;
        data.format = FormatTrans.getFormat(scanResult.scanType);
      }
      let buff : Uint8Array = ScanResult.encode(data).finish();
      Log.d(TAG, "scan result=" + JSON.stringify(data.toJSON()));
      result.success(buff);
    }).catch((error: BusinessError)=>{
      Log.d(TAG, "scan failed: code:" + error.code + "," + JSON.stringify(error));
      let data = ScanResult.create({
        type: ResultType.Error,
        rawContent: "",
        format: BarcodeFormat.unknown
      })
      if(error.code == 1000500002) {
        data.type = ResultType.Cancelled;
      } else {
        data.type = ResultType.Error;
        data.format = BarcodeFormat.unknown;
        data.rawContent = JSON.stringify(error);
      }
      let buff : Uint8Array = ScanResult.encode(data).finish();
      result.success(buff);
    });
  }



  onListen(args: ESObject, events: EventSink): void {
    this.sink = events;
  }

  onCancel(args: ESObject): void {
    this.sink = null;
  }

  getTokenID() : void {
    if(!this.tokenId) {
      let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
      this.tokenId = bundleInfo.appInfo.accessTokenId;
    }
  }
}
