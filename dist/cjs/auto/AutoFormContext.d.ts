import React from "react";
import type { FieldMetadata, GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
import type { RecordIdentifier, UseActionFormSubmit } from "../use-action-form/types.js";
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
    fields: readonly {
        path: string;
        metadata: FieldMetadata;
    }[];
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
