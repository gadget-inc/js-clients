import React from "react";
import { type AutoInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
/**
 * Make the Shadcn components for the auto input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto input
 */
export declare const makeShadcnAutoInput: (elements: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button" | "Badge" | "Command" | "CommandInput" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Calendar" | "Popover" | "PopoverTrigger" | "PopoverContent" | "Textarea" | "Avatar" | "AvatarImage" | "AvatarFallback">) => {
    AutoInput: import("../../AutoInput.js").AutoInputComponent<AutoInputProps>;
    AutoRolesInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoRolesInputProps>;
    AutoFileInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoFileInputProps & React.HtmlHTMLAttributes<HTMLDivElement>>;
    AutoEnumInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoEnumInputProps>;
    AutoJSONInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoJSONInputProps & Partial<React.HTMLAttributes<HTMLTextAreaElement>>>;
    AutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<import("./ShadcnAutoDateTimePicker.js").DatePickerProps> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
            placeholder?: string | undefined;
        } | undefined;
    } & import("../../shared/AutoInputTypes.js").AutoDateTimeInputProps>;
    AutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoPasswordInputProps>;
    AutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
        className?: string | undefined;
    } & import("../../shared/AutoInputTypes.js").AutoBooleanInputProps & Partial<import("../elements.js").CheckboxProps>>;
    AutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        className?: string | undefined;
        suffix?: React.ReactNode;
    }>;
    AutoStringInput: import("../../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoEmailInput: import("../../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoUrlInput: import("../../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>>;
    AutoNumberInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoNumberInputProps & {
        className?: string | undefined;
    }>;
    AutoIdInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoIdInputProps>;
    AutoHiddenInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoHiddenInputProps>;
    AutoTextAreaInput: import("../../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & import("../elements.js").TextareaProps>;
    AutoRichTextInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoBelongsToInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
};
