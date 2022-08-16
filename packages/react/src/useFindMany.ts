import {
  DefaultSelection,
  FindManyFunction,
  findManyOperation,
  GadgetRecord,
  get,
  getQueryArgs,
  hydrateConnection,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useQuery, UseQueryArgs } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";
import { ErrorWrapper, ReadHookResult } from "./utils";

/**
 * React hook to fetch many Gadget records using the `findMany` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindMany(Client.user, {
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
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">
): ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findManyOperation(
      manager.findMany.operationName,
      manager.findMany.defaultSelection,
      manager.findMany.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, memoizedOptions]);

  const [result, refresh] = useQuery(getQueryArgs(plan, options));

  const dataPath = [manager.findMany.operationName];
  let data = result.data;
  if (data) {
    const connection = get(result.data, dataPath);
    if (connection) {
      data = hydrateConnection(result, connection);
    }
  }

  const error = ErrorWrapper.errorIfDataAbsent(result, dataPath);

  return [{ ...result, data, error }, refresh];
};
