import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { makeShadcnAutoBooleanInput } from "./ShadcnAutoBooleanInput.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoNumberInput } from "./ShadcnAutoNumberInput.js";
import { makeShadcnAutoPasswordInput } from "./ShadcnAutoPasswordInput.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";
export const makeShadcnAutoInput = ({ Input, Label, Checkbox, Button, }) => {
    const inputMakers = {
        idInput: makeShadcnAutoIdInput({ Input, Label }),
        textInput: makeShadcnAutoTextInput({ Input, Label }),
        numberInput: makeShadcnAutoNumberInput({ Input, Label }),
        encryptedInput: makeShadcnAutoEncryptedStringInput({ Input, Label, Button }),
        passwordInput: makeShadcnAutoPasswordInput({ Input, Label, Button }),
        booleanInput: makeShadcnAutoBooleanInput({ Checkbox, Label }),
    };
    const ShadcnAutoInput = React.memo(function ShadcnAutoInput(props) {
        const { metadata } = useFieldMetadata(props.field);
        const config = metadata.configuration;
        switch (config.fieldType) {
            case FieldType.Id:
                return inputMakers.idInput(props);
            case FieldType.String:
            case FieldType.Email:
            case FieldType.Color:
            case FieldType.Url:
                return inputMakers.textInput(props);
            case FieldType.Number:
                return inputMakers.numberInput(props);
            case FieldType.EncryptedString:
                return inputMakers.encryptedInput(props);
            case FieldType.Password:
                return inputMakers.passwordInput(props);
            case FieldType.Boolean:
                return inputMakers.booleanInput(props);
            default:
                return inputMakers.textInput(props);
        }
    });
    ShadcnAutoInput.displayName = "ShadcnAutoInput";
    return autoInput(ShadcnAutoInput);
};
//# sourceMappingURL=ShadcnAutoInput.js.map