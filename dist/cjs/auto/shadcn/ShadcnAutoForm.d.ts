import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ShadcnElements } from "./elements.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export declare const makeAutoForm: <Elements extends ShadcnElements>(elements: Elements) => {
    AutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>, "action" | "defaultValue">) => React.JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoSubmit: (props: {
        children?: React.ReactNode;
        isSubmitting?: boolean | undefined;
        className?: string | undefined;
    } & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>) => React.JSX.Element;
    SubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => React.JSX.Element;
    SubmitSuccessfulBanner: (props: any) => React.JSX.Element | null;
    SubmitErrorBanner: (props: any) => React.JSX.Element | null;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
    }>;
    AutoFileInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
    } & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value: Date) => void) | undefined;
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: string | undefined;
        datePickerProps?: Partial<import("./inputs/ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: string | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("./elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoHiddenInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoTextAreaInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & import("./elements.js").TextareaProps>;
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoBelongsToForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasManyThroughForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
    AutoHasOneForm: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipFormProps>;
};
