import {
  DefaultSelection,
  findOneByFieldOperation,
  FindOneFunction,
  GadgetNotFoundError,
  GadgetRecord,
  get,
  getNonUniqueDataError,
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
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given model manager. Useful for finding records by key fields which are used for looking up records by. Gadget autogenerates the `findByXYZ` methods on your model managers, and `useFindBy` can only be used with models that have these generated finder functions.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [result, refresh] = useFindBy(api.user.findByEmail, props.email, {
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
 */
export const useFindBy = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends FindOneFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  finder: F,
  value: string,
  options?: LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">
): ReadHookResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findOneByFieldOperation(
      finder.operationName,
      finder.findByVariableName,
      value,
      finder.defaultSelection,
      finder.modelApiIdentifier,
      memoizedOptions
    );
  }, [finder, value, memoizedOptions]);

  const [result, refresh] = useQuery(getQueryArgs(plan, options));

  const dataPath = [finder.operationName];
  let records = [];
  let data = result.data;
  if (data) {
    const connection = get(result.data, dataPath);
    if (connection) {
      records = hydrateConnection(result, connection);
      data = records[0];
    }
  }

  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  if (!error) {
    if (records.length > 1) {
      error = ErrorWrapper.forClientSideError(getNonUniqueDataError(finder.modelApiIdentifier, finder.findByVariableName, value));
    } else if (result.data && !records[0]) {
      error = ErrorWrapper.forClientSideError(
        new GadgetNotFoundError(`${finder.modelApiIdentifier} record with ${finder.findByVariableName}=${value} not found`)
      );
    }
  }

  return [{ ...result, error, data }, refresh];
};
