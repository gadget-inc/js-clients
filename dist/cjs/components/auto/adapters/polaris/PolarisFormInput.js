"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisFormInput = void 0;
const polaris_1 = require("@shopify/polaris");
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_1 = require("../../../../metadata");
const PolarisDateTimePicker_1 = require("./PolarisDateTimePicker");
const PolarisFileInput_1 = require("./PolarisFileInput");
const PolarisFixedOptionsCombobox_1 = require("./PolarisFixedOptionsCombobox");
const PolarisJSONInput_1 = require("./PolarisJSONInput");
const PolarisRolesCombobox_1 = require("./PolarisRolesCombobox");
const FieldTypeToInputType = {
    [metadata_1.FieldType.Number]: "number",
    [metadata_1.FieldType.Email]: "email",
    [metadata_1.FieldType.Password]: "password",
    [metadata_1.FieldType.EncryptedString]: "password",
};
const PolarisFormInput = (props) => {
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: props.path,
        control: props.control,
        rules: { required: props.field.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    const config = props.field.configuration;
    switch (config.fieldType) {
        case metadata_1.FieldType.String:
        case metadata_1.FieldType.Number:
        case metadata_1.FieldType.Email:
        case metadata_1.FieldType.Password:
        case metadata_1.FieldType.EncryptedString:
        case metadata_1.FieldType.Color:
        case metadata_1.FieldType.Url: {
            return (react_1.default.createElement(polaris_1.TextField, { label: props.field.name, type: FieldTypeToInputType[props.field.fieldType], autoComplete: "off", ...field, error: error?.message }));
        }
        case metadata_1.FieldType.Boolean: {
            return react_1.default.createElement(polaris_1.Checkbox, { label: props.field.name, ...field, error: error?.message });
        }
        case metadata_1.FieldType.DateTime: {
            return (react_1.default.createElement(PolarisDateTimePicker_1.PolarisDateTimePicker, { dateLabel: props.field.name, includeTime: config.includeTime, ...field, error: error?.message }));
        }
        case metadata_1.FieldType.Json: {
            return react_1.default.createElement(PolarisJSONInput_1.PolarisJSONInput, { label: props.field.name, multiline: 4, monospaced: true, autoComplete: "off", ...field });
        }
        case metadata_1.FieldType.Enum: {
            const config = props.field.configuration;
            return (react_1.default.createElement(PolarisFixedOptionsCombobox_1.PolarisFixedOptionsCombobox, { label: props.field.name, options: config.options.map((option) => ({ value: option.name, label: option.name })), allowMultiple: config.allowMultiple, ...field }));
        }
        case metadata_1.FieldType.File: {
            return react_1.default.createElement(PolarisFileInput_1.PolarisFileInput, { label: props.field.name, ...field });
        }
        case metadata_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(PolarisRolesCombobox_1.PolarisRolesCombobox, { label: props.field.name, ...field });
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
            throw new Error(`Unsupported field type for Polaris AutoForm: ${props.field.fieldType}`);
        }
    }
};
exports.PolarisFormInput = PolarisFormInput;
//# sourceMappingURL=PolarisFormInput.js.map