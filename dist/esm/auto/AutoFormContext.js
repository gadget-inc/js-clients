import React, { useContext } from "react";
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export const AutoFormMetadataContext = React.createContext(undefined);
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export const useAutoFormMetadata = () => {
    const autoFormContext = useContext(AutoFormMetadataContext);
    if (!autoFormContext) {
        throw new Error(`useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return autoFormContext;
};
//# sourceMappingURL=AutoFormContext.js.map