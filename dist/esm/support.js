import { SpanStatusCode, context as contextApi, trace as traceApi } from "@opentelemetry/api";
import { CombinedError } from "@urql/core";
import { DataHydrator } from "./DataHydrator.js";
import { GadgetRecord } from "./GadgetRecord.js";
/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
export class GadgetInternalError extends Error {
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
/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
export class GadgetClientError extends Error {
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
/**
 * A Gadget API error with an `code` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `code` to learn more.
 **/
export class GadgetOperationError extends Error {
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
/**
 * A client error when the Gadget API closes the connection unexpectedly.
 */
export class GadgetUnexpectedCloseError extends Error {
    constructor(event) {
        let message;
        if (isCloseEvent(event)) {
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
/**
 * A client error when the client times out waiting for the Gadget API to open websocket connection.
 */
export class GadgetWebsocketConnectionTimeoutError extends Error {
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
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
export class InvalidRecordError extends Error {
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
/**
 * @deprecated Use `InvalidRecordError` instead, here for backwards compatability
 */
export const GadgetValidationError = InvalidRecordError;
/**
 * A Gadget API error that represents an error from the server. Thrown when the server encounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
export class GadgetNonUniqueDataError extends Error {
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
/**
 * A Gadget API error that represents an error where the client asked the server for data that doesn't exist server side.
 */
export class GadgetNotFoundError extends Error {
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
export function assert(value, message) {
    if (!value) {
        throw new Error("assertion error" + (message ? `: ${message}` : ""));
    }
    return value;
}
export const get = (object, path) => {
    const length = path.length;
    let index = 0;
    while (object != null && index < length) {
        object = object[path[index++]];
    }
    return index && index == length ? object : undefined;
};
export const isCloseEvent = (event) => (event === null || event === void 0 ? void 0 : event.type) == "close";
/**
 * Converts a string to camel case, optionally capitalizing the first character.
 * Defaults to capitalizing the first character.
 * @param str
 * @param capitalizeFirstCharacter
 * @returns Camelize string
 */
export const capitalizeIdentifier = (str, capitalizeFirstCharacter) => {
    if (typeof str !== "string")
        return "";
    return camelize(str, capitalizeFirstCharacter);
};
const capitalizeFirstCharacter = (str) => {
    const result = str === null || str === undefined ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
};
export const camelize = (term, uppercaseFirstLetter = true) => {
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
export const sortTypeName = (modelApiIdentifier) => `${camelize(modelApiIdentifier)}Sort`;
export const filterTypeName = (modelApiIdentifier) => `${camelize(modelApiIdentifier)}Filter`;
export const getNonUniqueDataError = (modelApiIdentifier, fieldName, fieldValue) => new GadgetNonUniqueDataError(`More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`);
export const getNonNullableError = (response, dataPath) => {
    if (response.fetching) {
        return;
    }
    const result = get(response.data, dataPath);
    if (result === undefined) {
        return new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`);
    }
    else if (result === null) {
        return new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
    }
};
export const assertOperationSuccess = (response, dataPath, throwOnEmptyData = false) => {
    var _a;
    if (response.error) {
        if (response.error instanceof CombinedError && ((_a = response.error.networkError) === null || _a === void 0 ? void 0 : _a.length)) {
            response.error.message = response.error.networkError.map((error) => "[Network] " + error.message).join("\n");
        }
        throw response.error;
    }
    const result = get(response.data, dataPath);
    const edges = get(result, ["edges"]);
    const dataArray = edges !== null && edges !== void 0 ? edges : result;
    if (result === undefined) {
        throw new GadgetInternalError(`Internal Error: Gadget API didn't return expected data. Nothing found in response at ${dataPath.join(".")}`);
    }
    else if (result === null || (throwOnEmptyData && Array.isArray(dataArray) && dataArray.length === 0)) {
        throw new GadgetNotFoundError(`Record Not Found Error: Gadget API returned no data at ${dataPath.join(".")}`);
    }
    return result;
};
export const assertNullableOperationSuccess = (response, dataPath) => {
    var _a;
    if (response.error) {
        if (response.error instanceof CombinedError && ((_a = response.error.networkError) === null || _a === void 0 ? void 0 : _a.length)) {
            response.error.message = response.error.networkError.map((error) => "[Network] " + error.message).join("\n");
        }
        throw response.error;
    }
    const result = get(response.data, dataPath);
    return result !== null && result !== void 0 ? result : null;
};
export const gadgetErrorFor = (error) => {
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
export const assertMutationSuccess = (response, dataPath) => {
    const operationResponse = assertOperationSuccess(response, dataPath);
    if (!operationResponse.success) {
        const firstErrorBlob = operationResponse.errors && operationResponse.errors[0];
        if (firstErrorBlob) {
            throw gadgetErrorFor(firstErrorBlob);
        }
        else {
            throw new GadgetOperationError(`Gadget API operation not successful.`, "GGT_UNKNOWN");
        }
    }
    return operationResponse;
};
export const getHydrator = (response) => {
    var _a, _b, _c, _d;
    if ((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.gadgetMeta) === null || _b === void 0 ? void 0 : _b.hydrations) {
        return new DataHydrator((_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.gadgetMeta) === null || _d === void 0 ? void 0 : _d.hydrations);
    }
};
export const hydrateRecord = (response, record) => {
    const hydrator = getHydrator(response);
    if (hydrator) {
        record = hydrator.apply(record);
    }
    return new GadgetRecord(record);
};
export const hydrateRecordArray = (response, records) => {
    const hydrator = getHydrator(response);
    if (hydrator) {
        records = hydrator.apply(records);
    }
    return records === null || records === void 0 ? void 0 : records.map((record) => new GadgetRecord(record));
};
export const hydrateConnection = (response, connection) => {
    const nodes = connection.edges.map((edge) => edge.node);
    return hydrateRecordArray(response, nodes);
};
export const toPrimitiveObject = (value) => {
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
                arr[i] = v === undefined ? null : toPrimitiveObject(v);
            }
            return arr;
        }
        if (Object.prototype.toString.call(value) === "[object Error]")
            return {};
        if (Object.prototype.toString.call(value) === "[object Object]") {
            const obj = {};
            for (const key of Object.keys(value)) {
                const parsed = toPrimitiveObject(value[key]);
                // Remove undefined fields
                if (parsed !== undefined)
                    obj[key] = parsed;
            }
            return obj;
        }
    }
};
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
export const errorMessage = (error) => {
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
export const tracer = traceApi.getTracer("gadget-api-client");
export const onSpanError = (span, error) => {
    span.recordException(error);
    span.setStatus({ code: SpanStatusCode.ERROR, message: errorMessage(error) });
};
export function withSpan(name, fnOrOptions, fn) {
    let func;
    let options;
    if (fn) {
        func = fn;
        options = fnOrOptions;
    }
    else {
        func = fnOrOptions;
        options = {};
    }
    return tracer.startActiveSpan(name, options, (span) => func(span));
}
export async function trace(name, fnOrOptions, fn) {
    let func;
    let options;
    if (fn) {
        func = fn;
        options = fnOrOptions;
    }
    else {
        func = fnOrOptions;
        options = {};
    }
    return await withSpan(name, options, async (span) => {
        try {
            const result = await func(span);
            span.end();
            return result;
        }
        catch (error) {
            onSpanError(span, error);
            span.end();
            throw error;
        }
    });
}
export function traceFunction(name, fnOrOptions, fn) {
    let func;
    let options;
    if (fn) {
        func = fn;
        options = fnOrOptions;
    }
    else {
        func = fnOrOptions;
        options = {};
    }
    return async function (...args) {
        return await trace(name, options, () => func.apply(this, args));
    };
}
export const getCurrentSpan = () => traceApi.getSpan(contextApi.active());
// Gadget Storage Test Key that minifies well
const key = "gstk";
/** Detect if the window object and window.localStorage or window.sessionStorage objects are functional */
export const storageAvailable = (type) => {
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
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/**
 * A FIFO queue that executes functions in order, waiting for each to finish before executing the next.
 */
export class PQueue {
    constructor() {
        /**
         * A queue of functions waiting to be executed.
         */
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /**
         * Whether the queue is currently being dequeued.
         */
        Object.defineProperty(this, "isDequeuing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    /**
     * The number of functions waiting to be executed.
     */
    get length() {
        return this.queue.length;
    }
    /**
     * Dequeue and execute all the functions in the queue in order.
     */
    dequeue() {
        if (this.isDequeuing) {
            return;
        }
        void (async () => {
            this.isDequeuing = true;
            let fn = this.queue.shift();
            while (fn) {
                try {
                    await fn();
                }
                catch {
                    // swallow errors to avoid unhandled promise rejections
                }
                fn = this.queue.shift();
            }
            this.isDequeuing = false;
        })();
    }
    /**
     * @param fn The function to enqueue
     * @returns A promise that resolves when the function is dequeued and finished executing
     */
    enqueue(fn) {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    resolve(await fn());
                }
                catch (error) {
                    reject(error);
                }
            });
            this.dequeue();
        });
    }
}
/**
 * A token bucket based on [`stopcock`](https://github.com/lpinca/stopcock)
 *
 * @see https://github.com/lpinca/stopcock/blob/26aa34c38bf7892e343f6f77a3dfb4c792e54d2f/index.js
 * @license
 * Copyright (c) 2017 Luigi Pinca
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
export class TokenBucket {
    constructor(options) {
        /**
         * The options used to construct the bucket.
         *
         * @readonly This property is frozen and cannot be changed.
         */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The number of tokens currently in the bucket.
         */
        Object.defineProperty(this, "tokens", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A `Date.now()` of the last time the bucket was refilled.
         */
        Object.defineProperty(this, "lastRefill", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A queue of attempts to consume a token.
         */
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new PQueue()
        });
        this.options = Object.freeze({
            name: "token-bucket",
            bucketSize: 50,
            tokensPerInterval: 10,
            intervalMS: 1000,
            ...options,
        });
        this.tokens = this.options.bucketSize;
        this.lastRefill = Date.now();
        assert(this.options.bucketSize > 0, "bucketSize must be greater than 0");
        assert(this.options.tokensPerInterval > 0, "tokensPerInterval must be greater than 0");
        assert(this.options.intervalMS > 0, "intervalMS must be greater than 0");
    }
    /**
     * Refill the bucket with the proper amount of tokens.
     */
    refill() {
        const intervalsSinceLastRefill = Math.floor((Date.now() - this.lastRefill) / this.options.intervalMS);
        const newTokens = intervalsSinceLastRefill * this.options.tokensPerInterval;
        this.tokens += newTokens;
        // only add the time required by `newTokens`
        const newTokenIntervals = newTokens / this.options.tokensPerInterval;
        this.lastRefill += Math.ceil(newTokenIntervals * this.options.intervalMS);
        if (this.tokens > this.options.bucketSize) {
            this.tokens = this.options.bucketSize;
        }
    }
    /**
     * Remove a token from the bucket, waiting if necessary until one is available.
     */
    async consume() {
        await trace("bucket.consume", {
            attributes: {
                "bucket.name": this.options.name,
                "bucket.size": this.options.bucketSize,
                "bucket.tokens_per_interval": this.options.tokensPerInterval,
                "bucket.interval_ms": this.options.intervalMS,
                "bucket.queue_length": this.queue.length,
            },
        }, async () => {
            await this.queue.enqueue(async () => {
                this.refill();
                while (!this.tokens) {
                    const msUntilNextInterval = this.lastRefill + this.options.intervalMS - Date.now();
                    await sleep(msUntilNextInterval);
                    this.refill();
                }
                this.tokens--;
            });
        });
    }
}
//# sourceMappingURL=support.js.map