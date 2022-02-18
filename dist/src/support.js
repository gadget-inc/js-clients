"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceFunction = exports.errorMessage = exports.tracer = exports.toPrimitiveObject = exports.hydrateConnection = exports.hydrateRecordArray = exports.hydrateRecord = exports.getHydrator = exports.assertMutationSuccess = exports.gadgetErrorFor = exports.assertOperationSuccess = exports.filterTypeName = exports.sortTypeName = exports.camelize = exports.capitalize = exports.get = exports.assert = exports.GadgetNonUniqueDataError = exports.GadgetValidationError = exports.GadgetOperationError = exports.GadgetClientError = exports.GadgetInternalError = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@urql/core");
const DataHydrator_1 = require("./DataHydrator");
const GadgetRecord_1 = require("./GadgetRecord");
/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
class GadgetInternalError extends Error {
}
exports.GadgetInternalError = GadgetInternalError;
/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
class GadgetClientError extends Error {
}
exports.GadgetClientError = GadgetClientError;
/**
 * A Gadget API error with an `errorCode` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `errorCode` to learn more.
 **/
class GadgetOperationError extends Error {
    constructor(incomingMessage, errorCode) {
        super(incomingMessage.startsWith("GGT_") ? incomingMessage : `${errorCode}: ${incomingMessage}`);
        Object.defineProperty(this, "errorCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: errorCode
        });
    }
}
exports.GadgetOperationError = GadgetOperationError;
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
class GadgetValidationError extends Error {
    constructor(message, validationErrors) {
        super(message);
        Object.defineProperty(this, "validationErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: validationErrors
        });
        Object.defineProperty(this, "errorCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_INVALID_RECORD"
        });
    }
}
exports.GadgetValidationError = GadgetValidationError;
/**
 * A Gadget API error that represents an error from the server. Thrown when the server enounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
class GadgetNonUniqueDataError extends Error {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "errorCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_NON_UNIQUE_DATA"
        });
    }
}
exports.GadgetNonUniqueDataError = GadgetNonUniqueDataError;
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
const capitalize = (str) => {
    const result = str === null || str === undefined ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
};
exports.capitalize = capitalize;
const camelize = (term, uppercaseFirstLetter = true) => {
    let result = "" + term;
    if (uppercaseFirstLetter) {
        result = result.replace(/^[a-z\d]*/, (a) => {
            return (0, exports.capitalize)(a);
        });
    }
    else {
        result = result.replace(new RegExp("^(?:(?=\\b|[A-Z_])|\\w)"), (a) => {
            return a.toLowerCase();
        });
    }
    result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, (_match, a, b, _idx, _string) => {
        a || (a = "");
        return "" + a + (0, exports.capitalize)(b);
    });
    return result;
};
exports.camelize = camelize;
const sortTypeName = (modelApiIdentifier) => `${(0, exports.camelize)(modelApiIdentifier)}Sort`;
exports.sortTypeName = sortTypeName;
const filterTypeName = (modelApiIdentifier) => `${(0, exports.camelize)(modelApiIdentifier)}Filter`;
exports.filterTypeName = filterTypeName;
const assertOperationSuccess = (response, dataPath) => {
    if (response.error) {
        if (response.error instanceof core_1.CombinedError && response.error.networkError?.length) {
            response.error.message = response.error.networkError.map((error) => "[Network] " + error.message).join("\n");
        }
        throw response.error;
    }
    const result = (0, exports.get)(response.data, dataPath);
    if (result === undefined) {
        throw new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath}`);
    }
    else if (result === null) {
        throw new GadgetInternalError(`Internal Error: Gadget API returned no data at ${dataPath}`);
    }
    return result;
};
exports.assertOperationSuccess = assertOperationSuccess;
const gadgetErrorFor = (error) => {
    if (error.code == "GGT_INVALID_RECORD") {
        return new GadgetValidationError(error.message, error.validationErrors);
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
exports.assertMutationSuccess = assertMutationSuccess;
const getHydrator = (response) => {
    if (response.data?.gadgetMeta?.hydrations) {
        return new DataHydrator_1.DataHydrator(response.data?.gadgetMeta?.hydrations);
    }
};
exports.getHydrator = getHydrator;
const hydrateRecord = (response, record) => {
    const hydrator = (0, exports.getHydrator)(response);
    if (hydrator) {
        record = hydrator.apply(record);
    }
    return new GadgetRecord_1.GadgetRecord(record);
};
exports.hydrateRecord = hydrateRecord;
const hydrateRecordArray = (response, records) => {
    const hydrator = (0, exports.getHydrator)(response);
    if (hydrator) {
        records = hydrator.apply(records);
    }
    return records?.map((record) => new GadgetRecord_1.GadgetRecord(record));
};
exports.hydrateRecordArray = hydrateRecordArray;
const hydrateConnection = (response, connection) => {
    const nodes = connection.edges.map((edge) => edge.node);
    return (0, exports.hydrateRecordArray)(response, nodes);
};
exports.hydrateConnection = hydrateConnection;
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
        if (Object.prototype.toString.call(value) === "[object Object]") {
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
exports.tracer = api_1.trace.getTracer("gadget-api-client");
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
const errorMessage = (error) => {
    if (typeof error == "string") {
        return error;
    }
    else if (error && error?.message) {
        return error.message;
    }
    else {
        return String(error);
    }
};
exports.errorMessage = errorMessage;
/** Wrap a function in tracing, and return it  */
const traceFunction = (name, func, options) => {
    return async function (...args) {
        const span = exports.tracer.startSpan(name, options, api_1.context.active());
        return await api_1.context.with(api_1.trace.setSpan(api_1.context.active(), span), async () => {
            try {
                // eslint-disable-next-line @typescript-eslint/await-thenable
                const result = await func.call(this, ...args);
                span.end();
                return result;
            }
            catch (err) {
                span.setStatus({ code: api_1.SpanStatusCode.ERROR, message: (0, exports.errorMessage)(err) });
                span.end();
                throw err;
            }
        });
    };
};
exports.traceFunction = traceFunction;
//# sourceMappingURL=support.js.map