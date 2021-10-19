import { capitalize, findManyOperation, GadgetRecord, get, hydrateConnection, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { OperationContext, useQuery, UseQueryResponse } from "urql";
import { FindManyFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch many Gadget records using the `findMany` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 */
export const useFindMany = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  F extends FindManyFunction<GivenOptions, any, any, any>,
  Options extends F["optionsType"]
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"]>
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

  const context = useMemo<Partial<OperationContext>>(
    () => ({
      additionalTypenames: [capitalize(manager.findMany.modelApiIdentifier)],
    }),
    [manager]
  );

  const [result, refresh] = useQuery({
    query: plan.query,
    variables: plan.variables,
    context,
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
