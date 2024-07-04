import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import type { Control } from "react-hook-form";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisEncryptedStringInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const [isShown, setIsShown] = useState(false);

  const showHideToggleButton = (
    <div style={{ display: "flex" }} role={`${props.field}ToggleShowHideButton`}>
      <Button variant="plain" size="slim" icon={isShown ? HideIcon : ViewIcon} onClick={() => setIsShown(!isShown)} />
    </div>
  );

  return <PolarisAutoTextInput type={isShown ? "text" : "password"} suffix={showHideToggleButton} {...props} />;
};
