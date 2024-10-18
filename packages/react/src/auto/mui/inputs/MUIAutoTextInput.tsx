import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { AutoTextInputProps } from "../../shared/AutoInputTypes.js";

type MUIAutoTextInputProps = AutoTextInputProps & Partial<TextFieldProps>;

export const MUIAutoTextInput = autoInput((props: MUIAutoTextInputProps) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  const isRequired = stringInputController.metadata.requiredArgumentForInput;
  const label = (props.label ?? stringInputController.label) + (isRequired ? " *" : "");
  return (
    <TextField
      {...stringInputController}
      error={stringInputController.isError}
      helperText={stringInputController.errorMessage}
      {...props}
      label={label}
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
export const MUIAutoEmailInput = (props: MUIAutoTextInputProps) => <MUIAutoTextInput {...props} />;

/**
 * A number input component for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier
 * @param props.label - The label of the number input component
 * @returns The number input component
 */
export const MUIAutoNumberInput = (props: MUIAutoTextInputProps) => <MUIAutoTextInput {...props} />;

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
export const MUIAutoStringInput = (props: MUIAutoTextInputProps) => <MUIAutoTextInput {...props} />;

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
export const MUIAutoUrlInput = (props: MUIAutoTextInputProps) => <MUIAutoTextInput {...props} />;
