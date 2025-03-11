import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export type PolarisAutoEncryptedStringInputProps = AutoEncryptedStringInputProps & Partial<TextFieldProps>;

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
