import React, { useContext } from "react";
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export const AutoTableContext = React.createContext(undefined);
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export const useAutoTableContext = () => {
    const autoTableContext = useContext(AutoTableContext);
    if (!autoTableContext) {
        throw new Error(`useAutoTableContext hook called in context where no AutoTableContext is available. Please ensure you are wrapping this hook with the <AutoTable/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoTable/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoTableContext;
};
//# sourceMappingURL=AutoTableContext.js.map