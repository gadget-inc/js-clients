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
    AutoJSONInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoJSONInputProps & Partial<Omit<React.HTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "defaultChecked">>>;
    AutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<{
        id?: string | undefined;
        datePickerProps?: Partial<Omit<import("./ShadcnAutoDateTimePicker.js").DatePickerProps, "mode" | "selected" | "onSelect">> | undefined;
        timePickerProps?: {
            label?: React.ReactNode;
        } | undefined;
    } & import("../../shared/AutoInputTypes.js").AutoDateTimeInputProps>;
    AutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoPasswordInputProps & Omit<import("../../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">, "type" | "disabled" | "suffix" | "placeholder">>;
    AutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<{
        className?: string | undefined;
    } & import("../../shared/AutoInputTypes.js").AutoBooleanInputProps & Partial<Omit<import("../elements.js").CheckboxProps, "value" | "onChange" | "checked" | "defaultChecked" | "onCheckedChange">>>;
    AutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoEncryptedStringInputProps & {
        suffix?: React.ReactNode;
    } & Omit<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type">>;
    AutoStringInput: React.ComponentType<import("./ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
    AutoEmailInput: React.ComponentType<import("./ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
    AutoUrlInput: React.ComponentType<import("./ShadcnAutoStringInput.js").ShadcnAutoStringInputProps>;
    AutoNumberInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoNumberInputProps & Omit<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">>, "type" | "step">>;
    AutoIdInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoIdInputProps>;
    AutoHiddenInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoInputTypes.js").AutoHiddenInputProps>;
    AutoTextAreaInput: import("../../AutoInput.js").AutoInputComponent<{
        suffix?: React.ReactNode;
    } & import("../../shared/AutoInputTypes.js").AutoTextInputProps & Omit<import("../elements.js").TextareaProps, "value" | "onChange">>;
    AutoRichTextInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
    AutoBelongsToInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasManyThroughInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
    AutoHasOneInput: import("../../AutoInput.js").AutoInputComponent<import("../../interfaces/AutoRelationshipInputProps.js").AutoRelationshipInputProps>;
};
