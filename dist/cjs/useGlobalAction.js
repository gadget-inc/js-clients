"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetMutation_js_1 = require("./useGadgetMutation.js");
const utils_js_1 = require("./utils.js");
/**
 * ARE YOU MAKING IT TO CODE MIRROR DUDE?
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function FlipAllWidgets(props: { name: string; email: string }) {
 *   const [result, flipAllWidgets] = useGlobalAction(Client.flipAllWidgets);
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to flip all widgets: {result.error.toString()}</>}
 *       {result.fetching && <>Flipping all widgets...</>}
 *       {result.data && <>Flipped all widgets</>}
 *       <button onClick={() => flipAllWidgets()}>Flip all widgets</button>
 *     </>
 *   );
 * }
 */
const useGlobalAction = (action) => {
    (0, react_1.useEffect)(() => {
        if (action.type === "stubbedAction") {
            const stubbedAction = action;
            if (!("reason" in stubbedAction) || !("dataPath" in stubbedAction)) {
                // Don't dispatch an event if the generated client has not yet been updated with the updated parameters
                return;
            }
            const event = new CustomEvent("gadget:devharness:stubbedActionError", {
                detail: {
                    reason: stubbedAction.reason,
                    action: {
                        functionName: stubbedAction.functionName,
                        actionApiIdentifier: stubbedAction.actionApiIdentifier,
                        dataPath: stubbedAction.dataPath,
                    },
                },
            });
            globalThis.dispatchEvent(event);
        }
    }, []);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.globalActionOperation)(action.operationName, action.variables, action.namespace);
    }, [action]);
    const [result, runMutation] = (0, useGadgetMutation_js_1.useGadgetMutation)(plan.query);
    const transformedResult = (0, react_1.useMemo)(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        (0, react_1.useCallback)(async (variables, context) => {
            const result = await runMutation(variables ?? {}, context);
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
exports.useGlobalAction = useGlobalAction;
const processResult = (result, action) => {
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let data = undefined;
    if (result.data) {
        const dataPath = (0, api_client_core_1.namespaceDataPath)([action.operationName], action.namespace);
        data = (0, api_client_core_1.get)(result.data, dataPath);
        if (data) {
            const errors = data.errors;
            data = data.result;
            if (errors && errors[0]) {
                error = utils_js_1.ErrorWrapper.forErrorsResponse(errors);
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useGlobalAction.js.map