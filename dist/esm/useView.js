import { get, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export function useView(view, variablesOrOptions, maybeOptions) {
    let variables;
    let options;
    if ("variables" in view) {
        variables = variablesOrOptions;
        options = maybeOptions;
    }
    else if (variablesOrOptions) {
        options = variablesOrOptions;
    }
    const memoizedVariables = useStructuralMemo(variables);
    const memoizedOptions = useStructuralMemo(options);
    const plan = useMemo(() => view.plan((memoizedVariables ?? {})), [view, memoizedVariables]);
    const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, memoizedOptions));
    const result = useMemo(() => {
        const dataPath = namespaceDataPath([view.operationName], view.namespace);
        const data = get(rawResult.data, dataPath);
        const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);
        return { ...rawResult, data, error };
    }, [view, options?.pause, rawResult]);
    return [result, refresh];
}
//# sourceMappingURL=useView.js.map