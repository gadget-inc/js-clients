import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const makeShadcnAutoTextInput = ({ Input, Label }) => {
    function ShadcnAutoTextInput(props) {
        const { field, control, label: customLabel, suffix, ...restProps } = props;
        const stringInputController = useStringInputController({ field, control });
        const id = `${field}-input`;
        const { name, placeholder, value, autoComplete, type, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = stringInputController;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (React.createElement("div", null,
            React.createElement(Label, { htmlFor: id }, inputLabel),
            React.createElement("div", { className: "relative flex items-center" },
                React.createElement(Input, { name: name, type: type || "text", id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, ...restProps, placeholder: placeholder || inputLabel }),
                suffix && React.createElement("div", { className: "" }, suffix)),
            errorMessage && React.createElement("p", { className: "text-sm text-red-500" }, errorMessage)));
    }
    return autoInput(ShadcnAutoTextInput);
};
//# sourceMappingURL=ShadcnAutoTextInput.js.map