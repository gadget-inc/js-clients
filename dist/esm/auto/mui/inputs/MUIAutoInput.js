import { Autocomplete, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoBooleanInput } from "./MUIAutoBooleanInput.js";
import MUIAutoDateTimePicker from "./MUIAutoDateTimePicker.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";
import { MUIAutoFileInput } from "./MUIAutoFileInput.js";
import { MUIAutoJSONInput } from "./MUIAutoJSONInput.js";
import { MUIAutoPasswordInput } from "./MUIAutoPasswordInput.js";
import { MUIAutoRelationshipInput } from "./MUIAutoRelationshipInput.js";
import { MUIAutoRolesInput } from "./MUIAutoRolesInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
export const MUIAutoFormControl = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { fieldState: { error }, } = useController({
        name: path,
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
        case FieldType.Color:
        case FieldType.Url: {
            return React.createElement(MUIAutoTextInput, { field: props.field });
        }
        case FieldType.EncryptedString: {
            return React.createElement(MUIAutoEncryptedStringInput, { field: props.field });
        }
        case FieldType.Password: {
            return React.createElement(MUIAutoPasswordInput, { field: props.field });
        }
        case FieldType.Boolean: {
            return React.createElement(MUIAutoBooleanInput, { field: props.field });
        }
        case FieldType.DateTime: {
            return React.createElement(MUIAutoDateTimePicker, { field: props.field });
        }
        case FieldType.Json: {
            return React.createElement(MUIAutoJSONInput, { field: props.field });
        }
        case FieldType.Enum: {
            const config = metadata.configuration;
            return (React.createElement(Autocomplete, { disablePortal: true, multiple: config.allowMultiple, options: config.options.map((option) => ({ id: option.name, label: option.name })), ...fieldProps, renderInput: (params) => React.createElement(TextField, { ...params, label: metadata.name }) }));
        }
        case FieldType.File: {
            return React.createElement(MUIAutoFileInput, { field: props.field });
        }
        case FieldType.RoleAssignments: {
            return React.createElement(MUIAutoRolesInput, { field: props.field });
        }
        case FieldType.HasMany:
        case FieldType.HasOne:
        case FieldType.BelongsTo: {
            return React.createElement(MUIAutoRelationshipInput, { field: props.field });
        }
        case FieldType.HasManyThrough: {
            // TODO: implement HasManyThrough input with join model record create/delete/update
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