"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const ShadcnAutoBooleanInput_js_1 = require("./ShadcnAutoBooleanInput.js");
const ShadcnAutoDateTimePicker_js_1 = require("./ShadcnAutoDateTimePicker.js");
const ShadcnAutoEncryptedStringInput_js_1 = require("./ShadcnAutoEncryptedStringInput.js");
const ShadcnAutoEnumInput_js_1 = require("./ShadcnAutoEnumInput.js");
const ShadcnAutoFileInput_js_1 = require("./ShadcnAutoFileInput.js");
const ShadcnAutoHiddenInput_js_1 = require("./ShadcnAutoHiddenInput.js");
const ShadcnAutoIdInput_js_1 = require("./ShadcnAutoIdInput.js");
const ShadcnAutoJSONInput_js_1 = require("./ShadcnAutoJSONInput.js");
const ShadcnAutoNumberInput_js_1 = require("./ShadcnAutoNumberInput.js");
const ShadcnAutoPasswordInput_js_1 = require("./ShadcnAutoPasswordInput.js");
const ShadcnAutoRolesInput_js_1 = require("./ShadcnAutoRolesInput.js");
const ShadcnAutoStringInput_js_1 = require("./ShadcnAutoStringInput.js");
const ShadcnAutoTextAreaInput_js_1 = require("./ShadcnAutoTextAreaInput.js");
const ShadcnautoRichTextInput_js_1 = require("./ShadcnautoRichTextInput.js");
const ShadcnAutoBelongsToInput_js_1 = require("./relationships/ShadcnAutoBelongsToInput.js");
const ShadcnAutoHasManyInput_js_1 = require("./relationships/ShadcnAutoHasManyInput.js");
const ShadcnAutoHasManyThroughInput_js_1 = require("./relationships/ShadcnAutoHasManyThroughInput.js");
const ShadcnAutoHasOneInput_js_1 = require("./relationships/ShadcnAutoHasOneInput.js");
/**
 * Make the Shadcn components for the auto input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto input
 */
const makeShadcnAutoInput = (elements) => {
    const AutoIdInput = (0, ShadcnAutoIdInput_js_1.makeShadcnAutoIdInput)(elements);
    const AutoStringInput = (0, ShadcnAutoStringInput_js_1.makeShadcnAutoStringInput)(elements);
    const AutoTextAreaInput = (0, ShadcnAutoTextAreaInput_js_1.makeShadcnAutoTextAreaInput)(elements);
    const AutoNumberInput = (0, ShadcnAutoNumberInput_js_1.makeShadcnAutoNumberInput)(elements);
    const AutoEncryptedStringInput = (0, ShadcnAutoEncryptedStringInput_js_1.makeShadcnAutoEncryptedStringInput)(elements);
    const AutoPasswordInput = (0, ShadcnAutoPasswordInput_js_1.makeShadcnAutoPasswordInput)(elements);
    const AutoBooleanInput = (0, ShadcnAutoBooleanInput_js_1.makeShadcnAutoBooleanInput)(elements);
    const AutoBelongsToInput = (0, ShadcnAutoBelongsToInput_js_1.makeShadcnAutoBelongsToInput)(elements);
    const AutoHasManyInput = (0, ShadcnAutoHasManyInput_js_1.makeShadcnAutoHasManyInput)(elements);
    const AutoHasOneInput = (0, ShadcnAutoHasOneInput_js_1.makeShadcnAutoHasOneInput)(elements);
    const AutoRolesInput = (0, ShadcnAutoRolesInput_js_1.makeShadcnAutoRolesInput)(elements);
    const AutoEnumInput = (0, ShadcnAutoEnumInput_js_1.makeShadcnAutoEnumInput)(elements);
    const AutoDateTimePicker = (0, ShadcnAutoDateTimePicker_js_1.makeShadcnAutoDateTimePicker)(elements);
    const AutoJSONInput = (0, ShadcnAutoJSONInput_js_1.makeShadcnAutoJSONInput)(elements);
    const AutoRichTextInput = (0, ShadcnautoRichTextInput_js_1.makeShadcnAutoRichTextInput)(elements);
    const AutoFileInput = (0, ShadcnAutoFileInput_js_1.makeShadcnAutoFileInput)(elements);
    const AutoHasManyThroughInput = (0, ShadcnAutoHasManyThroughInput_js_1.makeShadcnAutoHasManyThroughInput)(elements);
    const AutoHiddenInput = (0, ShadcnAutoHiddenInput_js_1.makeShadcnAutoHiddenInput)(elements);
    const AutoInput = (0, AutoInput_js_1.autoInput)(function AutoInput(props) {
        const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
        const config = metadata.configuration;
        switch (config.fieldType) {
            case metadata_js_1.FieldType.Id:
                return react_1.default.createElement(AutoIdInput, { ...props });
            case metadata_js_1.FieldType.String:
            case metadata_js_1.FieldType.Email:
            case metadata_js_1.FieldType.Color:
            case metadata_js_1.FieldType.Url:
                return react_1.default.createElement(AutoStringInput, { ...props });
            case metadata_js_1.FieldType.Number:
                return react_1.default.createElement(AutoNumberInput, { ...props });
            case metadata_js_1.FieldType.DateTime:
                return react_1.default.createElement(AutoDateTimePicker, { ...props });
            case metadata_js_1.FieldType.Json:
                return react_1.default.createElement(AutoJSONInput, { ...props });
            case metadata_js_1.FieldType.Enum:
                return react_1.default.createElement(AutoEnumInput, { ...props });
            case metadata_js_1.FieldType.RoleAssignments:
                return react_1.default.createElement(AutoRolesInput, { ...props });
            case metadata_js_1.FieldType.HasOne:
                return react_1.default.createElement(AutoHasOneInput, { ...props });
            case metadata_js_1.FieldType.RichText:
                return react_1.default.createElement(AutoRichTextInput, { ...props });
            case metadata_js_1.FieldType.File:
                return react_1.default.createElement(AutoFileInput, { ...props });
            case metadata_js_1.FieldType.HasMany:
                return react_1.default.createElement(AutoHasManyInput, { ...props });
            case metadata_js_1.FieldType.EncryptedString:
                return react_1.default.createElement(AutoEncryptedStringInput, { ...props });
            case metadata_js_1.FieldType.BelongsTo:
                return react_1.default.createElement(AutoBelongsToInput, { ...props });
            case metadata_js_1.FieldType.Password:
                return react_1.default.createElement(AutoPasswordInput, { ...props });
            case metadata_js_1.FieldType.Boolean:
                return react_1.default.createElement(AutoBooleanInput, { ...props });
            case metadata_js_1.FieldType.HasManyThrough:
                return react_1.default.createElement(AutoHasManyThroughInput, { ...props });
            default:
                return react_1.default.createElement(AutoStringInput, { ...props });
        }
    });
    AutoInput.displayName = "AutoInput";
    return {
        AutoInput,
        AutoRolesInput,
        AutoFileInput,
        AutoEnumInput,
        AutoJSONInput,
        AutoDateTimePicker,
        AutoPasswordInput,
        AutoBooleanInput,
        AutoEncryptedStringInput,
        AutoStringInput,
        AutoNumberInput,
        AutoIdInput,
        AutoHiddenInput,
        AutoTextAreaInput,
        AutoBelongsToInput,
        AutoHasManyInput,
        AutoHasManyThroughInput,
        AutoHasOneInput,
    };
};
exports.makeShadcnAutoInput = makeShadcnAutoInput;
//# sourceMappingURL=ShadcnAutoInput.js.map