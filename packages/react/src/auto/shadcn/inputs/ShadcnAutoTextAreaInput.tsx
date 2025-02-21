import React, { type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements, TextareaProps } from "../elements.js";

export const makeShadcnAutoTextAreaInput = ({ Textarea, Label }: Pick<ShadcnElements, "Textarea" | "Label">) => {
  function ShadcnAutoTextAreaInput(
    props: {
      field: string;
      control?: Control<any>;
      label?: ReactNode;
      suffix?: React.ReactNode;
    } & TextareaProps
  ) {
    const { field, control, label: customLabel, suffix, ...restProps } = props;
    const {
      name,
      placeholder,
      value,
      autoComplete,
      label: controllerLabel,
      metadata,
      errorMessage,
      onChange,
      onBlur,
    } = useStringInputController({ field, control });

    const id = name || `${field}-input`;

    const inputLabel = customLabel || controllerLabel || metadata.name;

    return (
      <div>
        <Label htmlFor={id}>{inputLabel}</Label>
        <div className={suffix ? "relative group border border-input rounded-md focus-within:ring-1 focus-within:ring-ring " : "relative"}>
          <div className="relative flex items-center">
            <Textarea
              name={name}
              id={id}
              value={value ?? ""}
              autoComplete={autoComplete}
              onChange={onChange}
              onBlur={onBlur}
              required={metadata.requiredArgumentForInput || false}
              className={suffix ? "border-0 shadow-none rounded-none focus:ring-0 focus-visible:ring-0" : ""}
              {...restProps}
              placeholder={placeholder}
            />
            {suffix && <div className=" h-10 flex items-center px-3">{suffix}</div>}
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoTextAreaInput);
};
