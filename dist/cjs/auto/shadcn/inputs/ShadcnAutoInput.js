"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const ShadcnAutoBooleanInput_js_1 = require("./ShadcnAutoBooleanInput.js");
const ShadcnAutoEncryptedStringInput_js_1 = require("./ShadcnAutoEncryptedStringInput.js");
const ShadcnAutoIdInput_js_1 = require("./ShadcnAutoIdInput.js");
const ShadcnAutoNumberInput_js_1 = require("./ShadcnAutoNumberInput.js");
const ShadcnAutoPasswordInput_js_1 = require("./ShadcnAutoPasswordInput.js");
const ShadcnAutoTextInput_js_1 = require("./ShadcnAutoTextInput.js");
const makeShadcnAutoInput = ({ Input, Label, Checkbox, Button, }) => {
    const inputMakers = {
        idInput: (0, ShadcnAutoIdInput_js_1.makeShadcnAutoIdInput)({ Input, Label }),
        textInput: (0, ShadcnAutoTextInput_js_1.makeShadcnAutoTextInput)({ Input, Label }),
        numberInput: (0, ShadcnAutoNumberInput_js_1.makeShadcnAutoNumberInput)({ Input, Label }),
        encryptedInput: (0, ShadcnAutoEncryptedStringInput_js_1.makeShadcnAutoEncryptedStringInput)({ Input, Label, Button }),
        passwordInput: (0, ShadcnAutoPasswordInput_js_1.makeShadcnAutoPasswordInput)({ Input, Label, Button }),
        booleanInput: (0, ShadcnAutoBooleanInput_js_1.makeShadcnAutoBooleanInput)({ Checkbox, Label }),
    };
    const ShadcnAutoInput = react_1.default.memo(function ShadcnAutoInput(props) {
        const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
        const config = metadata.configuration;
        switch (config.fieldType) {
            case metadata_js_1.FieldType.Id:
                return inputMakers.idInput(props);
            case metadata_js_1.FieldType.String:
            case metadata_js_1.FieldType.Email:
            case metadata_js_1.FieldType.Color:
            case metadata_js_1.FieldType.Url:
                return inputMakers.textInput(props);
            case metadata_js_1.FieldType.Number:
                return inputMakers.numberInput(props);
            case metadata_js_1.FieldType.EncryptedString:
                return inputMakers.encryptedInput(props);
            case metadata_js_1.FieldType.Password:
                return inputMakers.passwordInput(props);
            case metadata_js_1.FieldType.Boolean:
                return inputMakers.booleanInput(props);
            default:
                return inputMakers.textInput(props);
        }
    });
    ShadcnAutoInput.displayName = "ShadcnAutoInput";
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoInput);
};
exports.makeShadcnAutoInput = makeShadcnAutoInput;
//# sourceMappingURL=ShadcnAutoInput.js.map