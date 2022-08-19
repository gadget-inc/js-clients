"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryArgs = exports.getCurrentSpan = exports.traceFunction = exports.errorMessage = exports.tracer = exports.toPrimitiveObject = exports.hydrateConnection = exports.hydrateRecordArray = exports.hydrateRecord = exports.getHydrator = exports.assertMutationSuccess = exports.gadgetErrorFor = exports.assertNullableOperationSuccess = exports.assertOperationSuccess = exports.getNonNullableError = exports.getNonUniqueDataError = exports.filterTypeName = exports.sortTypeName = exports.camelize = exports.capitalize = exports.get = exports.assert = exports.GadgetNonUniqueDataError = exports.GadgetValidationError = exports.GadgetOperationError = exports.GadgetClientError = exports.GadgetInternalError = void 0;
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
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
class GadgetValidationError extends Error {
    constructor(message, validationErrors, modelApiIdentifier, record) {
        super(message);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "GGT_INVALID_RECORD"
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
exports.GadgetValidationError = GadgetValidationError;
/**
 * A Gadget API error that represents an error from the server. Thrown when the server enounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
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
const getNonUniqueDataError = (modelApiIdentifier, fieldName, fieldValue) => new GadgetNonUniqueDataError(`More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`);
exports.getNonUniqueDataError = getNonUniqueDataError;
const getNonNullableError = (response, dataPath, throwOnEmptyData = false) => {
    if (response.fetching) {
        return;
    }
    const result = (0, exports.get)(response.data, dataPath);
    const edges = (0, exports.get)(result, ["edges"]);
    const dataArray = edges !== null && edges !== void 0 ? edges : result;
    if (result === undefined) {
        return new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`);
    }
    else if (result === null || (throwOnEmptyData && Array.isArray(dataArray) && dataArray.length === 0)) {
        return new GadgetInternalError(`Internal Error: Gadget API returned no data at ${dataPath.join(".")}`);
    }
};
exports.getNonNullableError = getNonNullableError;
const assertOperationSuccess = (response, dataPath, throwOnEmptyData = false) => {
    var _a;
    if (response.error) {
        if (response.error instanceof core_1.CombinedError && ((_a = response.error.networkError) === null || _a === void 0 ? void 0 : _a.length)) {
            response.error.message = response.error.networkError.map((error) => "[Network] " + error.message).join("\n");
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
        throw new GadgetInternalError(`Internal Error: Gadget API returned no data at ${dataPath.join(".")}`);
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
    var _a, _b, _c, _d;
    if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.gadgetMeta) === null || _b === void 0 ? void 0 : _b.hydrations) {
        return new DataHydrator_1.DataHydrator((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.gadgetMeta) === null || _d === void 0 ? void 0 : _d.hydrations);
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
    return records === null || records === void 0 ? void 0 : records.map((record) => new GadgetRecord_1.GadgetRecord(record));
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
    var _a;
    if (typeof error == "string") {
        return error;
    }
    else if (error && ((_a = error) === null || _a === void 0 ? void 0 : _a.message)) {
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
const getCurrentSpan = () => api_1.trace.getSpan(api_1.context.active());
exports.getCurrentSpan = getCurrentSpan;
/** Generate `urql` query argument object, for `useQuery` hook */
const getQueryArgs = (plan, options) => ({
    query: plan.query,
    variables: plan.variables,
    context: options === null || options === void 0 ? void 0 : options.context,
    pause: options === null || options === void 0 ? void 0 : options.pause,
    requestPolicy: options === null || options === void 0 ? void 0 : options.requestPolicy,
});
exports.getQueryArgs = getQueryArgs;
//# sourceMappingURL=support.js.map