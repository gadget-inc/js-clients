import {
  DefaultSelection,
  FindFirstFunction,
  findManyOperation,
  GadgetRecord,
  get,
  getQueryArgs,
  hydrateConnection,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { UseQueryArgs } from "urql";
import { OptionsType } from "./OptionsType";
import { useGadgetQuery } from "./useGadgetQuery";
import { useStructuralMemo } from "./useStructuralMemo";
import { ErrorWrapper, ReadHookResult } from "./utils";

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
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  manager: { findFirst: F },
  options?: LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">
): ReadHookResult<null | GadgetRecord<
  Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
>> => {
  const firstOptions = { ...options, first: 1 };
  const memoizedOptions = useStructuralMemo(firstOptions);
  const plan = useMemo(() => {
    return findManyOperation(
      manager.findFirst.operationName,
      manager.findFirst.defaultSelection,
      manager.findFirst.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, memoizedOptions]);

  const [result, refresh] = useGadgetQuery(getQueryArgs(plan, firstOptions));

  const dataPath = [manager.findFirst.operationName];
  let data = result.data ?? null;
  if (data) {
    const connection = get(result.data, dataPath);
    if (connection) {
      data = hydrateConnection(result, connection)[0] ?? null;
    } else {
      data = data[0] ?? null;
    }
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
