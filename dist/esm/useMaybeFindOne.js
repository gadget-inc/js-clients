import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
export let useMaybeFindOne = createHookStub("useMaybeFindOne", (adapter, coreHooks) => {
    useMaybeFindOne = (manager, id, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.findOne.plan(id);
        }, [manager, id, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findOne.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [rawResult, manager, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useMaybeFindOne.js.map