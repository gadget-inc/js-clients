"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoTableContext = exports.AutoTableContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
exports.AutoTableContext = react_1.default.createContext(undefined);
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
const useAutoTableContext = () => {
    const autoTableContext = (0, react_1.useContext)(exports.AutoTableContext);
    if (!autoTableContext) {
        throw new Error(`useAutoTableContext hook called in context where no AutoTableContext is available. Please ensure you are wrapping this hook with the <AutoTable/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoTable/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoTableContext;
};
exports.useAutoTableContext = useAutoTableContext;
//# sourceMappingURL=AutoTableContext.js.map