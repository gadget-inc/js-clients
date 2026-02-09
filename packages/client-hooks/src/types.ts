import type {
  ActionFunction,
  ActionFunctionMetadata,
  AnyActionFunction,
  AnyBackgroundActionHandle,
  AnyBulkActionFunction,
  AnyClient,
  AnyConnection,
  AnyCoreImplementation,
  AnyErrorWrapper,
  BulkActionFunction,
  DefaultSelection,
  EnqueueBackgroundActionOptions,
  FieldSelection,
  FindFirstFunction,
  FindManyFunction,
  FindOneFunction,
  GadgetRecord,
  GadgetRecordList,
  GetFunction,
  GlobalActionFunction,
  LimitToKnownKeys,
  Select,
  ViewFunction,
  ViewFunctionWithVariables,
  ViewFunctionWithoutVariables,
  ViewResult,
} from "@gadgetinc/core";
import type { AnyVariables, DocumentInput, Operation, OperationContext, RequestPolicy } from "@urql/core";
import type { UseMutationResponse, UseQueryArgs, UseQueryResponse } from "./adapter.js";

export interface QueryOptions {
  context?: Partial<OperationContext>;
  pause?: boolean;
  requestPolicy?: RequestPolicy;
  suspense?: boolean;
}

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
   */
  live?: boolean;
};

export type OptionsType = {
  [key: string]: any;
  /** What fields to select from the resulting object */
  select?: FieldSelection;
  /** Subscribe to changes from the backend and return a new result as it changes */
  live?: boolean;
};

/**
 * The inner result object returned from a query result
 **/
export interface ReadHookState<Data = any, Variables extends AnyVariables = Record<string, any>> {
  fetching: boolean;
  stale: boolean;
  data?: Data;
  error?: AnyErrorWrapper;
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

export type RequiredKeysOf<BaseType> = Exclude<
  {
    [Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]> ? Key : never;
  }[keyof BaseType],
  undefined
>;

/**
 * The inner result object returned from a mutation result
 */
export interface ActionHookState<Data = any, Variables extends AnyVariables = Record<string, any>> {
  fetching: boolean;
  stale: boolean;
  data?: Data;
  error?: AnyErrorWrapper;
  extensions?: Record<string, any>;
  operation?: Operation<Data, Variables>;
}

/**
 * The return value of a `useAction`, `useGlobalAction`, `useBulkAction` etc hook.
 * Includes the data result object and a function for running the mutation.
 **/
export type ActionHookResult<Data = any, Variables extends AnyVariables = AnyVariables> = RequiredKeysOf<Variables> extends never
  ? ActionHookResultWithOptionalCallbackVariables<Data, Variables>
  : ActionHookResultWithRequiredCallbackVariables<Data, Variables>;

export type ActionHookResultWithOptionalCallbackVariables<Data = any, Variables extends AnyVariables = AnyVariables> = [
  ActionHookState<Data, Variables>,
  (variables?: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
];

export type ActionHookResultWithRequiredCallbackVariables<Data = any, Variables extends AnyVariables = AnyVariables> = [
  ActionHookState<Data, Variables>,
  (variables: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
];

export type UseGadgetQueryArgs<Variables extends AnyVariables, Data = any> = UseQueryArgs<Variables, Data> & {
  /**
   * Marks this query as one that should suspend the react component rendering while executing, instead of returning `{fetching: true}` to the caller.
   * Useful if you want to allow components higher in the tree to show spinners instead of having every component manage its own loading state.
   */
  suspense?: boolean;
};

/**
 * Get the current `GadgetConnection` object from context.
 * Must be called within a component wrapped by `<Provider api={...} />`.
 **/
export type UseConnection = () => AnyConnection;
/**
 * Get the current `api` object from  context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export type UseApi = () => AnyClient;
/**
 * Get the current implementation of the core interfaces that a Gadget client uses.
 */
export type UseCoreImplementation = () => AnyCoreImplementation;
/**
 * Memoize and ensure a stable identity on a given value as long as it remains the same, structurally.
 */
export type UseStructuralMemo = <T>(value: T) => T;
export type UseGadgetQuery = <Data = any, Variables extends AnyVariables = AnyVariables>(
  args: UseGadgetQueryArgs<Variables, Data>
) => UseQueryResponse<Data, Variables>;
export type UseGadgetMutation = <Data = any, Variables extends AnyVariables = AnyVariables>(
  query: DocumentInput<Data, Variables>
) => UseMutationResponse<Data, Variables>;

export type CoreHooks = {
  useConnection: UseConnection;
  useApi: UseApi;
  useCoreImplementation: UseCoreImplementation;
  useStructuralMemo: UseStructuralMemo;
  useGadgetQuery: UseGadgetQuery;
  useGadgetMutation: UseGadgetMutation;
};

/**
 * The inner result object returned from a mutation result
 */
export type EnqueueHookState<Action extends AnyActionFunction> = Action extends AnyBulkActionFunction
  ? {
      fetching: boolean;
      stale: boolean;
      handles: AnyBackgroundActionHandle<Action["schemaType"], Action>[] | null;
      error?: AnyErrorWrapper;
      extensions?: Record<string, any>;
      operation?: Operation<{ backgroundAction: { id: string } }, Action["variablesType"]>;
    }
  : Action extends ActionFunctionMetadata<any, any, any, any, any, false>
  ? {
      fetching: boolean;
      stale: boolean;
      handle: AnyBackgroundActionHandle<Action["schemaType"], Action> | null;
      error?: AnyErrorWrapper;
      extensions?: Record<string, any>;
      operation?: Operation<{ backgroundAction: { id: string } }, Action["variablesType"]>;
    }
  : {
      fetching: boolean;
      stale: boolean;
      handle: AnyBackgroundActionHandle<unknown, Action> | null;
      error?: AnyErrorWrapper;
      extensions?: Record<string, any>;
      operation?: Operation<{ backgroundAction: { id: string } }, Action["variablesType"]>;
    };

/**
 * The return value of a `useEnqueue` hook.
 * Returns a two-element array:
 *  - the result object, with the keys like `handle`, `fetching`, and `error`
 *  - and a function for running the enqueue mutation.
 **/
export type EnqueueHookResult<Action extends AnyActionFunction> = RequiredKeysOf<
  Exclude<Action["variablesType"], null | undefined>
> extends never
  ? [
      EnqueueHookState<Action>,
      (
        variables?: Action["variablesType"],
        backgroundOptions?: EnqueueBackgroundActionOptions<Action>,
        context?: Partial<OperationContext>
      ) => Promise<EnqueueHookState<Action>>
    ]
  : [
      EnqueueHookState<Action>,
      (
        variables: Action["variablesType"],
        backgroundOptions?: EnqueueBackgroundActionOptions<Action>,
        context?: Partial<OperationContext>
      ) => Promise<EnqueueHookState<Action>>
    ];

/**
 * Hook to run a Gadget model action. `useAction` must be passed an action function from an instance of your generated API client library, like `api.user.create` or `api.blogPost.publish`. `useAction` doesn't actually run the action when invoked, but instead returns an action function as the second result for running the action in response to an event.
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, data}, createUser] = useAction(api.user.create, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     name: props.name,
 *     email: props.email,
 *   });
 *
 *   return (
 *     <>
 *       {error && <>Failed to create user: {error.toString()}</>}
 *       {fetching && <>Creating user...</>}
 *       {data && <>Created user with id={data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */

export type UseAction = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends F["optionsType"]
>(
  action: F,
  options?: LimitToKnownKeys<Options, F["optionsType"]>
) => ActionHookResult<
  F["hasReturnType"] extends true
    ? any
    : GadgetRecord<
        Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
      >,
  Exclude<F["variablesType"], null | undefined>
>;

/**
 * Hook to run a Gadget model bulk action.
 *
 * @param action any bulk action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function BulkFinish(props: { ids: string[]; }) {
 *   const [result, bulkFinish] = useBulkAction(Client.todo.bulkFinish, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => ;
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Finished TODOs with ids={props.ids}</>}
 *       <button onClick={() => bulkFinish(ids))}>Bulk finish</button>
 *     </>
 *   );
 * }
 */
export type UseBulkAction = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends BulkActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends F["optionsType"]
>(
  action: F,
  options?: LimitToKnownKeys<Options, F["optionsType"]>
) => ActionHookResult<
  F["hasReturnType"] extends true
    ? any[]
    : GadgetRecord<
        Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
      >[],
  Exclude<F["variablesType"], null | undefined>
>;

/**
 * Hook to enqueue a Gadget action in the background. `useEnqueue` must be passed an action function from an instance of your generated API client library, like `useEnqueue(api.user.create)` or `useEnqueue(api.someGlobalAction)`. `useEnqueue` doesn't actually submit the background action when invoked, but instead returns a function for enqueuing the action in response to an event.
 *
 * @param action a model action or global action in your application's client, like `api.user.create` or `api.someGlobalAction`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, handle}, enqueue] = useEnqueue(api.user.create));
 *
 *   const onClick = () => enqueue(
 *     {
 *       name: props.name,
 *       email: props.email,
 *     }, {
 *       id: `send-email-action-${props.email}`
 *     }
 *   );
 *
 *   return (
 *     <>
 *       {error && <>Failed to enqueue user create: {error.toString()}</>}
 *       {fetching && <>Enqueuing action...</>}
 *       {data && <>Enqueued action with background action id={handle.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export type UseEnqueue = <Action extends AnyActionFunction>(
  action: Action,
  baseBackgroundOptions?: EnqueueBackgroundActionOptions<Action>
) => EnqueueHookResult<Action>;

export interface FetchHookOptions extends RequestInit {
  stream?: boolean | string;
  json?: boolean;
  sendImmediately?: boolean;
  onStreamComplete?: (value: string) => void;
}

export interface FetchHookState<T> {
  data?: T;
  response?: Response;
  error?: AnyErrorWrapper;
  fetching: boolean;
  streaming: boolean;
  options: FetchHookOptions;
}

export type FetchHookResult<T, U = T> = [FetchHookState<T>, (opts?: Partial<FetchHookOptions>) => Promise<U>];

/**
 * Hook to make an HTTP request to a Gadget backend HTTP route. Preserves client side session information and ensures it's passed along to the backend.
 *
 * Returns a tuple with the current state of the request and a function to send or re-send the request. The state is an object with the following fields:
 * - `data`: the response data, if the request was successful
 * - `fetching`: a boolean describing if the fetch request is currently in progress
 * - `streaming`: a boolean describing if the fetch request is currently streaming. This is only set when the option `{ stream: "string" }` is passed
 * - `error`: an error object if the request failed in any way
 *
 * The second return value is a function for executing the fetch request. It returns a promise for the response body.
 *
 * By default, `GET` requests are sent as soon as the hook executes. Any other request methods are not sent automatically, and must be triggered by calling the `execute` function returned in the second argument.
 *
 * Pass the `{ json: true }` option to expect a JSON response from the server, and to automatically parse the response as JSON. Otherwise, the response will be returned as a `string` object.
 *
 * Pass the `{ stream: true }` to get a `ReadableStream` object as a response from the server, allowing you to work with the response as it arrives.
 *
 * Pass the `{ stream: "string" }` to decode the `ReadableStream` as a string and update data as it arrives. If the stream is in an encoding other than utf8 use i.e. `{ stream: "utf-16" }`.
 *
 * When `{ stream: "string" }` is used, the `streaming` field in the state will be set to `true` while the stream is active, and `false` when the stream is complete. You can use this to show a loading indicator while the stream is active.
 * You can also pass an `onStreamComplete` callback that will be called with the value of the streamed string once it has completed.
 *
 * If you want to read model data, see the `useFindMany` function and similar. If you want to invoke a backend Action, use the `useAction` hook instead.
 *
 * @param path the backend path to fetch
 * @param options the `fetch` options for the request
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [{data, fetching, error}, refresh] = useFetch("/users/get", {
 *     method: "GET",
 *     body: JSON.stringify({ email: props.email }})
 *     headers: {
 *       "content-type": "application/json",
 *     }
 *     json: true,
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 */
export interface UseFetch {
  (path: string, options: { stream: string } & FetchHookOptions): FetchHookResult<string, ReadableStream<string>>;
  (path: string, options: { stream: true } & FetchHookOptions): FetchHookResult<ReadableStream<Uint8Array>>;
  <T extends Record<string, any>>(url: string, options: { json: true } & FetchHookOptions): FetchHookResult<T>;
  (path: string, options?: FetchHookOptions): FetchHookResult<string>;
}

/**
 * Hook to fetch a Gadget record using the `findByXYZ` method of a given model manager. Useful for finding records by key fields which are used for looking up records by. Gadget autogenerates the `findByXYZ` methods on your model managers, and `useFindBy` can only be used with models that have these generated finder functions.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [result, refresh] = useFindBy(api.user.findByEmail, props.email, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 */
export type UseFindBy = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  finder: F,
  value: string,
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
>;

/**
 * Hook to fetch the first backend record matching a given filter and sort. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the first record found if there is one, and null otherwise.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindFirst(api.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export type UseFindFirst = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindFirstFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findFirst: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
>;

/**
 * Hook to fetch a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindMany(api.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No users found</>;
 *
 *   return <>{result.data.map((user) => <div>{user.name}</div>)}</>;
 * }
 * ```
 */
export type UseFindMany = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<
  GadgetRecordList<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
>;

/**
 * Hook to fetch one Gadget record by `id` from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the record if it was found, and `null` otherwise.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useFindOne(api.user, props.id, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export type UseFindOne = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findOne: F },
  id: string,
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
>;

/**
 * Hook that fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it, and instead returns the one current record for the current context.
 *
 * @param manager Gadget model manager to use, like `api.currentSomething`
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function CurrentSession() {
 *   const [{error, data, fetching}, refresh] = useGet(api.currentSession, {
 *     select: {
 *       id: true,
 *       userId: true,
 *     },
 *   });
 *
 *   if (error) return <>Error: {error.toString()}</>;
 *   if (fetching && !data) return <>Fetching...</>;
 *   if (!data) return <>No current session found</>;
 *
 *   return <div>Current session ID={data.id} and userId={data.userId}</div>;
 * }
 * ```
 */
export type UseGet = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends GetFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { get: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
>;

/**
 * Hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 *
 * @example
 * ```
 * export function FlipAllWidgets(props: { name: string; email: string }) {
 *   const [result, flipAllWidgets] = useGlobalAction(Client.flipAllWidgets);
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to flip all widgets: {result.error.toString()}</>}
 *       {result.fetching && <>Flipping all widgets...</>}
 *       {result.data && <>Flipped all widgets</>}
 *       <button onClick={() => flipAllWidgets()}>Flip all widgets</button>
 *     </>
 *   );
 * }
 */
export type UseGlobalAction = <F extends GlobalActionFunction<any>>(
  action: F
) => ActionHookResultWithOptionalCallbackVariables<any, Exclude<F["variablesType"], null | undefined>>;

/**
 *  Hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useMaybeFindFirst(Client.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export type UseMaybeFindFirst = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindFirstFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findFirst: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<null | GadgetRecord<
  Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
>>;

/**
 * Hook to fetch a Gadget record using the `maybeFindOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useMaybeFindOne(Client.user, props.id, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export type UseMaybeFindOne = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  const Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findOne: F },
  id: string,
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> & {
    select?: LimitToKnownKeys<NonNullable<Options["select"]>, F["selectionType"]>;
  }
) => ReadHookResult<null | GadgetRecord<
  Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
>>;

export interface UseView {
  /**
   * Hook to fetch the result of a computed view from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
   *
   * @param view Gadget view function to run, like `api.leaderboard` or `api.todos.summary`
   * @param options options for controlling client side execution
   *
   * @example
   *
   * ```
   * export function Leaderboard() {
   *   const [result, refresh] = useView(api.leaderboard);
   *
   *   if (result.error) return <>Error: {result.error.toString()}</>;
   *   if (result.fetching && !result.data) return <>Fetching...</>;
   *   if (!result.data) return <>No data found</>;
   *
   *   return <>{result.data.map((leaderboard) => <div>{leaderboard.name}: {leaderboard.score}</div>)}</>;
   * }
   * ```
   */
  <F extends ViewFunctionWithoutVariables<any>>(view: F, options?: Omit<ReadOperationOptions, "live">): ReadHookResult<ViewResult<F>>;
  /**
   * Hook to fetch the result of a computed view with variables from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
   *
   * @param manager Gadget view function to run
   * @param variables variables to pass to the backend view
   * @param options options for controlling client side execution
   *
   * @example
   *
   * ```
   * export function Leaderboard() {
   *   const [result, refresh] = useView(api.leaderboard, {
   *     first: 10,
   *   });
   *
   *   if (result.error) return <>Error: {result.error.toString()}</>;
   *   if (result.fetching && !result.data) return <>Fetching...</>;
   *   if (!result.data) return <>No data found</>;
   *
   *   return <>{result.data.map((leaderboard) => <div>{leaderboard.name}: {leaderboard.score}</div>)}</>;
   * }
   * ```
   */
  <F extends ViewFunctionWithVariables<any, any>>(
    view: F,
    variables: F["variablesType"],
    options?: Omit<ReadOperationOptions, "live">
  ): ReadHookResult<ViewResult<F>>;

  /**
   * Hook to fetch the result of an inline computed view with variables from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
   *
   * Does not know the type of the result from the input string -- for type safety, use a named view defined in a .gelly file in the backend.
   *
   * @param view Gelly query string to run, like `{ count(todos) }`
   * @param variables variables to pass to the backend view
   * @param options options for controlling client side execution
   *
   * @example
   *
   * ```
   * export function Leaderboard() {
   *   const [result, refresh] = useView("{ count(todos) }", {
   *     first: 10,
   *   });
   *
   *   if (result.error) return <>Error: {result.error.toString()}</>;
   *   if (result.fetching && !result.data) return <>Fetching...</>;
   *   if (!result.data) return <>No data found</>;
   *
   *   return <>{result.data.map((leaderboard) => <div>{leaderboard.name}: {leaderboard.score}</div>)}</>;
   * }
   * ```
   */
  (gellyQuery: string, variables?: Record<string, unknown>, options?: Omit<ReadOperationOptions, "live">): ReadHookResult<
    ViewResult<ViewFunction<unknown, unknown>>
  >;
}
