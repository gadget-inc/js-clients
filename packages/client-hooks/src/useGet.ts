import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseGet } from "./types.js";
import { useQueryArgs } from "./utils.js";

let useGetImpl: UseGet = createHookStub("useGet");

createHookStub("useGet", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useGetImpl = (manager, options) => {
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

export const useGet: UseGet = (manager, options) => useGetImpl(manager, options);
