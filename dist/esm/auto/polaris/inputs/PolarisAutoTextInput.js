import { TextField } from "@shopify/polaris";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const PolarisAutoTextInput = (props) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });
    return (React.createElement(TextField, { ...stringInputController, requiredIndicator: stringInputController.metadata.requiredArgumentForInput, type: stringInputController.type, error: stringInputController.isError, helpText: stringInputController.errorMessage, ...props }));
};
//# sourceMappingURL=PolarisAutoTextInput.js.map