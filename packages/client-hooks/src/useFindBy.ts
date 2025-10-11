import { ErrorWrapper, GadgetNotFoundError, get, getNonUniqueDataError, namespaceDataPath } from "@gadgetinc/utils";
import { RuntimeAdapter } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseFindBy } from "./types.js";
import { useQueryArgs } from "./utils.js";

export let useFindBy: UseFindBy = createHookStub("useFindBy", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useFindBy = (finder, value, options) => {
    const connection = coreHooks.useConnection();
    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      return connection.findOneByFieldOperation(
        finder.operationName,
        finder.findByVariableName,
        value,
        finder.defaultSelection,
        finder.modelApiIdentifier,
        memoizedOptions,
        finder.namespace
      );
    }, [finder, value, memoizedOptions]);
    const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));

    const result = adapter.framework.useMemo(() => {
      const dataPath = namespaceDataPath([finder.operationName], finder.namespace);

      let data = rawResult.data;
      let records = [];
      if (data) {
        const gqlConnection = get(rawResult.data, dataPath);
        if (gqlConnection) {
          records = connection.hydrateConnection(rawResult, gqlConnection);
          data = records[0];
        }
      }

      let error = ErrorWrapper.forMaybeCombinedError(rawResult.error);
      if (!error) {
        if (records.length > 1) {
          error = ErrorWrapper.forClientSideError(getNonUniqueDataError(finder.modelApiIdentifier, finder.findByVariableName, value));
        } else if (rawResult.data && !records[0]) {
          error = ErrorWrapper.forClientSideError(
            new GadgetNotFoundError(`${finder.modelApiIdentifier} record with ${finder.findByVariableName}=${value} not found`)
          );
        }
      }

      return { ...rawResult, data, error };
    }, [rawResult, finder, value]);

    return [result, refresh];
  };
});
