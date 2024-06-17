import React, { useContext } from "react";
import { UseActionFormSubmit } from "src/use-action-form/types.js";
import type { ActionMetadata } from "../metadata.js";

/**  */

export interface AutoFormMetadataContext {
  metadata: ActionMetadata | undefined;
  submit: UseActionFormSubmit<any>;
}
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */

export const AutoFormMetadataContext = React.createContext<AutoFormMetadataContext | undefined>(undefined);
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/

export const useAutoFormMetadata = () => {
  const autoFormContext = useContext(AutoFormMetadataContext);
  if (!autoFormContext) {
    throw new Error(
      `useAutoFormMetadata hook called in context where no AutoFormMetadata context is available. Please ensure you are wrapping this hook with the <AutoForm/> component from @gadgetinc/react.

    Possible remedies:
      - ensuring you have the <AutoForm/> component wrapped around your hook invocation
      - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
  }

  return autoFormContext;
};
