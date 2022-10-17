import {
  DefaultSelection,
  findOneOperation,
  GadgetRecord,
  get,
  GetFunction,
  hydrateRecord,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { OptionsType } from "./OptionsType";
import { useGadgetQuery } from "./useGadgetQuery";
import { useStructuralMemo } from "./useStructuralMemo";
import { ErrorWrapper, ReadHookResult } from "./utils";

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
  Options extends F["optionsType"]
>(
  manager: { get: F },
  options?: LimitToKnownKeys<Options, F["optionsType"]>
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

  const [result, refresh] = useGadgetQuery({ query: plan.query, variables: plan.variables });

  let data = null;
  const rawRecord = result.data && get(result.data, [manager.get.operationName]);
  if (rawRecord) {
    data = hydrateRecord(result, rawRecord);
  }

  return [
    {
      ...result,
      error: ErrorWrapper.forMaybeCombinedError(result.error),
      data,
    },
    refresh,
  ];
};
