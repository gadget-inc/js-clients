import { createContext, useContext } from "react";
export const GadgetShopifyUIExtensionContext = createContext({
    ready: false,
    api: null,
});
export const useGadget = () => useContext(GadgetShopifyUIExtensionContext);
//# sourceMappingURL=context.js.map