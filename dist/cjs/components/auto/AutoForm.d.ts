import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { ActionMetadata, FieldMetadata } from "../../metadata.js";
import type { RecordIdentifier } from "../../useActionForm.js";
import type { OptionsType } from "../../utils.js";
/** The props that any <AutoForm/> component accepts */
export type AutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]> = {
    /** Which action this fom will run on submit */
    action: ActionFunc;
    /** Which record this action will act on */
    record?: RecordIdentifier;
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    include?: (keyof Options["select"])[];
    /** An allowlist of fields to render within the form. Only these fields will be rendered as inputs. */
    fields?: (keyof Options["select"])[];
    /** A denylist of fields to render within the form. Every field except these fields will be rendered as inputs. */
    exclude?: string[];
    /** The label to use for the submit button at the bottom of the form */
    submitLabel?: ReactNode;
    /** What to show the user once the form has been submitted successfully */
    successContent?: ReactNode;
};
/**
 * React hook for getting the validation schema for a list of fields
 */
export declare const useValidationResolver: (metadata: ActionMetadata | undefined) => import("react-hook-form").Resolver<{
    [x: string]: any;
}> | undefined;
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export declare const useFormFields: (metadata: ActionMetadata | undefined, options: AutoFormProps<any, any, any, any>) => (readonly [string, FieldMetadata])[];
