import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
export const makeShadcnAutoTextAreaInput = ({ Textarea, Label }) => {
    function ShadcnAutoTextAreaInput(props) {
        const { field, label: customLabel, suffix, ...restProps } = props;
        const { name, placeholder, value, autoComplete, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = useStringInputController(props);
        const id = name || `${field}-input`;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement(Label, { htmlFor: id }, inputLabel),
            React.createElement("div", { className: suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative" },
                React.createElement("div", { className: "relative flex items-center" },
                    React.createElement(Textarea, { name: name, id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, className: suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : "", placeholder: placeholder, ...restProps }),
                    suffix && React.createElement("div", { className: " h-10 flex items-center px-3" }, suffix)),
                errorMessage && React.createElement("p", { className: "text-sm text-red-500" }, errorMessage))));
    }
    return autoInput(ShadcnAutoTextAreaInput);
};
//# sourceMappingURL=ShadcnAutoTextAreaInput.js.map