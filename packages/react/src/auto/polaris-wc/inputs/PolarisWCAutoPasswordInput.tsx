import React, { type ComponentProps } from "react";
import { autoInput } from "../../AutoInput.js";
import { existingPasswordPlaceholder, usePasswordController } from "../../hooks/usePasswordController.js";
import type { AutoPasswordInputProps, StringOnlyLabel } from "../../shared/AutoInputTypes.js";
import { PolarisWCAutoEncryptedStringInput } from "./PolarisWCAutoEncryptedStringInput.js";

export type PolarisWCAutoPasswordInputProps = StringOnlyLabel<AutoPasswordInputProps> &
  Partial<ComponentProps<typeof PolarisWCAutoEncryptedStringInput>>;

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
        <PolarisWCAutoEncryptedStringInput
          placeholder={existingPasswordPlaceholder}
          {...props}
          disabled={true} // must be disabled to prevent password from being shown
        />
        <div style={{ marginBottom: "2px" }}>
          <s-button variant="tertiary" onClick={startEditing} icon="edit" {...{ role: `${props.field}EditPasswordButton` }}></s-button>
        </div>
      </div>
    );
  }

  return <PolarisWCAutoEncryptedStringInput placeholder="Password" {...props} />;
});
