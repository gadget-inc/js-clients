"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseBulkAction = void 0;
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseBulkAction = (adapter, coreHooks) => {
    const useBulkAction = (action, options) => {
        adapter.framework.useEffect(() => {
            if (action.type === "stubbedAction") {
                const stubbedAction = action;
                if (!("reason" in stubbedAction) || !("dataPath" in stubbedAction) || !("actionApiIdentifier" in stubbedAction)) {
                    // Don't dispatch an event if the generated client has not yet been updated with the updated parameters
                    return;
                }
                const event = new CustomEvent("gadget:devharness:stubbedActionError", {
                    detail: {
                        reason: stubbedAction.reason,
                        action: {
                            functionName: stubbedAction.functionName,
                            actionApiIdentifier: stubbedAction.actionApiIdentifier,
                            modelApiIdentifier: stubbedAction.modelApiIdentifier,
                            dataPath: stubbedAction.dataPath,
                        },
                    },
                });
                globalThis.dispatchEvent(event);
            }
        }, []);
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace, action.isBulk, action.hasReturnType);
        }, [action, memoizedOptions]);
        const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);
        const transformedResult = adapter.framework.useMemo(() => processResult(result, action), [result, action]);
        return [
            transformedResult,
            adapter.framework.useCallback(async (inputs, context) => {
                var _a;
                const variables = (0, support_js_1.disambiguateBulkActionVariables)(action, inputs);
                const result = await runMutation(variables, {
                    ...context,
                    // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
                    additionalTypenames: [...((_a = context === null || context === void 0 ? void 0 : context.additionalTypenames) !== null && _a !== void 0 ? _a : []), (0, support_js_1.capitalizeIdentifier)(action.modelApiIdentifier)],
                });
                return processResult({ fetching: false, ...result }, action);
            }, [action, runMutation]),
        ];
    };
    return {
        /**
         * Hook to run a Gadget model bulk action.
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
        useBulkAction,
    };
};
exports.createUseBulkAction = createUseBulkAction;
const processResult = (result, action) => {
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let data = undefined;
    if (result.data && !error) {
        const dataPath = (0, support_js_1.namespaceDataPath)([action.operationName], action.namespace);
        const mutationData = (0, support_js_1.get)(result.data, dataPath);
        if (mutationData) {
            const isDeleteAction = action.isDeleter;
            if (!isDeleteAction) {
                const errors = mutationData["errors"];
                if (errors && errors[0]) {
                    error = utils_js_1.ErrorWrapper.forErrorsResponse(errors, error === null || error === void 0 ? void 0 : error.response);
                }
                else {
                    data = action.hasReturnType ? mutationData.results : (0, support_js_1.hydrateRecordArray)(result, mutationData[action.modelSelectionField]);
                }
            }
            else {
                // Delete action
                data = mutationData;
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useBulkAction.js.map