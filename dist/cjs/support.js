"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsSearchFieldsToGqlSearchFields = exports.formatErrorMessages = exports.ErrorsSelection = exports.namespacify = exports.hydrationSelection = exports.namespaceDataPath = exports.setVariableOptionValues = exports.disambiguateBulkActionVariables = exports.disambiguateActionVariables = exports.isEqual = exports.storageAvailable = exports.errorMessage = exports.toPrimitiveObject = exports.hydrateConnection = exports.hydrateRecordArray = exports.hydrateRecord = exports.getHydrator = exports.assertResponseSuccess = exports.assertMutationSuccess = exports.gadgetErrorFor = exports.assertNullableOperationSuccess = exports.assertOperationSuccess = exports.getNonNullableError = exports.getNonUniqueDataError = exports.searchableFieldTypeName = exports.filterTypeName = exports.sortTypeName = exports.namespacedGraphQLTypeName = exports.camelize = exports.capitalizeIdentifier = exports.isCloseEvent = exports.get = exports.assert = exports.GadgetErrorGroup = exports.GadgetNotFoundError = exports.GadgetNonUniqueDataError = exports.GadgetValidationError = exports.InvalidRecordError = exports.GadgetTooManyRequestsError = exports.GadgetWebsocketConnectionTimeoutError = exports.GadgetUnexpectedCloseError = exports.GadgetOperationError = exports.GadgetClientError = exports.GadgetInternalError = void 0;
const core_1 = require("@urql/core");
const lodash_es_1 = require("lodash-es");
const tiny_graphql_query_compiler_1 = require("tiny-graphql-query-compiler");
const DataHydrator_js_1 = require("./DataHydrator.js");
const GadgetRecord_js_1 = require("./GadgetRecord.js");
/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
class GadgetInternalError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_INTERNAL_ERROR"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InternalError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 500
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.GadgetInternalError = GadgetInternalError;
/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
class GadgetClientError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_CLIENT_ERROR"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ClientError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 500
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
    }
}
exports.GadgetClientError = GadgetClientError;
/**
 * A Gadget API error with an `code` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `code` to learn more.
 **/
class GadgetOperationError extends Error {
    constructor(incomingMessage, code) {
        super(incomingMessage.startsWith("GGT_") ? incomingMessage : `${code}: ${incomingMessage}`);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: code
        });
    }
}
exports.GadgetOperationError = GadgetOperationError;
/**
 * A client error when the Gadget API closes the connection unexpectedly.
 */
class GadgetUnexpectedCloseError extends Error {
    constructor(event) {
        let message;
        if ((0, exports.isCloseEvent)(event)) {
            message = `GraphQL websocket closed unexpectedly by the server with error code ${event.code} and reason "${event.reason}"`;
        }
        else {
            message = "GraphQL websocket closed unexpectedly by the server";
        }
        super(message);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_UNKNOWN"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "UnexpectedCloseError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 500
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** The event that caused the unexpected close */
        Object.defineProperty(this, "event", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.event = event;
    }
}
exports.GadgetUnexpectedCloseError = GadgetUnexpectedCloseError;
/**
 * A client error when the client times out waiting for the Gadget API to open websocket connection.
 */
class GadgetWebsocketConnectionTimeoutError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_WEBSOCKET_CONNECTION_TIMEOUT"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "WebsocketConnectionTimeoutError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 500
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.GadgetWebsocketConnectionTimeoutError = GadgetWebsocketConnectionTimeoutError;
/**
 * A Gadget API error when there are more requests sent in the alloted time window then permitted
 */
class GadgetTooManyRequestsError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_TOO_MANY_REQUESTS"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "TooManyRequestsError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 429
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.GadgetTooManyRequestsError = GadgetTooManyRequestsError;
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 */
class InvalidRecordError extends Error {
    constructor(message, validationErrors, modelApiIdentifier, record) {
        const firstErrors = validationErrors.slice(0, 3);
        const extraErrorMessage = validationErrors.length > 3
            ? `, and ${validationErrors.length - 3} more error${validationErrors.length > 4 ? "s" : ""} need${validationErrors.length > 4 ? "" : "s"} to be corrected`
            : "";
        super(message !== null && message !== void 0 ? message : `GGT_INVALID_RECORD: ${modelApiIdentifier !== null && modelApiIdentifier !== void 0 ? modelApiIdentifier : "Record"} is invalid and can't be saved. ${firstErrors
            .map(({ apiIdentifier, message }) => `${apiIdentifier} ${message}`)
            .join(", ")}${extraErrorMessage}.`);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_INVALID_RECORD"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "InvalidRecordError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 422
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        /**
         * A list of validation errors for each field that failed validation.
         */
        Object.defineProperty(this, "validationErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The API identifier of the model for this record which failed to validate
         */
        Object.defineProperty(this, "modelApiIdentifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The record that failed to validate, if available
         */
        Object.defineProperty(this, "record", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.validationErrors = validationErrors;
        this.modelApiIdentifier = modelApiIdentifier;
        this.record = record;
    }
}
exports.InvalidRecordError = InvalidRecordError;
/**
 * @deprecated Use `InvalidRecordError` instead, here for backwards compatability
 */
exports.GadgetValidationError = InvalidRecordError;
/**
 * A Gadget API error that represents an error from the server. Thrown when the server encounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
class GadgetNonUniqueDataError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_NON_UNIQUE_DATA"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "NonUniqueDataError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 417
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.GadgetNonUniqueDataError = GadgetNonUniqueDataError;
/**
 * A Gadget API error that represents an error where the client asked the server for data that doesn't exist server side.
 */
class GadgetNotFoundError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_RECORD_NOT_FOUND"
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "RecordNotFoundError"
        });
        /** @private */
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 404
        });
        /** @private */
        Object.defineProperty(this, "causedByClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.GadgetNotFoundError = GadgetNotFoundError;
/**
 * Represents a group of errors that occurred when running a number of operations at once */
class GadgetErrorGroup extends Error {
    constructor(
    /** The list of inner errors that occurred */
    errors, 
    /* Any objects that were successfully processed during the bulk operation (the ones that didn't throw errors) */
    results) {
        super(errors.length > 1 ? "Multiple errors occurred" : errors[0].message);
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: errors
        });
        Object.defineProperty(this, "results", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: results
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ErrorGroup"
        });
    }
    get code() {
        return `GGT_ERROR_GROUP(${this.errors
            .slice(0, 10)
            .map((error) => { var _a; return (_a = error.code) !== null && _a !== void 0 ? _a : "GGT_UNKNOWN"; })
            .join(",")})`;
    }
    /** @private */
    get statusCode() {
        return Math.max(...this.errors.map((error) => { var _a; return (_a = error.statusCode) !== null && _a !== void 0 ? _a : 500; }));
    }
}
exports.GadgetErrorGroup = GadgetErrorGroup;
function assert(value, message) {
    if (!value) {
        throw new Error("assertion error" + (message ? `: ${message}` : ""));
    }
    return value;
}
exports.assert = assert;
const get = (object, path) => {
    const length = path.length;
    let index = 0;
    while (object != null && index < length) {
        object = object[path[index++]];
    }
    return index && index == length ? object : undefined;
};
exports.get = get;
const isCloseEvent = (event) => (event === null || event === void 0 ? void 0 : event.type) == "close";
exports.isCloseEvent = isCloseEvent;
/**
 * Converts a string to camel case, optionally capitalizing the first character.
 * Defaults to capitalizing the first character.
 * @param str
 * @param capitalizeFirstCharacter
 * @returns Camelize string
 */
const capitalizeIdentifier = (str, capitalizeFirstCharacter) => {
    if (typeof str !== "string")
        return "";
    return (0, exports.camelize)(str, capitalizeFirstCharacter);
};
exports.capitalizeIdentifier = capitalizeIdentifier;
const capitalizeFirstCharacter = (str) => {
    const result = str === null || str === undefined ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
};
const camelize = (term, uppercaseFirstLetter = true) => {
    let result = "" + term;
    if (uppercaseFirstLetter) {
        result = result.replace(/^[a-z\d]*/, (a) => {
            return capitalizeFirstCharacter(a);
        });
    }
    else {
        result = result.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (a) => {
            return a.toLowerCase();
        });
    }
    result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, (_match, a, b, _idx, _string) => {
        a || (a = "");
        return "" + a + capitalizeFirstCharacter(b);
    });
    return result;
};
exports.camelize = camelize;
const namespacedGraphQLTypeName = (modelApiIdentifier, givenNamespaces) => {
    const namespaces = Array.isArray(givenNamespaces) ? givenNamespaces : givenNamespaces ? [givenNamespaces] : [];
    const segments = [...namespaces, modelApiIdentifier];
    return segments.map((segment) => (0, exports.camelize)(segment)).join("");
};
exports.namespacedGraphQLTypeName = namespacedGraphQLTypeName;
const sortTypeName = (modelApiIdentifier, namespace) => `${(0, exports.namespacedGraphQLTypeName)(modelApiIdentifier, namespace)}Sort`;
exports.sortTypeName = sortTypeName;
const filterTypeName = (modelApiIdentifier, namespace) => `${(0, exports.namespacedGraphQLTypeName)(modelApiIdentifier, namespace)}Filter`;
exports.filterTypeName = filterTypeName;
const searchableFieldTypeName = (modelApiIdentifier, namespace) => `${(0, exports.namespacedGraphQLTypeName)(modelApiIdentifier, namespace)}SearchFields`;
exports.searchableFieldTypeName = searchableFieldTypeName;
const getNonUniqueDataError = (modelApiIdentifier, fieldName, fieldValue) => new GadgetNonUniqueDataError(`More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`);
exports.getNonUniqueDataError = getNonUniqueDataError;
const getNonNullableError = (response, dataPath) => {
    if (response.fetching) {
        return;
    }
    const result = (0, exports.get)(response.data, dataPath);
    if (result === undefined) {
        return new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`);
    }
    else if (result === null) {
        return new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
    }
};
exports.getNonNullableError = getNonNullableError;
const assertOperationSuccess = (response, dataPath, throwOnEmptyData = false) => {
    var _a;
    if (response.error) {
        if (response.error instanceof core_1.CombinedError && response.error.networkError) {
            if ((_a = response.error.networkError) === null || _a === void 0 ? void 0 : _a.message) {
                response.error.message = `[Network] ${response.error.networkError.message}`;
            }
            else {
                response.error.message = `[Network] No message, error: string(response.error.networkError) \nstack: ${String(response.error.networkError.stack)}}`;
            }
        }
        throw response.error;
    }
    const result = (0, exports.get)(response.data, dataPath);
    const edges = (0, exports.get)(result, ["edges"]);
    const dataArray = edges !== null && edges !== void 0 ? edges : result;
    if (result === undefined) {
        throw new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`);
    }
    else if (result === null || (throwOnEmptyData && Array.isArray(dataArray) && dataArray.length === 0)) {
        throw new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
    }
    return result;
};
exports.assertOperationSuccess = assertOperationSuccess;
const assertNullableOperationSuccess = (response, dataPath) => {
    var _a;
    if (response.error) {
        if (response.error instanceof core_1.CombinedError && ((_a = response.error.networkError) === null || _a === void 0 ? void 0 : _a.length)) {
            response.error.message = response.error.networkError.map((error) => "[Network] " + error.message).join("\n");
        }
        throw response.error;
    }
    const result = (0, exports.get)(response.data, dataPath);
    return result !== null && result !== void 0 ? result : null;
};
exports.assertNullableOperationSuccess = assertNullableOperationSuccess;
const gadgetErrorFor = (error) => {
    var _a;
    if (error.code == "GGT_INVALID_RECORD") {
        return new InvalidRecordError(error.message, error.validationErrors, (_a = error.model) === null || _a === void 0 ? void 0 : _a.apiIdentifier, error.record);
    }
    else if (error.code == "GGT_UNKNOWN" && error.message.includes("duplicate key value violates unique constraint")) {
        return new GadgetNonUniqueDataError(error.message);
    }
    else {
        return new GadgetOperationError(error.message, error.code);
    }
};
exports.gadgetErrorFor = gadgetErrorFor;
const assertMutationSuccess = (response, dataPath) => {
    const operationResponse = (0, exports.assertOperationSuccess)(response, dataPath);
    return (0, exports.assertResponseSuccess)(operationResponse);
};
exports.assertMutationSuccess = assertMutationSuccess;
const assertResponseSuccess = (operationResponse) => {
    if (!operationResponse.success) {
        const firstErrorBlob = operationResponse.errors && operationResponse.errors[0];
        if (firstErrorBlob) {
            throw (0, exports.gadgetErrorFor)(firstErrorBlob);
        }
        else {
            throw new GadgetOperationError(`Gadget API operation not successful.`, "GGT_UNKNOWN");
        }
    }
    return operationResponse;
};
exports.assertResponseSuccess = assertResponseSuccess;
const getHydrator = (response) => {
    var _a, _b, _c, _d;
    if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.gadgetMeta) === null || _b === void 0 ? void 0 : _b.hydrations) {
        return new DataHydrator_js_1.DataHydrator((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.gadgetMeta) === null || _d === void 0 ? void 0 : _d.hydrations);
    }
};
exports.getHydrator = getHydrator;
const hydrateRecord = (response, record) => {
    const hydrator = (0, exports.getHydrator)(response);
    if (hydrator) {
        record = hydrator.apply(record);
    }
    return new GadgetRecord_js_1.GadgetRecord(record);
};
exports.hydrateRecord = hydrateRecord;
const hydrateRecordArray = (response, records) => {
    const hydrator = (0, exports.getHydrator)(response);
    if (hydrator) {
        records = hydrator.apply(records);
    }
    return records === null || records === void 0 ? void 0 : records.map((record) => new GadgetRecord_js_1.GadgetRecord(record));
};
exports.hydrateRecordArray = hydrateRecordArray;
const hydrateConnection = (response, connection) => {
    const nodes = connection.edges.map((edge) => edge.node);
    return (0, exports.hydrateRecordArray)(response, nodes);
};
exports.hydrateConnection = hydrateConnection;
const objObjType = "[object Object]";
const stringObjType = "[object String]";
const toPrimitiveObject = (value) => {
    if (value != null && typeof value.toJSON === "function")
        value = value.toJSON();
    if (value === undefined)
        return undefined;
    if (value === null)
        return null;
    if (typeof value === "boolean")
        return value;
    if (typeof value === "string")
        return value;
    if (typeof value === "number")
        return Number.isFinite(value) ? value : null;
    if (typeof value === "object") {
        if (Array.isArray(value)) {
            const arr = [];
            for (let i = 0; i < value.length; i++) {
                const v = value[i];
                arr[i] = v === undefined ? null : (0, exports.toPrimitiveObject)(v);
            }
            return arr;
        }
        if (Object.prototype.toString.call(value) === "[object Error]")
            return {};
        if (Object.prototype.toString.call(value) === objObjType) {
            const obj = {};
            for (const key of Object.keys(value)) {
                const parsed = (0, exports.toPrimitiveObject)(value[key]);
                // Remove undefined fields
                if (parsed !== undefined)
                    obj[key] = parsed;
            }
            return obj;
        }
    }
};
exports.toPrimitiveObject = toPrimitiveObject;
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
const errorMessage = (error) => {
    if (typeof error == "string") {
        return error;
    }
    else if (error && (error === null || error === void 0 ? void 0 : error.message)) {
        return error.message;
    }
    else {
        return String(error);
    }
};
exports.errorMessage = errorMessage;
// Gadget Storage Test Key that minifies well
const key = "gstk";
/** Detect if the window object and window.localStorage or window.sessionStorage objects are functional */
const storageAvailable = (type) => {
    try {
        const storage = window[type];
        storage.setItem(key, key);
        storage.removeItem(key);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.storageAvailable = storageAvailable;
// smaller implementation of lodash's isEqual from https://github.com/NickGard/tiny-isequal but made a bit more performant and typesafe
const toString = Object.prototype.toString, getPrototypeOf = Object.getPrototypeOf, getOwnProperties = Object.getOwnPropertySymbols
    ? (c) => Object.keys(c).concat(Object.getOwnPropertySymbols(c))
    : Object.keys;
const checkEquality = (a, b, refs) => {
    // trivial case: primitives and referentially equal objects
    if (a === b)
        return true;
    // if both are null/undefined, the above check would have returned true
    if (a == null || b == null)
        return false;
    // check to see if we've seen this reference before; if yes, return true
    // eslint-disable-next-line lodash/prefer-includes
    if (refs.indexOf(a) > -1 && refs.indexOf(b) > -1)
        return true;
    const aType = toString.call(a);
    const bType = toString.call(b);
    let aElements, bElements, element;
    // save results for circular checks
    refs.push(a, b);
    // gadget-specific check for _link equality -- this is a special case for GadgetRecord
    if (aType == objObjType && bType == stringObjType && "_link" in a && Object.keys(a).length == 1) {
        return a._link === b;
    }
    else if (bType == objObjType && aType == stringObjType && "_link" in b && Object.keys(b).length == 1) {
        return b._link === a;
    }
    if (aType != bType)
        return false; // not the same type of objects
    // for non-null objects, check all custom properties
    aElements = getOwnProperties(a);
    bElements = getOwnProperties(b);
    if (aElements.length != bElements.length ||
        aElements.some(function (key) {
            return !checkEquality(a[key], b[key], refs);
        })) {
        return false;
    }
    switch (aType.slice(8, -1)) {
        case "Symbol":
            return a.valueOf() == b.valueOf();
        case "Date":
        case "Number":
            return +a == +b || (+a != +a && +b != +b); // convert Dates to ms, check for NaN
        case "RegExp":
        case "Function":
        case "String":
        case "Boolean":
            return "" + a == "" + b;
        case "Set":
        case "Map": {
            aElements = a.entries();
            bElements = b.entries();
            do {
                element = aElements.next();
                if (!checkEquality(element.value, bElements.next().value, refs)) {
                    return false;
                }
            } while (!element.done);
            return true;
        }
        case "ArrayBuffer":
            (a = new Uint8Array(a)), (b = new Uint8Array(b)); // fall through to be handled as an Array
        case "DataView":
            (a = new Uint8Array(a.buffer)), (b = new Uint8Array(b.buffer)); // fall through to be handled as an Array
        case "Float32Array":
        case "Float64Array":
        case "Int8Array":
        case "Int16Array":
        case "Int32Array":
        case "Uint8Array":
        case "Uint16Array":
        case "Uint32Array":
        case "Uint8ClampedArray":
        case "Arguments":
        case "Array":
            if (a.length != b.length)
                return false;
            for (element = 0; element < a.length; element++) {
                if (!(element in a) && !(element in b))
                    continue; // empty slots are equal
                // either one slot is empty but not both OR the elements are not equal
                if (element in a != element in b || !checkEquality(a[element], b[element], refs))
                    return false;
            }
            return true;
        case "Object":
            return checkEquality(getPrototypeOf(a), getPrototypeOf(b), refs);
        default:
            return false;
    }
};
const isEqual = (a, b) => checkEquality(a, b, []);
exports.isEqual = isEqual;
/**
 * Processes the flexible, convenient JS-land inputs for an action to the fully qualified GraphQL API inputs
 * @internal
 **/
const disambiguateActionVariables = (action, variables) => {
    var _a, _b, _c;
    variables !== null && variables !== void 0 ? variables : (variables = {});
    if (!("hasAmbiguousIdentifier" in action) && !("acceptsModelInput" in action))
        return variables;
    if (action.hasAmbiguousIdentifier) {
        if (Object.keys(variables).some((key) => { var _a; return key !== "id" && !((_a = action.paramOnlyVariables) === null || _a === void 0 ? void 0 : _a.includes(key)) && key !== action.modelApiIdentifier; })) {
            throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${action.modelApiIdentifier}: { ... } })?`);
        }
    }
    let newVariables;
    // for backwards compatibilty, actions without the operatesWithRecordIdentity metadata should extract the id from the variables
    const shouldExtractId = (_a = action.operatesWithRecordIdentity) !== null && _a !== void 0 ? _a : true;
    if ((_b = action.acceptsModelInput) !== null && _b !== void 0 ? _b : action.hasCreateOrUpdateEffect) {
        if (action.modelApiIdentifier in variables &&
            typeof variables[action.modelApiIdentifier] === "object" &&
            variables[action.modelApiIdentifier] != null) {
            newVariables = variables;
        }
        else {
            newVariables = {
                [action.modelApiIdentifier]: {},
            };
            for (const [key, value] of Object.entries(variables)) {
                if ((_c = action.paramOnlyVariables) === null || _c === void 0 ? void 0 : _c.includes(key)) {
                    newVariables[key] = value;
                }
                else {
                    if (key == "id" && shouldExtractId) {
                        newVariables.id = value;
                    }
                    else {
                        newVariables[action.modelApiIdentifier][key] = value;
                    }
                }
            }
        }
    }
    else {
        newVariables = variables;
    }
    return newVariables;
};
exports.disambiguateActionVariables = disambiguateActionVariables;
/**
 * Normalizes incoming params from JS land into the variable format the GraphQL API is expecting
 * Some bulk actions take GraphQL variables like `{ids: ["1","2","3"]}`, and others take `{inputs: [{field: "value"}, {field: "value"}]}`. In JS land, we accept the fully qualified variables that look like that, as well as the inner array shorthands.
 **/
const disambiguateBulkActionVariables = (action, inputs = {}) => {
    var _a;
    if (action.variables["ids"]) {
        // for actions which accept ids only, normalize the array shorthand into the full GraphQL variables
        return Array.isArray(inputs) ? { ids: inputs } : inputs;
    }
    else {
        // for actions which accept inputs, normalize each element of the array of inputs, and then normalize arrays into the object form
        const inputsArray = (_a = (Array.isArray(inputs) ? inputs : inputs.inputs)) !== null && _a !== void 0 ? _a : [];
        return {
            inputs: inputsArray.map((input) => (0, exports.disambiguateActionVariables)(action, input)),
        };
    }
};
exports.disambiguateBulkActionVariables = disambiguateBulkActionVariables;
/**
 * Given a set of variables defined with their types and requiredness and whatnot, return the same options with the values for each variable filled in, suitable for passing to one invocation
 */
const setVariableOptionValues = (variableOptions, values) => {
    const result = {};
    for (const [key, variable] of Object.entries(variableOptions)) {
        result[key] = { ...variable, value: values[key] };
    }
    return result;
};
exports.setVariableOptionValues = setVariableOptionValues;
const namespaceDataPath = (dataPath, namespace) => {
    if (namespace) {
        dataPath.unshift(...(Array.isArray(namespace) ? namespace : [namespace]));
    }
    return dataPath;
};
exports.namespaceDataPath = namespaceDataPath;
/**
 * Build a selection object to retrieve the hydrations for a model from the `gadgetMeta` API
 **/
const hydrationSelection = (modelApiIdentifier, namespace) => {
    const fullyQualifiedIdentifier = namespace
        ? [...(Array.isArray(namespace) ? namespace : [namespace]), modelApiIdentifier].join(".")
        : modelApiIdentifier;
    return {
        gadgetMeta: {
            hydrations: (0, tiny_graphql_query_compiler_1.Call)({ modelName: fullyQualifiedIdentifier }),
        },
    };
};
exports.hydrationSelection = hydrationSelection;
/**
 * Wrap a field selection in a set of namespaces
 **/
function namespacify(namespace, fields) {
    if (!namespace)
        return fields;
    if (!Array.isArray(namespace)) {
        namespace = [namespace];
    }
    if (namespace) {
        for (let i = namespace.length - 1; i >= 0; i--) {
            fields = {
                [namespace[i]]: fields,
            };
        }
    }
    return fields;
}
exports.namespacify = namespacify;
exports.ErrorsSelection = {
    errors: {
        message: true,
        code: true,
        "... on InvalidRecordError": {
            model: {
                apiIdentifier: true,
            },
            validationErrors: {
                message: true,
                apiIdentifier: true,
            },
        },
    },
};
/**
 * Formats error messages into a structured object.
 *
 * @param {Error} error - The error object to format.
 * @returns {Record<string, any>} An object containing formatted error messages.
 *   For InvalidRecordError, it structures validation errors by model and field.
 *   For other errors, it returns a single root message.
 *
 * @example
 * // For an InvalidRecordError:
 * // {
 * //   modelName: {
 * //     fieldName: { message: "Error message" }
 * //   }
 * // }
 *
 * @example
 * // For other errors:
 * // {
 * //   root: { message: "Error message" }
 * // }
 */
const formatErrorMessages = (error) => {
    var _a;
    var _b;
    const result = {};
    if ("validationErrors" in error) {
        const invalidRecordError = error;
        for (const validationError of invalidRecordError.validationErrors) {
            if (invalidRecordError.modelApiIdentifier) {
                (_a = result[_b = invalidRecordError.modelApiIdentifier]) !== null && _a !== void 0 ? _a : (result[_b] = {});
                result[invalidRecordError.modelApiIdentifier][validationError.apiIdentifier] = { message: validationError.message };
            }
            else {
                result[validationError.apiIdentifier] = { message: validationError.message };
            }
        }
    }
    else {
        const codeToReplace = "code" in error ? `${error.code}: ` : "";
        const message = error.message.replace(codeToReplace, "");
        result.root = { message };
    }
    return result;
};
exports.formatErrorMessages = formatErrorMessages;
const jsSearchFieldsToGqlSearchFields = (searchFields) => {
    const result = {};
    for (const [field, config] of Object.entries(searchFields)) {
        if ((0, lodash_es_1.isObject)(config)) {
            result[field] = config;
        }
        else if (config) {
            result[field] = {};
        }
    }
    return result;
};
exports.jsSearchFieldsToGqlSearchFields = jsSearchFieldsToGqlSearchFields;
//# sourceMappingURL=support.js.map