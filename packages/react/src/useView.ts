import type { ViewFunction } from "@gadgetinc/api-client-core";
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
 * @param options options for passing variables and controlling client side execution
 *
 * @example
 *
 * ```
 * export function Leaderboard() {
 *   const [result, refresh] = useView(api.leaderboard, {
 *     variables: {
 *       first: 10,
 *     },
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
export const useView = <VariablesT, ResultT, F extends ViewFunction<VariablesT, ResultT>>(
  view: F,
  options?: VariablesT & Omit<ReadOperationOptions, "live">
): ReadHookResult<ResultT> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => view.plan((memoizedOptions ?? {}) as unknown as VariablesT), [view, memoizedOptions]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));

  const result = useMemo(() => {
    const dataPath = namespaceDataPath([view.operationName], view.namespace);
    const data = get(rawResult.data, dataPath);
    const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

    return { ...rawResult, data, error };
  }, [view, options?.pause, rawResult]);

  return [result, refresh];
};
