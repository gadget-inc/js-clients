"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMaybeFindOne = void 0;
const createHooks_js_1 = require("./createHooks.js");
const utils_js_1 = require("./utils.js");
let useMaybeFindOneImpl = (0, createHooks_js_1.createHookStub)("useMaybeFindOne");
(0, createHooks_js_1.createHookStub)("useMaybeFindOne", (adapter, coreHooks) => {
    useMaybeFindOneImpl = (manager, id, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.findOne.plan(id);
        }, [manager, id, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery((0, utils_js_1.useQueryArgs)(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findOne.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [rawResult, manager, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
const useMaybeFindOne = (manager, id, options) => useMaybeFindOneImpl(manager, id, options);
exports.useMaybeFindOne = useMaybeFindOne;
//# sourceMappingURL=useMaybeFindOne.js.map