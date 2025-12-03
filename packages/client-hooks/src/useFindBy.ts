import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindBy } from "./types.js";
import { useQueryArgs } from "./utils.js";

let useFindByImpl: UseFindBy = createHookStub("useFindBy");

createHookStub("useFindBy", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
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

export const useFindBy: UseFindBy = (finder, value, options) => useFindByImpl(finder, value, options);
