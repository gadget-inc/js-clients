import { TextField } from "@mui/material";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const MUIAutoTextInput = (props) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });
    const isRequired = stringInputController.metadata.requiredArgumentForInput;
    const label = stringInputController.label + (isRequired ? " *" : "");
    return (React.createElement(TextField, { ...stringInputController, label: label, error: stringInputController.isError, helperText: stringInputController.errorMessage, ...props }));
};
//# sourceMappingURL=MUIAutoTextInput.js.map