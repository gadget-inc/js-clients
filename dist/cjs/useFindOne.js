"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindOne = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
exports.useFindOne = (0, createHooks_js_1.createHookStub)("useFindOne", (adapter, coreHooks) => {
    exports.useFindOne = (manager, id, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.findOne.plan(id, memoizedOptions);
        }, [manager, id, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findOne.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [manager.findOne.operationName, rawResult, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useFindOne.js.map