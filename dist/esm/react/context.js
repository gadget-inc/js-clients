import { createContext, useContext } from "react";
export const GadgetShopifyUiExtensionContext = createContext({
    ready: false,
    api: null,
});
export const useGadget = () => useContext(GadgetShopifyUiExtensionContext);
//# sourceMappingURL=context.js.map