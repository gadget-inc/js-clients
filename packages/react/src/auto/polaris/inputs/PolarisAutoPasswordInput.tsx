import type { TextFieldProps } from "@shopify/polaris";
import { Button } from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import React from "react";
import { existingPasswordPlaceholder, usePasswordController } from "../../../auto/hooks/usePasswordController.js";
import { type Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";

export const PolarisAutoPasswordInput = autoInput(
  (
    props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<TextFieldProps>
  ) => {
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
  }
);
