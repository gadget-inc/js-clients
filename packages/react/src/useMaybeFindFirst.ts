import type { DefaultSelection, FindFirstFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { get, hydrateConnection, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";

/**
 * React hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
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
export const useMaybeFindFirst = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindFirstFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findFirst: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>
): ReadHookResult<null | GadgetRecord<
  Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
>> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    if (manager.findFirst.plan) {
      return manager.findFirst.plan(memoizedOptions);
    } else {
      throw new Error("Incompatible client passed to useMaybeFindFirst hook, please use an api client with version >= 0.17.0")
    }
  }, [manager, memoizedOptions]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, memoizedOptions));

  const result = useMemo(() => {
    const dataPath = namespaceDataPath([manager.findFirst.operationName], manager.findFirst.namespace);
    let data = rawResult.data ?? null;
    if (data) {
      const connection = get(rawResult.data, dataPath);
      if (connection) {
        data = hydrateConnection(rawResult, connection)[0] ?? null;
      } else {
        data = data[0] ?? null;
      }
    }

    const error = ErrorWrapper.forMaybeCombinedError(rawResult.error);

    return {
      ...rawResult,
      error,
      data,
    };
  }, [rawResult, manager]);

  return [result, refresh];
};
