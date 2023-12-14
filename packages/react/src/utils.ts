import type {
  ActionFunction,
  BulkActionFunction,
  FieldSelection,
  GadgetError,
  InvalidFieldError,
  InvalidRecordError,
} from "@gadgetinc/api-client-core";
import { gadgetErrorFor, getNonNullableError } from "@gadgetinc/api-client-core";
import type { CombinedError, RequestPolicy } from "@urql/core";
import { GraphQLError } from "graphql";
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
  ? [
      ActionHookState<Data, Variables>,
      (variables?: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
    ]
  : [
      ActionHookState<Data, Variables>,
      (variables: Variables, context?: Partial<OperationContext>) => Promise<ActionHookState<Data, Variables>>
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
 * Processes the flexible, convenient JS-land inputs for an action to the fully qualified GraphQL API inputs
 * @internal */
export const disambiguateActionVariables = (
  action: ActionFunction<any, any, any, any, any> | BulkActionFunction<any, any, any, any, any>,
  variables: Record<string, any> | undefined
) => {
  variables ??= {};
  if (action.hasAmbiguousIdentifier) {
    if (
      Object.keys(variables).some((key) => key !== "id" && !action.paramOnlyVariables?.includes(key) && key !== action.modelApiIdentifier)
    ) {
      throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${action.modelApiIdentifier}: { ... } })?`);
    }
  }

  let newVariables: Record<string, any>;

  if (action.acceptsModelInput ?? action.hasCreateOrUpdateEffect) {
    if (
      action.modelApiIdentifier in variables &&
      typeof variables[action.modelApiIdentifier] === "object" &&
      variables[action.modelApiIdentifier] != null
    ) {
      newVariables = variables;
    } else {
      newVariables = {
        [action.modelApiIdentifier]: {},
      };
      for (const [key, value] of Object.entries(variables)) {
        if (action.paramOnlyVariables?.includes(key)) {
          newVariables[key] = value;
        } else {
          if (key == "id") {
            newVariables.id = value;
          } else {
            newVariables[action.modelApiIdentifier][key] = value;
          }
        }
      }
    }
  } else {
    newVariables = variables;
  }

  return newVariables;
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

export function hasNested(data: any) {
  return Object.values(data).some((value) => {
    return typeof value === "object" && value !== undefined && !Array.isArray(value);
  });
}

export function transformDataRedux(referencedTypes: Record<string, Record<string, string>>, defaultValues: any, data: any) {
  console.log("referencedTypes", JSON.stringify(referencedTypes, null, 2));
  if (Object.keys(referencedTypes).length === 0) {
    throw new Error("No referenced types found");
  }

  console.log("defaultValues", JSON.stringify(defaultValues, null, 2));
  console.log("data", JSON.stringify(data, null, 2));
  const updates = getUpdates(defaultValues);

  function transform(
    input: any,
    updates: Record<string, number[]>,
    depth = 0,
    path: string | undefined = undefined,
    fieldType: string | null = null,
    fieldRelationships: Record<string, string> | null = null
  ): any {
    if (Array.isArray(input)) {
      const results: any[] = [];
      const edge = updates[path!];
      const handled: number[] = [];
      const referencedTypeEntries = Object.entries(referencedTypes);

      if (edge) {
        results.push(
          edge.map((nodeId: any, nodeIndex: number) => {
            const item = input.find((item: any) => item.id == nodeId);

            if (!item) {
              const updateEntries = Object.entries(updates);
              const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path! + "." + nodeIndex));
              if (updateEntry) {
                const { 0: updatePath, 1: _ } = updateEntry;
                delete updates[updatePath];
              }
              return { delete: { id: nodeId } };
            } else {
              const index = input.findIndex((item: any) => item.id == nodeId);

              handled.push(index);

              let objectRelationships: Record<string, string> | null = null;

              for (const key of Object.keys(item)) {
                const foundType = referencedTypeEntries.find(([_, typeValues]) => {
                  for (const type of Object.keys(typeValues)) {
                    if (type == key) {
                      return true;
                    }
                  }
                });

                if (foundType) {
                  objectRelationships = referencedTypes[foundType[0]];
                  break;
                }
              }

              const currentPath = path ? `${path}.${index}` : index.toString();
              return transform(item, updates, depth + 1, currentPath, fieldType, objectRelationships);
            }
          })
        );
      }

      // handle the rest of the array
      results.push(
        input
          .filter((_item, index) => !handled.includes(index))
          .map((item: any, index) => {
            let objectRelationships: Record<string, string> | null = null;

            for (const key of Object.keys(item)) {
              const foundType = referencedTypeEntries.find(([_, typeValues]) => {
                for (const type of Object.keys(typeValues)) {
                  if (type == key) {
                    return true;
                  }
                }
              });

              if (foundType) {
                objectRelationships = referencedTypes[foundType[0]];
                break;
              }
            }

            const currentPath = path ? `${path}.${index}` : index.toString();
            return transform(item, updates, depth + 1, currentPath, fieldType, objectRelationships);
          })
      );

      return results.flatMap((result) => result);
    } else if (input != null && typeof input === "object") {
      const result: any = {};

      for (const key of Object.keys(input)) {
        const currentPath = path ? `${path}.${key}` : key;

        const objectRelationships = referencedTypes[key];
        const fieldType = fieldRelationships ? fieldRelationships[key] : null;

        result[key] = transform(input[key], updates, depth + 1, currentPath, fieldType, objectRelationships);
      }

      const { __typename, ...rest } = result;

      if (depth <= 1) {
        return { ...rest };
      }

      let belongsTo = null;

      for (const key of Object.keys(fieldRelationships ?? {})) { // TODO - handle multiple ambiguous identifiers
        if (`${key}Id` in input) {
          if (belongsTo == null) {
            belongsTo = {};
          }

          belongsTo = { ...belongsTo, [key]: { _link: input[`${key}Id`] } };
          delete rest[`${key}Id`];
        }
      }

      if (belongsTo) {
        return { ...rest, create: {...belongsTo} };
      }

      if ("id" in input) {
        switch (fieldType) {
          case "HasMany":
          case "HasOne":
            return { update: { ...rest } };
          case "BelongsTo":
            return { _link: input["id"] };
          default:
            throw new Error(
              `Can't transform input with id, Unknown field type ${fieldType} for __typename ${input["__typename"]}. ${JSON.stringify(
                {
                  input,
                  path,
                  referencedTypes,
                },
                null,
                2
              )}`
            );
        }
      }

      if (fieldType == null) {
        return { create: { ...rest } };
      }

      switch (fieldType) {
        case "BelongsTo":
        case "HasOne":
        case "HasMany":
          return { create: { ...rest } };
        default:
          throw new Error(
            `Can't transform input, Unknown field type ${fieldType} for for __typename ${input["__typename"]}. ${JSON.stringify(
              {
                input,
                path,
                referencedTypes,
              },
              null,
              2
            )}`
          );
      }
    }

    return input;
  }

  const result = transform(data, updates);

  console.log("transformedData", JSON.stringify(result, null, 2));

  return result;
}

function getUpdates(data: any): Record<string, number[]> {
  const updateList: Record<string, number[]> = {};

  function go(input: any, path: string | undefined = undefined, depth = 0): any {
    if (Array.isArray(input)) {
      return input.map((item: any, index) => {
        const currentPath = path ? `${path}.${index}` : index.toString();
        return go(item, currentPath, depth + 1);
      });
    } else if (input !== undefined && input !== null && typeof input === "object") {
      const result: any = {};

      for (const key of Object.keys(input)) {
        const currentPath = path ? `${path}.${key}` : key;
        result[key] = go(input[key], currentPath, depth + 1);
      }

      if (depth > 1) {
        const newPath = path?.substring(0, path.length - 2);

        if ("id" in input) {
          if (!updateList[newPath!]) {
            updateList[newPath!] = [];
          }

          updateList[newPath!].push(input["id"]);
        }
      }

      return result;
    }

    return input;
  }

  go(data);
  return updateList;
}
