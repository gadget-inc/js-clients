"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBulkAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetMutation_1 = require("./useGadgetMutation");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
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
const useBulkAction = (action, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, useGadgetMutation_1.useGadgetMutation)(plan.query);
    const transformedResult = (0, react_1.useMemo)(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        (0, react_1.useCallback)(async (variables, context) => {
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
            // selected (and sometimes we can't even select it, like delete actions!)
            const result = await runMutation(variables, {
                ...context,
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalizeIdentifier)(action.modelApiIdentifier)],
            });
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
exports.useBulkAction = useBulkAction;
const processResult = (result, action) => {
    let error = utils_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let data = undefined;
    if (result.data && !error) {
        // TODO deal with deletion better than checking selectionType
        if (action.defaultSelection != null) {
            const dataPath = [action.operationName];
            if (action.namespace) {
                dataPath.unshift(action.namespace);
            }
            const mutationData = (0, api_client_core_1.get)(result.data, dataPath);
            if (mutationData) {
                const errors = mutationData["errors"];
                if (errors && errors[0]) {
                    error = utils_1.ErrorWrapper.forErrorsResponse(errors, error?.response);
                }
                else {
                    data = (0, api_client_core_1.hydrateRecordArray)(result, mutationData[action.modelSelectionField]);
                }
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useBulkAction.js.map