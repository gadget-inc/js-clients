"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseMaybeFindFirst = void 0;
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseMaybeFindFirst = (adapter, coreHooks) => {
    const useMaybeFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.findManyOperation)(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions, manager.findFirst.namespace);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            var _a, _b, _c;
            const dataPath = (0, support_js_1.namespaceDataPath)([manager.findFirst.operationName], manager.findFirst.namespace);
            let data = (_a = rawResult.data) !== null && _a !== void 0 ? _a : null;
            if (data) {
                const connection = (0, support_js_1.get)(rawResult.data, dataPath);
                if (connection) {
                    data = (_b = (0, support_js_1.hydrateConnection)(rawResult, connection)[0]) !== null && _b !== void 0 ? _b : null;
                }
                else {
                    data = (_c = data[0]) !== null && _c !== void 0 ? _c : null;
                }
            }
            const error = utils_js_1.ErrorWrapper.forMaybeCombinedError(rawResult.error);
            return {
                ...rawResult,
                error,
                data,
            };
        }, [rawResult, manager]);
        return [result, refresh];
    };
    return {
        /**
         *  Hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
         *
         * @param manager Gadget model manager to use
         * @param options options for filtering and searching records, and selecting the fields in each record of the result
         *
         * @example
         *
         * ```
         * export function Users() {
         *   const [result, refresh] = useMaybeFindFirst(Client.user, {
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
        useMaybeFindFirst,
    };
};
exports.createUseMaybeFindFirst = createUseMaybeFindFirst;
//# sourceMappingURL=useMaybeFindFirst.js.map