import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ShadcnElements } from "./elements.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export declare const makeAutoForm: <Elements extends ShadcnElements>({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox, Badge, Command, CommandInput, CommandItem, CommandList, CommandLoading, CommandEmpty, CommandGroup, Calendar, Popover, PopoverTrigger, PopoverContent, ScrollArea, ScrollBar, Textarea, }: Elements) => {
    AutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & import("./elements.js").BaseProps) => React.JSX.Element;
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
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: string | undefined;
    }>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
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
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("./elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("../../useActionForm.js").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
};
