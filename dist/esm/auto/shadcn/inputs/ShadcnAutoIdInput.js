import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";
export const makeShadcnAutoIdInput = ({ Input, Label }) => {
    const ShadcnAutoTextInput = makeShadcnAutoTextInput({ Input, Label });
    function ShadcnAutoIdInput(props) {
        const { field, label } = props;
        const { name, metadata } = useStringInputController({ field });
        if (metadata.fieldType !== FieldType.Id || field !== "id") {
            throw new Error(`ShadcnAutoIdInput: field ${field} is not of type Id`);
        }
        return React.createElement(ShadcnAutoTextInput, { field: field, type: "number", step: 1, min: 1, label: label || "ID", name: name });
    }
    return autoInput(ShadcnAutoIdInput);
};
//# sourceMappingURL=ShadcnAutoIdInput.js.map