import type { OperationResult } from "@urql/core";
import { type FieldSelection as BuilderFieldSelection } from "tiny-graphql-query-compiler";
import { DataHydrator } from "./DataHydrator.js";
import type { ActionFunctionMetadata, AnyActionFunction } from "./GadgetFunctions.js";
import type { RecordShape } from "./GadgetRecord.js";
import { GadgetRecord } from "./GadgetRecord.js";
import type { VariablesOptions } from "./types.js";
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
 * A Gadget API error when there are more requests sent in the alloted time window then permitted
 */
export declare class GadgetTooManyRequestsError extends Error {
    code: string;
    name: string;
    /** @private */
    statusCode: number;
    /** @private */
    causedByClient: boolean;
}
/**
 * A Gadget API error representing a backend validation error on the input data for an action. Thrown when any of the validations configured on a model fail for the given input data. Has a `validationErrors` property describing which fields failed validation, with messages for each.
 */
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
/**
 * Represents a group of errors that occurred when running a number of operations at once */
export declare class GadgetErrorGroup<Result> extends Error {
    /** The list of inner errors that occurred */
    readonly errors: GadgetError[];
    readonly results: Result[] | undefined;
    constructor(
    /** The list of inner errors that occurred */
    errors: GadgetError[], results: Result[] | undefined);
    get code(): string;
    name: string;
    /** @private */
    get statusCode(): number;
}
/** All the errors a Gadget operation can throw */
export type GadgetError = GadgetOperationError | GadgetInternalError | InvalidRecordError | GadgetNonUniqueDataError | GadgetNotFoundError | GadgetUnexpectedCloseError | GadgetWebsocketConnectionTimeoutError | GadgetErrorGroup<any>;
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
export declare const namespacedGraphQLTypeName: (modelApiIdentifier: string, givenNamespaces: string | string[] | null | undefined) => string;
export declare const sortTypeName: (modelApiIdentifier: string, namespace: string | string[] | null | undefined) => string;
export declare const filterTypeName: (modelApiIdentifier: string, namespace: string | string[] | null | undefined) => string;
export declare const getNonUniqueDataError: (modelApiIdentifier: string, fieldName: string, fieldValue: string) => GadgetNonUniqueDataError;
export type FetchableResult = Result & {
    fetching: boolean;
    stale?: boolean;
};
export declare const getNonNullableError: (response: FetchableResult, dataPath: string[]) => GadgetInternalError | GadgetNotFoundError | undefined;
export declare const assertOperationSuccess: (response: OperationResult<any>, dataPath: string[], throwOnEmptyData?: boolean) => any;
export declare const assertNullableOperationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
export declare const gadgetErrorFor: (error: Record<string, any>) => GadgetOperationError | InvalidRecordError | GadgetNonUniqueDataError;
export declare const assertMutationSuccess: (response: OperationResult<any>, dataPath: string[]) => any;
export declare const assertResponseSuccess: (operationResponse: any) => any;
type Result = Pick<OperationResult<any>, "data">;
export declare const getHydrator: (response: Result) => DataHydrator | undefined;
export declare const hydrateRecord: <Shape extends RecordShape = RecordShape>(response: Result, record: any) => GadgetRecord<Shape>;
export declare const hydrateRecordArray: <Shape extends RecordShape = any>(response: Result, records: Array<any>) => (import("./GadgetRecord.js").GadgetRecord_<Shape> & Shape)[];
export declare const hydrateConnection: <Shape extends RecordShape = any>(response: Result, connection: {
    edges: {
        node: Node;
    }[];
}) => (import("./GadgetRecord.js").GadgetRecord_<Shape> & Shape)[];
export declare const toPrimitiveObject: (value: any) => any;
/**
 * Get a string representing an error that is an `Error` object or anything else that might be `throw`n
 */
export declare const errorMessage: (error: unknown) => any;
/** Detect if the window object and window.localStorage or window.sessionStorage objects are functional */
export declare const storageAvailable: (type: "localStorage" | "sessionStorage") => boolean;
export declare const isEqual: (a: any, b: any) => boolean;
/**
 * Processes the flexible, convenient JS-land inputs for an action to the fully qualified GraphQL API inputs
 * @internal
 **/
export declare const disambiguateActionVariables: (action: AnyActionFunction, variables: Record<string, any> | undefined) => Record<string, any>;
/**
 * Normalizes incoming params from JS land into the variable format the GraphQL API is expecting
 * Some bulk actions take GraphQL variables like `{ids: ["1","2","3"]}`, and others take `{inputs: [{field: "value"}, {field: "value"}]}`. In JS land, we accept the fully qualified variables that look like that, as well as the inner array shorthands.
 **/
export declare const disambiguateBulkActionVariables: (action: ActionFunctionMetadata<any, any, any, any, any, true>, inputs?: Record<string, any> | Record<string, any>[]) => Record<string, any>;
/**
 * Given a set of variables defined with their types and requiredness and whatnot, return the same options with the values for each variable filled in, suitable for passing to one invocation
 */
export declare const setVariableOptionValues: (variableOptions: VariablesOptions, values: Record<string, unknown>) => VariablesOptions;
export declare const namespaceDataPath: (dataPath: string[], namespace?: string[] | string | null) => string[];
/**
 * Build a selection object to retrieve the hydrations for a model from the `gadgetMeta` API
 **/
export declare const hydrationSelection: (modelApiIdentifier: string, namespace?: string | string[] | null) => BuilderFieldSelection;
/**
 * Wrap a field selection in a set of namespaces
 **/
export declare function namespacify(namespace: string[] | string | undefined | null, fields: any): any;
export declare const ErrorsSelection: BuilderFieldSelection;
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
export declare const formatErrorMessages: (error: Error) => Record<string, any>;
export {};
