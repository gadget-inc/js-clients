import type { AnyModelManager } from "@gadgetinc/core";
import { ErrorWrapper, GadgetRecordList, get, hydrateConnection, namespaceDataPath } from "@gadgetinc/core";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindMany } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindMany: UseFindMany = createHookStub("useFindMany", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindMany = (manager, options) => {
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return manager.findMany.plan(memoizedOptions);
    }, [manager, memoizedOptions]);

    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      const dataPath = namespaceDataPath([manager.findMany.operationName], manager.findMany.namespace);
      let data = rawResult.data;
      let gqlConnection = rawResult.data && get(rawResult.data, dataPath);
      if (gqlConnection) {
        const records = hydrateConnection(rawResult, gqlConnection);
        data = GadgetRecordList.boot(manager as unknown as AnyModelManager, records, gqlConnection);
      }

      const error = ErrorWrapper.errorIfDataAbsent(rawResult, dataPath, options?.pause);

      return { ...rawResult, data, error };
    }, [manager, options?.pause, rawResult]);

    return [result, refresh];
  };
});
