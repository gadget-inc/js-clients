import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { makeShadcnAutoBooleanInput } from "./ShadcnAutoBooleanInput.js";
import { makeShadcnAutoDateTimePicker } from "./ShadcnAutoDateTimePicker.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
import { makeShadcnAutoEnumInput } from "./ShadcnAutoEnumInput.js";
import { makeShadcnAutoFileInput } from "./ShadcnAutoFileInput.js";
import { makeShadcnAutoHiddenInput } from "./ShadcnAutoHiddenInput.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoJSONInput } from "./ShadcnAutoJSONInput.js";
import { makeShadcnAutoNumberInput } from "./ShadcnAutoNumberInput.js";
import { makeShadcnAutoPasswordInput } from "./ShadcnAutoPasswordInput.js";
import { makeShadcnAutoRolesInput } from "./ShadcnAutoRolesInput.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";
import { makeShadcnAutoTextAreaInput } from "./ShadcnAutoTextAreaInput.js";
import { makeShadcnAutoRichTextInput } from "./ShadcnautoRichTextInput.js";
import { makeShadcnAutoBelongsToInput } from "./relationships/ShadcnAutoBelongsToInput.js";
import { makeShadcnAutoHasManyInput } from "./relationships/ShadcnAutoHasManyInput.js";
import { makeShadcnAutoHasManyThroughInput } from "./relationships/ShadcnAutoHasManyThroughInput.js";
import { makeShadcnAutoHasOneInput } from "./relationships/ShadcnAutoHasOneInput.js";
/**
 * Make the Shadcn components for the auto input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto input
 */
export const makeShadcnAutoInput = (elements) => {
    const AutoIdInput = makeShadcnAutoIdInput(elements);
    const AutoStringInput = makeShadcnAutoStringInput(elements);
    const AutoTextAreaInput = makeShadcnAutoTextAreaInput(elements);
    const AutoNumberInput = makeShadcnAutoNumberInput(elements);
    const AutoEncryptedStringInput = makeShadcnAutoEncryptedStringInput(elements);
    const AutoPasswordInput = makeShadcnAutoPasswordInput(elements);
    const AutoBooleanInput = makeShadcnAutoBooleanInput(elements);
    const AutoBelongsToInput = makeShadcnAutoBelongsToInput(elements);
    const AutoHasManyInput = makeShadcnAutoHasManyInput(elements);
    const AutoHasOneInput = makeShadcnAutoHasOneInput(elements);
    const AutoRolesInput = makeShadcnAutoRolesInput(elements);
    const AutoEnumInput = makeShadcnAutoEnumInput(elements);
    const AutoDateTimePicker = makeShadcnAutoDateTimePicker(elements);
    const AutoJSONInput = makeShadcnAutoJSONInput(elements);
    const AutoRichTextInput = makeShadcnAutoRichTextInput(elements);
    const AutoFileInput = makeShadcnAutoFileInput(elements);
    const AutoHasManyThroughInput = makeShadcnAutoHasManyThroughInput(elements);
    const AutoHiddenInput = makeShadcnAutoHiddenInput(elements);
    const AutoInput = autoInput(function AutoInput(props) {
        const { metadata } = useFieldMetadata(props.field);
        const config = metadata.configuration;
        switch (config.fieldType) {
            case FieldType.Id:
                return React.createElement(AutoIdInput, { ...props });
            case FieldType.String:
            case FieldType.Email:
            case FieldType.Color:
            case FieldType.Url:
                return React.createElement(AutoStringInput, { ...props });
            case FieldType.Number:
                return React.createElement(AutoNumberInput, { ...props });
            case FieldType.DateTime:
                return React.createElement(AutoDateTimePicker, { ...props });
            case FieldType.Json:
                return React.createElement(AutoJSONInput, { ...props });
            case FieldType.Enum:
                return React.createElement(AutoEnumInput, { ...props });
            case FieldType.RoleAssignments:
                return React.createElement(AutoRolesInput, { ...props });
            case FieldType.HasOne:
                return React.createElement(AutoHasOneInput, { ...props });
            case FieldType.RichText:
                return React.createElement(AutoRichTextInput, { ...props });
            case FieldType.File:
                return React.createElement(AutoFileInput, { ...props });
            case FieldType.HasMany:
                return React.createElement(AutoHasManyInput, { ...props });
            case FieldType.EncryptedString:
                return React.createElement(AutoEncryptedStringInput, { ...props });
            case FieldType.BelongsTo:
                return React.createElement(AutoBelongsToInput, { ...props });
            case FieldType.Password:
                return React.createElement(AutoPasswordInput, { ...props });
            case FieldType.Boolean:
                return React.createElement(AutoBooleanInput, { ...props });
            case FieldType.HasManyThrough:
                return React.createElement(AutoHasManyThroughInput, { ...props });
            // Not rendered as an input
            case FieldType.Money:
            case FieldType.Vector:
            case FieldType.Computed:
            default:
                return null;
        }
    });
    AutoInput.displayName = "AutoInput";
    return {
        AutoInput,
        AutoRolesInput,
        AutoFileInput,
        AutoEnumInput,
        AutoJSONInput,
        AutoDateTimePicker,
        AutoPasswordInput,
        AutoBooleanInput,
        AutoEncryptedStringInput,
        AutoStringInput,
        AutoEmailInput: AutoStringInput,
        AutoUrlInput: AutoStringInput,
        AutoNumberInput,
        AutoIdInput,
        AutoHiddenInput,
        AutoTextAreaInput,
        AutoRichTextInput,
        AutoBelongsToInput,
        AutoHasManyInput,
        AutoHasManyThroughInput,
        AutoHasOneInput,
    };
};
//# sourceMappingURL=ShadcnAutoInput.js.map