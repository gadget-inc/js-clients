import React from "react";
import type { UseActionFormSubmit } from "src/use-action-form/types.js";
import type { ActionMetadata } from "../metadata.js";
/**  */
export interface AutoFormMetadataContext {
    metadata: ActionMetadata | undefined;
    submit: UseActionFormSubmit<any>;
}
/**
 * React context that stores an instance of the metadata loaded for a particular form action
 */
export declare const AutoFormMetadataContext: React.Context<AutoFormMetadataContext | undefined>;
/**
 * Get the current `metadata` object and `submit` function from React context
 * Must be called within a component wrapped by the `<AutoForm>` component.
 **/
export declare const useAutoFormMetadata: () => AutoFormMetadataContext;
