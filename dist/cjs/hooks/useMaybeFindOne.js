"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUseMaybeFindOne = void 0;
const operationBuilders_js_1 = require("../operationBuilders.js");
const support_js_1 = require("../support.js");
const utils_js_1 = require("./utils.js");
const createUseMaybeFindOne = (adapter, coreHooks) => {
    const useMaybeFindOne = (manager, id, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return (0, operationBuilders_js_1.findOneOperation)(manager.findOne.operationName, id, manager.findOne.defaultSelection, manager.findOne.modelApiIdentifier, memoizedOptions, manager.findOne.namespace);
        }, [manager, id, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            var _a;
            let data = (_a = rawResult.data) !== null && _a !== void 0 ? _a : null;
            if (data) {
                const dataPath = (0, support_js_1.namespaceDataPath)([manager.findOne.operationName], manager.findOne.namespace);
                const value = (0, support_js_1.get)(rawResult.data, dataPath);
                data = value && "id" in value ? (0, support_js_1.hydrateRecord)(rawResult, value) : null;
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
         * Hook to fetch a Gadget record using the `maybeFindOne` method of a given manager.
         *
         * @param manager Gadget model manager to use
         * @param id id of the record to fetch
         * @param options options for selecting the fields in the result
         *
         * @example
         * ```
         * export function User(props: { id: string }) {
         *   const [result, refresh] = useMaybeFindOne(Client.user, props.id, {
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
        useMaybeFindOne,
    };
};
exports.createUseMaybeFindOne = createUseMaybeFindOne;
//# sourceMappingURL=useMaybeFindOne.js.map