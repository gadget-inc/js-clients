import React, { type InputHTMLAttributes } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoTextInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  function ShadcnAutoTextInput(
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
        <div className="relative flex items-center">
          <Input
            name={name}
            type={type || "text"}
            id={id}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
            onBlur={onBlur}
            required={metadata.requiredArgumentForInput || false}
            {...restProps}
            placeholder={placeholder || inputLabel}
          />
          {suffix && <div className="">{suffix}</div>}
        </div>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
    );
  }

  return autoInput(ShadcnAutoTextInput);
};
