import React from "react";
import type { RecordIdentifier, UseActionFormSubmit } from "src/use-action-form/types.js";
import type { GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
export interface AutoFormSubmitResult {
    isSuccessful?: boolean;
    error?: Error;
    isSubmitting?: boolean;
}
export interface AutoFormMetadataContext {
    findBy?: RecordIdentifier;
    metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
    submit: UseActionFormSubmit<any>;
    submitResult: AutoFormSubmitResult;
    model?: {
        namespace?: string | string[] | null;
        apiIdentifier?: string;
    };
    options?: {
        include?: string[];
        exclude?: string[];
    };
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
