import { TextField } from "@mui/material";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
export const MUIAutoJSONInput = (props) => {
    const { onStringValueChange, error, stringValue, originalController } = useJSONInputController(props);
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const inErrorState = !isFocused && !!error;
    return (React.createElement(TextField, { multiline: true, maxRows: 4, inputProps: { style: { fontFamily: "monospace" } }, ...originalController, value: stringValue, onChange: (event) => onStringValueChange(event.target.value), error: inErrorState, helperText: inErrorState && `Invalid JSON: ${error.message}`, ...focusProps, ...restOfProps }));
};
//# sourceMappingURL=MUIAutoJSONInput.js.map