"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoFormMetadata = exports.AutoFormMetadataContext = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_2 = tslib_1.__importDefault(require("react"));
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
exports.AutoFormMetadataContext = react_2.default.createContext(undefined);
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
const useAutoFormMetadata = () => {
    const autoFormContext = (0, react_1.useContext)(exports.AutoFormMetadataContext);
    if (!autoFormContext) {
        throw new Error(`useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
exports.useAutoFormMetadata = useAutoFormMetadata;
//# sourceMappingURL=AutoFormContext.js.map