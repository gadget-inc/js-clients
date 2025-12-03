import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseMaybeFindFirst } from "./types.js";
import { useQueryArgs } from "./utils.js";

let useMaybeFindFirstImpl: UseMaybeFindFirst = createHookStub("useMaybeFindFirst");

createHookStub("useMaybeFindFirst", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useMaybeFindFirstImpl = (manager, options) => {
    const firstOptions = { ...options, first: 1 } as unknown as typeof options;
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

export const useMaybeFindFirst: UseMaybeFindFirst = (manager, options) => useMaybeFindFirstImpl(manager, options);
