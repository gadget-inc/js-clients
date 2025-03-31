import type { ViewFunction, ViewFunctionWithoutVariables, ViewFunctionWithVariables, ViewResult } from "@gadgetinc/api-client-core";
import { get, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import type { ReadHookResult, ReadOperationOptions } from "./utils.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";

/**
 * React hook to fetch the result of a computed view from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the shape of the computed view's result.
 *
 * @param manager Gadget view function to run
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
export function useView<VariablesT, F extends ViewFunction<VariablesT, any>>(
  view: F,
  variablesOrOptions?: VariablesT | Omit<ReadOperationOptions, "live">,
  maybeOptions?: Omit<ReadOperationOptions, "live">
): ReadHookResult<ViewResult<F>> {
  let variables: VariablesT | undefined;
  let options: Omit<ReadOperationOptions, "live"> | undefined;

  if ("variables" in view) {
    variables = variablesOrOptions as VariablesT;
    options = maybeOptions;
  } else if (variablesOrOptions) {
    options = variablesOrOptions as Omit<ReadOperationOptions, "live">;
  }

  const memoizedVariables = useStructuralMemo(variables);
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => view.plan((memoizedVariables ?? {}) as unknown as VariablesT), [view, memoizedVariables]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, memoizedOptions));

  const result = useMemo(() => {
    const dataPath = namespaceDataPath([view.operationName], view.namespace);
    const data = get(rawResult.data, dataPath);
    const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

    return { ...rawResult, data, error };
  }, [view, options?.pause, rawResult]);

  return [result, refresh];
}
