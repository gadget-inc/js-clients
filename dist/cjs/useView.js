"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useView = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_js_1 = require("./useGadgetQuery.js");
const useStructuralMemo_js_1 = require("./useStructuralMemo.js");
const utils_js_1 = require("./utils.js");
function useView(view, variablesOrOptions, maybeOptions) {
    let variables;
    let options;
    if (typeof view == "string" || "variables" in view) {
        variables = variablesOrOptions;
        options = maybeOptions;
    }
    else if (variablesOrOptions) {
        options = variablesOrOptions;
    }
    const memoizedVariables = (0, useStructuralMemo_js_1.useStructuralMemo)(variables);
    const memoizedOptions = (0, useStructuralMemo_js_1.useStructuralMemo)(options);
    const [plan, dataPath] = (0, react_1.useMemo)(() => {
        if (typeof view == "string") {
            return [{ query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } }, ["gellyView"]];
        }
        else {
            return [view.plan((memoizedVariables ?? {})), (0, api_client_core_1.namespaceDataPath)([view.gqlFieldName], view.namespace)];
        }
    }, [view, memoizedVariables]);
    const [rawResult, refresh] = (0, useGadgetQuery_js_1.useGadgetQuery)((0, utils_js_1.useQueryArgs)(plan, memoizedOptions));
    const result = (0, react_1.useMemo)(() => {
        const data = (0, api_client_core_1.get)(rawResult.data, dataPath);
        const error = utils_js_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);
        return { ...rawResult, data, error };
    }, [dataPath, options?.pause, rawResult]);
    return [result, refresh];
}
exports.useView = useView;
const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
//# sourceMappingURL=useView.js.map