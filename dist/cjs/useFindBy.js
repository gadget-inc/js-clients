"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindBy = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
exports.useFindBy = (0, createHooks_js_1.createHookStub)("useFindBy", (adapter, coreHooks) => {
    exports.useFindBy = (finder, value, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return finder.plan(value, memoizedOptions);
        }, [finder, value, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...finder.processResult(rawResult, { pause: memoizedOptions?.pause, fieldValue: value }) };
        }, [rawResult, finder, value, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useFindBy.js.map