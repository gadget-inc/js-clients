import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
export let useView = createHookStub("useView", (adapter, coreHooks) => {
    useView = (view, variablesOrOptions, maybeOptions) => {
        let variables;
        let options;
        const { errorIfDataAbsent } = coreHooks.useCoreImplementation();
        if (typeof view == "string" || "variables" in view) {
            variables = variablesOrOptions;
            options = maybeOptions;
        }
        else if (variablesOrOptions) {
            options = variablesOrOptions;
        }
        const memoizedVariables = coreHooks.useStructuralMemo(variables);
        const memoizedOptions = coreHooks.useStructuralMemo({
            ...options,
            context: {
                ...options?.context,
                // if the view exports the typenames it references, add them to the context so urql will refresh the view when mutations are made against these typenames
                additionalTypenames: [
                    ...(options?.context?.additionalTypenames ?? []),
                    ...(typeof view == "string" ? [] : view.referencedTypenames ?? []),
                ],
            },
        });
        const plan = adapter.framework.useMemo(() => {
            if (typeof view == "string") {
                return { query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } };
            }
            else {
                const variablesOptions = {};
                if ("variables" in view && memoizedVariables) {
                    for (const [name, variable] of Object.entries(view.variables)) {
                        const value = memoizedVariables[name];
                        if (typeof value != "undefined" && value !== null) {
                            variablesOptions[name] = {
                                value,
                                ...variable,
                            };
                        }
                    }
                }
                return view.plan(variablesOptions);
            }
        }, [view, memoizedVariables]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, memoizedOptions));
        const result = adapter.framework.useMemo(() => {
            if (typeof view == "string") {
                const data = rawResult.data?.["gellyView"];
                const error = errorIfDataAbsent(rawResult, ["gellyView"], options?.pause);
                return { ...rawResult, data, error };
            }
            else {
                return { ...rawResult, ...view.processResult(rawResult, { pause: options?.pause }) };
            }
        }, [rawResult, view, options?.pause]);
        return [result, refresh];
    };
});
const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
//# sourceMappingURL=useView.js.map