import type { TextFieldProps } from "@shopify/polaris";
import { TextField } from "@shopify/polaris";
import React from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";

type PolarisAutoTextInputProps = AutoTextInputProps & Partial<TextFieldProps>;

/**
 * A text input component for string based fields for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoTextInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The field API identifier
 * @param props.label - The label of the field
 * @returns The Input component
 */
export const PolarisAutoTextInput = autoInput((props: PolarisAutoTextInputProps) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  return (
    <TextField
      {...getPropsWithoutRef(stringInputController)}
      requiredIndicator={stringInputController.metadata.requiredArgumentForInput}
      type={stringInputController.type as TextFieldProps["type"]}
      error={stringInputController.errorMessage}
      {...props}
      label={props.label || stringInputController.metadata.name}
    />
  );
});

/**
 * An input component for email fields for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEmailInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The email field API identifier
 * @param props.label - The label of the field
 * @returns The Input component
 */
export const PolarisAutoEmailInput = (props: AutoTextInputProps) => <PolarisAutoTextInput {...props} />;

/**
 * A input component for string fields for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoStringInput field="name" />
 * </AutoForm>
 * ```
 * @param props.field - The string field API identifier
 * @param props.label - The label of the string field
 * @returns The Input component
 */
export const PolarisAutoStringInput = (props: AutoTextInputProps) => <PolarisAutoTextInput {...props} />;

/**
 * A input component for URL fields for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoUrlInput field="website" />
 * </AutoForm>
 * ```
 * @param props.field - The url field API identifier
 * @param props.label - The label of the url field
 * @returns The Input component
 */
export const PolarisAutoUrlInput = (props: AutoTextInputProps) => <PolarisAutoTextInput {...props} />;
