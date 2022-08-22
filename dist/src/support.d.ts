import { SpanOptions } from "@opentelemetry/api";
import { OperationContext, OperationResult, RequestPolicy } from "@urql/core";
import { DataHydrator } from "./DataHydrator";
import { GadgetRecord, RecordShape } from "./GadgetRecord";
/**
 * Generic type of the state of any record of a Gadget model
 **/
export declare type AnyState = string | {
    [key: string]: AnyState;
};
/**
 * Error caused by a violated internal expectation that isn't the users fault, but the Gadget platform's. Often the best way to handle is to just retry.
 **/
export declare class GadgetInternalError extends Error {
}
/**
 * An error representing misuse or a violation of the assumptions of the Gadget Client.
 */
export declare class GadgetClientError extends Error {
}
/**
 * A Gadget API error with an `errorCode` and `message` describing the error. Most often these errors are caused by invalid input data or by misconfigured Gadget models. Consult the documentation for the specific `errorCode` to learn more.
 **/
export declare class GadgetOperationError extends Error {
    readonly errorCode: string;
    constructor(incomingMessage: string, errorCode: string);
}
/**
 * Interface representing one message on one invalid field for a `GadgetValidationError`
 */
export interface InvalidFieldError {
    apiIdentifier: string;
    message: string;
}
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 **/
export declare class GadgetValidationError extends Error {
    readonly validationErrors: InvalidFieldError[];
    errorCode: string;
    constructor(message: string, validationErrors: InvalidFieldError[]);
}
/**
 * A Gadget API error that represents an error from the server. Thrown when the server enounters data that is not unique despite the existence of unique validation on a field. If you receive this error, it is likely that you added a unique validation to a field that has duplicate data.
 */
export declare class GadgetNonUniqueDataError extends Error {
    errorCode: string;
}
export declare function assert<T>(value: T | undefined | null, message?: string): T;
export declare const get: (object: Record<string, any> | null | undefined, path: string[]) => any;
export declare const capitalize: (str: string | undefined | null) => string;
export declare const camelize: (term: string, uppercaseFirstLetter?: boolean) => string;
export declare const sortTypeName: (modelApiIdentifier: string) => string;
export declare const filterTypeName: (modelApiIdentifier: string) => string;
export declare const getNonUniqueDataError: (modelApiIdentifier: string, fieldName: string, fieldValue: string) => GadgetNonUniqueDataError;
export declare const getNonNullableError: (response: Result & {
    fetching: boolean;
}, dataPath: string[], throwOnEmptyData?: boolean) => GadgetInternalError | undefined;
export declare const assertOperationSuccess: (response: OperationResult<any>, dataPath: string[], throwOnEmptyData?: boolean) => any;
export declare const assertNullableOperationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
export declare const gadgetErrorFor: (error: Record<string, any>) => GadgetOperationError | GadgetValidationError | GadgetNonUniqueDataError;
export declare const assertMutationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
declare type Result = Pick<OperationResult<any>, "data">;
export declare const getHydrator: (response: Result) => DataHydrator | undefined;
export declare const hydrateRecord: <Shape extends RecordShape = RecordShape>(response: Result, record: any) => GadgetRecord<Shape>;
export declare const hydrateRecordArray: <Shape extends RecordShape = any>(response: Result, records: Array<any>) => (import("./GadgetRecord").GadgetRecordImplementation<Shape> & Shape)[];
export declare const hydrateConnection: <Shape extends RecordShape = any>(response: Result, connection: {
    edges: {
        node: Node;
    }[];
}) => (import("./GadgetRecord").GadgetRecordImplementation<Shape> & Shape)[];
export declare const toPrimitiveObject: (value: any) => any;
export declare const tracer: import("@opentelemetry/api").Tracer;
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
export declare const errorMessage: (error: unknown) => any;
/** Wrap a function in tracing, and return it  */
export declare const traceFunction: <T extends (...args: any[]) => any>(name: string, func: T, options?: SpanOptions | undefined) => T;
export declare const getCurrentSpan: () => import("@opentelemetry/api").Span | undefined;
interface QueryPlan {
    variables: any;
    query: string;
}
interface QueryOptions {
    context?: Partial<OperationContext>;
    pause?: boolean;
    requestPolicy?: RequestPolicy;
}
/** Generate `urql` query argument object, for `useQuery` hook */
export declare const getQueryArgs: <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options | undefined) => {
    query: string;
    variables: any;
    context: Partial<OperationContext> | undefined;
    pause: boolean | undefined;
    requestPolicy: RequestPolicy | undefined;
};
export {};
