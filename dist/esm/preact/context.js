import { createContext } from "preact";
import { useContext } from "preact/hooks";
export const GadgetShopifyUIExtensionContext = createContext({
    ready: false,
    api: null,
});
export const useGadget = () => useContext(GadgetShopifyUIExtensionContext);
//# sourceMappingURL=context.js.map