import type { Span, SpanOptions } from "@opentelemetry/api";
import type { OperationResult } from "@urql/core";
import { DataHydrator } from "./DataHydrator.js";
import type { RecordShape } from "./GadgetRecord.js";
import { GadgetRecord } from "./GadgetRecord.js";
/**
 * Generic type of the state of any record of a Gadget model
 **/
export type AnyState = string | {
    [key: string]: AnyState;
};
/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
export declare class GadgetInternalError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
export declare class GadgetClientError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/**
 * A Gadget API error with an `code` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `code` to learn more.
 **/
export declare class GadgetOperationError extends Error {
    readonly code: string;
    constructor(incomingMessage: string, code: string);
}
/**
 * Interface representing one message on one invalid field for a `InvalidRecordError`
 */
export interface InvalidFieldError {
    /** Which field of a record this error is for */
    apiIdentifier: string;
    /** Human facing string representing the error */
    message: string;
}
/**
 * A client error when the Gadget API closes the connection unexpectedly.
 */
export declare class GadgetUnexpectedCloseError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
    /** The event that caused the unexpected close */
    readonly event: unknown;
    constructor(event: unknown);
}
/**
 * A client error when the client times out waiting for the Gadget API to open websocket connection.
 */
export declare class GadgetWebsocketConnectionTimeoutError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
export declare class InvalidRecordError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
    /**
     * A list of validation errors for each field that failed validation.
     */
    readonly validationErrors: InvalidFieldError[];
    /**
     * The API identifier of the model for this record which failed to validate
     */
    readonly modelApiIdentifier?: string;
    /**
     * The record that failed to validate, if available
     */
    readonly record?: Record<string, any>;
    constructor(message: string | null, validationErrors: InvalidFieldError[], modelApiIdentifier?: string, record?: Record<string, any>);
}
/**
 * @deprecated Use `InvalidRecordError` instead, here for backwards compatability
 */
export declare const GadgetValidationError: typeof InvalidRecordError;
/**
 * A Gadget API error that represents an error from the server. Thrown when the server encounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
export declare class GadgetNonUniqueDataError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/**
 * A Gadget API error that represents an error where the client asked the server for data that doesn't exist server side.
 */
export declare class GadgetNotFoundError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/** All the errors a Gadget operation can throw */
export type GadgetError = GadgetOperationError | GadgetInternalError | InvalidRecordError | GadgetNonUniqueDataError | GadgetNotFoundError | GadgetUnexpectedCloseError | GadgetWebsocketConnectionTimeoutError;
export declare function assert<T>(value: T | undefined | null, message?: string): T;
export declare const get: (object: Record<string, any> | null | undefined, path: string[]) => any;
export declare const isCloseEvent: (event: any) => event is CloseEvent;
/**
 * Converts a string to camel case, optionally capitalizing the first character.
 * Defaults to capitalizing the first character.
 * @param str
 * @param capitalizeFirstCharacter
 * @returns Camelize string
 */
export declare const capitalizeIdentifier: (str: string | undefined | null, capitalizeFirstCharacter?: boolean) => string;
export declare const camelize: (term: string, uppercaseFirstLetter?: boolean) => string;
export declare const sortTypeName: (modelApiIdentifier: string) => string;
export declare const filterTypeName: (modelApiIdentifier: string) => string;
export declare const getNonUniqueDataError: (modelApiIdentifier: string, fieldName: string, fieldValue: string) => GadgetNonUniqueDataError;
export declare const getNonNullableError: (response: Result & {
    fetching: boolean;
}, dataPath: string[]) => GadgetInternalError | GadgetNotFoundError | undefined;
export declare const assertOperationSuccess: (response: OperationResult<any>, dataPath: string[], throwOnEmptyData?: boolean) => any;
export declare const assertNullableOperationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
export declare const gadgetErrorFor: (error: Record<string, any>) => GadgetOperationError | InvalidRecordError | GadgetNonUniqueDataError;
export declare const assertMutationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
type Result = Pick<OperationResult<any>, "data">;
export declare const getHydrator: (response: Result) => DataHydrator | undefined;
export declare const hydrateRecord: <Shape extends RecordShape = RecordShape>(response: Result, record: any) => GadgetRecord<Shape>;
export declare const hydrateRecordArray: <Shape extends RecordShape = any>(response: Result, records: Array<any>) => (import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape)[];
export declare const hydrateConnection: <Shape extends RecordShape = any>(response: Result, connection: {
    edges: {
        node: Node;
    }[];
}) => (import("./GadgetRecord.js").GadgetRecordImplementation<Shape> & Shape)[];
export declare const toPrimitiveObject: (value: any) => any;
export declare const tracer: import("@opentelemetry/api").Tracer;
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
export declare const errorMessage: (error: unknown) => any;
export declare function trace<T extends Promise<any>>(name: string, fn: (span: Span) => T): Promise<Awaited<T>>;
export declare function trace<T extends Promise<any>>(name: string, options: SpanOptions, fn: (span: Span) => T): Promise<Awaited<T>>;
/** Wrap a function in tracing, and return it  */
export declare function traceFunction<This, Fn extends (this: This, ...args: any[]) => Promise<any>>(name: string, fn: Fn): Fn;
export declare function traceFunction<This, Fn extends (this: This, ...args: any[]) => Promise<any>>(name: string, options: SpanOptions, fn: Fn): Fn;
export declare const getCurrentSpan: () => Span | undefined;
/** Detect if the window object and window.localStorage or window.sessionStorage objects are functional */
export declare const storageAvailable: (type: "localStorage" | "sessionStorage") => boolean;
export declare const sleep: (ms: number) => Promise<unknown>;
/**
 * A FIFO queue that executes functions in order, waiting for each to finish before executing the next.
 */
export declare class PQueue {
    /**
     * The number of functions waiting to be executed.
     */
    get length(): number;
    /**
     * A queue of functions waiting to be executed.
     */
    private queue;
    /**
     * Whether the queue is currently being dequeued.
     */
    private isDequeuing;
    /**
     * Dequeue and execute all the functions in the queue in order.
     */
    private dequeue;
    /**
     * @param fn The function to enqueue
     * @returns A promise that resolves when the function is dequeued and finished executing
     */
    enqueue<T>(fn: () => T | PromiseLike<T>): Promise<T>;
}
export interface TokenBucketOptions {
    /**
     * The name of the bucket, used for debugging.
     *
     * @default "token-bucket"
     */
    name: string;
    /**
     * The capacity of the bucket
     *
     * @default 50
     */
    bucketSize: number;
    /**
     * How many tokens to add to the bucket per {@linkcode intervalMS}
     *
     * @default 10
     */
    tokensPerInterval: number;
    /**
     * The interval in ms at which tokens are added to the bucket
     *
     * @default 1000
     */
    intervalMS: number;
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
export declare class TokenBucket {
    /**
     * The options used to construct the bucket.
     *
     * @readonly This property is frozen and cannot be changed.
     */
    options: TokenBucketOptions;
    /**
     * The number of tokens currently in the bucket.
     */
    private tokens;
    /**
     * A `Date.now()` of the last time the bucket was refilled.
     */
    private lastRefill;
    /**
     * A queue of attempts to consume a token.
     */
    private queue;
    constructor(options?: Partial<TokenBucketOptions>);
    /**
     * Refill the bucket with the proper amount of tokens.
     */
    private refill;
    /**
     * Remove a token from the bucket, waiting if necessary until one is available.
     */
    consume(): Promise<void>;
}
export {};
