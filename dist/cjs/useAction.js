"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const useGadgetMutation_js_1 = require("./useGadgetMutation.js");
const useStructuralMemo_js_1 = require("./useStructuralMemo.js");
const utils_js_1 = require("./utils.js");
/**
 * React hook to run a Gadget model action. `useAction` must be passed an action function from an instance of your generated API client library, like `api.user.create` or `api.blogPost.publish`. `useAction` doesn't actually run the action when invoked, but instead returns an action function as the second result for running the action in response to an event.
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, data}, createUser] = useAction(api.user.create, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     name: props.name,
 *     email: props.email,
 *   });
 *
 *   return (
 *     <>
 *       {error && <>Failed to create user: {error.toString()}</>}
 *       {fetching && <>Creating user...</>}
 *       {data && <>Created user with id={data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
const useAction = (action, options) => {
    if (!(0, react_1.useContext)(GadgetProvider_js_1.GadgetUrqlClientContext))
        throw new Error(utils_js_1.noProviderErrorMessage);
    const memoizedOptions = (0, useStructuralMemo_js_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace, action.isBulk, action.hasReturnType);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, useGadgetMutation_js_1.useGadgetMutation)(plan.query);
    const transformedResult = (0, react_1.useMemo)(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        (0, react_1.useCallback)(async (input, context) => {
            const variables = (0, api_client_core_1.disambiguateActionVariables)(action, input);
            const result = await runMutation(variables, {
                ...context,
                // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalizeIdentifier)(action.modelApiIdentifier)],
            });
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
exports.useAction = useAction;
/** Processes urql's result object into the fancier Gadget result object */
const processResult = (result, action) => {
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let data = null;
    if (result.data) {
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
                data = action.hasReturnType ? mutationData.result : (0, api_client_core_1.hydrateRecord)(result, mutationData[action.modelSelectionField]);
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useAction.js.map