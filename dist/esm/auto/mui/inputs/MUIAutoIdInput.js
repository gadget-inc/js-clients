import { FieldType } from "../../../metadata.js";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
export const MUIAutoIdInput = (props) => {
    const { field } = props;
    const { name, metadata } = useStringInputController({ field });
    if (metadata.fieldType !== FieldType.Id || field !== "id") {
        throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
    }
    return (React.createElement(MUIAutoTextInput, { field: field, label: "ID", name: name, InputProps: {
            inputProps: { min: 1, step: 1 },
        }, type: "number" }));
};
//# sourceMappingURL=MUIAutoIdInput.js.map