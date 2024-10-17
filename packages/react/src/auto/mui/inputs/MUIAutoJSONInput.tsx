import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import type { Control } from "../../../useActionForm.js";
import { useFocus } from "../../../useFocus.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";

export const MUIAutoJSONInput = (
  props: {
    field: string; // The field API identifier
    control?: Control<any>;
  } & Partial<Omit<TextFieldProps, "onChange">>
) => {
  const [isFocused, focusProps] = useFocus();
  const { field: _field, control: _control, ...restOfProps } = props;
  const { type: _type, errorMessage, ...controller } = useJSONInputController(props);

  const inErrorState = !isFocused && !!errorMessage;
  const label = props.label ?? controller.label;
  return (
    <TextField
      multiline
      maxRows={4}
      inputProps={{ style: { fontFamily: "monospace" } }}
      error={inErrorState}
      helperText={inErrorState && `Invalid JSON: ${errorMessage}`}
      {...controller}
      {...focusProps}
      {...restOfProps}
      label={label}
      onChange={(event) => controller.onChange(event.target.value)}
    />
  );
};
