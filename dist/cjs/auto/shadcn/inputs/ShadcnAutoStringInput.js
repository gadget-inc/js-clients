"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoStringInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const makeShadcnAutoStringInput = ({ Input, Label }) => {
    function ShadcnAutoStringInput(props) {
        const { field, control, label: customLabel, suffix, ...restProps } = props;
        const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
        const id = `${field}-input`;
        const { name, placeholder, value, autoComplete, type, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = stringInputController;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { htmlFor: id }, inputLabel),
            react_1.default.createElement("div", { className: suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative" },
                react_1.default.createElement("div", { className: "relative flex items-center" },
                    react_1.default.createElement(Input, { name: name, type: type || "text", id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, className: suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : "", ...restProps, placeholder: placeholder || inputLabel }),
                    suffix && react_1.default.createElement("div", { className: " h-10 flex items-center px-3" }, suffix)),
                errorMessage && react_1.default.createElement("p", { className: "text-sm text-red-500" }, errorMessage))));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoStringInput);
};
exports.makeShadcnAutoStringInput = makeShadcnAutoStringInput;
//# sourceMappingURL=ShadcnAutoStringInput.js.map