import type { GadgetError, InvalidFieldError } from "@gadgetinc/api-client-core";
import type { CombinedError } from "@urql/core";
import { GraphQLError } from "graphql";
import type { AnyVariables, Operation, OperationContext, UseQueryState } from "urql";
/**
 * The inner result object returned from a query result
 **/
export interface ReadHookState<Data = any, Variables extends AnyVariables = Record<string, any>> {
    fetching: boolean;
    stale: boolean;
    data?: Data;
    error?: ErrorWrapper;
    extensions?: Record<string, any>;
    operation?: Operation<Data, Variables>;
}
/**
 * The return value of a `useGet`, `useFindMany`, `useFindOne` etc hook.
 * Includes the data result object and a refetch function.
 **/
export declare type ReadHookResult<Data = any, Variables extends AnyVariables = AnyVariables> = [
    ReadHookState<Data, Variables>,
    (opts?: Partial<OperationContext>) => void
];
/**
 * The inner result object returned from a mutation result
 */
export interface ActionHookState<Data = any, Variables extends AnyVariables = Record<string, any>> {
    fetching: boolean;
    stale: boolean;
    data?: Data;
    error?: ErrorWrapper;
    extensions?: Record<string, any>;
    operation?: Operation<Data, Variables>;
}
/**
 * The return value of a `useAction`, `useGlobalAction`, `useBulkAction` etc hook.
 * Includes the data result object and a function for running the mutation.
 **/
export declare type ActionHookResult<Data = any, Variables extends AnyVariables = AnyVariables> = [
    ActionHookState<Data, Variables>,
    (variables: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
];
export declare const noProviderErrorMessage = "Could not find a client in the conext of Provider. Please ensure you wrap the root component in a <Provider>";
/**
 * An error returned by any of the Gadget react hooks.
 * Always has a message, but can be inspected to retrieve more detailed errors from either the network, the raw GraphQL layer, or Gadget specific errors like validation errors.
 * Not intended for creating outside of Gadget-owned code.
 **/
export declare class ErrorWrapper extends Error {
    /** @private */
    static forClientSideError(error: Error, response?: any): ErrorWrapper;
    /** @private */
    static forErrorsResponse(errors: Record<string, any>[], response?: any): ErrorWrapper;
    /** @private */
    static forMaybeCombinedError(error?: CombinedError | null): ErrorWrapper | undefined;
    /** @private */
    static errorIfDataAbsent(result: UseQueryState<any>, dataPath: string[]): ErrorWrapper | undefined;
    /** Error message for this error. Derived from the other errors this wraps. */
    message: string;
    /**
     * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
     * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
     **/
    executionErrors: (GraphQLError | GadgetError)[];
    /**
     * An error encountered when trying to communicate with the backend from the client. Includes things like connection timeouts, connection interrupts, or no internet connection errors
     **/
    networkError?: Error;
    /**
     * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
     * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
     *
     * This property allows this object to match the interface of urql's `CombinedError` object.
     *
     * @deprecated use `executionErrors` instead for a list of the errors that the GraphQL backend API returned *and* client side errors from unexpected responses.
     **/
    graphQLErrors: GraphQLError[];
    /**
     * The response from the server, if any was retrieved.
     */
    response?: any;
    constructor({ networkError, executionErrors, response, }: {
        networkError?: Error;
        executionErrors?: Array<string | Partial<GraphQLError> | Error>;
        validationErrors?: InvalidFieldError[];
        response?: any;
    });
    /** Class name of this error -- always `ErrorWrapper` */
    get name(): string;
    toString(): string;
    /**
     * A list of errors the backend reported for specific fields being invalid for the records touched by an action. Is a shortcut for accessing the validation errors of a `GadgetInvalidRecordError` if that's what is in the `executionErrors`.
     **/
    get validationErrors(): InvalidFieldError[] | null;
}
