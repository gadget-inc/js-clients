"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given manager.
 *
 * @param action `findByXYZ` function from a Gadget manager that will be used
 * @param params input params to the Gadget action
 * @param options options for selecting the fields in the result
 */
const useAction = (action, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.variables, memoizedOptions);
    }, [action, memoizedOptions]);
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
        (variables, context) => {
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
            // selected (and sometimes we can't even select it, like delete actions!)
            return runMutation(variables, {
                ...context,
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalize)(action.modelApiIdentifier)],
            });
        },
    ];
};
exports.useAction = useAction;
//# sourceMappingURL=useAction.js.map