"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const makeShadcnAutoTextInput = ({ Input, Label }) => {
    function ShadcnAutoTextInput(props) {
        const { field, control, label: customLabel, suffix, ...restProps } = props;
        const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
        const id = `${field}-input`;
        const { name, placeholder, value, autoComplete, type, label: controllerLabel, metadata, errorMessage, onChange, onBlur, } = stringInputController;
        const inputLabel = customLabel || controllerLabel || metadata.name;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { htmlFor: id }, inputLabel),
            react_1.default.createElement("div", { className: "relative flex items-center" },
                react_1.default.createElement(Input, { name: name, type: type || "text", id: id, value: value ?? "", autoComplete: autoComplete, onChange: onChange, onBlur: onBlur, required: metadata.requiredArgumentForInput || false, ...restProps, placeholder: placeholder || inputLabel }),
                suffix && react_1.default.createElement("div", { className: "" }, suffix)),
            errorMessage && react_1.default.createElement("p", { className: "text-sm text-red-500" }, errorMessage)));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoTextInput);
};
exports.makeShadcnAutoTextInput = makeShadcnAutoTextInput;
//# sourceMappingURL=ShadcnAutoTextInput.js.map