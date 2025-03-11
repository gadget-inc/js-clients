import React, { useMemo } from "react";
import { useBooleanInputController } from "../../../auto/hooks/useBooleanInputController.js";
import { autoInput } from "../../AutoInput.js";
import { type AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { CheckboxProps, ShadcnElements } from "../elements.js";

export const makeShadcnAutoBooleanInput = ({ Checkbox, Label }: Pick<ShadcnElements, "Checkbox" | "Label">) => {
  function ShadcnAutoBooleanInput(props: { className?: string } & AutoBooleanInputProps & Partial<CheckboxProps>) {
    const { field: _field, control: _control, ...rest } = props;
    const { path, error, fieldProps, metadata } = useBooleanInputController(props);

    // UUID prefix for the id that links the label and checkbox so the label won't link to the wrong checkbox if there are multiple checkboxes with the same path
    const uuidPrefix = useMemo(() => crypto.randomUUID(), []);

    const { value: _value, ...restFieldProps } = fieldProps;
    const label = props.label ?? metadata.name;

    return (
      <div className="flex items-center gap-2">
        <Checkbox
          {...restFieldProps}
          id={`${uuidPrefix}-${path}`}
          checked={_value}
          aria-invalid={!!error}
          {...rest}
          disabled={props.disabled ?? false}
          onCheckedChange={fieldProps.onChange}
        />
        <Label htmlFor={`${uuidPrefix}-${path}`} className={`${props.className ?? ""} ${error ? "text-red-500" : ""} cursor-pointer`}>
          {label}
        </Label>
        {error && <ShadcnRequired>{error.message}</ShadcnRequired>}
      </div>
    );
  }

  return autoInput(ShadcnAutoBooleanInput);
};
