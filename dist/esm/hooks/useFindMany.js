import { GadgetRecordList } from "../GadgetRecordList.js";
import { findManyOperation } from "../operationBuilders.js";
import { get, hydrateConnection, namespaceDataPath } from "../support.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export const createUseFindMany = (adapter, coreHooks) => {
    const useFindMany = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return findManyOperation(manager.findMany.operationName, manager.findMany.defaultSelection, manager.findMany.modelApiIdentifier, memoizedOptions, manager.findMany.namespace);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            const dataPath = namespaceDataPath([manager.findMany.operationName], manager.findMany.namespace);
            let data = rawResult.data;
            if (data) {
                const connection = get(rawResult.data, dataPath);
                if (connection) {
                    const records = hydrateConnection(rawResult, connection);
                    data = GadgetRecordList.boot(manager, records, connection);
                }
            }
            const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
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
//# sourceMappingURL=useFindMany.js.map