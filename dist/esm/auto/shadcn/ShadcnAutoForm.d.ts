import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ShadcnElements } from "./elements.js";
type FormContainerT = React.ForwardRefExoticComponent<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>>;
export type ShadcnAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<FormContainerT>, "action" | "defaultValue">;
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export declare const makeAutoForm: <Elements extends ShadcnElements>(elements: Elements) => {
    AutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: ShadcnAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => React.JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoInputProps>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        className?: string | undefined;
    } & import("../shared/AutoInputTypes.js").AutoBooleanInputProps & Partial<import("./elements.js").CheckboxProps>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
            placeholder?: string | undefined;
        } | undefined;
    } & import("../shared/AutoInputTypes.js").AutoDateTimeInputProps>;
    AutoEmailInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        className?: string | undefined;
        suffix?: React.ReactNode;
    }>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEnumInputProps>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoFileInputProps & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoHiddenInputProps>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoIdInputProps>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoJSONInputProps & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoNumberInputProps & {
        className?: string | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoPasswordInputProps>;
    AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoRolesInputProps>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & import("./elements.js").TextareaProps>;
    AutoUrlInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoBelongsToForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoHasManyThroughForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyThroughJoinModelForm: (props: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    AutoHasOneForm: import("../AutoInput.js").AutoInputComponent<Omit<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoSubmit: (props: {
        children?: React.ReactNode;
        isSubmitting?: boolean | undefined;
        className?: string | undefined;
    } & import("./elements.js").ButtonProps) => React.JSX.Element;
    SubmitErrorBanner: (props: import("./elements.js").AlertProps) => React.JSX.Element | null;
    SubmitResultBanner: (props: {
        successBannerProps?: import("./elements.js").AlertProps | undefined;
        errorBannerProps?: import("./elements.js").AlertProps | undefined;
    }) => React.JSX.Element;
    SubmitSuccessfulBanner: (props: import("./elements.js").AlertProps) => React.JSX.Element | null;
};
export {};
