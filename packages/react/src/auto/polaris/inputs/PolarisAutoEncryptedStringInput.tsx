import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { HideIcon, ViewIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import type { Control } from "../../../useActionForm.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisAutoEncryptedStringInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
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
};
