import { Checkbox, TextField } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../../metadata";
import { PolarisDateTimePicker } from "./PolarisDateTimePicker";
import { PolarisFileInput } from "./PolarisFileInput";
import { PolarisFixedOptionsCombobox } from "./PolarisFixedOptionsCombobox";
import { PolarisJSONInput } from "./PolarisJSONInput";
import { PolarisRolesCombobox } from "./PolarisRolesCombobox";
const FieldTypeToInputType = {
    [FieldType.Number]: "number",
    [FieldType.Email]: "email",
    [FieldType.Password]: "password",
    [FieldType.EncryptedString]: "password",
};
export const PolarisFormInput = (props) => {
    const { field: fieldProps, fieldState: { error }, } = useController({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    const config = props.field.configuration;
    switch (config.fieldType) {
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Password:
        case FieldType.EncryptedString:
        case FieldType.Color:
        case FieldType.Url: {
            return (React.createElement(TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: error?.message }));
        }
        case FieldType.Boolean: {
            return React.createElement(Checkbox, { label: props.field.name, ...field, error: error?.message });
        }
        case FieldType.DateTime: {
            return (React.createElement(PolarisDateTimePicker, { dateLabel: props.field.name, includeTime: config.includeTime, ...field, error: error?.message }));
        }
        case FieldType.Json: {
            return React.createElement(PolarisJSONInput, { label: props.field.name, multiline: 4, monospaced: true, autoComplete: "off", ...field });
        }
        case FieldType.Enum: {
            const config = props.field.configuration;
            return (React.createElement(PolarisFixedOptionsCombobox, { label: props.field.name, options: config.options.map((option) => ({ value: option.name, label: option.name })), allowMultiple: config.allowMultiple, ...field }));
        }
        case FieldType.File: {
            return React.createElement(PolarisFileInput, { label: props.field.name, ...field });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(PolarisRolesCombobox, { label: props.field.name, ...field });
        }
        case FieldType.HasMany:
        case FieldType.HasManyThrough:
        case FieldType.HasOne:
        case FieldType.BelongsTo: {
            // TODO: implement relationship field inputs
            return null;
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
            throw new Error(`Unsupported field type for Polaris AutoForm: ${props.field.fieldType}`);
        }
    }
};
//# sourceMappingURL=PolarisFormInput.js.map