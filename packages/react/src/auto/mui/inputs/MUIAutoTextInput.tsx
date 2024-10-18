import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";

export const MUIAutoTextInput = autoInput(
  (
    props: {
      field: string; // The field API identifier
      control?: Control<any>;
    } & Partial<TextFieldProps>
  ) => {
    const { field, control } = props;
    const stringInputController = useStringInputController({ field, control });

    const isRequired = stringInputController.metadata.requiredArgumentForInput;
    const label = (props.label ?? stringInputController.label) + (isRequired ? " *" : "");
    return (
      <TextField
        {...stringInputController}
        error={stringInputController.isError}
        helperText={stringInputController.errorMessage}
        {...props}
        label={label}
      />
    );
  }
);
