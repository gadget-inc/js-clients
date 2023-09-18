import type { BulkActionFunction, DefaultSelection, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { actionOperation, capitalizeIdentifier, get, hydrateRecordArray } from "@gadgetinc/api-client-core";
import { useCallback, useMemo } from "react";
import type { OperationContext, UseMutationState } from "urql";
import { useGadgetMutation } from "./useGadgetMutation.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ActionHookResult, ErrorWrapper, OptionsType, disambiguateActionVariables } from "./utils.js";

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
): ActionHookResult<
  F["hasReturnType"] extends true
    ? any[]
    : GadgetRecord<
        Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
      >[],
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
      action.namespace,
      action.isBulk,
      action.hasReturnType
    );
  }, [action, memoizedOptions]);

  const [result, runMutation] = useGadgetMutation<
    GadgetRecord<
      Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>
    >[],
    F["variablesType"]
  >(plan.query);

  const transformedResult = useMemo(() => processResult(result, action), [result, action]);

  return [
    transformedResult,
    useCallback(
      async (inputs: F["variablesType"], context?: Partial<OperationContext>) => {
        let variables;
        // accept the old style of {ids: ["1", "2", "3"]} as well as the new style of [{id: 1, foo: "bar"}, {id: 2, foo: "baz"}]
        if (inputs && "ids" in inputs) {
          variables = inputs;
        } else {
          variables = {
            inputs: ((inputs as any[]) ?? []).map((input: any) => disambiguateActionVariables(action, input)),
          };
        }

        const result = await runMutation(variables, {
          ...context,
          // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
          additionalTypenames: [...(context?.additionalTypenames ?? []), capitalizeIdentifier(action.modelApiIdentifier)],
        });
        return processResult({ fetching: false, ...result }, action);
      },
      [action, runMutation]
    ),
  ];
};

const processResult = (result: UseMutationState<any, any>, action: BulkActionFunction<any, any, any, any, any>) => {
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let data = undefined;
  if (result.data && !error) {
    // TODO deal with deletion better than checking selectionType
    if (action.defaultSelection != null) {
      const dataPath = [action.operationName];
      if (action.namespace) {
        dataPath.unshift(action.namespace);
      }
      const mutationData = get(result.data, dataPath);
      if (mutationData) {
        const errors = mutationData["errors"];
        if (errors && errors[0]) {
          error = ErrorWrapper.forErrorsResponse(errors, (error as any)?.response);
        } else {
          data = action.hasReturnType ? mutationData.results : hydrateRecordArray(result, mutationData[action.modelSelectionField]);
        }
      }
    }
  }
  return { ...result, error, data };
};
