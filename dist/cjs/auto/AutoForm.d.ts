import type { ActionFunction, DeepFilterNever, FieldSelection, GadgetRecord, GlobalActionFunction, Select } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { FieldMetadata, GlobalActionMetadata, ModelWithOneActionMetadata } from "../metadata.js";
import type { AnyActionWithId, AnyUpsertAction, RecordIdentifier, UseActionFormHookStateData, UseActionFormSubmit } from "../use-action-form/types.js";
import type { FieldErrors, FieldValues, UseFormReturn } from "../useActionForm.js";
import { type ErrorWrapper, type OptionsType } from "../utils.js";
/** When the AutoForm does not have children, these properties are available to control the rendering of the form */
type AutoFormPropsWithoutChildren = {
    children?: never;
    /** The title at the top of the form. False to omit */
    title?: string | false;
    /** The label to use for the submit button at the bottom of the form */
    submitLabel?: ReactNode;
};
type AutoFormPropsWithChildren = {
    /** Custom components to render within the form. Using this will override all default field rendering.   */
    children?: ReactNode;
};
/** Helper type for the record shape in AutoFormProps */
type AutoFormRecordType<ActionFunc> = ActionFunc extends {
    schemaType: infer SchemaType;
    defaultSelection: infer DefaultSelection extends FieldSelection | null | undefined;
} ? GadgetRecord<{
    id: string;
} & (SchemaType extends null | undefined ? unknown : Partial<DeepFilterNever<Select<SchemaType, DefaultSelection>>>)> : never;
/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>, ExtraFormVariables extends FieldValues = Record<string, unknown>, DefaultValues = Partial<ActionFunc["variablesType"]> & ExtraFormVariables> = (AutoFormPropsWithChildren | AutoFormPropsWithoutChildren) & {
    /** Which action this fom will run on submit */
    action: ActionFunc;
    /** What to show the user once the form has been submitted successfully */
    successContent?: ReactNode;
    /** The loading skeleton to display when the form is loading */
    loadingSkeleton?: ReactNode;
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    include?: string[];
    /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
    exclude?: string[];
    /** A set of field values to pre-populate the form with on load. Only applies to create forms. */
    defaultValues?: DefaultValues;
    /** Selection object to pass to the form to retrieve existing values. This will override the default selection based on included fields */
    select?: GivenOptions["select"];
    /** Called when the form submission completes successfully on the backend */
    onSuccess?: (record: UseActionFormHookStateData<ActionFunc>) => void;
    /** Called when the form submission errors before sending, during the API call, or if the API call returns an error. */
    onFailure?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
    /** Enable debug logging for this form */
    debug?: boolean;
} & (ActionFunc extends AnyActionWithId<GivenOptions> ? {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy: RecordIdentifier;
    /** If a findBy is provided, you can't pass a record option */
    record?: never;
} | {
    /**
     * If a record is provided, you can't pass a findBy option
     **/
    findBy?: never;
    /** A record for this form to act on; will be merged with the default values */
    record: AutoFormRecordType<ActionFunc>;
} : ActionFunc extends AnyUpsertAction ? {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
    /** If a findBy is provided, you can't pass a record option */
    record?: never;
} | {
    /**
     * If a record is provided, you can't pass a findBy option
     **/
    findBy?: never;
    /** A record for this form to act on; will be merged with the default values */
    record?: AutoFormRecordType<ActionFunc>;
} : {
    /** This action doesn't run against existing records, so you can't pass a findBy option */
    findBy?: never;
    /** This action doesn't operate with a record, so you can't pass a record option */
    record?: never;
});
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export declare const useFormFields: (metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined | null, options: {
    include?: string[];
    exclude?: string[];
}) => readonly {
    path: string;
    metadata: FieldMetadata;
}[];
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export declare const useAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc>) => {
    select?: GivenOptions["select"];
    metadata: ModelWithOneActionMetadata | GlobalActionMetadata | undefined;
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
    pauseExistingRecordLookup: boolean;
    isLoading: boolean;
    originalFormMethods: UseFormReturn<any, any>;
};
export {};
