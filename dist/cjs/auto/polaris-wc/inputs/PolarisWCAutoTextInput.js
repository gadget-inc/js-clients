"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoUrlInput = exports.PolarisWCAutoStringInput = exports.PolarisWCAutoEmailInput = exports.PolarisWCAutoTextInput = exports.usePolarisWCTextInputProps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
/**
 * Shared hook for Polaris WC text-like inputs (text and number).
 * Sets up string input controller, change handler, label, and base text field props.
 */
function usePolarisWCTextInputProps(props) {
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)(props);
    const { onChange } = stringInputController;
    const handleChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        onChange(target.value ?? "");
    }, [onChange]);
    const label = (props.label ?? String(stringInputController.metadata.name ?? ""));
    const textFieldProps = {
        label,
        value: stringInputController.value ?? "",
        placeholder: props.placeholder ?? stringInputController.placeholder,
        disabled: props.disabled,
        required: stringInputController.metadata.requiredArgumentForInput,
        error: stringInputController.errorMessage,
        onChange: handleChange,
    };
    return { label, textFieldProps, stringInputController };
}
exports.usePolarisWCTextInputProps = usePolarisWCTextInputProps;
/**
 * A text input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoTextInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The field API identifier.
 * @param props.label - Label of the input.
 * @returns The AutoTextInput component.
 */
exports.PolarisWCAutoTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: _field, label: _label, control: _control, ...rest } = props;
    const { textFieldProps, stringInputController } = usePolarisWCTextInputProps(props);
    const finalTextFieldProps = { ...textFieldProps, id: stringInputController.id };
    return react_1.default.createElement("s-text-field", { ...finalTextFieldProps, autocomplete: "off", ...rest });
});
/**
 * An email input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEmailInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The email field API identifier
 * @param props.label - Label of the email input.
 * @returns The AutoEmailInput component
 */
const PolarisWCAutoEmailInput = (props) => react_1.default.createElement(exports.PolarisWCAutoTextInput, { ...props });
exports.PolarisWCAutoEmailInput = PolarisWCAutoEmailInput;
/**
 * A string input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoStringInput field="name" />
 * </AutoForm>
 * ```
 * @param props.field - The string field API identifier.
 * @param props.label - Label of the string input.
 * @returns The AutoStringInput component
 */
const PolarisWCAutoStringInput = (props) => react_1.default.createElement(exports.PolarisWCAutoTextInput, { ...props });
exports.PolarisWCAutoStringInput = PolarisWCAutoStringInput;
/**
 * A url input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoUrlInput field="website" />
 * </AutoForm>
 * ```
 * @param props.field - The url field API identifier.
 * @param props.label - Label of the url input.
 * @returns The AutoUrlInput component
 */
const PolarisWCAutoUrlInput = (props) => react_1.default.createElement(exports.PolarisWCAutoTextInput, { ...props });
exports.PolarisWCAutoUrlInput = PolarisWCAutoUrlInput;
//# sourceMappingURL=PolarisWCAutoTextInput.js.map