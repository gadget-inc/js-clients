import type { ActionMetadata } from "../metadata.js";
import React from "react";
import { UseActionFormSubmit } from "src/use-action-form/types.js";
/**  */
export interface AutoFormMetadataContext {
    metadata: ActionMetadata | undefined;
    submit: UseActionFormSubmit<any>;
}
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
export declare const AutoFormMetadataContext: React.Context<AutoFormMetadataContext | undefined>;
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export declare const useAutoFormMetadata: () => AutoFormMetadataContext;
