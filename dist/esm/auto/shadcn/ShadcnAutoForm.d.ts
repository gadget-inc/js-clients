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
    AutoInput: import("./index.js").AutoInputComponent<import("./index.js").AutoInputProps>;
    AutoBooleanInput: import("./index.js").AutoInputComponent<{
        className?: string | undefined;
    } & import("./index.js").AutoBooleanInputProps & Partial<Omit<import("./elements.js").CheckboxProps, "value" | "onChange" | "checked" | "defaultChecked" | "onCheckedChange">>>;
    AutoDateTimePicker: import("./index.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<Omit<import("./index.js").DatePickerProps, "mode" | "selected" | "onSelect">> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
        } | undefined;
    } & import("./index.js").AutoDateTimeInputProps>;
    AutoEmailInput: import("./index.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoEncryptedStringInput: import("./index.js").AutoInputComponent<import("./index.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">>;
    AutoEnumInput: import("./index.js").AutoInputComponent<import("./index.js").AutoEnumInputProps>;
    AutoFileInput: import("./index.js").AutoInputComponent<import("./index.js").AutoFileInputProps & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoHiddenInput: import("./index.js").AutoInputComponent<import("./index.js").AutoHiddenInputProps>;
    AutoIdInput: import("./index.js").AutoInputComponent<import("./index.js").AutoIdInputProps>;
    AutoJSONInput: import("./index.js").AutoInputComponent<import("./index.js").AutoJSONInputProps & Partial<Omit<React.HTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "defaultChecked">>>;
    AutoNumberInput: import("./index.js").AutoInputComponent<import("./index.js").AutoNumberInputProps & Omit<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type" | "step">>;
    AutoPasswordInput: import("./index.js").AutoInputComponent<import("./index.js").AutoPasswordInputProps & Omit<import("./index.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">, "type" | "disabled" | "suffix" | "placeholder">>;
    AutoRichTextInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRichTextInputProps>;
    AutoRolesInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRolesInputProps>;
    AutoStringInput: import("./index.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoTextAreaInput: import("./index.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Omit<import("./elements.js").TextareaProps, "value" | "onChange">>;
    AutoUrlInput: import("./index.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("./index.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>>;
    AutoBelongsToInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipInputProps>;
    AutoBelongsToForm: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("./index.js").AutoInputComponent<Omit<import("./index.js").AutoRelationshipFormProps, "recordFilter">>;
    AutoHasManyThroughForm: import("./index.js").AutoInputComponent<import("./index.js").AutoRelationshipFormProps>;
    AutoHasManyThroughJoinModelForm: (props: {
        children?: React.ReactNode;
    }) => React.JSX.Element;
    AutoHasOneForm: import("./index.js").AutoInputComponent<Omit<import("./index.js").AutoRelationshipFormProps, "recordFilter">>;
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
