"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnqueue = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const useGadgetMutation_js_1 = require("./useGadgetMutation.js");
const utils_js_1 = require("./utils.js");
/**
 * React hook to enqueue a Gadget action in the background. `useEnqueue` must be passed an action function from an instance of your generated API client library, like `useEnqueue(api.user.create)` or `useEnqueue(api.someGlobalAction)`. `useEnqueue` doesn't actually submit the background action when invoked, but instead returns a function for enqueuing the action in response to an event.
 *
 * @param action a model action or global action in your application's client, like `api.user.create` or `api.someGlobalAction`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, handle}, enqueue] = useEnqueue(api.user.create));
 *
 *   const onClick = () => enqueue(
 *     {
 *       name: props.name,
 *       email: props.email,
 *     }, {
 *       id: `send-email-action-${props.email}`
 *     }
 *   );
 *
 *   return (
 *     <>
 *       {error && <>Failed to enqueue user create: {error.toString()}</>}
 *       {fetching && <>Enqueuing action...</>}
 *       {data && <>Enqueued action with background action id={handle.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
const useEnqueue = (action, baseBackgroundOptions) => {
    if (!(0, react_1.useContext)(GadgetProvider_js_1.GadgetUrqlClientContext))
        throw new Error(utils_js_1.noProviderErrorMessage);
    const plan = (0, react_1.useMemo)(() => (0, api_client_core_1.enqueueActionOperation)(action.operationName, action.variables, action.namespace, null, action.isBulk), [action]);
    const connection = (0, GadgetProvider_js_1.useConnection)();
    const [rawState, runMutation] = (0, useGadgetMutation_js_1.useGadgetMutation)(plan.query);
    const state = (0, react_1.useMemo)(() => processResult(connection, rawState, action), [rawState, action]);
    return [
        state,
        (0, react_1.useCallback)(async (input, options) => {
            const variables = action.isBulk
                ? (0, api_client_core_1.disambiguateBulkActionVariables)(action, input)
                : (0, api_client_core_1.disambiguateActionVariables)(action, input);
            const fullContext = { ...baseBackgroundOptions, ...options };
            variables.backgroundOptions = (0, api_client_core_1.graphqlizeBackgroundOptions)(fullContext);
            const rawState = await runMutation(variables, fullContext);
            return processResult(connection, { fetching: false, ...rawState }, action);
        }, [action, connection, runMutation]),
    ];
};
exports.useEnqueue = useEnqueue;
/** Processes urql's result object into the fancier Gadget result object */
const processResult = (connection, rawResult, action) => {
    const { data, ...result } = rawResult;
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let handle = null;
    let handles = null;
    const isBulk = action.isBulk;
    if (data) {
        const dataPath = ["background", ...(0, api_client_core_1.namespaceDataPath)([action.operationName], action.namespace)];
        const mutationData = (0, api_client_core_1.get)(data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = utils_js_1.ErrorWrapper.forErrorsResponse(errors, error?.response);
            }
            else {
                if (isBulk) {
                    handles = mutationData.backgroundActions.map((result) => new api_client_core_1.BackgroundActionHandle(connection, action, result.id));
                }
                else {
                    handle = new api_client_core_1.BackgroundActionHandle(connection, action, mutationData.backgroundAction.id);
                }
            }
        }
    }
    if (isBulk) {
        return { ...result, error, handles };
    }
    else {
        return { ...result, error, handle };
    }
};
//# sourceMappingURL=useEnqueue.js.map