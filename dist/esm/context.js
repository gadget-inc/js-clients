import { createContext, useContext } from "react";
export const GadgetAuthContext = createContext({
    loading: true,
    isEmbedded: false,
    isAuthenticated: false,
    canAuth: false,
    appBridge: null,
    isRootFrameRequest: false,
});
export const useGadget = () => useContext(GadgetAuthContext);
//# sourceMappingURL=context.js.map