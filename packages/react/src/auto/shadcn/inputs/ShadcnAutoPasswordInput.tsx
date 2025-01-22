import { PencilIcon } from "lucide-react";
import React, { useState } from "react";
import type { Control } from "../../../useActionForm.js";
import { useController } from "../../../useActionForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";

/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";

export const makeShadcnAutoPasswordInput = ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => {
  const EncryptedInput = makeShadcnAutoEncryptedStringInput({ Input, Label, Button });

  return autoInput((props: { field: string; control?: Control<any>; className?: string }) => {
    const { findBy } = useAutoFormMetadata();
    const { path } = useFieldMetadata(props.field);
    const { field: fieldProps } = useController({ name: path });

    const [isEditing, setIsEditing] = useState(!findBy);

    const startEditing = () => {
      fieldProps.onChange(""); // Touch the field to mark it as dirty
      setIsEditing(true);
    };

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
  });
};
