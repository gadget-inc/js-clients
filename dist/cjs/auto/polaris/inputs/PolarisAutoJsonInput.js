"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoJSONInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useFocus_js_1 = require("../../../useFocus.js");
const useJSONInputController_js_1 = require("../../hooks/useJSONInputController.js");
const PolarisAutoJSONInput = (props) => {
    const { onStringValueChange, error, stringValue, originalController } = (0, useJSONInputController_js_1.useJSONInputController)(props);
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, ...restOfOriginalController } = originalController;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.TextField, { multiline: 4, monospaced: true, ...restOfOriginalController, value: stringValue, onChange: onStringValueChange, error: !isFocused && error && `Invalid JSON: ${error.message}`, ...focusProps, ...restOfProps })));
};
exports.PolarisAutoJSONInput = PolarisAutoJSONInput;
//# sourceMappingURL=PolarisAutoJsonInput.js.map