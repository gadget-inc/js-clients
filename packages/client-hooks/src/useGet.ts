import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseGet } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useGet: UseGet = createHookStub("useGet", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useGet = (manager, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.get.plan(memoizedOptions);
    }, [manager, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.get.processResult(rawResult.data, rawResult.error) };
    }, [rawResult, manager]);

    return [result, refresh];
  };
});
