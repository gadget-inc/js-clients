import { useApi } from "../../GadgetProvider.js";
import { getModelManager } from "../../utils.js";
export const useModelManager = (props) => {
    const { apiIdentifier, namespace } = props;
    const api = useApi();
    const modelManager = getModelManager(api, apiIdentifier, namespace);
    if (!modelManager) {
        const relatedModelNamespacedApiId = [...(namespace ?? []), apiIdentifier].join(".");
        throw new Error(`no model manager for "${relatedModelNamespacedApiId}" found for action function`);
    }
    return modelManager;
};
//# sourceMappingURL=useModelManager.js.map