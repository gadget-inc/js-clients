import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../metadata.js";
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
    const { fieldState: { error }, } = useController({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    return (React.createElement(FormControl, { ...props.field, error: !!error },
        React.createElement(FormGroup, null,
            React.createElement(FormControlLabel, { label: props.field.name, control: props.children })),
        error && React.createElement(FormHelperText, null, error?.message)));
};
export const MUIFormInput = (props) => {
    const { field, fieldState: { error }, } = useController({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    const config = props.field.configuration;
    switch (config.fieldType) {
        case FieldType.String:
        case FieldType.Number:
        case FieldType.Email:
        case FieldType.Password:
        case FieldType.EncryptedString:
        case FieldType.Color:
        case FieldType.Url: {
            return (React.createElement(TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: !!error, helperText: error?.message }));
        }
        case FieldType.Boolean: {
            return (React.createElement(MUIAutoFormControl, { ...props },
                React.createElement(Checkbox, { ...field })));
        }
        case FieldType.DateTime: {
            return (React.createElement(MUIAutoFormControl, { ...props }, config.includeTime ? React.createElement(DateTimePicker, { ...field }) : React.createElement(DatePicker, { ...field })));
        }
        case FieldType.Json: {
            return React.createElement(MUIJSONInput, { label: props.field.name, ...field });
        }
        case FieldType.Enum: {
            const config = props.field.configuration;
            return (React.createElement(Autocomplete, { disablePortal: true, multiple: config.allowMultiple, options: config.options.map((option) => ({ id: option.name, label: option.name })), ...field, renderInput: (params) => React.createElement(TextField, { ...params, label: props.field.name }) }));
        }
        case FieldType.File: {
            return (React.createElement(MUIAutoFormControl, { ...props },
                React.createElement(MUIFileInput, { label: props.field.name, ...field })));
        }
        case FieldType.RoleAssignments: {
            return React.createElement(MUIRolesCombobox, { label: props.field.name, ...field });
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
            throw new Error(`Unsupported field type for MUI AutoForm: ${props.field.fieldType}`);
        }
    }
};
//# sourceMappingURL=MUIFormInput.js.map