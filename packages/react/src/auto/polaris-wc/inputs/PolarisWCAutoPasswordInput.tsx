import React from "react";
import { autoInput } from "../../AutoInput.js";
import { existingPasswordPlaceholder, usePasswordController } from "../../hooks/usePasswordController.js";
import type { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisWCAutoEncryptedStringInput } from "./PolarisWCAutoEncryptedStringInput.js";

export type PolarisWCAutoPasswordInputProps = AutoPasswordInputProps & {
  placeholder?: string;
  disabled?: boolean;
};

/**
 * A password input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoPasswordInput field="passwordFieldApiId" />
 * </AutoForm>
 * ```
 * @param props.field - The password field API identifier.
 * @param props.label - Label of the password input.
 * @returns The AutoPasswordInput component.
 */
export const PolarisWCAutoPasswordInput = autoInput((props: PolarisWCAutoPasswordInputProps) => {
  const { isEditing, startEditing } = usePasswordController(props);

  if (!isEditing) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
        <PolarisWCAutoEncryptedStringInput {...props} placeholder={existingPasswordPlaceholder} disabled />
        <div style={{ marginBottom: "2px" }}>
          <s-button variant="tertiary" onClick={startEditing} icon="edit" {...{ role: `${props.field}EditPasswordButton` }}></s-button>
        </div>
      </div>
    );
  }

  return <PolarisWCAutoEncryptedStringInput {...props} placeholder="Password" />;
});
