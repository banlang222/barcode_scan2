import { BarcodeFormat } from './protos.js';
import { scanCore } from '@kit.ScanKit';

export default class FormatTrans {
  static getScanType(format: BarcodeFormat) : scanCore.ScanType {
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
  static getFormat(scanType: scanCore.ScanType) : BarcodeFormat {
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
}