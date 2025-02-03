import React, { type InputHTMLAttributes } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoStringInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  function ShadcnAutoStringInput(
    props: {
      field: string;
      control?: Control<any>;
      label?: string;
      suffix?: React.ReactNode;
    } & Partial<InputHTMLAttributes<HTMLInputElement>>
  ) {
    const { field, control, label: customLabel, suffix, ...restProps } = props;
    const stringInputController = useStringInputController({ field, control });
    const id = `${field}-input`;
    const {
      name,
      placeholder,
      value,
      autoComplete,
      type,
      label: controllerLabel,
      metadata,
      errorMessage,
      onChange,
      onBlur,
    } = stringInputController;

    const inputLabel = customLabel || controllerLabel || metadata.name;

    return (
      <div>
        <Label htmlFor={id}>{inputLabel}</Label>
        <div className={suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative"}>
          <div className="relative flex items-center">
            <Input
              name={name}
              type={type || "text"}
              id={id}
              value={value ?? ""}
              autoComplete={autoComplete}
              onChange={onChange}
              onBlur={onBlur}
              required={metadata.requiredArgumentForInput || false}
              className={suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : ""}
              {...restProps}
              placeholder={placeholder || inputLabel}
            />
            {suffix && <div className=" h-10 flex items-center px-3">{suffix}</div>}
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoStringInput);
};
