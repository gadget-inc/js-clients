import React from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoInput: (elements: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button" | "Badge" | "Command" | "CommandInput" | "CommandLoading" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Calendar" | "Popover" | "PopoverTrigger" | "PopoverContent" | "ScrollArea" | "ScrollBar" | "Textarea">) => {
    AutoInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoRolesInput: import("../../AutoInput.js").AutoInputComponent<import("./ShadcnAutoRolesInput.js").AutoRolesInputProps>;
    AutoFileInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoEnumInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    }>;
    AutoJSONInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        id?: string | undefined;
        value?: Date | undefined;
        onChange?: ((value: Date) => void) | undefined;
        error?: string | undefined;
        includeTime?: boolean | undefined;
        hideTimePopover?: boolean | undefined;
        label?: string | undefined;
        datePickerProps?: Partial<import("./ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: string | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }>;
    AutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("../elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
    }>;
    AutoStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    }>;
    AutoIdInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    }>;
    AutoHiddenInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        value: any;
    }>;
    AutoTextAreaInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & import("../elements.js").TextareaProps>;
    AutoBelongsToInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
};
