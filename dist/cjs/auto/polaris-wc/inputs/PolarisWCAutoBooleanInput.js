"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useBooleanInputController_js_1 = require("../../hooks/useBooleanInputController.js");
/**
 * A boolean checkbox within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field.
 * @param props.label - Label of the Boolean checkbox.
 * @returns The AutoBooleanInput component.
 */
exports.PolarisWCAutoBooleanInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: _field, control: _control, disabled, label: _label, ...rest } = props;
    const { error, fieldProps, metadata } = (0, useBooleanInputController_js_1.useBooleanInputController)(props);
    const { onChange } = fieldProps;
    const handleChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        onChange(target.checked ?? false);
    }, [onChange]);
    // Ensure label is always a string - metadata.name should be string but TypeScript infers it could be ReactNode
    const labelValue = typeof props.label === "string" ? props.label : String(metadata.name ?? "");
    return (react_1.default.createElement("s-checkbox", { checked: !!fieldProps.value, disabled: disabled, error: error?.message, label: labelValue, onChange: handleChange, ...rest }));
});
//# sourceMappingURL=PolarisWCAutoBooleanInput.js.map