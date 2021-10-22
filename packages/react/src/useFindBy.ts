import {
  findOneByFieldOperation,
  GadgetNonUniqueDataError,
  GadgetRecord,
  get,
  hydrateConnection,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { CombinedError, useQuery, UseQueryArgs, UseQueryResponse } from "urql";
import { FindOneFunction } from "./GadgetFunctions";
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
  F extends FindOneFunction<GivenOptions, any, any, any>,
  Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">
>(
  finder: F,
  value: string,
  options?: LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">
): UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>> => {
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

  const [result, refresh] = useQuery({
    query: plan.query,
    variables: plan.variables,
    context: options?.context,
    pause: options?.pause,
    requestPolicy: options?.requestPolicy,
  });

  let records = [];
  let data = result.data;
  if (data) {
    const connection = get(result.data, [finder.operationName]);
    if (connection) {
      records = hydrateConnection(result, connection);
      data = records[0];
    }
  }

  let error = result.error;
  if (!error && records.length > 1) {
    error = new CombinedError({
      graphQLErrors: [
        new GadgetNonUniqueDataError(
          `More than one record found for ${finder.modelApiIdentifier}.${finder.findByVariableName} = ${value}. Please confirm your unique validation is not reporting an error.`
        ),
      ],
    });
  }

  return [{ ...result, error, data }, refresh];
};
