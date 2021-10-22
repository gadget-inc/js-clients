import {
  FindManyFunction,
  findManyOperation,
  GadgetRecord,
  get,
  hydrateConnection,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useQuery, UseQueryArgs, UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch many Gadget records using the `findMany` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
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
  F extends FindManyFunction<GivenOptions, any, any, any>,
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">
): UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>[]> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findManyOperation(
      manager.findMany.operationName,
      manager.findMany.defaultSelection,
      manager.findMany.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, memoizedOptions]);

  const [result, refresh] = useQuery({
    query: plan.query,
    variables: plan.variables,
    context: options?.context,
    pause: options?.pause,
    requestPolicy: options?.requestPolicy,
  });

  let data = result.data;
  if (data) {
    const connection = get(result.data, [manager.findMany.operationName]);
    if (connection) {
      data = hydrateConnection(result, connection);
    }
  }

  return [{ ...result, data }, refresh];
};
