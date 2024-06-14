import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Properties of an AndroidConfiguration. */
export interface IAndroidConfiguration {

    /** AndroidConfiguration aspectTolerance */
    aspectTolerance?: (number|null);

    /** AndroidConfiguration useAutoFocus */
    useAutoFocus?: (boolean|null);
}

/** Represents an AndroidConfiguration. */
export class AndroidConfiguration implements IAndroidConfiguration {

    /**
     * Constructs a new AndroidConfiguration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAndroidConfiguration);

    /** AndroidConfiguration aspectTolerance. */
    public aspectTolerance: number;

    /** AndroidConfiguration useAutoFocus. */
    public useAutoFocus: boolean;

    /**
     * Creates a new AndroidConfiguration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AndroidConfiguration instance
     */
    public static create(properties?: IAndroidConfiguration): AndroidConfiguration;

    /**
     * Encodes the specified AndroidConfiguration message. Does not implicitly {@link AndroidConfiguration.verify|verify} messages.
     * @param message AndroidConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAndroidConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AndroidConfiguration message, length delimited. Does not implicitly {@link AndroidConfiguration.verify|verify} messages.
     * @param message AndroidConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAndroidConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AndroidConfiguration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AndroidConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AndroidConfiguration;

    /**
     * Decodes an AndroidConfiguration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AndroidConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AndroidConfiguration;

    /**
     * Verifies an AndroidConfiguration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AndroidConfiguration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AndroidConfiguration
     */
    public static fromObject(object: { [k: string]: any }): AndroidConfiguration;

    /**
     * Creates a plain object from an AndroidConfiguration message. Also converts values to other types if specified.
     * @param message AndroidConfiguration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AndroidConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AndroidConfiguration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AndroidConfiguration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** BarcodeFormat enum. */
export enum BarcodeFormat {
    unknown = 0,
    aztec = 1,
    code39 = 2,
    code93 = 3,
    ean8 = 4,
    ean13 = 5,
    code128 = 6,
    dataMatrix = 7,
    qr = 8,
    interleaved2of5 = 9,
    upce = 10,
    pdf417 = 11
}

/** Represents a Configuration. */
export class Configuration implements IConfiguration {

    /**
     * Constructs a new Configuration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConfiguration);

    /** Configuration strings. */
    public strings: { [k: string]: string };

    /** Configuration restrictFormat. */
    public restrictFormat: BarcodeFormat[];

    /** Configuration useCamera. */
    public useCamera: number;

    /** Configuration android. */
    public android?: (IAndroidConfiguration|null);

    /** Configuration autoEnableFlash. */
    public autoEnableFlash: boolean;

    /**
     * Creates a new Configuration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Configuration instance
     */
    public static create(properties?: IConfiguration): Configuration;

    /**
     * Encodes the specified Configuration message. Does not implicitly {@link Configuration.verify|verify} messages.
     * @param message Configuration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Configuration message, length delimited. Does not implicitly {@link Configuration.verify|verify} messages.
     * @param message Configuration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Configuration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Configuration;

    /**
     * Decodes a Configuration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Configuration;

    /**
     * Verifies a Configuration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Configuration
     */
    public static fromObject(object: { [k: string]: any }): Configuration;

    /**
     * Creates a plain object from a Configuration message. Also converts values to other types if specified.
     * @param message Configuration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Configuration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Configuration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ResultType enum. */
export enum ResultType {
    Barcode = 0,
    Cancelled = 1,
    Error = 2
}

/** Represents a ScanResult. */
export class ScanResult implements IScanResult {

    /**
     * Constructs a new ScanResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IScanResult);

    /** ScanResult type. */
    public type: ResultType;

    /** ScanResult rawContent. */
    public rawContent: string;

    /** ScanResult format. */
    public format: BarcodeFormat;

    /** ScanResult formatNote. */
    public formatNote: string;

    /**
     * Creates a new ScanResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ScanResult instance
     */
    public static create(properties?: IScanResult): ScanResult;

    /**
     * Encodes the specified ScanResult message. Does not implicitly {@link ScanResult.verify|verify} messages.
     * @param message ScanResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ScanResult message, length delimited. Does not implicitly {@link ScanResult.verify|verify} messages.
     * @param message ScanResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IScanResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ScanResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ScanResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ScanResult;

    /**
     * Decodes a ScanResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ScanResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ScanResult;

    /**
     * Verifies a ScanResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ScanResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ScanResult
     */
    public static fromObject(object: { [k: string]: any }): ScanResult;

    /**
     * Creates a plain object from a ScanResult message. Also converts values to other types if specified.
     * @param message ScanResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ScanResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ScanResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ScanResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
