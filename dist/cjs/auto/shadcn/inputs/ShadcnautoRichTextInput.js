"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const AutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("../../shared/AutoRichTextInput.js"))));
const makeShadcnAutoRichTextInput = ({ Label }) => {
    function ShadcnAutoRichTextInput(props) {
        const controller = (0, useStringInputController_js_1.useStringInputController)({ field: props.field, control: props.control });
        return (react_1.default.createElement("div", { className: "flex flex-col gap-2" },
            react_1.default.createElement(Label, { id: controller.id },
                props.label ?? controller.metadata.name,
                controller.metadata.requiredArgumentForInput && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*")),
            react_1.default.createElement("div", { className: "border border-input rounded-[8px] focus-within:ring-ring/50 focus-within:ring-3 transition-shadow duration-200 ease-out overflow-hidden" },
                react_1.default.createElement(AutoRichTextInput, { ...props }))));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoRichTextInput);
};
exports.makeShadcnAutoRichTextInput = makeShadcnAutoRichTextInput;
//# sourceMappingURL=ShadcnautoRichTextInput.js.map