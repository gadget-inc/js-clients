"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIFormInput = exports.MUIAutoFormControl = void 0;
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_1 = require("../../../../metadata");
const MUIFileInput_1 = require("./MUIFileInput");
const MUIJSONInput_1 = require("./MUIJSONInput");
const MUIRolesCombobox_1 = require("./MUIRolesCombobox");
const FieldTypeToInputType = {
    [metadata_1.FieldType.Number]: "number",
    [metadata_1.FieldType.Email]: "email",
    [metadata_1.FieldType.Password]: "password",
    [metadata_1.FieldType.EncryptedString]: "password",
};
const MUIAutoFormControl = (props) => {
    const { fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    return (react_1.default.createElement(material_1.FormControl, { ...props.field, error: !!error },
        react_1.default.createElement(material_1.FormGroup, null,
            react_1.default.createElement(material_1.FormControlLabel, { label: props.field.name, control: props.children })),
        error && react_1.default.createElement(material_1.FormHelperText, null, error?.message)));
};
exports.MUIAutoFormControl = MUIAutoFormControl;
const MUIFormInput = (props) => {
    const { field, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    const config = props.field.configuration;
    switch (config.fieldType) {
        case metadata_1.FieldType.String:
        case metadata_1.FieldType.Number:
        case metadata_1.FieldType.Email:
        case metadata_1.FieldType.Password:
        case metadata_1.FieldType.EncryptedString:
        case metadata_1.FieldType.Color:
        case metadata_1.FieldType.Url: {
            return (react_1.default.createElement(material_1.TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: !!error, helperText: error?.message }));
        }
        case metadata_1.FieldType.Boolean: {
            return (react_1.default.createElement(exports.MUIAutoFormControl, { ...props },
                react_1.default.createElement(material_1.Checkbox, { ...field })));
        }
        case metadata_1.FieldType.DateTime: {
            return (react_1.default.createElement(exports.MUIAutoFormControl, { ...props }, config.includeTime ? react_1.default.createElement(x_date_pickers_1.DateTimePicker, { ...field }) : react_1.default.createElement(x_date_pickers_1.DatePicker, { ...field })));
        }
        case metadata_1.FieldType.Json: {
            return react_1.default.createElement(MUIJSONInput_1.MUIJSONInput, { label: props.field.name, ...field });
        }
        case metadata_1.FieldType.Enum: {
            const config = props.field.configuration;
            return (react_1.default.createElement(material_1.Autocomplete, { disablePortal: true, multiple: config.allowMultiple, options: config.options.map((option) => ({ id: option.name, label: option.name })), ...field, renderInput: (params) => react_1.default.createElement(material_1.TextField, { ...params, label: props.field.name }) }));
        }
        case metadata_1.FieldType.File: {
            return (react_1.default.createElement(exports.MUIAutoFormControl, { ...props },
                react_1.default.createElement(MUIFileInput_1.MUIFileInput, { label: props.field.name, ...field })));
        }
        case metadata_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(MUIRolesCombobox_1.MUIRolesCombobox, { label: props.field.name, ...field });
        }
        case metadata_1.FieldType.HasMany:
        case metadata_1.FieldType.HasManyThrough:
        case metadata_1.FieldType.HasOne:
        case metadata_1.FieldType.BelongsTo: {
            // TODO: implement relationship field inputs
            return null;
        }
        case metadata_1.FieldType.RichText: {
            // TODO: implement rich text input
            return null;
        }
        case metadata_1.FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        case metadata_1.FieldType.Vector: {
            return null;
        }
        default: {
            throw new Error(`Unsupported field type for MUI AutoForm: ${props.field.fieldType}`);
        }
    }
};
exports.MUIFormInput = MUIFormInput;
//# sourceMappingURL=MUIFormInput.js.map