"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const makeShadcnAutoBooleanInput = ({ Checkbox, Label }) => {
    function ShadcnAutoBooleanInput(props) {
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
        return (react_1.default.createElement("div", { className: "flex items-center space-x-2" },
            react_1.default.createElement(Checkbox, { ...restFieldProps, id: path, checked: _value, "aria-invalid": !!error, ...rest, disabled: props.disabled ?? false, onCheckedChange: fieldProps.onChange }),
            react_1.default.createElement(Label, { htmlFor: path, className: `${props.className ?? ""} ${error ? "text-red-500" : ""}` }, label),
            error && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, error.message)));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoBooleanInput);
};
exports.makeShadcnAutoBooleanInput = makeShadcnAutoBooleanInput;
//# sourceMappingURL=ShadcnAutoBooleanInput.js.map