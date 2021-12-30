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
import { useQuery, UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch a Gadget record using the `get` method of a given "singleton" manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function CurrentSession(props: { id: string }) {
 *   const [result, refresh] = useGet(Client.currentSession, {
 *     select: {
 *       userId: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No current session found</>;
 *
 *   return <div>Current session user id: {result.data.userId}</div>;
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
): UseQueryResponse<
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

  const [result, refresh] = useQuery({ query: plan.query, variables: plan.variables });

  let data = result.data;
  if (data) {
    data = hydrateRecord(result, get(result.data, [manager.get.operationName]));
  }

  return [
    {
      ...result,
      data,
    },
    refresh,
  ];
};
