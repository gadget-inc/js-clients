"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useBooleanInputController_js_1 = require("../../../auto/hooks/useBooleanInputController.js");
const AutoInput_js_1 = require("../../AutoInput.js");
exports.PolarisAutoBooleanInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: _field, control: _control, ...rest } = props;
    const { error, fieldProps, metadata } = (0, useBooleanInputController_js_1.useBooleanInputController)(props);
    const { value: _value, ...restFieldProps } = fieldProps;
    const label = props.label ?? metadata.name;
    return react_1.default.createElement(polaris_1.Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map