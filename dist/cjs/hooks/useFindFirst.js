"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseFindFirst = void 0;
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseFindFirst = (adapter, coreHooks) => {
    const useFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.findManyOperation)(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions, manager.findFirst.namespace);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            const dataPath = (0, support_js_1.namespaceDataPath)([manager.findFirst.operationName], manager.findFirst.namespace);
            let data = rawResult.data;
            if (data) {
                const connection = (0, support_js_1.get)(rawResult.data, dataPath);
                if (connection) {
                    data = (0, support_js_1.hydrateConnection)(rawResult, connection)[0];
                }
                else {
                    data = data[0];
                }
            }
            const error = utils_js_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
            return { ...rawResult, data, error };
        }, [manager.findFirst.operationName, options === null || options === void 0 ? void 0 : options.pause, rawResult]);
        return [result, refresh];
    };
    return {
        /**
         * Hook to fetch the first backend record matching a given filter and sort. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the first record found if there is one, and null otherwise.
         *
         * @param manager Gadget model manager to use
         * @param options options for filtering and searching records, and selecting the fields in each record of the result
         *
         * @example
         *
         * ```
         * export function Users() {
         *   const [result, refresh] = useFindFirst(api.user, {
         *     select: {
         *       name: true,
         *     },
         *   });
         *
         *   if (result.error) return <>Error: {result.error.toString()}</>;
         *   if (result.fetching && !result.data) return <>Fetching...</>;
         *   if (!result.data) return <>No user found</>;
         *
         *   return <div>{result.data.name}</div>;
         * }
         * ```
         */
        useFindFirst,
    };
};
exports.createUseFindFirst = createUseFindFirst;
//# sourceMappingURL=useFindFirst.js.map