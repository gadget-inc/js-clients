import { GraphQLError } from "@0no-co/graphql.web";
import type { AnyActionFunction, AnyBulkActionFunction, AnyClient, AnyModelManager, BackgroundActionHandle, EnqueueBackgroundActionOptions, FieldSelection, GadgetError, GadgetRecord, InvalidFieldError } from "@gadgetinc/api-client-core";
import type { CombinedError, RequestPolicy } from "@urql/core";
import type { ReactNode, RefCallback, RefObject } from "react";
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
    /**
     * Marks this query as a live query that will subscribe to changes from the backend and re-render when backend data changes with the newest data.
     *
     * This option is currently only available for Gadget apps in the Realtime Queries beta!
     * Please contact Gadget for access to this beta in order to use Realtime queries.
     * @experimental
     */
    live?: boolean;
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
export type RequiredKeysOf<BaseType> = Exclude<{
    [Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]> ? Key : never;
}[keyof BaseType], undefined>;
/**
 * The return value of a `useAction`, `useGlobalAction`, `useBulkAction` etc hook.
 * Includes the data result object and a function for running the mutation.
 **/
export type ActionHookResult<Data = any, Variables extends AnyVariables = AnyVariables> = RequiredKeysOf<Variables> extends never ? [
    ActionHookState<Data, Variables>,
    (variables?: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
] : [
    ActionHookState<Data, Variables>,
    (variables: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
];
/**
 * The inner result object returned from a mutation result
 */
export type EnqueueHookState<SchemaT, Action extends AnyActionFunction> = Action extends AnyBulkActionFunction ? {
    fetching: boolean;
    stale: boolean;
    handles: BackgroundActionHandle<SchemaT, Action>[] | null;
    error?: ErrorWrapper;
    extensions?: Record<string, any>;
    operation?: Operation<{
        backgroundAction: {
            id: string;
        };
    }, Action["variablesType"]>;
} : {
    fetching: boolean;
    stale: boolean;
    handle: BackgroundActionHandle<SchemaT, Action> | null;
    error?: ErrorWrapper;
    extensions?: Record<string, any>;
    operation?: Operation<{
        backgroundAction: {
            id: string;
        };
    }, Action["variablesType"]>;
};
/**
 * The return value of a `useEnqueue` hook.
 * Returns a two-element array:
 *  - the result object, with the keys like `handle`, `fetching`, and `error`
 *  - and a function for running the enqueue mutation.
 **/
export type EnqueueHookResult<SchemaT, Action extends AnyActionFunction> = RequiredKeysOf<Exclude<Action["variablesType"], null | undefined>> extends never ? [
    EnqueueHookState<SchemaT, Action>,
    (variables?: Action["variablesType"], backgroundOptions?: EnqueueBackgroundActionOptions<Action>, context?: Partial<OperationContext>) => Promise<EnqueueHookState<SchemaT, Action>>
] : [
    EnqueueHookState<SchemaT, Action>,
    (variables: Action["variablesType"], backgroundOptions?: EnqueueBackgroundActionOptions<Action>, context?: Partial<OperationContext>) => Promise<EnqueueHookState<SchemaT, Action>>
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
    static errorIfDataAbsent(result: UseQueryState<any>, dataPath: string[], paused?: boolean): ErrorWrapper | undefined;
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
export declare const useMemoizedQueryOptions: <Options extends QueryOptions>(options?: Options) => Options;
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
export declare const useQueryArgs: <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options) => UseQueryArgs;
export type OptionsType = {
    [key: string]: any;
    /** What fields to select from the resulting object */
    select?: FieldSelection;
    /** Subscribe to changes from the backend and return a new result as it changes */
    live?: boolean;
};
/**
 * Get a dot-separated path from an object
 * From https://youmightnotneed.com/lodash
 */
export declare const get: (obj: any, path: string | string[]) => any;
/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
export declare const set: (obj: any, path: string, value: any) => void;
/**
 * Based on Lodash uniqBy to ensure all array elements are unique by a property
 * https://youmightnotneed.com/lodash
 */
export declare const uniqByProperty: (arr: any[], property: string) => any[];
/**
 * Based on Lodash uniq to ensure all array elements are unique
 * https://youmightnotneed.com/lodash
 */
export declare const uniq: (arr: any[]) => any[];
/**
 * Based on Lodash compact to ensure all array elements are truthy
 * https://youmightnotneed.com/lodash
 */
export declare const compact: (arr: any[]) => any[];
/**
 * Removes the property at path of object.
 * From https://youmightnotneed.com/lodash
 */
export declare const unset: (obj: any, path: string) => void;
/**
 * Omits the given properties from an object
 * From https://youmightnotneed.com/lodash
 */
export declare const omit: (obj: any, omittedProperties: string[]) => any;
/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a React component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
export declare const debounce: (fn: Function, delayInMs?: number) => (...args: any[]) => void;
export declare const getModelManager: (apiClient: AnyClient, apiIdentifier: string, namespace?: string[] | string | null) => AnyModelManager | undefined;
type SortOrder = "asc" | "desc";
export declare const sortByProperty: <T>(arr: T[], property: keyof T, order?: SortOrder) => T[];
/**
 * In some cases, we need to exclude the `ref` property from the original object (e.g. input controllers) to prevent from showing up a warning message from React.
 * This function helps to get the object without the `ref` property.
 *
 * Check out https://github.com/gadget-inc/js-clients/pull/466 for more details.
 */
export declare const getPropsWithoutRef: <T extends {
    ref: RefCallback<any> | RefObject<any>;
}>(props: T) => Omit<T, "ref">;
export type RichTextValueType = {
    markdown: string;
    __typename: "RichText";
};
export type RoleAssignmentsValueType = {
    key: string;
    name: string;
    __typename: "Role";
};
export type FileValueType = {
    url: string;
    mimeType: string;
    fileName: string;
    __typename: "StoredFile";
};
export type ValueWithTypename = {
    __typename: string;
    [key: string]: ColumnValueType;
};
export type HasManyValueType = {
    __typename: string;
    edges: {
        node: ValueWithTypename;
    }[];
};
export type ColumnValueType = string | number | boolean | Date | null | string[] | RoleAssignmentsValueType[] | FileValueType | RichTextValueType | ValueWithTypename | HasManyValueType;
export declare const isRoleAssignmentsArray: (value: ColumnValueType) => value is RoleAssignmentsValueType[];
export type RelatedFieldColumn = {
    field: string;
    relatedField: string;
};
export declare const isRelatedFieldColumn: (value: any) => value is RelatedFieldColumn;
export type CustomCellColumn = {
    name: string;
    render: (record: GadgetRecord<any>) => ReactNode;
};
export declare const isCustomCellColumn: (value: any) => value is CustomCellColumn;
/**
 * Humanizes a camelCase string by adding spaces between words and capitalizing the first letter
 * Examples
 *    humanizeCamelCase("createNewWidget") => "Create New Widget"
 *    humanizeCamelCase("do99Things") => "Do 99 Things"
 */
export declare const humanizeCamelCase: (camelCaseString: string) => string;
export {};
