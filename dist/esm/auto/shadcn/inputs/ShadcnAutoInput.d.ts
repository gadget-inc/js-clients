import React from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoInput: (elements: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button" | "Badge" | "Command" | "CommandInput" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Calendar" | "Popover" | "PopoverTrigger" | "PopoverContent" | "ScrollArea" | "ScrollBar" | "Textarea">) => {
    AutoInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoBelongsToInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoHasManyInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoRolesInput: import("../../AutoInput.js").AutoInputComponent<import("./ShadcnAutoRolesInput.js").AutoRolesInputProps & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEnumInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoJSONInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
    } & Partial<React.HTMLAttributes<HTMLTextAreaElement>> & {
        selectPaths?: string[] | undefined;
    }>;
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
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        label?: string | undefined;
    } & Partial<import("../elements.js").CheckboxProps> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
        suffix?: React.ReactNode;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoStringInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        label?: string | undefined;
        suffix?: React.ReactNode;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
        selectPaths?: string[] | undefined;
    }>;
    AutoNumberInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        control?: import("react-hook-form").Control<any> | undefined;
        className?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
    AutoIdInput: import("../../AutoInput.js").AutoInputComponent<{
        field: string;
        label?: string | undefined;
    } & {
        selectPaths?: string[] | undefined;
    }>;
};
