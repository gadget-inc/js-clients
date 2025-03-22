import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export type PolarisAutoEncryptedStringInputProps = AutoEncryptedStringInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;

/**
 * An encrypted string input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - API identifier of the EncryptedString field.
 * @param props.label - Label of the EncryptedString input.
 * @returns The AutoEncryptedStringInput component.
 */
export const PolarisAutoEncryptedStringInput = autoInput((props: PolarisAutoEncryptedStringInputProps) => {
  const [isShown, setIsShown] = useState(false);

  const showHideToggleButton = (
    <div style={{ display: "flex" }}>
      <Button
        variant="plain"
        size="slim"
        icon={isShown ? HideIcon : ViewIcon}
        onClick={() => setIsShown(!isShown)}
        role={`${props.field}ToggleShowHideButton`}
      />
    </div>
  );

  return <PolarisAutoTextInput type={isShown ? "text" : "password"} suffix={showHideToggleButton} {...props} />;
});
