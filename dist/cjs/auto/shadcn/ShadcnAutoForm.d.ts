import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ShadcnElements } from "./elements.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export declare const makeAutoForm: <Elements extends ShadcnElements>({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox, Badge, Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, Calendar, Popover, PopoverTrigger, PopoverContent, ScrollArea, ScrollBar, Textarea, }: Elements) => {
    AutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: {
        action: ActionFunc;
        record?: any;
        include?: string[] | undefined;
        exclude?: string[] | undefined;
        defaultValues?: (ActionFunc["variablesType"] & Record<string, unknown>) | undefined;
        submitLabel?: React.ReactNode;
        successContent?: React.ReactNode;
        title?: string | false | undefined;
        select?: GivenOptions["select"] | undefined;
        onSuccess?: ((record: import("../../use-action-form/types.js").UseActionFormHookStateData<ActionFunc>) => void) | undefined;
        onFailure?: ((error: Error | import("react-hook-form/dist/types/errors.js").FieldErrors<ActionFunc["variablesType"]>) => void) | undefined;
        children?: React.ReactNode;
        debug?: boolean | undefined;
    } & (ActionFunc extends import("../../use-action-form/types.js").AnyActionWithId<GivenOptions> ? {
        findBy?: import("../../use-action-form/types.js").RecordIdentifier | undefined;
    } : {}) & import("./elements.js").BaseProps) => React.JSX.Element;
    AutoInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
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
    AutoBelongsToInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoHasManyInput: import("../AutoInput.js").AutoInputComponent<import("../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoRolesInput: import("../AutoInput.js").AutoInputComponent<import("./inputs/ShadcnAutoRolesInput.js").AutoRolesInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEnumInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoJSONInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>> & {
        selectPaths?: string[] | undefined;
    }>;
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
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoPasswordInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoBooleanInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("./elements.js").CheckboxProps> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEncryptedStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoStringInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoNumberInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form/dist/types/form.js").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoIdInput: import("../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
};
