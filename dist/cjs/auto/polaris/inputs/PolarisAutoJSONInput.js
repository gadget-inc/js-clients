"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoJSONInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useFocus_js_1 = require("../../../useFocus.js");
const utils_js_1 = require("../../../utils.js");
const useJSONInputController_js_1 = require("../../hooks/useJSONInputController.js");
const PolarisAutoJSONInput = (props) => {
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = (0, useJSONInputController_js_1.useJSONInputController)(props);
    const label = props.label ?? controller.label;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.TextField, { multiline: 4, monospaced: true, error: !isFocused && errorMessage && `Invalid JSON: ${errorMessage}`, ...(0, utils_js_1.getPropsWithoutRef)(controller), ...(0, utils_js_1.getPropsWithoutRef)(focusProps), ...restOfProps, label: label })));
};
exports.PolarisAutoJSONInput = PolarisAutoJSONInput;
//# sourceMappingURL=PolarisAutoJSONInput.js.map