import { IconButton, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import type { AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

type MUIAutoEncryptedStringInputProps = AutoEncryptedStringInputProps & Partial<TextFieldProps>;

/**
 * An encrypted string input for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier for the EncryptedString field.
 * @param props.label - The label of the EncryptedString field.
 * @returns The AutoEncryptedStringInput component.
 */
export const MUIAutoEncryptedStringInput = (props: MUIAutoEncryptedStringInputProps) => {
  const [isShown, setIsShown] = useState(false);
  const showHideToggleButton = <IconButton onClick={() => setIsShown(!isShown)}>{isShown ? `🔒` : `👁️`}</IconButton>;

  return <MUIAutoTextInput InputProps={{ endAdornment: showHideToggleButton }} type={isShown ? "text" : "password"} {...props} />;
};
