"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBulkAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetMutation_js_1 = require("./useGadgetMutation.js");
const useStructuralMemo_js_1 = require("./useStructuralMemo.js");
const utils_js_1 = require("./utils.js");
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
    const memoizedOptions = (0, useStructuralMemo_js_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace, action.isBulk, action.hasReturnType);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, useGadgetMutation_js_1.useGadgetMutation)(plan.query);
    const transformedResult = (0, react_1.useMemo)(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        (0, react_1.useCallback)(async (inputs, context) => {
            let variables;
            // accept the old style of {ids: ["1", "2", "3"]} as well as the new style of [{id: 1, foo: "bar"}, {id: 2, foo: "baz"}]
            if (inputs && "ids" in inputs) {
                variables = inputs;
            }
            else {
                variables = {
                    inputs: (inputs ?? []).map((input) => (0, utils_js_1.disambiguateActionVariables)(action, input)),
                };
            }
            const result = await runMutation(variables, {
                ...context,
                // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalizeIdentifier)(action.modelApiIdentifier)],
            });
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
exports.useBulkAction = useBulkAction;
const processResult = (result, action) => {
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
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
                    error = utils_js_1.ErrorWrapper.forErrorsResponse(errors, error?.response);
                }
                else {
                    data = action.hasReturnType ? mutationData.results : (0, api_client_core_1.hydrateRecordArray)(result, mutationData[action.modelSelectionField]);
                }
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useBulkAction.js.map