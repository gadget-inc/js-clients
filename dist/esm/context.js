import { createContext, useContext } from "react";
export const GadgetAuthContext = createContext({
    loading: true,
    isAuthenticated: false,
});
export const useGadget = () => useContext(GadgetAuthContext);
//# sourceMappingURL=context.js.map