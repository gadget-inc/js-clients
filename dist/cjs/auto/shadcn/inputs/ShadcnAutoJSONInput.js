"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoJSONInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useFocus_js_1 = require("../../../useFocus.js");
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useJSONInputController_js_1 = require("../../hooks/useJSONInputController.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const makeShadcnAutoJSONInput = ({ Label, Textarea }) => {
    function ShadcnAutoJSONInput(props) {
        const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
        const { field: _field, control: _control, ...restOfProps } = props;
        const { type: _type, errorMessage, ...controller } = (0, useJSONInputController_js_1.useJSONInputController)(props);
        const requiredIndicator = controller.metadata.requiredArgumentForInput ? react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*") : null;
        const label = props.label ?? controller.label;
        const id = props.id ?? `${props.field}-input`;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { htmlFor: id },
                label,
                " ",
                requiredIndicator),
            react_1.default.createElement(Textarea, { ...(0, utils_js_1.getPropsWithoutRef)(controller), ...(0, utils_js_1.getPropsWithoutRef)(focusProps), ...restOfProps, onChange: (e) => {
                    console.log(e.currentTarget.value);
                    controller.onChange(e.currentTarget.value);
                }, id: id }),
            !isFocused && errorMessage && react_1.default.createElement("p", { className: "text-sm text-red-500" }, `Invalid JSON: ${errorMessage}`)));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoJSONInput);
};
exports.makeShadcnAutoJSONInput = makeShadcnAutoJSONInput;
//# sourceMappingURL=ShadcnAutoJSONInput.js.map