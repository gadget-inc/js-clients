import { createContext, useContext } from "react";
export const GadgetBigCommerceContext = createContext({
    loading: true,
    isAuthenticated: false,
});
export const useGadget = () => useContext(GadgetBigCommerceContext);
//# sourceMappingURL=context.js.map