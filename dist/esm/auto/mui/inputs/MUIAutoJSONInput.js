import { TextField } from "@mui/material";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
export const MUIAutoJSONInput = (props) => {
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = useJSONInputController(props);
    const inErrorState = !isFocused && !!errorMessage;
    const label = props.label ?? controller.label;
    return (React.createElement(TextField, { multiline: true, maxRows: 4, inputProps: { style: { fontFamily: "monospace" } }, error: inErrorState, helperText: inErrorState && `Invalid JSON: ${errorMessage}`, ...controller, ...focusProps, ...restOfProps, label: label, onChange: (event) => controller.onChange(event.target.value) }));
};
//# sourceMappingURL=MUIAutoJSONInput.js.map