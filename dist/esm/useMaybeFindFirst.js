import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
export let useMaybeFindFirst = createHookStub("useMaybeFindFirst", (adapter, coreHooks) => {
    useMaybeFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return manager.findFirst.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findFirst.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [rawResult, manager, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useMaybeFindFirst.js.map