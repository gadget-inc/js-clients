import { createHookStub } from "./createHooks.js";
import { useQueryArgs } from "./utils.js";
let useFindByImpl = createHookStub("useFindBy");
createHookStub("useFindBy", (adapter, coreHooks) => {
    useFindByImpl = (finder, value, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return finder.plan(value, memoizedOptions);
        }, [finder, value, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            return { ...rawResult, ...finder.processResult(rawResult, { pause: memoizedOptions?.pause, fieldValue: value }) };
        }, [rawResult, finder, value, memoizedOptions?.pause]);
        return [result, refresh];
    };
});
export const useFindBy = (finder, value, options) => useFindByImpl(finder, value, options);
//# sourceMappingURL=useFindBy.js.map