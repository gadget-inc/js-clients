import type { CheckboxProps } from "@mui/material";
import { Checkbox } from "@mui/material";
import React from "react";
import { useController } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoBooleanInputProps, InputLabel } from "../../shared/AutoInputTypes.js";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";

export interface MUIAutoBooleanInputProps extends AutoBooleanInputProps, Partial<CheckboxProps> {
  /**
   * The label of the checkbox
   */
  label?: InputLabel;
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
export const MUIAutoBooleanInput = autoInput((props: MUIAutoBooleanInputProps) => {
  const { field: fieldApiIdentifier, label, control, ...rest } = props;

  const { path } = useFieldMetadata(fieldApiIdentifier);

  const { field: fieldProps } = useController({
    control,
    name: path,
  });

  const { value: _value, ...restFieldProps } = fieldProps;

  return (
    <MUIAutoFormControl field={props.field} label={label as string}>
      <Checkbox {...restFieldProps} checked={fieldProps.value} {...rest} />
    </MUIAutoFormControl>
  );
});
