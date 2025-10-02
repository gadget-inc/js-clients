import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseMaybeFindOne } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useMaybeFindOne: UseMaybeFindOne = createHookStub("useMaybeFindOne", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useMaybeFindOne = (manager, id, options) => {
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
      let data = (rawResult.data && get(rawResult.data, dataPath)) ?? null;
      if (data) {
        data = data && "id" in data ? connection.hydrateRecord(rawResult, data) : null;
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
