import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const makeShadcnAutoStringInput = ({ Input, Label }) => {
    function ShadcnAutoStringInput(props) {
        const { field, control, label: customLabel, suffix, ...restProps } = props;
        const stringInputController = useStringInputController({ field, control });
        const { name, placeholder, value, autoComplete, type, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = stringInputController;
        const id = name || `${field}-input`;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (React.createElement("div", null,
            React.createElement(Label, { htmlFor: id }, inputLabel),
            React.createElement("div", { className: suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative" },
                React.createElement("div", { className: "relative flex items-center" },
                    React.createElement(Input, { name: name, type: type || "text", id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, className: suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : "", ...restProps, placeholder: placeholder || inputLabel }),
                    suffix && React.createElement("div", { className: " h-10 flex items-center px-3" }, suffix)),
                errorMessage && React.createElement("p", { className: "text-sm text-red-500" }, errorMessage))));
    }
    return autoInput(ShadcnAutoStringInput);
};
//# sourceMappingURL=ShadcnAutoStringInput.js.map