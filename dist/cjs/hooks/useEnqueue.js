"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseEnqueue = void 0;
const BackgroundActionHandle_js_1 = require("../BackgroundActionHandle.js");
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseEnqueue = (adapter, coreHooks) => {
    const useEnqueue = (action, baseBackgroundOptions) => {
        const plan = adapter.framework.useMemo(() => (0, operationBuilders_js_1.enqueueActionOperation)(action.operationName, action.variables, action.namespace, null, action.isBulk), [action]);
        const connection = coreHooks.useConnection();
        const [rawState, runMutation] = coreHooks.useGadgetMutation(plan.query);
        const state = adapter.framework.useMemo(() => processResult(connection, rawState, action), [rawState, action]);
        return [
            state,
            adapter.framework.useCallback(async (input, options) => {
                const variables = action.isBulk ? (0, support_js_1.disambiguateBulkActionVariables)(action, input) : (0, support_js_1.disambiguateActionVariables)(action, input);
                const fullContext = { ...baseBackgroundOptions, ...options };
                variables.backgroundOptions = (0, operationBuilders_js_1.graphqlizeBackgroundOptions)(fullContext);
                const rawState = await runMutation(variables, fullContext);
                return processResult(connection, { fetching: false, ...rawState }, action);
            }, [action, connection, runMutation]),
        ];
    };
    return {
        /**
         * Hook to enqueue a Gadget action in the background. `useEnqueue` must be passed an action function from an instance of your generated API client library, like `useEnqueue(api.user.create)` or `useEnqueue(api.someGlobalAction)`. `useEnqueue` doesn't actually submit the background action when invoked, but instead returns a function for enqueuing the action in response to an event.
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
        useEnqueue,
    };
};
exports.createUseEnqueue = createUseEnqueue;
/** Processes urql's result object into the fancier Gadget result object */
const processResult = (connection, rawResult, action) => {
    const { data, ...result } = rawResult;
    let error = utils_js_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let handle = null;
    let handles = null;
    const isBulk = action.isBulk;
    if (data) {
        const dataPath = ["background", ...(0, support_js_1.namespaceDataPath)([action.operationName], action.namespace)];
        const mutationData = (0, support_js_1.get)(data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = utils_js_1.ErrorWrapper.forErrorsResponse(errors, error === null || error === void 0 ? void 0 : error.response);
            }
            else {
                if (isBulk) {
                    handles = mutationData.backgroundActions.map((result) => new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, result.id));
                }
                else {
                    handle = new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, mutationData.backgroundAction.id);
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