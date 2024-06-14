/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const AndroidConfiguration = $root.AndroidConfiguration = (() => {

    /**
     * Properties of an AndroidConfiguration.
     * @exports IAndroidConfiguration
     * @interface IAndroidConfiguration
     * @property {number|null} [aspectTolerance] AndroidConfiguration aspectTolerance
     * @property {boolean|null} [useAutoFocus] AndroidConfiguration useAutoFocus
     */

    /**
     * Constructs a new AndroidConfiguration.
     * @exports AndroidConfiguration
     * @classdesc Represents an AndroidConfiguration.
     * @implements IAndroidConfiguration
     * @constructor
     * @param {IAndroidConfiguration=} [properties] Properties to set
     */
    function AndroidConfiguration(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AndroidConfiguration aspectTolerance.
     * @member {number} aspectTolerance
     * @memberof AndroidConfiguration
     * @instance
     */
    AndroidConfiguration.prototype.aspectTolerance = 0;

    /**
     * AndroidConfiguration useAutoFocus.
     * @member {boolean} useAutoFocus
     * @memberof AndroidConfiguration
     * @instance
     */
    AndroidConfiguration.prototype.useAutoFocus = false;

    /**
     * Creates a new AndroidConfiguration instance using the specified properties.
     * @function create
     * @memberof AndroidConfiguration
     * @static
     * @param {IAndroidConfiguration=} [properties] Properties to set
     * @returns {AndroidConfiguration} AndroidConfiguration instance
     */
    AndroidConfiguration.create = function create(properties) {
        return new AndroidConfiguration(properties);
    };

    /**
     * Encodes the specified AndroidConfiguration message. Does not implicitly {@link AndroidConfiguration.verify|verify} messages.
     * @function encode
     * @memberof AndroidConfiguration
     * @static
     * @param {IAndroidConfiguration} message AndroidConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AndroidConfiguration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.aspectTolerance != null && Object.hasOwnProperty.call(message, "aspectTolerance"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.aspectTolerance);
        if (message.useAutoFocus != null && Object.hasOwnProperty.call(message, "useAutoFocus"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.useAutoFocus);
        return writer;
    };

    /**
     * Encodes the specified AndroidConfiguration message, length delimited. Does not implicitly {@link AndroidConfiguration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AndroidConfiguration
     * @static
     * @param {IAndroidConfiguration} message AndroidConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AndroidConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AndroidConfiguration message from the specified reader or buffer.
     * @function decode
     * @memberof AndroidConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AndroidConfiguration} AndroidConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AndroidConfiguration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AndroidConfiguration();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.aspectTolerance = reader.double();
                    break;
                }
            case 2: {
                    message.useAutoFocus = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AndroidConfiguration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AndroidConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AndroidConfiguration} AndroidConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AndroidConfiguration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AndroidConfiguration message.
     * @function verify
     * @memberof AndroidConfiguration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AndroidConfiguration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.aspectTolerance != null && message.hasOwnProperty("aspectTolerance"))
            if (typeof message.aspectTolerance !== "number")
                return "aspectTolerance: number expected";
        if (message.useAutoFocus != null && message.hasOwnProperty("useAutoFocus"))
            if (typeof message.useAutoFocus !== "boolean")
                return "useAutoFocus: boolean expected";
        return null;
    };

    /**
     * Creates an AndroidConfiguration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AndroidConfiguration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AndroidConfiguration} AndroidConfiguration
     */
    AndroidConfiguration.fromObject = function fromObject(object) {
        if (object instanceof $root.AndroidConfiguration)
            return object;
        let message = new $root.AndroidConfiguration();
        if (object.aspectTolerance != null)
            message.aspectTolerance = Number(object.aspectTolerance);
        if (object.useAutoFocus != null)
            message.useAutoFocus = Boolean(object.useAutoFocus);
        return message;
    };

    /**
     * Creates a plain object from an AndroidConfiguration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AndroidConfiguration
     * @static
     * @param {AndroidConfiguration} message AndroidConfiguration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AndroidConfiguration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.aspectTolerance = 0;
            object.useAutoFocus = false;
        }
        if (message.aspectTolerance != null && message.hasOwnProperty("aspectTolerance"))
            object.aspectTolerance = options.json && !isFinite(message.aspectTolerance) ? String(message.aspectTolerance) : message.aspectTolerance;
        if (message.useAutoFocus != null && message.hasOwnProperty("useAutoFocus"))
            object.useAutoFocus = message.useAutoFocus;
        return object;
    };

    /**
     * Converts this AndroidConfiguration to JSON.
     * @function toJSON
     * @memberof AndroidConfiguration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AndroidConfiguration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AndroidConfiguration
     * @function getTypeUrl
     * @memberof AndroidConfiguration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AndroidConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AndroidConfiguration";
    };

    return AndroidConfiguration;
})();

/**
 * BarcodeFormat enum.
 * @exports BarcodeFormat
 * @enum {number}
 * @property {number} unknown=0 unknown value
 * @property {number} aztec=1 aztec value
 * @property {number} code39=2 code39 value
 * @property {number} code93=3 code93 value
 * @property {number} ean8=4 ean8 value
 * @property {number} ean13=5 ean13 value
 * @property {number} code128=6 code128 value
 * @property {number} dataMatrix=7 dataMatrix value
 * @property {number} qr=8 qr value
 * @property {number} interleaved2of5=9 interleaved2of5 value
 * @property {number} upce=10 upce value
 * @property {number} pdf417=11 pdf417 value
 */
export const BarcodeFormat = $root.BarcodeFormat = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "unknown"] = 0;
    values[valuesById[1] = "aztec"] = 1;
    values[valuesById[2] = "code39"] = 2;
    values[valuesById[3] = "code93"] = 3;
    values[valuesById[4] = "ean8"] = 4;
    values[valuesById[5] = "ean13"] = 5;
    values[valuesById[6] = "code128"] = 6;
    values[valuesById[7] = "dataMatrix"] = 7;
    values[valuesById[8] = "qr"] = 8;
    values[valuesById[9] = "interleaved2of5"] = 9;
    values[valuesById[10] = "upce"] = 10;
    values[valuesById[11] = "pdf417"] = 11;
    return values;
})();

export const Configuration = $root.Configuration = (() => {

    /**
     * Properties of a Configuration.
     * @exports IConfiguration
     * @interface IConfiguration
     * @property {Object.<string,string>|null} [strings] Configuration strings
     * @property {Array.<BarcodeFormat>|null} [restrictFormat] Configuration restrictFormat
     * @property {number|null} [useCamera] Configuration useCamera
     * @property {IAndroidConfiguration|null} [android] Configuration android
     * @property {boolean|null} [autoEnableFlash] Configuration autoEnableFlash
     */

    /**
     * Constructs a new Configuration.
     * @exports Configuration
     * @classdesc Represents a Configuration.
     * @implements IConfiguration
     * @constructor
     * @param {IConfiguration=} [properties] Properties to set
     */
    function Configuration(properties) {
        this.strings = {};
        this.restrictFormat = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Configuration strings.
     * @member {Object.<string,string>} strings
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.strings = $util.emptyObject;

    /**
     * Configuration restrictFormat.
     * @member {Array.<BarcodeFormat>} restrictFormat
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.restrictFormat = $util.emptyArray;

    /**
     * Configuration useCamera.
     * @member {number} useCamera
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.useCamera = 0;

    /**
     * Configuration android.
     * @member {IAndroidConfiguration|null|undefined} android
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.android = null;

    /**
     * Configuration autoEnableFlash.
     * @member {boolean} autoEnableFlash
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.autoEnableFlash = false;

    /**
     * Creates a new Configuration instance using the specified properties.
     * @function create
     * @memberof Configuration
     * @static
     * @param {IConfiguration=} [properties] Properties to set
     * @returns {Configuration} Configuration instance
     */
    Configuration.create = function create(properties) {
        return new Configuration(properties);
    };

    /**
     * Encodes the specified Configuration message. Does not implicitly {@link Configuration.verify|verify} messages.
     * @function encode
     * @memberof Configuration
     * @static
     * @param {IConfiguration} message Configuration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configuration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.strings != null && Object.hasOwnProperty.call(message, "strings"))
            for (let keys = Object.keys(message.strings), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.strings[keys[i]]).ldelim();
        if (message.restrictFormat != null && message.restrictFormat.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.restrictFormat.length; ++i)
                writer.int32(message.restrictFormat[i]);
            writer.ldelim();
        }
        if (message.useCamera != null && Object.hasOwnProperty.call(message, "useCamera"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.useCamera);
        if (message.android != null && Object.hasOwnProperty.call(message, "android"))
            $root.AndroidConfiguration.encode(message.android, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.autoEnableFlash != null && Object.hasOwnProperty.call(message, "autoEnableFlash"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.autoEnableFlash);
        return writer;
    };

    /**
     * Encodes the specified Configuration message, length delimited. Does not implicitly {@link Configuration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Configuration
     * @static
     * @param {IConfiguration} message Configuration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configuration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Configuration message from the specified reader or buffer.
     * @function decode
     * @memberof Configuration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Configuration} Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configuration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Configuration(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (message.strings === $util.emptyObject)
                        message.strings = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.strings[key] = value;
                    break;
                }
            case 2: {
                    if (!(message.restrictFormat && message.restrictFormat.length))
                        message.restrictFormat = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.restrictFormat.push(reader.int32());
                    } else
                        message.restrictFormat.push(reader.int32());
                    break;
                }
            case 3: {
                    message.useCamera = reader.int32();
                    break;
                }
            case 4: {
                    message.android = $root.AndroidConfiguration.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.autoEnableFlash = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Configuration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Configuration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Configuration} Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configuration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Configuration message.
     * @function verify
     * @memberof Configuration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Configuration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.strings != null && message.hasOwnProperty("strings")) {
            if (!$util.isObject(message.strings))
                return "strings: object expected";
            let key = Object.keys(message.strings);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isString(message.strings[key[i]]))
                    return "strings: string{k:string} expected";
        }
        if (message.restrictFormat != null && message.hasOwnProperty("restrictFormat")) {
            if (!Array.isArray(message.restrictFormat))
                return "restrictFormat: array expected";
            for (let i = 0; i < message.restrictFormat.length; ++i)
                switch (message.restrictFormat[i]) {
                default:
                    return "restrictFormat: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
        }
        if (message.useCamera != null && message.hasOwnProperty("useCamera"))
            if (!$util.isInteger(message.useCamera))
                return "useCamera: integer expected";
        if (message.android != null && message.hasOwnProperty("android")) {
            let error = $root.AndroidConfiguration.verify(message.android);
            if (error)
                return "android." + error;
        }
        if (message.autoEnableFlash != null && message.hasOwnProperty("autoEnableFlash"))
            if (typeof message.autoEnableFlash !== "boolean")
                return "autoEnableFlash: boolean expected";
        return null;
    };

    /**
     * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Configuration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Configuration} Configuration
     */
    Configuration.fromObject = function fromObject(object) {
        if (object instanceof $root.Configuration)
            return object;
        let message = new $root.Configuration();
        if (object.strings) {
            if (typeof object.strings !== "object")
                throw TypeError(".Configuration.strings: object expected");
            message.strings = {};
            for (let keys = Object.keys(object.strings), i = 0; i < keys.length; ++i)
                message.strings[keys[i]] = String(object.strings[keys[i]]);
        }
        if (object.restrictFormat) {
            if (!Array.isArray(object.restrictFormat))
                throw TypeError(".Configuration.restrictFormat: array expected");
            message.restrictFormat = [];
            for (let i = 0; i < object.restrictFormat.length; ++i)
                switch (object.restrictFormat[i]) {
                default:
                    if (typeof object.restrictFormat[i] === "number") {
                        message.restrictFormat[i] = object.restrictFormat[i];
                        break;
                    }
                case "unknown":
                case 0:
                    message.restrictFormat[i] = 0;
                    break;
                case "aztec":
                case 1:
                    message.restrictFormat[i] = 1;
                    break;
                case "code39":
                case 2:
                    message.restrictFormat[i] = 2;
                    break;
                case "code93":
                case 3:
                    message.restrictFormat[i] = 3;
                    break;
                case "ean8":
                case 4:
                    message.restrictFormat[i] = 4;
                    break;
                case "ean13":
                case 5:
                    message.restrictFormat[i] = 5;
                    break;
                case "code128":
                case 6:
                    message.restrictFormat[i] = 6;
                    break;
                case "dataMatrix":
                case 7:
                    message.restrictFormat[i] = 7;
                    break;
                case "qr":
                case 8:
                    message.restrictFormat[i] = 8;
                    break;
                case "interleaved2of5":
                case 9:
                    message.restrictFormat[i] = 9;
                    break;
                case "upce":
                case 10:
                    message.restrictFormat[i] = 10;
                    break;
                case "pdf417":
                case 11:
                    message.restrictFormat[i] = 11;
                    break;
                }
        }
        if (object.useCamera != null)
            message.useCamera = object.useCamera | 0;
        if (object.android != null) {
            if (typeof object.android !== "object")
                throw TypeError(".Configuration.android: object expected");
            message.android = $root.AndroidConfiguration.fromObject(object.android);
        }
        if (object.autoEnableFlash != null)
            message.autoEnableFlash = Boolean(object.autoEnableFlash);
        return message;
    };

    /**
     * Creates a plain object from a Configuration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Configuration
     * @static
     * @param {Configuration} message Configuration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Configuration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.restrictFormat = [];
        if (options.objects || options.defaults)
            object.strings = {};
        if (options.defaults) {
            object.useCamera = 0;
            object.android = null;
            object.autoEnableFlash = false;
        }
        let keys2;
        if (message.strings && (keys2 = Object.keys(message.strings)).length) {
            object.strings = {};
            for (let j = 0; j < keys2.length; ++j)
                object.strings[keys2[j]] = message.strings[keys2[j]];
        }
        if (message.restrictFormat && message.restrictFormat.length) {
            object.restrictFormat = [];
            for (let j = 0; j < message.restrictFormat.length; ++j)
                object.restrictFormat[j] = options.enums === String ? $root.BarcodeFormat[message.restrictFormat[j]] === undefined ? message.restrictFormat[j] : $root.BarcodeFormat[message.restrictFormat[j]] : message.restrictFormat[j];
        }
        if (message.useCamera != null && message.hasOwnProperty("useCamera"))
            object.useCamera = message.useCamera;
        if (message.android != null && message.hasOwnProperty("android"))
            object.android = $root.AndroidConfiguration.toObject(message.android, options);
        if (message.autoEnableFlash != null && message.hasOwnProperty("autoEnableFlash"))
            object.autoEnableFlash = message.autoEnableFlash;
        return object;
    };

    /**
     * Converts this Configuration to JSON.
     * @function toJSON
     * @memberof Configuration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Configuration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Configuration
     * @function getTypeUrl
     * @memberof Configuration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Configuration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Configuration";
    };

    return Configuration;
})();

/**
 * ResultType enum.
 * @exports ResultType
 * @enum {number}
 * @property {number} Barcode=0 Barcode value
 * @property {number} Cancelled=1 Cancelled value
 * @property {number} Error=2 Error value
 */
export const ResultType = $root.ResultType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Barcode"] = 0;
    values[valuesById[1] = "Cancelled"] = 1;
    values[valuesById[2] = "Error"] = 2;
    return values;
})();

export const ScanResult = $root.ScanResult = (() => {

    /**
     * Properties of a ScanResult.
     * @exports IScanResult
     * @interface IScanResult
     * @property {ResultType|null} [type] ScanResult type
     * @property {string|null} [rawContent] ScanResult rawContent
     * @property {BarcodeFormat|null} [format] ScanResult format
     * @property {string|null} [formatNote] ScanResult formatNote
     */

    /**
     * Constructs a new ScanResult.
     * @exports ScanResult
     * @classdesc Represents a ScanResult.
     * @implements IScanResult
     * @constructor
     * @param {IScanResult=} [properties] Properties to set
     */
    function ScanResult(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ScanResult type.
     * @member {ResultType} type
     * @memberof ScanResult
     * @instance
     */
    ScanResult.prototype.type = 0;

    /**
     * ScanResult rawContent.
     * @member {string} rawContent
     * @memberof ScanResult
     * @instance
     */
    ScanResult.prototype.rawContent = "";

    /**
     * ScanResult format.
     * @member {BarcodeFormat} format
     * @memberof ScanResult
     * @instance
     */
    ScanResult.prototype.format = 0;

    /**
     * ScanResult formatNote.
     * @member {string} formatNote
     * @memberof ScanResult
     * @instance
     */
    ScanResult.prototype.formatNote = "";

    /**
     * Creates a new ScanResult instance using the specified properties.
     * @function create
     * @memberof ScanResult
     * @static
     * @param {IScanResult=} [properties] Properties to set
     * @returns {ScanResult} ScanResult instance
     */
    ScanResult.create = function create(properties) {
        return new ScanResult(properties);
    };

    /**
     * Encodes the specified ScanResult message. Does not implicitly {@link ScanResult.verify|verify} messages.
     * @function encode
     * @memberof ScanResult
     * @static
     * @param {IScanResult} message ScanResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ScanResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.rawContent != null && Object.hasOwnProperty.call(message, "rawContent"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.rawContent);
        if (message.format != null && Object.hasOwnProperty.call(message, "format"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.format);
        if (message.formatNote != null && Object.hasOwnProperty.call(message, "formatNote"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.formatNote);
        return writer;
    };

    /**
     * Encodes the specified ScanResult message, length delimited. Does not implicitly {@link ScanResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ScanResult
     * @static
     * @param {IScanResult} message ScanResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ScanResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ScanResult message from the specified reader or buffer.
     * @function decode
     * @memberof ScanResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ScanResult} ScanResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ScanResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ScanResult();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.rawContent = reader.string();
                    break;
                }
            case 3: {
                    message.format = reader.int32();
                    break;
                }
            case 4: {
                    message.formatNote = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ScanResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ScanResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ScanResult} ScanResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ScanResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ScanResult message.
     * @function verify
     * @memberof ScanResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ScanResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.rawContent != null && message.hasOwnProperty("rawContent"))
            if (!$util.isString(message.rawContent))
                return "rawContent: string expected";
        if (message.format != null && message.hasOwnProperty("format"))
            switch (message.format) {
            default:
                return "format: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                break;
            }
        if (message.formatNote != null && message.hasOwnProperty("formatNote"))
            if (!$util.isString(message.formatNote))
                return "formatNote: string expected";
        return null;
    };

    /**
     * Creates a ScanResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ScanResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ScanResult} ScanResult
     */
    ScanResult.fromObject = function fromObject(object) {
        if (object instanceof $root.ScanResult)
            return object;
        let message = new $root.ScanResult();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "Barcode":
        case 0:
            message.type = 0;
            break;
        case "Cancelled":
        case 1:
            message.type = 1;
            break;
        case "Error":
        case 2:
            message.type = 2;
            break;
        }
        if (object.rawContent != null)
            message.rawContent = String(object.rawContent);
        switch (object.format) {
        default:
            if (typeof object.format === "number") {
                message.format = object.format;
                break;
            }
            break;
        case "unknown":
        case 0:
            message.format = 0;
            break;
        case "aztec":
        case 1:
            message.format = 1;
            break;
        case "code39":
        case 2:
            message.format = 2;
            break;
        case "code93":
        case 3:
            message.format = 3;
            break;
        case "ean8":
        case 4:
            message.format = 4;
            break;
        case "ean13":
        case 5:
            message.format = 5;
            break;
        case "code128":
        case 6:
            message.format = 6;
            break;
        case "dataMatrix":
        case 7:
            message.format = 7;
            break;
        case "qr":
        case 8:
            message.format = 8;
            break;
        case "interleaved2of5":
        case 9:
            message.format = 9;
            break;
        case "upce":
        case 10:
            message.format = 10;
            break;
        case "pdf417":
        case 11:
            message.format = 11;
            break;
        }
        if (object.formatNote != null)
            message.formatNote = String(object.formatNote);
        return message;
    };

    /**
     * Creates a plain object from a ScanResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ScanResult
     * @static
     * @param {ScanResult} message ScanResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ScanResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Barcode" : 0;
            object.rawContent = "";
            object.format = options.enums === String ? "unknown" : 0;
            object.formatNote = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ResultType[message.type] === undefined ? message.type : $root.ResultType[message.type] : message.type;
        if (message.rawContent != null && message.hasOwnProperty("rawContent"))
            object.rawContent = message.rawContent;
        if (message.format != null && message.hasOwnProperty("format"))
            object.format = options.enums === String ? $root.BarcodeFormat[message.format] === undefined ? message.format : $root.BarcodeFormat[message.format] : message.format;
        if (message.formatNote != null && message.hasOwnProperty("formatNote"))
            object.formatNote = message.formatNote;
        return object;
    };

    /**
     * Converts this ScanResult to JSON.
     * @function toJSON
     * @memberof ScanResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ScanResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ScanResult
     * @function getTypeUrl
     * @memberof ScanResult
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ScanResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ScanResult";
    };

    return ScanResult;
})();

export { $root as default };
