import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
let useMaybeFindFirstImpl = createHookStub("useMaybeFindFirst");
createHookStub("useMaybeFindFirst", (adapter, coreHooks) => {
    useMaybeFindFirstImpl = (manager, options) => {
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
export const useMaybeFindFirst = (manager, options) => useMaybeFindFirstImpl(manager, options);
//# sourceMappingURL=useMaybeFindFirst.js.map