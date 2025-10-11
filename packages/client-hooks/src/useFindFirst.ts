import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindFirst } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindFirst: UseFindFirst = createHookStub("useFindFirst", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindFirst = (manager, options) => {
    const connection = coreHooks.useConnection();
    const firstOptions = { ...options, first: 1 };
    const memoizedOptions = coreHooks.useStructuralMemo(firstOptions);
    const plan = adapter.framework.useMemo(() => {
      return connection.findManyOperation(
        manager.findFirst.operationName,
        manager.findFirst.defaultSelection,
        manager.findFirst.modelApiIdentifier,
        memoizedOptions,
        manager.findFirst.namespace
      );
    }, [manager, memoizedOptions]);
    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, firstOptions));

    const result = adapter.framework.useMemo(() => {
      const dataPath = namespaceDataPath([manager.findFirst.operationName], manager.findFirst.namespace);
      let data = rawResult.data && get(rawResult.data, dataPath);
      if (data) {
        data = connection.hydrateConnection(rawResult, data)[0];
      }

      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [manager.findFirst.operationName, options?.pause, rawResult]);

    return [result, refresh];
  };
});
