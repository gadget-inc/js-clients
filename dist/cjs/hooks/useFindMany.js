"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseFindMany = void 0;
const GadgetRecordList_js_1 = require("../GadgetRecordList.js");
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseFindMany = (adapter, coreHooks) => {
    const useFindMany = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.findManyOperation)(manager.findMany.operationName, manager.findMany.defaultSelection, manager.findMany.modelApiIdentifier, memoizedOptions, manager.findMany.namespace);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            const dataPath = (0, support_js_1.namespaceDataPath)([manager.findMany.operationName], manager.findMany.namespace);
            let data = rawResult.data;
            if (data) {
                const connection = (0, support_js_1.get)(rawResult.data, dataPath);
                if (connection) {
                    const records = (0, support_js_1.hydrateConnection)(rawResult, connection);
                    data = GadgetRecordList_js_1.GadgetRecordList.boot(manager, records, connection);
                }
            }
            const error = utils_js_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
            return { ...rawResult, data, error };
        }, [manager, options === null || options === void 0 ? void 0 : options.pause, rawResult]);
        return [result, refresh];
    };
    return {
        /**
         * Hook to fetch a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
         *
         * @param manager Gadget model manager to use
         * @param options options for filtering and searching records, and selecting the fields in each record of the result
         *
         * @example
         *
         * ```
         * export function Users() {
         *   const [result, refresh] = useFindMany(api.user, {
         *     select: {
         *       name: true,
         *     },
         *   });
         *
         *   if (result.error) return <>Error: {result.error.toString()}</>;
         *   if (result.fetching && !result.data) return <>Fetching...</>;
         *   if (!result.data) return <>No users found</>;
         *
         *   return <>{result.data.map((user) => <div>{user.name}</div>)}</>;
         * }
         * ```
         */
        useFindMany,
    };
};
exports.createUseFindMany = createUseFindMany;
//# sourceMappingURL=useFindMany.js.map