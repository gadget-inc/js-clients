import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import type { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindOne } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindOne: UseFindOne = createHookStub("useFindOne", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindOne = (manager, id, options) => {
    const connection = coreHooks.useConnection();
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return connection.findOneOperation(
        manager.findOne.operationName,
        id,
        manager.findOne.defaultSelection,
        manager.findOne.modelApiIdentifier,
        memoizedOptions,
        manager.findOne.namespace
      );
    }, [manager, id, memoizedOptions]);
    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      const dataPath = namespaceDataPath([manager.findOne.operationName], manager.findOne.namespace);

      let data = rawResult.data && get(rawResult.data, dataPath);
      if (data) {
        data = connection.hydrateRecord(rawResult, data);
      }
      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [manager.findOne.operationName, rawResult, options?.pause]);

    return [result, refresh];
  };
});
