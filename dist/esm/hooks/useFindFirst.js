import { findManyOperation } from "../operationBuilders.js";
import { get, hydrateConnection, namespaceDataPath } from "../support.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export const createUseFindFirst = (adapter, coreHooks) => {
    const useFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return findManyOperation(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions, manager.findFirst.namespace);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            const dataPath = namespaceDataPath([manager.findFirst.operationName], manager.findFirst.namespace);
            let data = rawResult.data;
            if (data) {
                const connection = get(rawResult.data, dataPath);
                if (connection) {
                    data = hydrateConnection(rawResult, connection)[0];
                }
                else {
                    data = data[0];
                }
            }
            const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
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
//# sourceMappingURL=useFindFirst.js.map