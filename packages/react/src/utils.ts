import { GraphQLError } from "@0no-co/graphql.web";
import type {
  AnyActionFunction,
  AnyBulkActionFunction,
  AnyClient,
  AnyModelManager,
  BackgroundActionHandle,
  EnqueueBackgroundActionOptions,
  FieldSelection,
  GadgetError,
  InvalidFieldError,
  InvalidRecordError,
} from "@gadgetinc/api-client-core";
import { gadgetErrorFor, getNonNullableError, namespaceDataPath } from "@gadgetinc/api-client-core";
import type { CombinedError, RequestPolicy } from "@urql/core";
import type { RefCallback, RefObject } from "react";
import { useMemo } from "react";
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

export type RequiredKeysOf<BaseType> = Exclude<
  {
    [Key in keyof BaseType]: BaseType extends Record<Key, BaseType[Key]> ? Key : never;
  }[keyof BaseType],
  undefined
>;

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

/**
 * The inner result object returned from a mutation result
 */
export type EnqueueHookState<SchemaT, Action extends AnyActionFunction> = Action extends AnyBulkActionFunction
  ? {
      fetching: boolean;
      stale: boolean;
      handles: BackgroundActionHandle<SchemaT, Action>[] | null;
      error?: ErrorWrapper;
      extensions?: Record<string, any>;
      operation?: Operation<{ backgroundAction: { id: string } }, Action["variablesType"]>;
    }
  : {
      fetching: boolean;
      stale: boolean;
      handle: BackgroundActionHandle<SchemaT, Action> | null;
      error?: ErrorWrapper;
      extensions?: Record<string, any>;
      operation?: Operation<{ backgroundAction: { id: string } }, Action["variablesType"]>;
    };

/**
 * The return value of a `useEnqueue` hook.
 * Returns a two-element array:
 *  - the result object, with the keys like `handle`, `fetching`, and `error`
 *  - and a function for running the enqueue mutation.
 **/
export type EnqueueHookResult<SchemaT, Action extends AnyActionFunction> = RequiredKeysOf<
  Exclude<Action["variablesType"], null | undefined>
> extends never
  ? [
      EnqueueHookState<SchemaT, Action>,
      (
        variables?: Action["variablesType"],
        backgroundOptions?: EnqueueBackgroundActionOptions<Action>,
        context?: Partial<OperationContext>
      ) => Promise<EnqueueHookState<SchemaT, Action>>
    ]
  : [
      EnqueueHookState<SchemaT, Action>,
      (
        variables: Action["variablesType"],
        backgroundOptions?: EnqueueBackgroundActionOptions<Action>,
        context?: Partial<OperationContext>
      ) => Promise<EnqueueHookState<SchemaT, Action>>
    ];

export const noProviderErrorMessage = `Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>`;

const generateErrorMessage = (networkErr?: Error, graphQlErrs?: GraphQLError[]) => {
  let error = "";
  if (networkErr !== undefined) {
    error = `[Network] ${networkErr.message}`;
  } else if (graphQlErrs !== undefined) {
    graphQlErrs.forEach((err) => {
      error += `[GraphQL] ${err.message}\n`;
    });
  } else {
    error = "Unknown error";
  }

  return error.trim();
};

const rehydrateGraphQlError = (error: any): GraphQLError => {
  if (typeof error === "string") {
    return new GraphQLError(error);
  } else if (error?.message && !error.code) {
    return new GraphQLError(error.message, error.nodes, error.source, error.positions, error.path, error, error.extensions || {});
  } else {
    return error;
  }
};

/**
 * An error returned by any of the Gadget react hooks.
 * Always has a message, but can be inspected to retrieve more detailed errors from either the network, the raw GraphQL layer, or Gadget specific errors like validation errors.
 * Not intended for creating outside of Gadget-owned code.
 **/
export class ErrorWrapper extends Error {
  /** @private */
  static forClientSideError(error: Error, response?: any) {
    return new ErrorWrapper({
      executionErrors: [error],
      response,
    });
  }
  /** @private */
  static forErrorsResponse(errors: Record<string, any>[], response?: any) {
    return new ErrorWrapper({
      executionErrors: errors.map(gadgetErrorFor),
      response,
    });
  }
  /** @private */
  static forMaybeCombinedError(error?: CombinedError | null) {
    if (!error) return undefined;
    return new ErrorWrapper({
      networkError: error.networkError,
      executionErrors: error.graphQLErrors,
      response: error.response,
    });
  }
  /** @private */
  static errorIfDataAbsent(result: UseQueryState<any>, dataPath: string[], paused = false) {
    const nonNullableError = getNonNullableError(result, dataPath);
    let error = ErrorWrapper.forMaybeCombinedError(result.error);
    if (!error && nonNullableError && !paused) {
      error = ErrorWrapper.forClientSideError(nonNullableError);
    }
    return error;
  }

  /** Error message for this error. Derived from the other errors this wraps. */
  public message: string;
  /**
   * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
   * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
   **/
  public executionErrors: (GraphQLError | GadgetError)[];
  /**
   * An error encountered when trying to communicate with the backend from the client. Includes things like connection timeouts, connection interrupts, or no internet connection errors
   **/
  public networkError?: Error;

  /**
   * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
   * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
   *
   * This property allows this object to match the interface of urql's `CombinedError` object.
   *
   * @deprecated use `executionErrors` instead for a list of the errors that the GraphQL backend API returned *and* client side errors from unexpected responses.
   **/
  public graphQLErrors: GraphQLError[];

  /**
   * The response from the server, if any was retrieved.
   */
  public response?: any;

  constructor({
    networkError,
    executionErrors,
    response,
  }: {
    networkError?: Error;
    executionErrors?: Array<string | Partial<GraphQLError> | Error>;
    validationErrors?: InvalidFieldError[];
    response?: any;
  }) {
    const normalizedExecutionErrors = (executionErrors || []).map(rehydrateGraphQlError);
    const message = generateErrorMessage(networkError, normalizedExecutionErrors);

    super(message);

    this.message = message;
    this.executionErrors = normalizedExecutionErrors;
    this.graphQLErrors = normalizedExecutionErrors;
    this.networkError = networkError;
    this.response = response;
  }

  /** Class name of this error -- always `ErrorWrapper` */
  get name() {
    return "ErrorWrapper";
  }

  toString() {
    return this.message;
  }

  /**
   * A list of errors the backend reported for specific fields being invalid for the records touched by an action. Is a shortcut for accessing the validation errors of a `GadgetInvalidRecordError` if that's what is in the `executionErrors`.
   **/
  public get validationErrors(): InvalidFieldError[] | null {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const firstInvalidRecordError = this.executionErrors.find((err) => (err as any).code == "GGT_INVALID_RECORD") as
      | InvalidRecordError
      | undefined;

    return firstInvalidRecordError?.validationErrors ?? null;
  }
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
export const useMemoizedQueryOptions = <Options extends QueryOptions>(options?: Options): Options => {
  const { context: _context, suspense: _suspense, ...rest } = options ?? {};

  // use a memo as urql rerenders on context identity changes
  const context = useMemo(() => {
    return {
      suspense: !!options?.suspense,
      ...options?.context,
    };
  }, [options?.suspense, options?.context]);

  return {
    ...rest,
    context,
  } as unknown as Options;
};

/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
export const useQueryArgs = <Plan extends QueryPlan, Options extends QueryOptions>(plan: Plan, options?: Options): UseQueryArgs => ({
  query: plan.query,
  variables: plan.variables,
  ...options,
});

export type OptionsType = {
  [key: string]: any;
  /** What fields to select from the resulting object */
  select?: FieldSelection;
  /** Subscribe to changes from the backend and return a new result as it changes */
  live?: boolean;
};

/**
 * Get a list of path segments from a dot-separated path
 */
const pathToPathArray = (path: string | string[]) => {
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return Array.isArray(path) ? path : path.match(/([^[.\]])+/g)!;
};

/**
 * Get a dot-separated path from an object
 * From https://youmightnotneed.com/lodash
 */
export const get = (obj: any, path: string | string[]) => {
  if (!path) return undefined;
  return pathToPathArray(path).reduce((prevObj, key) => prevObj && prevObj[key], obj);
};

/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
export const set = (obj: any, path: string, value: any) => {
  const pathArray = pathToPathArray(path);
  pathArray.reduce((acc, key, i) => {
    if (acc[key] === undefined) acc[key] = {};
    if (i === pathArray.length - 1) acc[key] = value;
    return acc[key];
  }, obj);
};

/**
 * Based on Lodash uniqBy to ensure all array elements are unique by a property
 * https://youmightnotneed.com/lodash
 */
export const uniqByProperty = (arr: any[], property: string) => {
  const getPropertyValue = (item: any) => item[property];
  return arr.filter((x, i, self) => i === self.findIndex((y) => getPropertyValue(x) === getPropertyValue(y)));
};

/**
 * Based on Lodash uniq to ensure all array elements are unique
 * https://youmightnotneed.com/lodash
 */
export const uniq = (arr: any[]) => [...new Set(arr)];

/**
 * Based on Lodash compact to ensure all array elements are truthy
 * https://youmightnotneed.com/lodash
 */
export const compact = (arr: any[]) => arr.filter((x) => !!x);

/**
 * Removes the property at path of object.
 * From https://youmightnotneed.com/lodash
 */
export const unset = (obj: any, path: string) => {
  const pathArray = pathToPathArray(path);

  pathArray.reduce((acc, key, i) => {
    if (i === pathArray.length - 1) delete acc[key];
    return acc[key];
  }, obj);
};

/**
 * Omits the given properties from an object
 * From https://youmightnotneed.com/lodash
 */
export const omit = (obj: any, omittedProperties: string[], safe = false) => {
  obj = { ...obj };
  omittedProperties.forEach((prop) => {
    if (safe && !(prop in obj)) {
      return;
    }
    delete obj[prop];
  });
  return obj;
};

/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a React component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn: Function, delayInMs = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
  };
};

export const getModelManager = (
  apiClient: AnyClient,
  apiIdentifier: string,
  namespace?: string[] | string | null
): AnyModelManager | undefined => {
  return get(apiClient, namespaceDataPath([apiIdentifier], namespace).join("."));
};

type SortOrder = "asc" | "desc";
export const sortByProperty = <T>(arr: T[], property: keyof T, order: SortOrder = "asc"): T[] => {
  return arr.sort((a, b) => {
    if (a[property] < b[property]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};

/**
 * In some cases, we need to exclude the `ref` property from the original object (e.g. input controllers) to prevent from showing up a warning message from React.
 * This function helps to get the object without the `ref` property.
 *
 * Check out https://github.com/gadget-inc/js-clients/pull/466 for more details.
 */
export const getPropsWithoutRef = <T extends { ref: RefCallback<any> | RefObject<any> }>(props: T) => {
  const { ref: _ref, ...rest } = props;
  return rest;
};

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

export type Nullable<T> = T | null;

export type ColumnValueType =
  | Nullable<string>
  | Nullable<number>
  | Nullable<boolean>
  | Nullable<Date>
  | null
  | Nullable<string>[]
  | Array<null>
  | RoleAssignmentsValueType[]
  | Nullable<FileValueType>
  | Nullable<RichTextValueType>
  | Nullable<ValueWithTypename>
  | Nullable<HasManyValueType>;

export const isRoleAssignmentsArray = (value: ColumnValueType): value is RoleAssignmentsValueType[] => {
  if (!Array.isArray(value) || value.length === 0) return false;
  if (!value.every((item) => item !== null && typeof item === "object" && "__typename" in item && item.__typename === "Role")) return false;
  return true;
};

/**
 * Humanizes a camelCase string by adding spaces between words and capitalizing the first letter
 * Examples
 *    humanizeCamelCase("createNewWidget") => "Create New Widget"
 *    humanizeCamelCase("do99Things") => "Do 99 Things"
 */
export const humanizeCamelCase = (camelCaseString: string): string => {
  // Regular expression to find sequences of lowercase letters or digits followed by uppercase letters
  const uppercaseAfterLowercaseRegex = /([a-z\d])([A-Z])/g;

  // Add a space between the lowercase letter or digit and the uppercase letter
  let humanized = camelCaseString.replace(uppercaseAfterLowercaseRegex, "$1 $2");

  // Adjust to keep sequential numbers together with spaces around them
  humanized = humanized.replace(/([a-zA-Z])(\d)/g, "$1 $2");
  humanized = humanized.replace(/(\d)([a-zA-Z])/g, "$1 $2");

  // Capitalize the first letter
  return humanized.replace(/^./, (str) => str.toUpperCase());
};

export const deepMerge = (obj1: any, obj2: any) => {
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
};

/**
 * Deep flattens an object by converting all nested objects into a single level of keys.
 * Example:
 *    deepFlattenObject( { a: { b: { c: 1, d: 2, }, e: 3, }, f: 4, }} ) => {
 *      "a.b.c": 1, "a.b.d": 2, "a.e": 3, "f": 4
 *    }
 * @param obj - The object to flatten.
 * @param parentKey - The current key path in the object.
 * @param separator - The separator to use between keys.
 * @returns A flattened object with keys separated by the specified separator.
 */
export const deepFlattenObject = (obj: any, parentKey = "", separator = "."): Record<string, any> => {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, deepFlattenObject(obj[key], newKey, separator));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
};

/**
 * Get a list of all the keys in a flattened object
 * @param obj - The object to flatten
 * @returns A list of all the keys in the flattened object
 */
export const getFlattenedObjectKeys = (obj: any) => {
  return Object.keys(deepFlattenObject(obj));
};

export const groupPaths = (paths: string[], uniquePaths = true) => {
  const groups: Record<string, string[]> = {};

  const pathsToGroup = uniquePaths ? Array.from(new Set(paths)) : paths;

  for (const path of pathsToGroup) {
    const [rootSegment, ...childSegments] = path.split(".");

    groups[rootSegment] ??= [];

    if (childSegments.length) {
      groups[rootSegment].push(childSegments.join("."));
    }
  }

  return groups;
};

/**
 * Get the step value for a number input based on the number of decimals
 * @param numberOfDecimals - The number of decimals
 * @returns The step value
 */
export const getStepFromNumberOfDecimals = (numberOfDecimals: number) =>
  numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);

/**
 * Count the number of decimals in a string
 * @param value - The string to count the decimals in
 * @returns The number of decimals
 */
export const countNumberOfDecimals = (value: string) => {
  if (value.includes("e")) {
    // +e scientific notation for large numbers does not get decimal steps
    return 0;
  }
  const [, decimals] = value.split(".");
  return decimals?.length ?? 0;
};

/**
 * Get an error message from an error string
 * @param errorString - The error string
 * @returns The error message
 */
export const getErrorMessage = (errorString: string) => {
  if (errorString.includes("GGT_PERMISSION_DENIED")) return `Missing permissions. Cannot read related model`;

  if (errorString.includes("GGT_INVALID_STORED_DATA")) return `Invalid records found in related model`;

  return "Cannot retrieve records from related model";
};
