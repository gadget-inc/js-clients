import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseMaybeFindOne } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useMaybeFindOne: UseMaybeFindOne = createHookStub("useMaybeFindOne", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useMaybeFindOne = (manager, id, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.findOne.plan(id);
    }, [manager, id, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.findOne.processResult(rawResult.data, rawResult.error) };
    }, [rawResult, manager]);

    return [result, refresh];
  };
});
