"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGadget = exports.GadgetShopifyUIExtensionContext = void 0;
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
exports.GadgetShopifyUIExtensionContext = (0, preact_1.createContext)({
    ready: false,
    api: null,
});
const useGadget = () => (0, hooks_1.useContext)(exports.GadgetShopifyUIExtensionContext);
exports.useGadget = useGadget;
//# sourceMappingURL=context.js.map