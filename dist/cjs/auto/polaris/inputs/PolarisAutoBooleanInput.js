"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
exports.PolarisAutoBooleanInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const { field: fieldProps, fieldState: { error }, } = (0, useActionForm_js_1.useController)({
        control,
        name: path,
    });
    const { formState: { defaultValues }, } = (0, useActionForm_js_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        if (metadata.requiredArgumentForInput) {
            // when the field is required, this defaults to false to match the UI
            // When not required, the field will have a null value unless it is touched by the user
            const defaultValue = (0, utils_js_1.get)(defaultValues ?? {}, path) ?? false;
            fieldProps.onChange(defaultValue);
        }
    }, [metadata.requiredArgumentForInput, defaultValues]);
    const label = props.label ?? metadata.name;
    const { value: _value, ...restFieldProps } = fieldProps;
    return react_1.default.createElement(polaris_1.Checkbox, { ...restFieldProps, checked: !!fieldProps.value, error: error?.message, ...rest, label: label });
});
//# sourceMappingURL=PolarisAutoBooleanInput.js.map