import { get, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export function useView(view, variablesOrOptions, maybeOptions) {
    let variables;
    let options;
    if (typeof view == "string" || "variables" in view) {
        variables = variablesOrOptions;
        options = maybeOptions;
    }
    else if (variablesOrOptions) {
        options = variablesOrOptions;
    }
    const memoizedVariables = useStructuralMemo(variables);
    const memoizedOptions = useStructuralMemo(options);
    const [plan, dataPath] = useMemo(() => {
        if (typeof view == "string") {
            return [{ query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } }, ["gellyView"]];
        }
        else {
            return [view.plan((memoizedVariables ?? {})), namespaceDataPath([view.operationName], view.namespace)];
        }
    }, [view, memoizedVariables]);
    const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, memoizedOptions));
    const result = useMemo(() => {
        const data = get(rawResult.data, dataPath);
        const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);
        return { ...rawResult, data, error };
    }, [dataPath, options?.pause, rawResult]);
    return [result, refresh];
}
const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
//# sourceMappingURL=useView.js.map