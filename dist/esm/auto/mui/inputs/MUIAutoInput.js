import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIFileInput } from "./MUIFileInput.js";
import { MUIJSONInput } from "./MUIJSONInput.js";
import { MUIRolesCombobox } from "./MUIRolesCombobox.js";
const FieldTypeToInputType = {
    [FieldType.Number]: "number",
    [FieldType.Email]: "email",
    [FieldType.Password]: "password",
    [FieldType.EncryptedString]: "password",
};
export const MUIAutoFormControl = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { fieldState: { error }, } = useController({
        name: path,
        rules: { required: metadata.requiredArgumentForInput },
    });
    return (React.createElement(FormControl, { ...metadata, error: !!error },
        React.createElement(FormGroup, null,
            React.createElement(FormControlLabel, { label: metadata.name, control: props.children })),
        error && React.createElement(FormHelperText, null, error?.message)));
};
export const MUIAutoInput = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { field: fieldProps, fieldState: { error }, } = useController({
        name: path,
        rules: { required: metadata.requiredArgumentForInput },
    });
    const config = metadata.configuration;
    switch (config.fieldType) {
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Password:
        case FieldType.EncryptedString:
        case FieldType.Color:
        case FieldType.Url: {
            return (React.createElement(TextField, { label: metadata.name, type: FieldTypeToInputType[metadata.fieldType], autoComplete: "off", ...fieldProps, error: !!error, helperText: error?.message }));
        }
        case FieldType.Boolean: {
            return (React.createElement(MUIAutoFormControl, { ...props },
                React.createElement(Checkbox, { ...fieldProps })));
        }
        case FieldType.DateTime: {
            return (React.createElement(MUIAutoFormControl, { ...props }, config.includeTime ? React.createElement(DateTimePicker, { ...fieldProps }) : React.createElement(DatePicker, { ...fieldProps })));
        }
        case FieldType.Json: {
            return React.createElement(MUIJSONInput, { label: metadata.name, ...fieldProps });
        }
        case FieldType.Enum: {
            const config = metadata.configuration;
            return (React.createElement(Autocomplete, { disablePortal: true, multiple: config.allowMultiple, options: config.options.map((option) => ({ id: option.name, label: option.name })), ...fieldProps, renderInput: (params) => React.createElement(TextField, { ...params, label: metadata.name }) }));
        }
        case FieldType.File: {
            return (React.createElement(MUIAutoFormControl, { ...props },
                React.createElement(MUIFileInput, { label: metadata.name, ...fieldProps })));
        }
        case FieldType.RoleAssignments: {
            return React.createElement(MUIRolesCombobox, { label: metadata.name, ...fieldProps });
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
        // Not rendered as an input
        case FieldType.Vector:
        case FieldType.Computed:
            return null;
        default: {
            throw new Error(`Unsupported field type for MUI AutoForm: ${metadata.fieldType}`);
        }
    }
};
//# sourceMappingURL=MUIAutoInput.js.map