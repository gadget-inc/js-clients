"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const LazyLoadedPolarisWCAutoRichTextInput_js_1 = require("./LazyLoadedPolarisWCAutoRichTextInput.js");
const PolarisWCAutoBooleanInput_js_1 = require("./PolarisWCAutoBooleanInput.js");
const PolarisWCAutoDateTimePicker_js_1 = require("./PolarisWCAutoDateTimePicker.js");
const PolarisWCAutoEncryptedStringInput_js_1 = require("./PolarisWCAutoEncryptedStringInput.js");
const PolarisWCAutoEnumInput_js_1 = require("./PolarisWCAutoEnumInput.js");
const PolarisWCAutoFileInput_js_1 = require("./PolarisWCAutoFileInput.js");
const PolarisWCAutoIdInput_js_1 = require("./PolarisWCAutoIdInput.js");
const PolarisWCAutoJSONInput_js_1 = require("./PolarisWCAutoJSONInput.js");
const PolarisWCAutoNumberInput_js_1 = require("./PolarisWCAutoNumberInput.js");
const PolarisWCAutoPasswordInput_js_1 = require("./PolarisWCAutoPasswordInput.js");
const PolarisWCAutoRolesInput_js_1 = require("./PolarisWCAutoRolesInput.js");
const PolarisWCAutoTextInput_js_1 = require("./PolarisWCAutoTextInput.js");
const PolarisWCAutoBelongsToInput_js_1 = require("./relationships/PolarisWCAutoBelongsToInput.js");
const PolarisWCAutoHasManyInput_js_1 = require("./relationships/PolarisWCAutoHasManyInput.js");
const PolarisWCAutoHasManyThroughInput_js_1 = require("./relationships/PolarisWCAutoHasManyThroughInput.js");
const PolarisWCAutoHasOneInput_js_1 = require("./relationships/PolarisWCAutoHasOneInput.js");
/**
 * An auto-generated input based on the given field types used within AutoForm.
 * Uses Polaris Web Components for rendering.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoInput field="stringField" />
 *   <AutoInput field="booleanField" />
 *   <AutoInput field="numberField" label="Count" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the field.
 * @param props.label - Label of the component.
 * @returns The AutoInput component.
 */
exports.PolarisWCAutoInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const config = metadata.configuration;
    switch (config.fieldType) {
        case metadata_js_1.FieldType.Id: {
            return react_1.default.createElement(PolarisWCAutoIdInput_js_1.PolarisWCAutoIdInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.String:
        case metadata_js_1.FieldType.Email:
        case metadata_js_1.FieldType.Color:
        case metadata_js_1.FieldType.Url: {
            return react_1.default.createElement(PolarisWCAutoTextInput_js_1.PolarisWCAutoTextInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Number: {
            return react_1.default.createElement(PolarisWCAutoNumberInput_js_1.PolarisWCAutoNumberInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.EncryptedString: {
            return react_1.default.createElement(PolarisWCAutoEncryptedStringInput_js_1.PolarisWCAutoEncryptedStringInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Password: {
            return react_1.default.createElement(PolarisWCAutoPasswordInput_js_1.PolarisWCAutoPasswordInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Boolean: {
            return react_1.default.createElement(PolarisWCAutoBooleanInput_js_1.PolarisWCAutoBooleanInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.DateTime: {
            return react_1.default.createElement(PolarisWCAutoDateTimePicker_js_1.PolarisWCAutoDateTimePicker, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Json: {
            return react_1.default.createElement(PolarisWCAutoJSONInput_js_1.PolarisWCAutoJSONInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.Enum: {
            return react_1.default.createElement(PolarisWCAutoEnumInput_js_1.PolarisWCAutoEnumInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.File: {
            return react_1.default.createElement(PolarisWCAutoFileInput_js_1.PolarisWCAutoFileInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.RoleAssignments: {
            return react_1.default.createElement(PolarisWCAutoRolesInput_js_1.PolarisWCAutoRolesInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.RichText: {
            return react_1.default.createElement(LazyLoadedPolarisWCAutoRichTextInput_js_1.PolarisWCAutoRichTextInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.BelongsTo: {
            return react_1.default.createElement(PolarisWCAutoBelongsToInput_js_1.PolarisWCAutoBelongsToInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.HasOne: {
            return react_1.default.createElement(PolarisWCAutoHasOneInput_js_1.PolarisWCAutoHasOneInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.HasMany: {
            return react_1.default.createElement(PolarisWCAutoHasManyInput_js_1.PolarisWCAutoHasManyInput, { field: props.field, label: props.label });
        }
        case metadata_js_1.FieldType.HasManyThrough: {
            return react_1.default.createElement(PolarisWCAutoHasManyThroughInput_js_1.PolarisWCAutoHasManyThroughInput, { field: props.field, label: props.label });
        }
        // Not rendered as an input
        case metadata_js_1.FieldType.Money:
        case metadata_js_1.FieldType.Vector:
        case metadata_js_1.FieldType.Computed:
        default:
            return null;
    }
});
//# sourceMappingURL=PolarisWCAutoInput.js.map