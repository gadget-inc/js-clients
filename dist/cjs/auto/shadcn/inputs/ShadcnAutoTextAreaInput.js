"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTextAreaInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const makeShadcnAutoTextAreaInput = ({ Textarea, Label }) => {
    function ShadcnAutoTextAreaInput(props) {
        const { field, control, label: customLabel, suffix, ...restProps } = props;
        const { name, placeholder, value, autoComplete, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = (0, useStringInputController_js_1.useStringInputController)({ field, control });
        const id = name || `${field}-input`;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { htmlFor: id }, inputLabel),
            react_1.default.createElement("div", { className: suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative" },
                react_1.default.createElement("div", { className: "relative flex items-center" },
                    react_1.default.createElement(Textarea, { name: name, id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, className: suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : "", ...restProps, placeholder: placeholder }),
                    suffix && react_1.default.createElement("div", { className: " h-10 flex items-center px-3" }, suffix)),
                errorMessage && react_1.default.createElement("p", { className: "text-sm text-red-500" }, errorMessage))));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoTextAreaInput);
};
exports.makeShadcnAutoTextAreaInput = makeShadcnAutoTextAreaInput;
//# sourceMappingURL=ShadcnAutoTextAreaInput.js.map