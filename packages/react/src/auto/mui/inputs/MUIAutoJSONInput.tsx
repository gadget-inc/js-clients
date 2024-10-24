import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import { useFocus } from "../../../useFocus.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
import { AutoJSONInputProps } from "../../shared/AutoInputTypes.js";

type MUIAutoJSONInputProps = AutoJSONInputProps & Partial<Omit<TextFieldProps, "onChange">>;

/**
 * JSON field input component for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoJSONInput field="fieldA" label="Field A" />
 * </AutoForm>
 * ```
 * @param props.field - The JSON field API identifier
 * @param props.label - The label of the JSON input component
 * @returns The JSON input component
 */
export const MUIAutoJSONInput = autoInput((props: MUIAutoJSONInputProps) => {
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
});
