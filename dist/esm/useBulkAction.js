import { actionOperation, capitalizeIdentifier, disambiguateBulkActionVariables, get, hydrateRecordArray, } from "@gadgetinc/api-client-core";
import { useCallback, useMemo } from "react";
import { useGadgetMutation } from "./useGadgetMutation.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper } from "./utils.js";
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
export const useBulkAction = (action, options) => {
    const memoizedOptions = useStructuralMemo(options);
    const plan = useMemo(() => {
        return actionOperation(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace, action.isBulk, action.hasReturnType);
    }, [action, memoizedOptions]);
    const [result, runMutation] = useGadgetMutation(plan.query);
    const transformedResult = useMemo(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        useCallback(async (inputs, context) => {
            const variables = disambiguateBulkActionVariables(action, inputs);
            const result = await runMutation(variables, {
                ...context,
                // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
                additionalTypenames: [...(context?.additionalTypenames ?? []), capitalizeIdentifier(action.modelApiIdentifier)],
            });
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
const processResult = (result, action) => {
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
                    error = ErrorWrapper.forErrorsResponse(errors, error?.response);
                }
                else {
                    data = action.hasReturnType ? mutationData.results : hydrateRecordArray(result, mutationData[action.modelSelectionField]);
                }
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useBulkAction.js.map