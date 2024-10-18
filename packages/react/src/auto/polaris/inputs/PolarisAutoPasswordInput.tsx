import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useController, type Control } from "../../../useActionForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";

export const PolarisAutoPasswordInput = autoInput(
  (
    props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<TextFieldProps>
  ) => {
    const { findBy } = useAutoFormMetadata();
    const { path } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({ name: path });

    const [isEditing, setIsEditing] = useState(!findBy);

    const startEditing = () => {
      fieldProps.onChange(""); // Touch the field to mark it as dirty
      setIsEditing(true);
    };

    const startEditingButton = (
      <div style={{ display: "flex" }}>
        <Button variant="plain" size="slim" icon={EditIcon} onClick={startEditing} role={`${props.field}EditPasswordButton`} />
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
  }
);
