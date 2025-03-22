import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React from "react";
import { existingPasswordPlaceholder, usePasswordController } from "../../../auto/hooks/usePasswordController.js";
import { autoInput } from "../../AutoInput.js";
import type { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";

type PolarisAutoPasswordInputProps = AutoPasswordInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;

/**
 * A password input within AutoForm.
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
export const PolarisAutoPasswordInput = autoInput((props: PolarisAutoPasswordInputProps) => {
  const { isEditing, startEditing } = usePasswordController(props);

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
