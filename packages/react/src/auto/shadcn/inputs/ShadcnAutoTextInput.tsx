import React from "react";
import type { InputHTMLAttributes } from "react";
import type { Control } from "../../../useActionForm.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";

// should we move this to a shared location?
import { cn } from "../../../../spec/auto/shadcn-defaults/utils.js";

export const makeShadcnAutoTextInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) =>
  autoInput(
    (props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<InputHTMLAttributes<HTMLInputElement>>) => {
      const { field, control } = props;
      const stringInputController = useStringInputController({ field, control });
      const id = `${field}-input`;

      const label = stringInputController.label || stringInputController.metadata.name;
      

      return (
        <div>
          <Label htmlFor={id}>{label}</Label>
          <Input
            {...getPropsWithoutRef(stringInputController)}
            type={stringInputController.type || "text"}
            id={id}
            required={stringInputController.metadata.requiredArgumentForInput || false}
            {...props}
            placeholder={stringInputController.placeholder || label}
            className={cn(props.className, stringInputController.errorMessage && "border-red-500")}
            />
           {stringInputController.errorMessage && (
            <p className="text-sm text-red-500">{stringInputController.errorMessage}</p>
          )}
        </div>
      );
    }
  );