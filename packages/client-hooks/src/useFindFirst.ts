import { ErrorWrapper, get, hydrateConnection, namespaceDataPath } from "@gadgetinc/core";
import { RuntimeAdapter } from "./adapter.js";
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
      const dataPath = namespaceDataPath([manager.findFirst.operationName], manager.findFirst.namespace);
      let data = rawResult.data && get(rawResult.data, dataPath);
      if (data) {
        data = hydrateConnection(rawResult, data)[0];
      }

      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [manager.findFirst.operationName, options?.pause, rawResult]);

    return [result, refresh];
  };
});
