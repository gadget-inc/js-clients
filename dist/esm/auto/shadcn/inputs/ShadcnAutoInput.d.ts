import React, { type ReactNode } from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoInput: (elements: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button" | "Badge" | "Command" | "CommandInput" | "CommandLoading" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Calendar" | "Popover" | "PopoverTrigger" | "PopoverContent" | "ScrollArea" | "ScrollBar" | "Textarea" | "Avatar" | "AvatarImage" | "AvatarFallback">) => {
    AutoInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: ReactNode;
    }>;
    AutoRolesInput: import("../../AutoInput.js").AutoInputComponent<import("./ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoFileInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
    } & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoEnumInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
    }>;
    AutoJSONInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value: Date) => void) | undefined;
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: React.ReactNode;
        datePickerProps?: Partial<import("./ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: React.ReactNode;
    }>;
    AutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: React.ReactNode;
    } & Partial<import("../elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
        label?: React.ReactNode;
    }>;
    AutoStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoEmailInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoUrlInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: React.ReactNode;
    }>;
    AutoHiddenInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoTextAreaInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: React.ReactNode;
        suffix?: React.ReactNode;
    } & import("../elements.js").TextareaProps>;
    AutoRichTextInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoBelongsToInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
};
