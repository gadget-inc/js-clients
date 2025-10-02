import type { AnyModelManager } from "@gadgetinc/api-client-core";
import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindMany } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindMany: UseFindMany = createHookStub("useFindMany", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindMany = (manager, options) => {
    const connection = coreHooks.useConnection();
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return connection.findManyOperation(
        manager.findMany.operationName,
        manager.findMany.defaultSelection,
        manager.findMany.modelApiIdentifier,
        memoizedOptions,
        manager.findMany.namespace
      );
    }, [manager, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      const dataPath = namespaceDataPath([manager.findMany.operationName], manager.findMany.namespace);
      let data = rawResult.data;
      let gqlConnection = rawResult.data && get(rawResult.data, dataPath);
      if (gqlConnection) {
        data = connection.hydrateRecordListFromConnection(manager as unknown as AnyModelManager, rawResult, gqlConnection);
      }

      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [manager, options?.pause, rawResult]);

    return [result, refresh];
  };
});
