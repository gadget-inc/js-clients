import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindOne } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindOne: UseFindOne = createHookStub("useFindOne", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindOne = (manager, id, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.findOne.plan(id, memoizedOptions);
    }, [manager, id, memoizedOptions]);
    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.findOne.processResult(rawResult, { pause: memoizedOptions?.pause }) };
    }, [manager.findOne.operationName, rawResult, memoizedOptions?.pause]);

    return [result, refresh];
  };
});
