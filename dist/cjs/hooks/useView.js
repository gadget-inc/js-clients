"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseView = void 0;
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseView = (adapter, coreHooks) => {
    function useView(view, variablesOrOptions, maybeOptions) {
        var _a, _b, _c;
        let variables;
        let options;
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
                ...options === null || options === void 0 ? void 0 : options.context,
                // if the view exports the typenames it references, add them to the context so urql will refresh the view when mutations are made against these typenames
                additionalTypenames: [
                    ...((_b = (_a = options === null || options === void 0 ? void 0 : options.context) === null || _a === void 0 ? void 0 : _a.additionalTypenames) !== null && _b !== void 0 ? _b : []),
                    ...(typeof view == "string" ? [] : (_c = view.referencedTypenames) !== null && _c !== void 0 ? _c : []),
                ],
            },
        });
        const [plan, dataPath] = adapter.framework.useMemo(() => {
            if (typeof view == "string") {
                return [{ query: inlineViewQuery, variables: { query: view, variables: memoizedVariables } }, ["gellyView"]];
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
                return [view.plan(variablesOptions), (0, support_js_1.namespaceDataPath)([view.gqlFieldName], view.namespace)];
            }
        }, [view, memoizedVariables]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, memoizedOptions));
        const result = adapter.framework.useMemo(() => {
            const data = (0, support_js_1.get)(rawResult.data, dataPath);
            const error = utils_js_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
            return { ...rawResult, data, error };
        }, [dataPath, options === null || options === void 0 ? void 0 : options.pause, rawResult]);
        return [result, refresh];
    }
    return {
        useView,
    };
};
exports.createUseView = createUseView;
const inlineViewQuery = `query InlineView($query: String!, $variables: JSONObject) { 
  gellyView(query: $query, variables: $variables) 
}`;
//# sourceMappingURL=useView.js.map