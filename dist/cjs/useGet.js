"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGet = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
exports.useGet = (0, createHooks_js_1.createHookStub)("useGet", (adapter, coreHooks) => {
    exports.useGet = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.get.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.get.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [rawResult, manager, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useGet.js.map