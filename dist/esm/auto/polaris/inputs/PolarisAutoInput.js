import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisAutoRichTextInput } from "./LazyLoadedPolarisAutoRichTextInput.js";
import { PolarisAutoBooleanInput } from "./PolarisAutoBooleanInput.js";
import { PolarisAutoDateTimePicker } from "./PolarisAutoDateTimePicker.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
import { PolarisAutoEnumInput } from "./PolarisAutoEnumInput.js";
import { PolarisAutoFileInput } from "./PolarisAutoFileInput.js";
import { PolarisAutoIdInput } from "./PolarisAutoIdInput.js";
import { PolarisAutoJSONInput } from "./PolarisAutoJSONInput.js";
import { PolarisAutoNumberInput } from "./PolarisAutoNumberInput.js";
import { PolarisAutoPasswordInput } from "./PolarisAutoPasswordInput.js";
import { PolarisAutoRolesInput } from "./PolarisAutoRolesInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
import { PolarisAutoBelongsToInput } from "./relationships/PolarisAutoBelongsToInput.js";
import { PolarisAutoHasManyInput } from "./relationships/PolarisAutoHasManyInput.js";
import { PolarisAutoHasManyThroughInput } from "./relationships/PolarisAutoHasManyThroughInput.js";
import { PolarisAutoHasOneInput } from "./relationships/PolarisAutoHasOneInput.js";
export const PolarisAutoInput = autoInput((props) => {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case FieldType.Id: {
            return React.createElement(PolarisAutoIdInput, { field: props.field, label: props.label });
        }
        case FieldType.String:
        case FieldType.Email:
        case FieldType.Color:
        case FieldType.Url: {
            return React.createElement(PolarisAutoTextInput, { field: props.field, label: props.label });
        }
        case FieldType.Number: {
            return React.createElement(PolarisAutoNumberInput, { field: props.field, label: props.label });
        }
        case FieldType.EncryptedString: {
            return React.createElement(PolarisAutoEncryptedStringInput, { field: props.field, label: props.label });
        }
        case FieldType.Password: {
            return React.createElement(PolarisAutoPasswordInput, { field: props.field, label: props.label });
        }
        case FieldType.Boolean: {
            return React.createElement(PolarisAutoBooleanInput, { field: props.field, label: props.label });
        }
        case FieldType.DateTime: {
            return React.createElement(PolarisAutoDateTimePicker, { field: props.field, label: props.label });
        }
        case FieldType.Json: {
            return React.createElement(PolarisAutoJSONInput, { field: props.field, label: props.label });
        }
        case FieldType.Enum: {
            return React.createElement(PolarisAutoEnumInput, { field: props.field, label: props.label });
        }
        case FieldType.File: {
            return React.createElement(PolarisAutoFileInput, { field: props.field, label: props.label });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(PolarisAutoRolesInput, { field: props.field, label: props.label });
        }
        case FieldType.BelongsTo: {
            return React.createElement(PolarisAutoBelongsToInput, { field: props.field, label: props.label });
        }
        case FieldType.HasOne: {
            return React.createElement(PolarisAutoHasOneInput, { field: props.field, label: props.label });
        }
        case FieldType.HasMany: {
            return React.createElement(PolarisAutoHasManyInput, { field: props.field, label: props.label });
        }
        case FieldType.HasManyThrough: {
            return React.createElement(PolarisAutoHasManyThroughInput, { field: props.field, label: props.label });
        }
        case FieldType.RichText: {
            return React.createElement(PolarisAutoRichTextInput, { field: props.field, label: props.label });
        }
        case FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        // Not rendered as an input
        case FieldType.Vector:
        case FieldType.Computed:
            return null;
        default: {
            throw new Error(`Unsupported field type for Polaris AutoForm: ${metadata.fieldType}`);
        }
    }
});
//# sourceMappingURL=PolarisAutoInput.js.map