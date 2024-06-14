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
import { abilityAccessCtrl, bundleManager } from '@kit.AbilityKit';
import { camera } from '@kit.CameraKit';
import { ScanResult, ResultType, Configuration, BarcodeFormat } from './protos.js';

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
          this.options.scanTypes = config.restrictFormat.map((value)=>this.getScanType(value));
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
        data.format = this.getFormat(scanResult.scanType);
      }
      let buff : Uint8Array = ScanResult.encode(data).finish();
      Log.d(TAG, "scan result=" + JSON.stringify(data.toJSON()));
      result.success(buff);
    }).catch((error: Error)=>{
      Log.d(TAG, "scan failed: "+ JSON.stringify(error));
      result.error("scan error", JSON.stringify(error), null);
    });
  }

  private getScanType(format: BarcodeFormat) : scanCore.ScanType {
    switch(format) {
      case BarcodeFormat.aztec:
        return scanCore.ScanType.AZTEC_CODE;
      case BarcodeFormat.code39:
        return scanCore.ScanType.CODE39_CODE;
      case BarcodeFormat.code93:
        return scanCore.ScanType.CODE93_CODE;
      case BarcodeFormat.code128:
        return scanCore.ScanType.CODE128_CODE;
      case BarcodeFormat.dataMatrix:
        return scanCore.ScanType.DATAMATRIX_CODE;
      case BarcodeFormat.ean8:
        return scanCore.ScanType.EAN8_CODE;
      case BarcodeFormat.ean13:
        return scanCore.ScanType.EAN13_CODE;
      case BarcodeFormat.interleaved2of5:
        return scanCore.ScanType.ITF14_CODE;
      case BarcodeFormat.pdf417:
        return scanCore.ScanType.PDF417_CODE;
      case BarcodeFormat.qr:
        return scanCore.ScanType.QR_CODE;
      case BarcodeFormat.upce:
        return scanCore.ScanType.UPC_E_CODE;
      default:
        return scanCore.ScanType.FORMAT_UNKNOWN;
    }
  }
  private getFormat(scanType: scanCore.ScanType) : BarcodeFormat {
    switch (scanType) {
      case scanCore.ScanType.AZTEC_CODE:
        return BarcodeFormat.aztec;
      case scanCore.ScanType.CODE39_CODE:
        return BarcodeFormat.code39;
      case scanCore.ScanType.CODE93_CODE:
        return BarcodeFormat.code93;
      case scanCore.ScanType.CODE128_CODE:
        return BarcodeFormat.code128;
      case scanCore.ScanType.DATAMATRIX_CODE:
        return BarcodeFormat.dataMatrix;
      case scanCore.ScanType.EAN8_CODE:
        return BarcodeFormat.ean8;
      case scanCore.ScanType.EAN13_CODE:
        return BarcodeFormat.ean13;
      case scanCore.ScanType.ITF14_CODE:
        return BarcodeFormat.interleaved2of5;
      case scanCore.ScanType.PDF417_CODE:
        return BarcodeFormat.pdf417;
      case scanCore.ScanType.QR_CODE:
        return BarcodeFormat.qr;
      case scanCore.ScanType.UPC_E_CODE:
        return BarcodeFormat.upce;
      default:
        return BarcodeFormat.unknown;
    }
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
