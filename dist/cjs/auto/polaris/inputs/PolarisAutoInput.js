"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const PolarisBelongsToInput_js_1 = require("./PolarisBelongsToInput.js");
const metadata_js_1 = require("../../../metadata.js");
const PolarisDateTimePicker_js_1 = require("../PolarisDateTimePicker.js");
const PolarisFileInput_js_1 = require("../PolarisFileInput.js");
const PolarisFixedOptionsCombobox_js_1 = require("../PolarisFixedOptionsCombobox.js");
const PolarisJSONInput_js_1 = require("../PolarisJSONInput.js");
const PolarisRolesCombobox_js_1 = require("../PolarisRolesCombobox.js");
const AutoForm_js_1 = require("../../AutoForm.js");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const FieldTypeToInputType = {
    [metadata_js_1.FieldType.Number]: "number",
    [metadata_js_1.FieldType.Email]: "email",
    [metadata_js_1.FieldType.Password]: "password",
    [metadata_js_1.FieldType.EncryptedString]: "password",
};
const PolarisAutoInput = (props) => {
    const { metadata } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const fields = (0, AutoForm_js_1.useFormFields)(metadata, {});
    const fieldMetadata = fields.find((field) => field[1].apiIdentifier === props.field);
    if (!fieldMetadata) {
        throw new Error(`Field ${props.field} not found in metadata`);
    }
    const path = fieldMetadata[0];
    const _field = fieldMetadata[1];
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: path,
        rules: { required: _field.requiredArgumentForInput },
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    const config = _field.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Number:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Password:
        case metadata_js_1.FieldType.EncryptedString:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return (react_1.default.createElement(polaris_1.TextField, { label: _field.name, type: FieldTypeToInputType[_field.fieldType], autoComplete: "off", ...field, error: error?.message }));
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(polaris_1.Checkbox, { label: _field.name, ...field, error: error?.message });
        }
        case metadata_js_1.FieldType.DateTime: {
            return (react_1.default.createElement(PolarisDateTimePicker_js_1.PolarisDateTimePicker, { dateLabel: _field.name, includeTime: config.includeTime, ...field, error: error?.message }));
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(PolarisJSONInput_js_1.PolarisJSONInput, { label: _field.name, multiline: 4, monospaced: true, autoComplete: "off", ...field });
        }
        case metadata_js_1.FieldType.Enum: {
            const config = _field.configuration;
            return (react_1.default.createElement(PolarisFixedOptionsCombobox_js_1.PolarisFixedOptionsCombobox, { label: _field.name, options: config.options.map((option) => ({ value: option.name, label: option.name })), allowMultiple: config.allowMultiple, ...field }));
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisFileInput_js_1.PolarisFileInput, { label: _field.name, ...field });
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(PolarisRolesCombobox_js_1.PolarisRolesCombobox, { label: _field.name, ...field });
        }
        case metadata_js_1.FieldType.HasMany:
        case metadata_js_1.FieldType.HasManyThrough:
        case metadata_js_1.FieldType.HasOne:
        case metadata_js_1.FieldType.BelongsTo: {
            // TODO: implement relationship field inputs
            return react_1.default.createElement(PolarisBelongsToInput_js_1.PolarisBelongsToInput, { field: _field.apiIdentifier });
        }
        case metadata_js_1.FieldType.RichText: {
            // TODO: implement rich text input
            return null;
        }
        case metadata_js_1.FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        case metadata_js_1.FieldType.Vector: {
            return null;
        }
        default: {
            throw new Error(`Unsupported field type for Polaris AutoForm: ${_field.fieldType}`);
        }
    }
};
exports.PolarisAutoInput = PolarisAutoInput;
//# sourceMappingURL=PolarisAutoInput.js.map