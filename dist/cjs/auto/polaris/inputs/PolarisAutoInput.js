"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const LazyLoadedPolarisAutoRichTextInput_js_1 = require("./LazyLoadedPolarisAutoRichTextInput.js");
const PolarisAutoBooleanInput_js_1 = require("./PolarisAutoBooleanInput.js");
const PolarisAutoDateTimePicker_js_1 = require("./PolarisAutoDateTimePicker.js");
const PolarisAutoEncryptedStringInput_js_1 = require("./PolarisAutoEncryptedStringInput.js");
const PolarisAutoEnumInput_js_1 = require("./PolarisAutoEnumInput.js");
const PolarisAutoFileInput_js_1 = require("./PolarisAutoFileInput.js");
const PolarisAutoIdInput_js_1 = require("./PolarisAutoIdInput.js");
const PolarisAutoJSONInput_js_1 = require("./PolarisAutoJSONInput.js");
const PolarisAutoNumberInput_js_1 = require("./PolarisAutoNumberInput.js");
const PolarisAutoPasswordInput_js_1 = require("./PolarisAutoPasswordInput.js");
const PolarisAutoRolesInput_js_1 = require("./PolarisAutoRolesInput.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
const PolarisAutoBelongsToInput_js_1 = require("./relationships/PolarisAutoBelongsToInput.js");
const PolarisAutoHasManyInput_js_1 = require("./relationships/PolarisAutoHasManyInput.js");
const PolarisAutoInput = (props) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.Id: {
            return react_1.default.createElement(PolarisAutoIdInput_js_1.PolarisAutoIdInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Number: {
            return react_1.default.createElement(PolarisAutoNumberInput_js_1.PolarisAutoNumberInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.EncryptedString: {
            return react_1.default.createElement(PolarisAutoEncryptedStringInput_js_1.PolarisAutoEncryptedStringInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Password: {
            return react_1.default.createElement(PolarisAutoPasswordInput_js_1.PolarisAutoPasswordInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(PolarisAutoBooleanInput_js_1.PolarisAutoBooleanInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(PolarisAutoDateTimePicker_js_1.PolarisAutoDateTimePicker, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(PolarisAutoJSONInput_js_1.PolarisAutoJSONInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Enum: {
            return react_1.default.createElement(PolarisAutoEnumInput_js_1.PolarisAutoEnumInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisAutoFileInput_js_1.PolarisAutoFileInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(PolarisAutoRolesInput_js_1.PolarisAutoRolesInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.BelongsTo: {
            return react_1.default.createElement(PolarisAutoBelongsToInput_js_1.PolarisAutoBelongsToInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.HasOne: {
            // TODO - Update implementation of PolarisAutoHasOneInput after 1-1 mapping maintenance system is updated in API
            // return <PolarisAutoHasOneInput field={props.field}  label={props.label} />;
            return null;
        }
        case metadata_js_1.FieldType.HasMany: {
            return react_1.default.createElement(PolarisAutoHasManyInput_js_1.PolarisAutoHasManyInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.HasManyThrough: {
            // TODO: implement HasManyThrough input with join model record create/delete
            return null;
        }
        case metadata_js_1.FieldType.RichText: {
            return react_1.default.createElement(LazyLoadedPolarisAutoRichTextInput_js_1.PolarisAutoRichTextInput, { field: props.field, label: props.label });
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