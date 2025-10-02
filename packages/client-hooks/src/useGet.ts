import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseGet } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useGet: UseGet = createHookStub("useGet", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useGet = (manager, options) => {
    const connection = coreHooks.useConnection();
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return connection.findOneOperation(
        manager.get.operationName,
        undefined,
        manager.get.defaultSelection,
        manager.get.modelApiIdentifier,
        memoizedOptions
      );
    }, [manager, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
    const dataPath = namespaceDataPath([manager.get.operationName], manager.get.namespace);

    const result = adapter.framework.useMemo(() => {
      let data = null;
      const rawRecord = rawResult.data && get(rawResult.data, dataPath);
      if (rawRecord) {
        data = connection.hydrateRecord(rawResult, rawRecord);
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
