"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../../metadata.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisDateTimePicker_js_1 = require("../PolarisDateTimePicker.js");
const PolarisFileInput_js_1 = require("../PolarisFileInput.js");
const PolarisFixedOptionsCombobox_js_1 = require("../PolarisFixedOptionsCombobox.js");
const PolarisAutoJsonInput_js_1 = require("./PolarisAutoJsonInput.js");
const PolarisAutoRelationshipInput_js_1 = require("./PolarisAutoRelationshipInput.js");
const PolarisAutoRolesInput_js_1 = require("./PolarisAutoRolesInput.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
const PolarisBooleanInput_js_1 = require("./PolarisBooleanInput.js");
const PolarisAutoInput = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: path,
    });
    // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
    // omit the ref from the forwarded along props so that we don't get a warning
    const { ref: _ref, ...field } = fieldProps;
    const config = metadata.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Number:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Password:
        case metadata_js_1.FieldType.EncryptedString: {
            // TODO - Needs updated implementation to handle security concerns
            return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(PolarisBooleanInput_js_1.PolarisBooleanInput, { field: props.field });
        }
        case metadata_js_1.FieldType.DateTime: {
            return (react_1.default.createElement(PolarisDateTimePicker_js_1.PolarisDateTimePicker, { dateLabel: metadata.name, includeTime: config.includeTime, ...field, error: error?.message }));
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(PolarisAutoJsonInput_js_1.PolarisAutoJSONInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Enum: {
            const config = metadata.configuration;
            return (react_1.default.createElement(PolarisFixedOptionsCombobox_js_1.PolarisFixedOptionsCombobox, { label: metadata.name, options: config.options.map((option) => ({ value: option.name, label: option.name })), allowMultiple: config.allowMultiple, ...field }));
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisFileInput_js_1.PolarisFileInput, { label: metadata.name, ...field });
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(PolarisAutoRolesInput_js_1.PolarisAutoRolesInput, { field: props.field, ...field });
        }
        case metadata_js_1.FieldType.HasMany:
        case metadata_js_1.FieldType.HasOne:
        case metadata_js_1.FieldType.BelongsTo: {
            return react_1.default.createElement(PolarisAutoRelationshipInput_js_1.PolarisAutoRelationshipInput, { field: metadata.apiIdentifier });
        }
        case metadata_js_1.FieldType.HasManyThrough: {
            // TODO: implement HasManyThrough input with join model record create/delete
            return null;
        }
        case metadata_js_1.FieldType.RichText: {
            // TODO: implement rich text input
            return null;
        }
        case metadata_js_1.FieldType.Money: {
            // TODO: implement money input
            return null;
        }
        // Not rendered as an input
        case metadata_js_1.FieldType.Vector:
        case metadata_js_1.FieldType.Computed:
            return null;
        default: {
            throw new Error(`Unsupported field type for Polaris AutoForm: ${metadata.fieldType}`);
        }
    }
};
exports.PolarisAutoInput = PolarisAutoInput;
//# sourceMappingURL=PolarisAutoInput.js.map