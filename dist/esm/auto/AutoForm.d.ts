import type { ActionFunction, FieldSelection, GadgetRecord, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { ActionMetadata, FieldMetadata, GlobalActionMetadata } from "../metadata.js";
import type { AnyActionWithId, RecordIdentifier, UseActionFormHookStateData, UseActionFormSubmit } from "../use-action-form/types.js";
import type { FieldErrors, FieldValues, UseFormReturn } from "../useActionForm.js";
import { type ErrorWrapper, type OptionsType } from "../utils.js";
/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>, ExtraFormVariables extends FieldValues = Record<string, unknown>, DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables> = {
    /** Which action this fom will run on submit */
    action: ActionFunc;
    /** A record for this form to act on */
    record?: GadgetRecord<any>;
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    include?: string[];
    /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
    exclude?: string[];
    /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
    defaultValues?: DefaultValues;
    /** The label to use for the submit button at the bottom of the form */
    submitLabel?: ReactNode;
    /** What to show the user once the form has been submitted successfully */
    successContent?: ReactNode;
    /** The title at the top of the form. False to omit */
    title?: string | false;
    /** Called when the form submission completes successfully on the backend */
    onSuccess?: (record: UseActionFormHookStateData<ActionFunc>) => void;
    /** Called when the form submission errors before sending, during the API call, or if the API call returns an error. */
    onFailure?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
    /** Custom components to render within the form. Using this will override all default field rendering.   */
    children?: ReactNode;
} & (ActionFunc extends AnyActionWithId<GivenOptions> ? {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
} : {});
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export declare const useFormFields: (metadata: ActionMetadata | GlobalActionMetadata | undefined | null, options: {
    include?: string[];
    exclude?: string[];
}) => readonly {
    path: string;
    metadata: FieldMetadata;
}[];
export declare const useFormSelection: (modelApiIdentifier: string | undefined, fields: readonly {
    path: string;
    metadata: FieldMetadata;
}[]) => FieldSelection | undefined;
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export declare const useAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, any, any> & {
    findBy?: any;
}) => {
    metadata: ActionMetadata | GlobalActionMetadata | undefined;
    fetchingMetadata: boolean;
    metadataError: ErrorWrapper | undefined;
    fields: readonly {
        path: string;
        metadata: FieldMetadata;
    }[];
    submit: UseActionFormSubmit<ActionFunc>;
    formError: Error | ErrorWrapper | null | undefined;
    isSubmitting: boolean;
    isSubmitSuccessful: boolean;
    isLoading: boolean;
    originalFormMethods: UseFormReturn<any, any>;
};
