"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoInput = exports.MUIAutoFormControl = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../../metadata.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoRelationshipInput_js_1 = require("./MUIAutoRelationshipInput.js");
const MUIAutoRolesInput_js_1 = require("./MUIAutoRolesInput.js");
const MUIAutoTextInput_js_1 = require("./MUIAutoTextInput.js");
const MUIBooleanInput_js_1 = require("./MUIBooleanInput.js");
const MUIDateTimePicker_js_1 = tslib_1.__importDefault(require("./MUIDateTimePicker.js"));
const MUIFileInput_js_1 = require("./MUIFileInput.js");
const MUIJSONInput_js_1 = require("./MUIJSONInput.js");
const MUIAutoFormControl = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: path,
        rules: { required: metadata.requiredArgumentForInput },
    });
    return (react_1.default.createElement(material_1.FormControl, { ...metadata, error: !!error },
        react_1.default.createElement(material_1.FormGroup, null,
            react_1.default.createElement(material_1.FormControlLabel, { label: metadata.name, control: props.children })),
        error && react_1.default.createElement(material_1.FormHelperText, null, error?.message)));
};
exports.MUIAutoFormControl = MUIAutoFormControl;
const MUIAutoInput = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: path,
        rules: { required: metadata.requiredArgumentForInput },
    });
    const config = metadata.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Number:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Password:
        case metadata_js_1.FieldType.EncryptedString: {
            // TODO - Needs updated implementation to handle security concerns
            return react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(MUIBooleanInput_js_1.MUIBooleanInput, { field: props.field });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(MUIDateTimePicker_js_1.default, { field: props.field });
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(MUIJSONInput_js_1.MUIJSONInput, { label: metadata.name, ...fieldProps });
        }
        case metadata_js_1.FieldType.Enum: {
            const config = metadata.configuration;
            return (react_1.default.createElement(material_1.Autocomplete, { disablePortal: true, multiple: config.allowMultiple, options: config.options.map((option) => ({ id: option.name, label: option.name })), ...fieldProps, renderInput: (params) => react_1.default.createElement(material_1.TextField, { ...params, label: metadata.name }) }));
        }
        case metadata_js_1.FieldType.File: {
            return (react_1.default.createElement(exports.MUIAutoFormControl, { ...props },
                react_1.default.createElement(MUIFileInput_js_1.MUIFileInput, { label: metadata.name, ...fieldProps })));
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(MUIAutoRolesInput_js_1.MUIAutoRolesInput, { field: props.field });
        }
        case metadata_js_1.FieldType.HasMany:
        case metadata_js_1.FieldType.HasOne:
        case metadata_js_1.FieldType.BelongsTo: {
            return react_1.default.createElement(MUIAutoRelationshipInput_js_1.MUIAutoRelationshipInput, { field: props.field });
        }
        case metadata_js_1.FieldType.HasManyThrough: {
            // TODO: implement HasManyThrough input with join model record create/delete/update
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
            throw new Error(`Unsupported field type for MUI AutoForm: ${metadata.fieldType}`);
        }
    }
};
exports.MUIAutoInput = MUIAutoInput;
//# sourceMappingURL=MUIAutoInput.js.map