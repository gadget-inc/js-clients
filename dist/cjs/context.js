"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadget = exports.GadgetAuthContext = void 0;
const react_1 = require("react");
exports.GadgetAuthContext = (0, react_1.createContext)({
    loading: true,
    isEmbedded: false,
    isAuthenticated: false,
    canAuth: false,
    appBridge: null,
    isRootFrameRequest: false,
});
const useGadget = () => (0, react_1.useContext)(exports.GadgetAuthContext);
exports.useGadget = useGadget;
//# sourceMappingURL=context.js.map