"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoInput = exports.MUIAutoFormControl = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../../metadata.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoBooleanInput_js_1 = require("./MUIAutoBooleanInput.js");
const MUIAutoDateTimePicker_js_1 = tslib_1.__importDefault(require("./MUIAutoDateTimePicker.js"));
const MUIAutoEncryptedStringInput_js_1 = require("./MUIAutoEncryptedStringInput.js");
const MUIAutoEnumInput_js_1 = require("./MUIAutoEnumInput.js");
const MUIAutoFileInput_js_1 = require("./MUIAutoFileInput.js");
const MUIAutoJSONInput_js_1 = require("./MUIAutoJSONInput.js");
const MUIAutoPasswordInput_js_1 = require("./MUIAutoPasswordInput.js");
const MUIAutoRolesInput_js_1 = require("./MUIAutoRolesInput.js");
const MUIAutoTextInput_js_1 = require("./MUIAutoTextInput.js");
const MUIAutoBelongsToInput_js_1 = require("./relationships/MUIAutoBelongsToInput.js");
const MUIAutoHasManyInput_js_1 = require("./relationships/MUIAutoHasManyInput.js");
const MUIAutoFormControl = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { fieldState: { error }, } = (0, react_hook_form_1.useController)({
        name: path,
    });
    return (react_1.default.createElement(material_1.FormControl, { ...metadata, error: !!error },
        react_1.default.createElement(material_1.FormGroup, null,
            react_1.default.createElement(material_1.FormControlLabel, { label: metadata.name, control: props.children })),
        error && react_1.default.createElement(material_1.FormHelperText, null, error?.message)));
};
exports.MUIAutoFormControl = MUIAutoFormControl;
const MUIAutoInput = (props) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Number:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { field: props.field });
        }
        case metadata_js_1.FieldType.EncryptedString: {
            return react_1.default.createElement(MUIAutoEncryptedStringInput_js_1.MUIAutoEncryptedStringInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Password: {
            return react_1.default.createElement(MUIAutoPasswordInput_js_1.MUIAutoPasswordInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(MUIAutoBooleanInput_js_1.MUIAutoBooleanInput, { field: props.field });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(MUIAutoDateTimePicker_js_1.default, { field: props.field });
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(MUIAutoJSONInput_js_1.MUIAutoJSONInput, { field: props.field });
        }
        case metadata_js_1.FieldType.Enum: {
            return react_1.default.createElement(MUIAutoEnumInput_js_1.MUIAutoEnumInput, { field: props.field });
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(MUIAutoFileInput_js_1.MUIAutoFileInput, { field: props.field });
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(MUIAutoRolesInput_js_1.MUIAutoRolesInput, { field: props.field });
        }
        case metadata_js_1.FieldType.BelongsTo: {
            return react_1.default.createElement(MUIAutoBelongsToInput_js_1.MUIAutoBelongsToInput, { field: props.field });
        }
        case metadata_js_1.FieldType.HasOne: {
            // TODO - Update implementation of MUIAutoHasOneInput after 1-1 mapping maintenance system is updated in API
            // return <MUIAutoHasOneInput field={props.field} />;
            return null;
        }
        case metadata_js_1.FieldType.HasMany: {
            return react_1.default.createElement(MUIAutoHasManyInput_js_1.MUIAutoHasManyInput, { field: props.field });
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