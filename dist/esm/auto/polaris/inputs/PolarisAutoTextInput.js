import { TextField } from "@shopify/polaris";
import React from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const PolarisAutoTextInput = autoInput((props) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });
    return (React.createElement(TextField, { ...getPropsWithoutRef(stringInputController), requiredIndicator: stringInputController.metadata.requiredArgumentForInput, type: stringInputController.type, error: stringInputController.errorMessage, ...props, label: props.label || stringInputController.metadata.name }));
});
//# sourceMappingURL=PolarisAutoTextInput.js.map