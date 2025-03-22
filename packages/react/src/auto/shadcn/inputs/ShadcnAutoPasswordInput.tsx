import { PencilIcon } from "lucide-react";
import React, { type ComponentProps } from "react";
import { existingPasswordPlaceholder, usePasswordController } from "../../../auto/hooks/usePasswordController.js";
import { autoInput } from "../../AutoInput.js";
import { type AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";

export function makeShadcnAutoPasswordInput({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) {
  const EncryptedInput = makeShadcnAutoEncryptedStringInput({ Input, Label, Button });
  function ShadcnAutoPasswordInput(
    props: AutoPasswordInputProps & Omit<ComponentProps<typeof EncryptedInput>, "type" | "disabled" | "placeholder" | "suffix">
  ) {
    const { isEditing, startEditing } = usePasswordController(props);

    return (
      <EncryptedInput
        {...props}
        {...(isEditing
          ? { placeholder: "Password" }
          : {
              placeholder: existingPasswordPlaceholder,
              disabled: true,
              suffix: (
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={startEditing}
                  className="h-8 w-8"
                  role={`${props.field}EditPasswordButton`}
                >
                  <PencilIcon className="h-4 w-4" />
                </Button>
              ),
            })}
      />
    );
  }

  return autoInput(ShadcnAutoPasswordInput);
}
