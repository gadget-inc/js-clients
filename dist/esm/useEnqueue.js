import { createHookStub } from "./createHooks.js";
export let useEnqueue = createHookStub("useEnqueue", (adapter, coreHooks) => {
    useEnqueue = (action, baseBackgroundOptions) => {
        const coreImplementation = coreHooks.useCoreImplementation();
        const connection = coreHooks.useConnection();
        const plan = adapter.framework.useMemo(() => connection.enqueue.plan(action), [action]);
        const [rawState, runMutation] = coreHooks.useGadgetMutation(plan.query);
        const state = adapter.framework.useMemo(() => processResult(connection, rawState, action), [rawState, action]);
        return [
            state,
            adapter.framework.useCallback(async (input, options) => {
                const variables = action.isBulk
                    ? coreImplementation.disambiguateBulkActionVariables(action, input)
                    : coreImplementation.disambiguateActionVariables(action, input);
                const fullContext = { ...baseBackgroundOptions, ...options };
                variables.backgroundOptions = connection.enqueue.processOptions(fullContext);
                const rawState = await runMutation(variables, fullContext);
                return processResult(connection, { fetching: false, ...rawState }, action);
            }, [action, connection, runMutation]),
        ];
    };
});
// /** Processes urql's result object into the fancier Gadget result object */
const processResult = (connection, rawResult, action) => {
    const { data, ...result } = rawResult;
    if (action.isBulk) {
        const { handles, error } = connection.enqueue.processResult(action, rawResult);
        return { ...result, handles, error };
    }
    else {
        const { handle, error } = connection.enqueue.processResult(action, rawResult);
        return { ...result, handle, error };
    }
};
//# sourceMappingURL=useEnqueue.js.map