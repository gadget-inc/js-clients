"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
/**
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
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.globalActionOperation)(action.operationName, action.variables, action.namespace);
    }, [action]);
    const [result, runMutation] = (0, urql_1.useMutation)(plan.query);
    let error = result.error;
    let data = result.data;
    if (data) {
        data = (0, api_client_core_1.hydrateRecord)(result, (0, api_client_core_1.get)(result.data, [action.operationName]));
        if (data) {
            const errors = data.getField("errors");
            if (errors && errors[0]) {
                error = new urql_1.CombinedError({
                    graphQLErrors: [(0, api_client_core_1.gadgetErrorFor)(errors[0])],
                });
            }
        }
    }
    return [
        {
            ...result,
            error,
            data,
        },
        runMutation,
    ];
};
exports.useGlobalAction = useGlobalAction;
//# sourceMappingURL=useGlobalAction.js.map