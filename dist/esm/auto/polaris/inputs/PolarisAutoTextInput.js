import { TextField } from "@shopify/polaris";
import React from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
/**
 * A text input within AutoForm.
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
export const PolarisAutoTextInput = autoInput((props) => {
    const stringInputController = useStringInputController(props);
    return (React.createElement(TextField, { ...getPropsWithoutRef(stringInputController), requiredIndicator: stringInputController.metadata.requiredArgumentForInput, type: stringInputController.type, error: stringInputController.errorMessage, ...props, label: props.label || stringInputController.metadata.name }));
});
/**
 * An email input within AutoForm.
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
export const PolarisAutoEmailInput = (props) => React.createElement(PolarisAutoTextInput, { ...props });
/**
 * A string input within AutoForm.
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
export const PolarisAutoStringInput = (props) => React.createElement(PolarisAutoTextInput, { ...props });
/**
 * A url input within AutoForm.
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
export const PolarisAutoUrlInput = (props) => React.createElement(PolarisAutoTextInput, { ...props });
//# sourceMappingURL=PolarisAutoTextInput.js.map