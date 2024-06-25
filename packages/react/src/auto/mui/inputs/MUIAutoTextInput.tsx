import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import type { Control } from "react-hook-form";
import { useStringInputController } from "../../hooks/useStringInputController.js";

export const MUIAutoTextInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  const isRequired = stringInputController.metadata.requiredArgumentForInput;
  const label = stringInputController.label + (isRequired ? " *" : "");
  return (
    <TextField
      {...stringInputController}
      label={label}
      error={stringInputController.isError}
      helperText={stringInputController.errorMessage}
      {...props}
    />
  );
};
