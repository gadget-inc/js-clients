import type { CheckboxProps } from "@mui/material";
import { Checkbox } from "@mui/material";
import React from "react";
import { useController, type Control } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoFormControl } from "./MUIAutoInput.js";

export const MUIBooleanInput = (props: { field: string; control?: Control<any> } & Partial<CheckboxProps>) => {
  const { field: fieldApiIdentifier, control, ...rest } = props;

  const { path } = useFieldMetadata(fieldApiIdentifier);

  const { field: fieldProps } = useController({
    control,
    name: path,
  });

  const { value: _value, ...restFieldProps } = fieldProps;

  return (
    <MUIAutoFormControl field={props.field}>
      <Checkbox {...restFieldProps} checked={fieldProps.value} {...rest} />
    </MUIAutoFormControl>
  );
};
