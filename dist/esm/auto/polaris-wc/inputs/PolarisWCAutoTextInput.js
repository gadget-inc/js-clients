import React, { useCallback } from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
/**
 * Shared hook for Polaris WC text-like inputs (text and number).
 * Sets up string input controller, change handler, label, and base text field props.
 */
export function usePolarisWCTextInputProps(props) {
    const stringInputController = useStringInputController(props);
    const handleChange = useCallback((event) => {
        const target = event.currentTarget;
        stringInputController.onChange(target.value ?? "");
    }, [stringInputController.onChange]);
    const label = typeof props.label === "string" ? props.label : String(stringInputController.metadata.name ?? "");
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
export const PolarisWCAutoTextInput = autoInput((props) => {
    const { textFieldProps, stringInputController } = usePolarisWCTextInputProps(props);
    const finalTextFieldProps = { ...textFieldProps, id: stringInputController.id };
    return React.createElement("s-text-field", { ...finalTextFieldProps, autocomplete: "off" });
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
export const PolarisWCAutoEmailInput = (props) => React.createElement(PolarisWCAutoTextInput, { ...props });
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
export const PolarisWCAutoStringInput = (props) => React.createElement(PolarisWCAutoTextInput, { ...props });
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
export const PolarisWCAutoUrlInput = (props) => React.createElement(PolarisWCAutoTextInput, { ...props });
//# sourceMappingURL=PolarisWCAutoTextInput.js.map