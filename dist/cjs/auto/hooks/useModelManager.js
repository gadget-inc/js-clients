"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModelManager = void 0;
const hooks_js_1 = require("../../hooks.js");
const utils_js_1 = require("../../utils.js");
const useModelManager = (props) => {
    const { apiIdentifier, namespace } = props;
    const api = (0, hooks_js_1.useApi)();
    const coreImplementation = (0, hooks_js_1.useCoreImplementation)();
    const modelManager = (0, utils_js_1.getModelManager)(api, coreImplementation, apiIdentifier, namespace);
    if (!modelManager) {
        const relatedModelNamespacedApiId = [...(namespace ?? []), apiIdentifier].join(".");
        throw new Error(`no model manager for "${relatedModelNamespacedApiId}" found for action function`);
    }
    return modelManager;
};
exports.useModelManager = useModelManager;
//# sourceMappingURL=useModelManager.js.map