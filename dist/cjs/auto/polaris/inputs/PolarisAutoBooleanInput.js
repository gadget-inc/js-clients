"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisAutoBooleanInput = (props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const { value: _value, ...restFieldProps } = fieldProps;
    return react_1.default.createElement(polaris_1.Checkbox, { label: metadata.name, ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest });
};
exports.PolarisAutoBooleanInput = PolarisAutoBooleanInput;
//# sourceMappingURL=PolarisAutoBooleanInput.js.map