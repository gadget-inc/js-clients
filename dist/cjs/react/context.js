"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadget = exports.GadgetShopifyUIExtensionContext = void 0;
const react_1 = require("react");
exports.GadgetShopifyUIExtensionContext = (0, react_1.createContext)({
    ready: false,
    api: null,
});
const useGadget = () => (0, react_1.useContext)(exports.GadgetShopifyUIExtensionContext);
exports.useGadget = useGadget;
//# sourceMappingURL=context.js.map