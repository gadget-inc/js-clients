"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const AutoRichTextInput_js_1 = tslib_1.__importDefault(require("../../shared/AutoRichTextInput.js"));
require("../../shared/styles/rich-text.css");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const makeShadcnAutoRichTextInput = ({ Label }) => {
    function ShadcnAutoRichTextInput(props) {
        const controller = (0, useStringInputController_js_1.useStringInputController)({ field: props.field, control: props.control });
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { id: controller.id },
                props.label ?? controller.metadata.name,
                controller.metadata.requiredArgumentForInput && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*")),
            react_1.default.createElement("div", { className: "Autoform-RichTextInput" },
                react_1.default.createElement(AutoRichTextInput_js_1.default, { ...props }))));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoRichTextInput);
};
exports.makeShadcnAutoRichTextInput = makeShadcnAutoRichTextInput;
//# sourceMappingURL=ShadcnautoRichTextInput.js.map