import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
let useFindManyImpl = createHookStub("useFindMany");
createHookStub("useFindMany", (adapter, coreHooks) => {
    useFindManyImpl = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return manager.findMany.plan(memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...manager.findMany.processResult(rawResult, { pause: memoizedOptions?.pause }) };
        }, [manager, memoizedOptions?.pause, rawResult]);
        return [result, refresh];
    };
});
export const useFindMany = (manager, options) => useFindManyImpl(manager, options);
//# sourceMappingURL=useFindMany.js.map