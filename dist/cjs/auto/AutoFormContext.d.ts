import React from "react";
import type { RecordIdentifier, UseActionFormSubmit } from "src/use-action-form/types.js";
import type { ActionMetadata } from "../metadata.js";
export interface AutoFormSubmitResult {
    isSuccessful?: boolean;
    error?: Error;
}
export interface AutoFormMetadataContext {
    findBy?: RecordIdentifier;
    metadata: ActionMetadata | undefined;
    submit: UseActionFormSubmit<any>;
    submitResult?: AutoFormSubmitResult;
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
