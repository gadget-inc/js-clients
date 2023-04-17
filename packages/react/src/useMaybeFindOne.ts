import {
  DefaultSelection,
  FindOneFunction,
  findOneOperation,
  GadgetRecord,
  get,
  getQueryArgs,
  hydrateRecord,
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
): ReadHookResult<null | GadgetRecord<
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

  const [rawResult, refresh] = useGadgetQuery(getQueryArgs(plan, options));

  const result = useMemo(() => {
    let data = rawResult.data ?? null;
    if (data) {
      const value = get(rawResult.data, [manager.findOne.operationName]);
      data = value && "id" in value ? hydrateRecord(rawResult, value) : null;
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
