import type { AnyModelManager, DefaultSelection, FindManyFunction, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { GadgetRecordList, findManyOperation, get, hydrateConnection, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";

/**
 * React hook to fetch a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
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
export const useFindMany = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>
): ReadHookResult<
  GadgetRecordList<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findManyOperation(
      manager.findMany.operationName,
      manager.findMany.defaultSelection,
      manager.findMany.modelApiIdentifier,
      memoizedOptions,
      manager.findMany.namespace
    );
  }, [manager, memoizedOptions]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));

  const result = useMemo(() => {
    const dataPath = namespaceDataPath([manager.findMany.operationName], manager.findMany.namespace);
    let data = rawResult.data;
    if (data) {
      const connection = get(rawResult.data, dataPath);
      if (connection) {
        const records = hydrateConnection(rawResult, connection);
        data = GadgetRecordList.boot(manager as unknown as AnyModelManager, records, connection);
      }
    }

    const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

    return { ...rawResult, data, error };
  }, [manager, options?.pause, rawResult]);

  return [result, refresh];
};
