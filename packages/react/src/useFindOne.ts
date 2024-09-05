import type { DefaultSelection, FindOneFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { findOneOperation, get, hydrateRecord, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";

/**
 * React hook to fetch one Gadget record by `id` from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the record if it was found, and `null` otherwise.
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
export const useFindOne = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { findOne: F },
  id: string,
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>
): ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    if (manager.findOne.plan) {
      return manager.findOne.plan(id, memoizedOptions);
    } else {
      throw new Error("Incompatible client passed to useFindOne hook, please use an api client with version >= 0.17.0")
    }
  }, [manager, id, memoizedOptions]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));

  const result = useMemo(() => {
    const dataPath = namespaceDataPath([manager.findOne.operationName], manager.findOne.namespace);

    let data = rawResult.data && get(rawResult.data, dataPath);
    if (data) {
      data = hydrateRecord(rawResult, data);
    }
    const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

    return { ...rawResult, data, error };
  }, [manager.findOne.operationName, rawResult, options?.pause]);

  return [result, refresh];
};
