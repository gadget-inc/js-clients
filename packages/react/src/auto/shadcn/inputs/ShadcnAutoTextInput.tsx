import type { InputHTMLAttributes } from "react";
import React from "react";
import type { Control } from "../../../useActionForm.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";

// should we move this to a shared location?
import { cn } from "../../../../spec/auto/shadcn-defaults/utils.js";

export const makeShadcnAutoTextInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) =>
  autoInput(
    (
      props: {
        field: string; // The field API identifier
        control?: Control<any>;
        label?: string;
        suffix?: React.ReactNode;
      } & Partial<InputHTMLAttributes<HTMLInputElement>>
    ) => {
      const { field, control, label: customLabel, suffix, ...restProps } = props;
      const stringInputController = useStringInputController({ field, control });
      const id = `${field}-input`;

      const label = customLabel || stringInputController.label || stringInputController.metadata.name;

      return (
        <div>
          <Label htmlFor={id}>{label}</Label>
          <div className="relative flex items-center">
            <Input
              {...getPropsWithoutRef(stringInputController)}
              type={stringInputController.type || "text"}
              id={id}
              required={stringInputController.metadata.requiredArgumentForInput || false}
              {...restProps}
              placeholder={stringInputController.placeholder || label}
              className={cn(props.className, stringInputController.errorMessage && "border-red-500")}
            />
            {suffix && (
                <div className="">
                  {suffix}
                </div>
              )}
          </div>
          {stringInputController.errorMessage && <p className="text-sm text-red-500">{stringInputController.errorMessage}</p>}
        </div>
      );
    }
  );
