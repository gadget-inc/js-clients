import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseMaybeFindOne } from "./types.js";
import { useQueryArgs } from "./utils.js";

let useMaybeFindOneImpl: UseMaybeFindOne = createHookStub("useMaybeFindOne");

createHookStub("useMaybeFindOne", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useMaybeFindOneImpl = (manager, id, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.findOne.plan(id);
    }, [manager, id, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      return { ...rawResult, ...manager.findOne.processResult(rawResult, { pause: memoizedOptions?.pause }) };
    }, [rawResult, manager, memoizedOptions?.pause]);

    return [result, refresh];
  };
});

export const useMaybeFindOne: UseMaybeFindOne = (manager, id, options) => useMaybeFindOneImpl(manager, id, options);
