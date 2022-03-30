import {
  DefaultSelection,
  FindOneFunction,
  findOneOperation,
  GadgetRecord,
  get,
  hydrateRecord,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useQuery, UseQueryArgs, UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch a Gadget record using the `maybeFindOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useMaybeFindOne(Client.user, props.id, {
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
export const useMaybeFindOne = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  manager: { findOne: F },
  id: string,
  options?: LimitToKnownKeys<Options, F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">>
): UseQueryResponse<null | GadgetRecord<
  Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
>> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findOneOperation(
      manager.findOne.operationName,
      id,
      manager.findOne.defaultSelection,
      manager.findOne.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, id, memoizedOptions]);

  const [result, refresh] = useQuery({
    query: plan.query,
    variables: plan.variables,
    context: options?.context,
    pause: options?.pause,
    requestPolicy: options?.requestPolicy,
  });

  let data = result.data ?? null;
  if (data) {
    const value = get(result.data, [manager.findOne.operationName]);
    data = value ? hydrateRecord(result, value) : null;
  }

  return [
    {
      ...result,
      data,
    },
    refresh,
  ];
};
