"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindFirst = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
exports.useFindFirst = (0, createHooks_js_1.createHookStub)("useFindFirst", (adapter, coreHooks) => {
    exports.useFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return manager.findFirst.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findFirst.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [manager.findFirst.operationName, memoizedOptions?.pause, rawResult]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useFindFirst.js.map