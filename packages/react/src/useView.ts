import type {
  GQLBuilderResult,
  VariablesOptions,
  ViewFunction,
  ViewFunctionWithoutVariables,
  ViewFunctionWithVariables,
  ViewResult,
} from "@gadgetinc/api-client-core";
import { get, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import type { ReadHookResult, ReadOperationOptions } from "./utils.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";

/**
 * React hook to fetch the result of a computed view from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
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
export function useView<F extends ViewFunctionWithoutVariables<any>>(
  view: F,
  options?: Omit<ReadOperationOptions, "live">
): ReadHookResult<ViewResult<F>>;
/**
 * React hook to fetch the result of a computed view with variables from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
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
export function useView<F extends ViewFunctionWithVariables<any, any>>(
  view: F,
  variables: F["variablesType"],
  options?: Omit<ReadOperationOptions, "live">
): ReadHookResult<ViewResult<F>>;
/**
 * React hook to fetch the result of an inline computed view with variables from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
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
export function useView(
  gellyQuery: string,
  variables?: Record<string, unknown>,
  options?: Omit<ReadOperationOptions, "live">
): ReadHookResult<ViewResult<ViewFunction<unknown, unknown>>>;
export function useView<VariablesT, F extends ViewFunction<VariablesT, any>>(
  view: F | string,
  variablesOrOptions?: VariablesT | Omit<ReadOperationOptions, "live">,
  maybeOptions?: Omit<ReadOperationOptions, "live">
): ReadHookResult<ViewResult<F>> {
  let variables: VariablesT | undefined;
  let options: Omit<ReadOperationOptions, "live"> | undefined;

  if (typeof view == "string" || "variables" in view) {
    variables = variablesOrOptions as VariablesT;
    options = maybeOptions;
  } else if (variablesOrOptions) {
    options = variablesOrOptions as Omit<ReadOperationOptions, "live">;
  }

  const memoizedVariables = useStructuralMemo(variables);
  const memoizedOptions = useStructuralMemo({
    ...options,
    context: {
      ...options?.context,
      // if the view exports the typenames it references, add them to the context so urql will refresh the view when mutations are made against these typenames
      additionalTypenames: [
        ...(options?.context?.additionalTypenames ?? []),
        ...(typeof view == "string" ? [] : view.referencedTypenames ?? []),
      ],
    },
  });

  const [plan, dataPath] = useMemo((): [plan: GQLBuilderResult, dataPath: string[]] => {
    if (typeof view == "string") {
      return [{ query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } }, ["gellyView"]];
    } else {
      const variablesOptions: VariablesOptions = {};
      if ("variables" in view && memoizedVariables) {
        for (const [name, variable] of Object.entries(view.variables)) {
          const value = memoizedVariables[name as keyof typeof memoizedVariables] as unknown;
          if (typeof value != "undefined" && value !== null) {
            variablesOptions[name] = {
              value,
              ...variable,
            };
          }
        }
      }

      return [view.plan(variablesOptions), namespaceDataPath([view.gqlFieldName], view.namespace)];
    }
  }, [view, memoizedVariables]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, memoizedOptions));

  const result = useMemo(() => {
    const data = get(rawResult.data, dataPath);
    const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

    return { ...rawResult, data, error };
  }, [dataPath, options?.pause, rawResult]);

  return [result, refresh];
}

const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
