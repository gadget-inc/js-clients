import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useController } from "../../../useActionForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
type PolarisAutoPasswordInputProps = AutoPasswordInputProps & Partial<TextFieldProps>;

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
export const PolarisAutoPasswordInput = autoInput((props: PolarisAutoPasswordInputProps) => {
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
});
