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
const ShadcnAutoIdInput_js_1 = require("./ShadcnAutoIdInput.js");
const ShadcnAutoJSONInput_js_1 = require("./ShadcnAutoJSONInput.js");
const ShadcnAutoNumberInput_js_1 = require("./ShadcnAutoNumberInput.js");
const ShadcnAutoPasswordInput_js_1 = require("./ShadcnAutoPasswordInput.js");
const ShadcnAutoRolesInput_js_1 = require("./ShadcnAutoRolesInput.js");
const ShadcnAutoTextInput_js_1 = require("./ShadcnAutoTextInput.js");
const ShadcnAutoBelongsToInput_js_1 = require("./relationships/ShadcnAutoBelongsToInput.js");
const ShadcnAutoHasManyInput_js_1 = require("./relationships/ShadcnAutoHasManyInput.js");
const makeShadcnAutoInput = (elements) => {
    const inputComponents = {
        idInput: (0, ShadcnAutoIdInput_js_1.makeShadcnAutoIdInput)(elements),
        textInput: (0, ShadcnAutoTextInput_js_1.makeShadcnAutoTextInput)(elements),
        numberInput: (0, ShadcnAutoNumberInput_js_1.makeShadcnAutoNumberInput)(elements),
        encryptedInput: (0, ShadcnAutoEncryptedStringInput_js_1.makeShadcnAutoEncryptedStringInput)(elements),
        passwordInput: (0, ShadcnAutoPasswordInput_js_1.makeShadcnAutoPasswordInput)(elements),
        booleanInput: (0, ShadcnAutoBooleanInput_js_1.makeShadcnAutoBooleanInput)(elements),
        belongsToInput: (0, ShadcnAutoBelongsToInput_js_1.makeShadcnAutoBelongsToInput)(elements),
        hasManyInput: (0, ShadcnAutoHasManyInput_js_1.makeShadcnAutoHasManyInput)(elements),
        rolesInput: (0, ShadcnAutoRolesInput_js_1.makeShadcnAutoRolesInput)(elements),
        enumInput: (0, ShadcnAutoEnumInput_js_1.makeShadcnAutoEnumInput)(elements),
        dateTimeInput: (0, ShadcnAutoDateTimePicker_js_1.makeShadcnAutoDateTimePicker)(elements),
        jsonInput: (0, ShadcnAutoJSONInput_js_1.makeShadcnAutoJSONInput)(elements),
    };
    const ShadcnAutoInput = react_1.default.memo(function ShadcnAutoInput(props) {
        const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
        const config = metadata.configuration;
        switch (config.fieldType) {
            case metadata_js_1.FieldType.Id:
                return inputComponents.idInput(props);
            case metadata_js_1.FieldType.String:
            case metadata_js_1.FieldType.Email:
            case metadata_js_1.FieldType.Color:
            case metadata_js_1.FieldType.Url:
                return inputComponents.textInput(props);
            case metadata_js_1.FieldType.Number:
                return inputComponents.numberInput(props);
            case metadata_js_1.FieldType.DateTime:
                return inputComponents.dateTimeInput(props);
            case metadata_js_1.FieldType.Json:
                return inputComponents.jsonInput(props);
            case metadata_js_1.FieldType.Enum:
                return inputComponents.enumInput(props);
            case metadata_js_1.FieldType.RoleAssignments:
                return inputComponents.rolesInput(props);
            case metadata_js_1.FieldType.HasOne:
                return null;
            case metadata_js_1.FieldType.HasMany:
                return inputComponents.hasManyInput(props);
            case metadata_js_1.FieldType.HasManyThrough:
                return null;
            case metadata_js_1.FieldType.EncryptedString:
                return inputComponents.encryptedInput(props);
            case metadata_js_1.FieldType.BelongsTo:
                return inputComponents.belongsToInput(props);
            case metadata_js_1.FieldType.Password:
                return inputComponents.passwordInput(props);
            case metadata_js_1.FieldType.Boolean:
                return inputComponents.booleanInput(props);
            default:
                return inputComponents.textInput(props);
        }
    });
    ShadcnAutoInput.displayName = "ShadcnAutoInput";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoInput);
};
exports.makeShadcnAutoInput = makeShadcnAutoInput;
//# sourceMappingURL=ShadcnAutoInput.js.map