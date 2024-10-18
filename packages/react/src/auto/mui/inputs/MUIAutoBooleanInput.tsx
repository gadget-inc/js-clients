import type { CheckboxProps } from "@mui/material";
import { Checkbox } from "@mui/material";
import React from "react";
import { useController, type Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";

export const MUIAutoBooleanInput = autoInput(
  (props: { field: string; control?: Control<any>; label?: string } & Partial<CheckboxProps>) => {
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
  }
);
