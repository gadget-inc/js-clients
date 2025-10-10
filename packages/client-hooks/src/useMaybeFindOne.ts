import { ErrorWrapper, get, hydrateRecord, namespaceDataPath } from "@gadgetinc/core";
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
      const dataPath = namespaceDataPath([manager.findOne.operationName], manager.findOne.namespace);
      let data = (rawResult.data && get(rawResult.data, dataPath)) ?? null;
      if (data) {
        data = data && "id" in data ? hydrateRecord(rawResult, data) : null;
      }
      const error = ErrorWrapper.forMaybeCombinedError(rawResult.error);
      return {
        ...rawResult,
        error,
        data,
      };
    }, [rawResult, manager]);

    return [result, refresh];
  };
});
