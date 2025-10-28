import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindFirst } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindFirst: UseFindFirst = createHookStub("useFindFirst", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindFirst = (manager, options) => {
    const firstOptions = { ...options, first: 1 } as typeof options;
    const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
    const plan = adapter.framework.useMemo(() => {
      return manager.findFirst.plan(memoizedOptions);
    }, [manager, memoizedOptions]);
    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, firstOptions));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.findFirst.processResult(rawResult, memoizedOptions?.pause) };
    }, [manager.findFirst.operationName, memoizedOptions?.pause, rawResult]);

    return [result, refresh];
  };
});
