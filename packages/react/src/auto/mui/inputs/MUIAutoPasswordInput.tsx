import type { TextFieldProps } from "@mui/material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";

/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const pencilEmoji = `✏️`;

type MUIAutoPasswordInputProps = AutoPasswordInputProps & Partial<TextFieldProps>;

/**
 * A password input component for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoPasswordInput field="passwordFieldApiId" />
 * </AutoForm>
 * ```
 * @param props.field - The password field API identifier
 * @param props.label - The label of the password input component
 * @returns The password input component
 */
export const MUIAutoPasswordInput = (props: MUIAutoPasswordInputProps) => {
  const { findBy } = useAutoFormMetadata();
  const { path } = useFieldMetadata(props.field);
  const { field: fieldProps } = useController({ name: path });

  const [isEditing, setIsEditing] = useState(!findBy);

  const startEditing = () => {
    fieldProps.onChange(""); // Touch the field to mark it as dirty
    setIsEditing(true);
  };

  const startEditingButton = (
    <IconButton onClick={startEditing} role={`${props.field}EditPasswordButton`}>
      {pencilEmoji}
    </IconButton>
  );

  return (
    <MUIAutoEncryptedStringInput
      {...(isEditing
        ? { placeholder: "Password" }
        : {
            InputProps: { endAdornment: startEditingButton },
            placeholder: existingPasswordPlaceholder,
            disabled: true,
          })}
      {...props}
    />
  );
};
