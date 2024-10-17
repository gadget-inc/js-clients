import type { CheckboxProps } from "@mui/material";
import { Checkbox } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";

export interface MUIAutoBooleanInputProps extends AutoBooleanInputProps, Partial<CheckboxProps> {
  /**
   * The label of the checkbox
   */
  label?: React.ReactNode;
}

/**
 * A checkbox input for boolean inputs for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field
 * @param props.label - The label of the checkbox
 *
 * @returns The checkbox input component
 */
export const MUIAutoBooleanInput = (props: MUIAutoBooleanInputProps) => {
  const { field: fieldApiIdentifier, label, control, ...rest } = props;

  const { path } = useFieldMetadata(fieldApiIdentifier);

  const { field: fieldProps } = useController({
    control,
    name: path,
  });

  const { value: _value, ...restFieldProps } = fieldProps;

  return (
    <MUIAutoFormControl field={props.field} label={label}>
      <Checkbox {...restFieldProps} checked={fieldProps.value} {...rest} />
    </MUIAutoFormControl>
  );
};
