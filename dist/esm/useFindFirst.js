import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
export let useFindFirst = createHookStub("useFindFirst", (adapter, coreHooks) => {
    useFindFirst = (manager, options) => {
        const firstOptions = { ...options, first: 1 };
        const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
        const plan = adapter.framework.useMemo(() => {
            return manager.findFirst.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, firstOptions));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findFirst.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [manager.findFirst.operationName, memoizedOptions?.pause, rawResult]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useFindFirst.js.map