import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
export let useGet = createHookStub("useGet", (adapter, coreHooks) => {
    useGet = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.get.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.get.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [rawResult, manager, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
//# sourceMappingURL=useGet.js.map