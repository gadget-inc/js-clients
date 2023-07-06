import type { DefaultSelection, GadgetRecord, GetFunction, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { findOneOperation, get, hydrateRecord } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery";
import { useStructuralMemo } from "./useStructuralMemo";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils";
import { ErrorWrapper, useQueryArgs } from "./utils";

/**
 * React hook that fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it, and instead returns the one current record for the current context.
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
export const useGet = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends GetFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions
>(
  manager: { get: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions>
): ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findOneOperation(
      manager.get.operationName,
      undefined,
      manager.get.defaultSelection,
      manager.get.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, memoizedOptions]);

  const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));

  const result = useMemo(() => {
    let data = null;
    const rawRecord = rawResult.data && get(rawResult.data, [manager.get.operationName]);
    if (rawRecord) {
      data = hydrateRecord(rawResult, rawRecord);
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
