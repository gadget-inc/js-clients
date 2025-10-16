import { useApi, useCoreImplementation } from "../../hooks.js";
import { getModelManager } from "../../utils.js";

export const useModelManager = (props: { apiIdentifier: string; namespace?: string[] | string | null }) => {
  const { apiIdentifier, namespace } = props;

  const api = useApi();
  const coreImplementation = useCoreImplementation();
  const modelManager = getModelManager(api, coreImplementation, apiIdentifier, namespace);

  if (!modelManager) {
    const relatedModelNamespacedApiId = [...(namespace ?? []), apiIdentifier].join(".");
    throw new Error(`no model manager for "${relatedModelNamespacedApiId}" found for action function`);
  }

  return modelManager;
};
