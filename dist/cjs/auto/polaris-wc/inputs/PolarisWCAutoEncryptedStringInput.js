"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoEncryptedStringInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
/**
 * An encrypted string input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - API identifier of the EncryptedString field.
 * @param props.label - Label of the EncryptedString input.
 * @returns The AutoEncryptedStringInput component.
 */
exports.PolarisWCAutoEncryptedStringInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { placeholder, disabled, ...restProps } = props;
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)(restProps);
    const handleChange = (0, react_1.useCallback)((eventOrValue) => {
        const value = typeof eventOrValue === "string"
            ? eventOrValue
            : eventOrValue.currentTarget?.value ?? "";
        stringInputController.onChange(value);
    }, [stringInputController.onChange]);
    // Ensure label is always a string
    const label = typeof props.label === "string" ? props.label : String(stringInputController.metadata.name ?? "");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("s-password-field", { id: stringInputController.id, name: stringInputController.name, label: label, value: stringInputController.value ?? "", placeholder: placeholder, disabled: disabled, required: stringInputController.metadata.requiredArgumentForInput, error: stringInputController.errorMessage, onChange: handleChange }),
        react_1.default.createElement("input", { type: "password", name: stringInputController.name, value: stringInputController.value ?? "", onChange: (e) => stringInputController.onChange(e.target.value), onBlur: stringInputController.onBlur, ref: stringInputController.ref, disabled: disabled, "aria-hidden": "true", tabIndex: -1, style: {
                position: "absolute",
                width: 1,
                height: 1,
                opacity: 0,
                clip: "rect(0,0,0,0)",
            } })));
});
//# sourceMappingURL=PolarisWCAutoEncryptedStringInput.js.map