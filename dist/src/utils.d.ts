import type { FieldSelection, GadgetError, InvalidFieldError } from "@gadgetinc/api-client-core";
import type { CombinedError, RequestPolicy } from "@urql/core";
import { GraphQLError } from "graphql";
import type { AnyVariables, Operation, OperationContext, UseQueryArgs, UseQueryState } from "urql";
/**
 * All the options controlling how this query will be managed by urql
 * */
export declare type ReadOperationOptions = {
    /** Updates the {@link RequestPolicy} for the executed GraphQL query operation.
     *
     * @remarks
     * `requestPolicy` modifies the {@link RequestPolicy} of the GraphQL query operation
     * that `useQuery` executes, and indicates a caching strategy for cache exchanges.
     *
     * For example, when set to `'cache-and-network'`, {@link useQuery} will
     * receive a cached result with `stale: true` and an API request will be
     * sent in the background.
     *
     * @see {@link OperationContext.requestPolicy} for where this value is set.
     */
    requestPolicy?: RequestPolicy;
    /** Updates the {@link OperationContext} for the executed GraphQL query operation.
     *
     * @remarks
     * `context` may be passed to {@link useQuery}, to update the {@link OperationContext}
     * of a query operation. This may be used to update the `context` that exchanges
     * will receive for a single hook.
     *
     * Hint: This should be wrapped in a `useMemo` hook, to make sure that your
     * component doesn’t infinitely update.
     *
     * @example
     * ```ts
     * const [result, reexecute] = useQuery({
     *   query,
     *   context: useMemo(() => ({
     *     additionalTypenames: ['Item'],
     *   }), [])
     * });
     * ```
     */
    context?: Partial<OperationContext>;
    /** Prevents {@link useQuery} from automatically executing GraphQL query operations.
     *
     * @remarks
     * `pause` may be set to `true` to stop {@link useQuery} from executing
     * automatically. The hook will stop receiving updates from the {@link Client}
     * and won’t execute the query operation, until either it’s set to `false`
     * or the {@link UseQueryExecute} function is called.
     *
     * @see {@link https://urql.dev/goto/docs/basics/react-preact/#pausing-usequery} for
     * documentation on the `pause` option.
     */
    pause?: boolean;
    /**
     * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
     * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
     */
    suspense?: boolean;
};
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
export declare const noProviderErrorMessage = "Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>";
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
interface QueryPlan {
    variables: any;
    query: string;
}
interface QueryOptions {
    context?: Partial<OperationContext>;
    pause?: boolean;
    requestPolicy?: RequestPolicy;
    suspense?: boolean;
}
/**
 * Generate the args for an `urql` useQuery hook, applying Gadget's defaults
 *
 * Gadget's React hooks support using the `suspense: true` option to enable React Suspense selectively per query. This means suspense is on at the client level, and then disabled by default for each hook until you opt in with `suspense: true`. This differs from urql, which has suspense on for hooks by default when it is enabled at the client level. So, this hook applies Gadget's (we think better) default to turn suspense off for each hook until you opt in, even when enabled at the client level.
 */
export declare const useMemoizedQueryOptions: <Options extends QueryOptions>(options?: Options | undefined) => Options;
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
export declare const useQueryArgs: <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options | undefined) => UseQueryArgs;
export type OptionsType = {
    [key: string]: any;
    select?: FieldSelection;
};
export {};
