import { Checkbox, TextField } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisDateTimePicker } from "../PolarisDateTimePicker.js";
import { PolarisFileInput } from "../PolarisFileInput.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
import { PolarisJSONInput } from "../PolarisJSONInput.js";
import { PolarisRolesCombobox } from "../PolarisRolesCombobox.js";
import { PolarisBelongsToInput } from "./PolarisBelongsToInput.js";
const FieldTypeToInputType = {
    [FieldType.Number]: "number",
    [FieldType.Email]: "email",
    [FieldType.Password]: "password",
    [FieldType.EncryptedString]: "password",
};
export const PolarisAutoInput = (props) => {
    const { path, fieldMetadata } = useFieldMetadata(props.field);
    const { field: fieldProps, fieldState: { error }, } = useController({
        name: path,
        rules: { required: fieldMetadata.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    const config = fieldMetadata.configuration;
    switch (config.fieldType) {
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Password:
        case FieldType.EncryptedString:
        case FieldType.Color:
        case FieldType.Url: {
            return (React.createElement(TextField, { label: fieldMetadata.name, type: FieldTypeToInputType[fieldMetadata.fieldType], autoComplete: "off", ...field, error: error?.message }));
        }
        case FieldType.Boolean: {
            return React.createElement(Checkbox, { label: fieldMetadata.name, ...field, error: error?.message });
        }
        case FieldType.DateTime: {
            return (React.createElement(PolarisDateTimePicker, { dateLabel: fieldMetadata.name, includeTime: config.includeTime, ...field, error: error?.message }));
        }
        case FieldType.Json: {
            return React.createElement(PolarisJSONInput, { label: fieldMetadata.name, multiline: 4, monospaced: true, autoComplete: "off", ...field });
        }
        case FieldType.Enum: {
            const config = fieldMetadata.configuration;
            return (React.createElement(PolarisFixedOptionsCombobox, { label: fieldMetadata.name, options: config.options.map((option) => ({ value: option.name, label: option.name })), allowMultiple: config.allowMultiple, ...field }));
        }
        case FieldType.File: {
            return React.createElement(PolarisFileInput, { label: fieldMetadata.name, ...field });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(PolarisRolesCombobox, { label: fieldMetadata.name, ...field });
        }
        case FieldType.HasMany:
        case FieldType.HasManyThrough:
        case FieldType.HasOne:
        case FieldType.BelongsTo: {
            return React.createElement(PolarisBelongsToInput, { field: fieldMetadata.apiIdentifier });
        }
        case FieldType.RichText: {
            // TODO: implement rich text input
            return null;
        }
        case FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        case FieldType.Vector: {
            return null;
        }
        default: {
            throw new Error(`Unsupported field type for Polaris AutoForm: ${fieldMetadata.fieldType}`);
        }
    }
};
//# sourceMappingURL=PolarisAutoInput.js.map