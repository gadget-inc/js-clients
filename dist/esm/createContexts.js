let GadgetUrqlClientContextSingleton;
let GadgetConfigurationContextSingleton;
export const createContexts = (adapter) => {
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
//# sourceMappingURL=createContexts.js.map