import React, { type InputHTMLAttributes } from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoTextInputProps } from "../../shared/AutoInputTypes.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";

/**
 * Make the Shadcn components for the auto string input
 * @param elements - The Shadcn elements to use
 * @returns The Shadcn components for the auto string input
 */
export const makeShadcnAutoStringInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  function ShadcnAutoStringInput(
    props: {
      suffix?: React.ReactNode;
    } & AutoTextInputProps &
      Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">>
  ) {
    const { field, control, label: customLabel, suffix, ...restProps } = props;
    const stringInputController = useStringInputController({ field, control });
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

    const id = name || `${field}-input`;

    const inputLabel = customLabel || controllerLabel || metadata.name;

    const requiredIndicator = metadata.requiredArgumentForInput ? <ShadcnRequired>*</ShadcnRequired> : null;

    return (
      <div>
        <Label htmlFor={id}>
          {inputLabel} {requiredIndicator}
        </Label>
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
              placeholder={placeholder}
              {...restProps}
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
