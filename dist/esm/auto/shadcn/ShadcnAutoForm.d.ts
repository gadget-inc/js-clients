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
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: React.ReactNode;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
        label?: React.ReactNode;
    } & Partial<import("./elements.js").CheckboxProps>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value?: Date | undefined) => void) | undefined;
        /**
         * Renders a form for an action on a model automatically using Shadcn
         */
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: React.ReactNode;
        datePickerProps?: Partial<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoEmailInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
        label?: React.ReactNode;
    }>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
    }>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
    } & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: React.ReactNode;
    }>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
        label?: React.ReactNode;
    }>;
    AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<import("../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & import("./elements.js").TextareaProps>;
    AutoUrlInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
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
    SubmitErrorBanner: (props: any) => React.JSX.Element | null;
    SubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => React.JSX.Element;
    SubmitSuccessfulBanner: (props: any) => React.JSX.Element | null;
};
export {};
