import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import type { Control } from "react-hook-form";
import { useFocus } from "../../../useFocus.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";

export const MUIAutoJSONInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<TextFieldProps>
) => {
  const { onStringValueChange, error, stringValue, originalController } = useJSONInputController(props);
  const [isFocused, focusProps] = useFocus();
  const { field: _field, control: _control, ...restOfProps } = props;

  const inErrorState = !isFocused && !!error;

  return (
    <TextField
      multiline
      maxRows={4}
      inputProps={{ style: { fontFamily: "monospace" } }}
      {...originalController}
      value={stringValue}
      onChange={(event) => onStringValueChange(event.target.value)}
      error={inErrorState}
      helperText={inErrorState && `Invalid JSON: ${error.message}`}
      {...focusProps}
      {...restOfProps}
    />
  );
};
