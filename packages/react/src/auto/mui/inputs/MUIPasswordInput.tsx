import { IconButton, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import type { Control } from "react-hook-form";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { MUIEncryptedStringInput } from "./MUIEncryptedStringInput.js";

/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const pencilEmoji = `✏️`;

export const MUIPasswordInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { findBy } = useAutoFormMetadata();
  const [isEditing, setIsEditing] = useState(!findBy);

  const startEditingButton = (
    <IconButton onClick={() => setIsEditing(true)} role={`${props.field}EditPasswordButton`}>
      {pencilEmoji}
    </IconButton>
  );

  return (
    <MUIEncryptedStringInput
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
