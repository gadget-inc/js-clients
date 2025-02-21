import { PencilIcon } from "lucide-react";
import React, { type ReactNode } from "react";
import { existingPasswordPlaceholder, usePasswordController } from "../../../auto/hooks/usePasswordController.js";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";

export function makeShadcnAutoPasswordInput({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) {
  const EncryptedInput = makeShadcnAutoEncryptedStringInput({ Input, Label, Button });

  function ShadcnAutoPasswordInput(props: { field: string; control?: Control<any>; className?: string; label?: ReactNode }) {
    const { isEditing, startEditing } = usePasswordController(props);

    return (
      <EncryptedInput
        {...props}
        {...(isEditing
          ? { placeholder: "Password" }
          : {
              placeholder: existingPasswordPlaceholder,
              disabled: true,
              className: "pr-20",
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
