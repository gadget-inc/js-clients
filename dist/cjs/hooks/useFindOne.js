"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseFindOne = void 0;
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseFindOne = (adapter, coreHooks) => {
    const useFindOne = (manager, id, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.findOneOperation)(manager.findOne.operationName, id, manager.findOne.defaultSelection, manager.findOne.modelApiIdentifier, memoizedOptions, manager.findOne.namespace);
        }, [manager, id, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            const dataPath = (0, support_js_1.namespaceDataPath)([manager.findOne.operationName], manager.findOne.namespace);
            let data = rawResult.data && (0, support_js_1.get)(rawResult.data, dataPath);
            if (data) {
                data = (0, support_js_1.hydrateRecord)(rawResult, data);
            }
            const error = utils_js_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options === null || options === void 0 ? void 0 : options.pause);
            return { ...rawResult, data, error };
        }, [manager.findOne.operationName, rawResult, options === null || options === void 0 ? void 0 : options.pause]);
        return [result, refresh];
    };
    return {
        /**
         * Hook to fetch one Gadget record by `id` from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the record if it was found, and `null` otherwise.
         *
         * @param manager Gadget model manager to use
         * @param id id of the record to fetch
         * @param options options for selecting the fields in the result
         *
         * @example
         * ```
         * export function User(props: { id: string }) {
         *   const [result, refresh] = useFindOne(api.user, props.id, {
         *     select: {
         *       name: true,
         *     },
         *   });
         *
         *   if (result.error) return <>Error: {result.error.toString()}</>;
         *   if (result.fetching && !result.data) return <>Fetching...</>;
         *   if (!result.data) return <>No user found with id={props.id}</>;
         *
         *   return <div>{result.data.name}</div>;
         * }
         * ```
         */
        useFindOne,
    };
};
exports.createUseFindOne = createUseFindOne;
//# sourceMappingURL=useFindOne.js.map