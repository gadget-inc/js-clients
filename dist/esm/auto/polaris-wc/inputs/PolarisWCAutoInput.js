import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisWCAutoRichTextInput } from "./LazyLoadedPolarisWCAutoRichTextInput.js";
import { PolarisWCAutoBooleanInput } from "./PolarisWCAutoBooleanInput.js";
import { PolarisWCAutoDateTimePicker } from "./PolarisWCAutoDateTimePicker.js";
import { PolarisWCAutoEncryptedStringInput } from "./PolarisWCAutoEncryptedStringInput.js";
import { PolarisWCAutoEnumInput } from "./PolarisWCAutoEnumInput.js";
import { PolarisWCAutoFileInput } from "./PolarisWCAutoFileInput.js";
import { PolarisWCAutoIdInput } from "./PolarisWCAutoIdInput.js";
import { PolarisWCAutoJSONInput } from "./PolarisWCAutoJSONInput.js";
import { PolarisWCAutoNumberInput } from "./PolarisWCAutoNumberInput.js";
import { PolarisWCAutoPasswordInput } from "./PolarisWCAutoPasswordInput.js";
import { PolarisWCAutoRolesInput } from "./PolarisWCAutoRolesInput.js";
import { PolarisWCAutoTextInput } from "./PolarisWCAutoTextInput.js";
import { PolarisWCAutoBelongsToInput } from "./relationships/PolarisWCAutoBelongsToInput.js";
import { PolarisWCAutoHasManyInput } from "./relationships/PolarisWCAutoHasManyInput.js";
import { PolarisWCAutoHasManyThroughInput } from "./relationships/PolarisWCAutoHasManyThroughInput.js";
import { PolarisWCAutoHasOneInput } from "./relationships/PolarisWCAutoHasOneInput.js";
/**
 * An auto-generated input based on the given field types used within AutoForm.
 * Uses Polaris Web Components for rendering.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoInput field="stringField" />
 *   <AutoInput field="booleanField" />
 *   <AutoInput field="numberField" label="Count" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the field.
 * @param props.label - Label of the component.
 * @returns The AutoInput component.
 */
export const PolarisWCAutoInput = autoInput((props) => {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case FieldType.Id: {
            return React.createElement(PolarisWCAutoIdInput, { field: props.field, label: props.label });
        }
        case FieldType.String:
        case FieldType.Email:
        case FieldType.Color:
        case FieldType.Url: {
            return React.createElement(PolarisWCAutoTextInput, { field: props.field, label: props.label });
        }
        case FieldType.Number: {
            return React.createElement(PolarisWCAutoNumberInput, { field: props.field, label: props.label });
        }
        case FieldType.EncryptedString: {
            return React.createElement(PolarisWCAutoEncryptedStringInput, { field: props.field, label: props.label });
        }
        case FieldType.Password: {
            return React.createElement(PolarisWCAutoPasswordInput, { field: props.field, label: props.label });
        }
        case FieldType.Boolean: {
            return React.createElement(PolarisWCAutoBooleanInput, { field: props.field, label: props.label });
        }
        case FieldType.DateTime: {
            return React.createElement(PolarisWCAutoDateTimePicker, { field: props.field, label: props.label });
        }
        case FieldType.Json: {
            return React.createElement(PolarisWCAutoJSONInput, { field: props.field, label: props.label });
        }
        case FieldType.Enum: {
            return React.createElement(PolarisWCAutoEnumInput, { field: props.field, label: props.label });
        }
        case FieldType.File: {
            return React.createElement(PolarisWCAutoFileInput, { field: props.field, label: props.label });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(PolarisWCAutoRolesInput, { field: props.field, label: props.label });
        }
        case FieldType.RichText: {
            return React.createElement(PolarisWCAutoRichTextInput, { field: props.field, label: props.label });
        }
        case FieldType.BelongsTo: {
            return React.createElement(PolarisWCAutoBelongsToInput, { field: props.field, label: props.label });
        }
        case FieldType.HasOne: {
            return React.createElement(PolarisWCAutoHasOneInput, { field: props.field, label: props.label });
        }
        case FieldType.HasMany: {
            return React.createElement(PolarisWCAutoHasManyInput, { field: props.field, label: props.label });
        }
        case FieldType.HasManyThrough: {
            return React.createElement(PolarisWCAutoHasManyThroughInput, { field: props.field, label: props.label });
        }
        // Not rendered as an input
        case FieldType.Money:
        case FieldType.Vector:
        case FieldType.Computed:
        default:
            return null;
    }
});
//# sourceMappingURL=PolarisWCAutoInput.js.map