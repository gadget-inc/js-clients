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
    } & import("../shared/AutoInputTypes.js").AutoBooleanInputProps & Partial<Omit<import("./elements.js").CheckboxProps, "value" | "onChange" | "checked" | "defaultChecked" | "onCheckedChange">>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<Omit<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps, "mode" | "selected" | "onSelect">> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
        } | undefined;
    } & import("../shared/AutoInputTypes.js").AutoDateTimeInputProps>;
    AutoEmailInput: React.ComponentType<import("./inputs/ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoEnumInputProps>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoFileInputProps & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoHiddenInputProps>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoIdInputProps>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoJSONInputProps & Partial<Omit<React.HTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "defaultChecked">>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoNumberInputProps & Omit<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type" | "step">>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoPasswordInputProps & Omit<import("../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">, "type" | "disabled" | "suffix" | "placeholder">>;
    AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoInputTypes.js").AutoRolesInputProps>;
    AutoStringInput: React.ComponentType<import("./inputs/ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../shared/AutoInputTypes.js").AutoTextInputProps & Omit<import("./elements.js").TextareaProps, "value" | "onChange">>;
    AutoUrlInput: React.ComponentType<import("./inputs/ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
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
