import React from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { CheckboxProps, ShadcnElements } from "../elements.js";

export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }: Pick<ShadcnElements, "Checkbox" | "Label">) => {
  function ShadcnAutoBooleanInput(
    props: {
      field: string;
      control?: Control<any>;
      className?: string;
      label?: string;
    } & Partial<CheckboxProps>
  ) {
    const { field: _field, control: _control, ...rest } = props;
    const { path, error, fieldProps, metadata } = useBooleanInputController(props);

    const { value: _value, ...restFieldProps } = fieldProps;
    const label = props.label ?? metadata.name;
    const requiredIndicator = metadata.requiredArgumentForInput ? <ShadcnRequired>*</ShadcnRequired> : null;

    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          {...restFieldProps}
          id={path}
          checked={_value}
          aria-invalid={!!error}
          {...rest}
          disabled={props.disabled ?? false}
          onCheckedChange={fieldProps.onChange}
        />
        <Label htmlFor={path} className={`${props.className ?? ""} ${error ? "text-red-500" : ""}`}>
          {label} {requiredIndicator}
        </Label>
        {error && <ShadcnRequired>{error.message}</ShadcnRequired>}
      </div>
    );
  }

  return autoInput(ShadcnAutoBooleanInput);
};
