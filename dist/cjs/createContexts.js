"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContexts = void 0;
let GadgetUrqlClientContextSingleton;
let GadgetConfigurationContextSingleton;
const createContexts = (adapter) => {
    if (!GadgetUrqlClientContextSingleton) {
        GadgetUrqlClientContextSingleton = adapter.framework.createContext(undefined);
    }
    if (!GadgetConfigurationContextSingleton) {
        GadgetConfigurationContextSingleton = adapter.framework.createContext(undefined);
    }
    return {
        GadgetUrqlClientContext: GadgetUrqlClientContextSingleton,
        GadgetConfigurationContext: GadgetConfigurationContextSingleton,
    };
};
exports.createContexts = createContexts;
//# sourceMappingURL=createContexts.js.map