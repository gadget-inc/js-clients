"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadget = exports.GadgetBigCommerceContext = void 0;
const react_1 = require("react");
exports.GadgetBigCommerceContext = (0, react_1.createContext)({
    loading: true,
    isAuthenticated: false,
});
const useGadget = () => (0, react_1.useContext)(exports.GadgetBigCommerceContext);
exports.useGadget = useGadget;
//# sourceMappingURL=context.js.map