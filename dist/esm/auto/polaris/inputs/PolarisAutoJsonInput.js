import { TextField } from "@shopify/polaris";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
export const PolarisAutoJSONInput = (props) => {
    const { onStringValueChange, error, stringValue, originalController } = useJSONInputController(props);
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, ...restOfOriginalController } = originalController;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextField, { multiline: 4, monospaced: true, ...restOfOriginalController, value: stringValue, onChange: onStringValueChange, error: !isFocused && error && `Invalid JSON: ${error.message}`, ...focusProps, ...restOfProps })));
};
//# sourceMappingURL=PolarisAutoJsonInput.js.map