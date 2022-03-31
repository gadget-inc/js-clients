import {
  DefaultSelection,
  findOneByFieldOperation,
  FindOneFunction,
  GadgetRecord,
  get,
  getNonNullableError,
  getNonUniqueDataError,
  getQueryArgs,
  hydrateConnection,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { CombinedError, useQuery, UseQueryArgs, UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given manager.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [result, refresh] = useFindBy(Client.user.findByEmail, props.email, {
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
): UseQueryResponse<
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

  let error = result.error;
  if (!error) {
    const nonNullableError = getNonNullableError(result, dataPath);

    if (records.length > 1) {
      error = new CombinedError({
        graphQLErrors: [getNonUniqueDataError(finder.modelApiIdentifier, finder.findByVariableName, value)],
      });
    } else if (nonNullableError) {
      error = new CombinedError({
        graphQLErrors: [nonNullableError],
      });
    }
  }

  return [{ ...result, error, data }, refresh];
};
