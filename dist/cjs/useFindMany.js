"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindMany = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
exports.useFindMany = (0, createHooks_js_1.createHookStub)("useFindMany", (adapter, coreHooks) => {
    exports.useFindMany = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.findMany.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findMany.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [manager, memoizedOptions?.pause, rawResult]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useFindMany.js.map