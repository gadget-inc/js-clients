import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindMany } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindMany: UseFindMany = createHookStub("useFindMany", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindMany = (manager, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.findMany.plan(memoizedOptions);
    }, [manager, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.findMany.processResult(rawResult, memoizedOptions?.pause) };
    }, [manager, memoizedOptions?.pause, rawResult]);

    return [result, refresh];
  };
});
