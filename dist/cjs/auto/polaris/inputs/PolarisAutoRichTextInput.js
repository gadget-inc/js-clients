"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const AutoRichTextInput_js_1 = tslib_1.__importDefault(require("../../shared/AutoRichTextInput.js"));
require("../styles/rich-text.css");
function PolarisAutoRichTextInput(props) {
    const controller = (0, useStringInputController_js_1.useStringInputController)({ field: props.field, control: props.control });
    return (react_1.default.createElement("div", { className: "Polaris-FormLayout__Item" },
        react_1.default.createElement("div", { className: "Polaris-Labelled__LabelWrapper" },
            react_1.default.createElement(polaris_1.Label, { id: controller.id, requiredIndicator: controller.metadata.requiredArgumentForInput }, props.label ?? controller.metadata.name)),
        react_1.default.createElement("div", { className: "Autoform-RichTextInput" },
            react_1.default.createElement(AutoRichTextInput_js_1.default, { ...props }))));
}
exports.default = PolarisAutoRichTextInput;
//# sourceMappingURL=PolarisAutoRichTextInput.js.map