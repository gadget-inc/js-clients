import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import type { Control } from "react-hook-form";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";

/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";

export const PolarisAutoPasswordInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { findBy } = useAutoFormMetadata();
  const [isEditing, setIsEditing] = useState(!findBy);

  const startEditingButton = (
    <div style={{ display: "flex" }}>
      <Button variant="plain" size="slim" icon={EditIcon} onClick={() => setIsEditing(true)} role={`${props.field}EditPasswordButton`} />
    </div>
  );

  return (
    <PolarisAutoEncryptedStringInput
      {...(isEditing
        ? { placeholder: "Password" }
        : {
            placeholder: existingPasswordPlaceholder,
            suffix: startEditingButton,
            disabled: true,
          })}
      {...props}
    />
  );
};
