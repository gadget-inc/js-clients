import {
  actionOperation,
  BulkActionFunction,
  capitalize,
  GadgetRecord,
  get,
  hydrateRecordArray,
  LimitToKnownKeys,
  Select,
} from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useMutation, UseMutationResponse } from "urql";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to run a Gadget model bulk action.
 *
 * @param action any bulk action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function BulkFinish(props: { ids: string[]; }) {
 *   const [result, bulkFinish] = useBulkAction(Client.todo.bulkFinish, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => ;
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Finished TODOs with ids={props.ids}</>}
 *       <button onClick={() => bulkFinish(ids))}>Bulk finish</button>
 *     </>
 *   );
 * }
 */
export const useBulkAction = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  F extends BulkActionFunction<GivenOptions, any, any, SchemaT, any>,
  Options extends F["optionsType"]
>(
  action: F,
  options?: LimitToKnownKeys<Options, F["optionsType"]>
): UseMutationResponse<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>[],
  Exclude<F["variablesType"], null | undefined>
> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return actionOperation(
      action.operationName,
      action.defaultSelection,
      action.modelApiIdentifier,
      action.modelSelectionField,
      action.variables,
      memoizedOptions,
      action.namespace
    );
  }, [action, memoizedOptions]);

  const [result, runMutation] = useMutation<
    GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>[],
    F["variablesType"]
  >(plan.query);

  let data = result.data;
  if (data) {
    // TODO deal with deletion better than checking selectionType
    if (action.defaultSelection != null) {
      const dataPath = [action.operationName, action.modelSelectionField];
      if (action.namespace) {
        dataPath.unshift(action.namespace);
      }
      data = hydrateRecordArray(result, get(result.data, dataPath));
    }
  }

  return [
    {
      ...result,
      data,
    },
    (variables, context) => {
      // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
      // selected (and sometimes we can't even select it, like delete actions!)
      return runMutation(variables, {
        ...context,
        additionalTypenames: [...(context?.additionalTypenames ?? []), capitalize(action.modelApiIdentifier)],
      });
    },
  ];
};
