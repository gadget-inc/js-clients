import { TextField } from "@mui/material";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const MUIAutoTextInput = autoInput((props) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });
    const isRequired = stringInputController.metadata.requiredArgumentForInput;
    const label = (props.label ?? stringInputController.label) + (isRequired ? " *" : "");
    return (React.createElement(TextField, { ...stringInputController, error: stringInputController.isError, helperText: stringInputController.errorMessage, ...props, label: label }));
});
//# sourceMappingURL=MUIAutoTextInput.js.map