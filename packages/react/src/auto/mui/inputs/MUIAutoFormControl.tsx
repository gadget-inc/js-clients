import { FormControl, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import type { ReactElement } from "react";
import React from "react";
import { useController } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { InputLabel } from "../../shared/AutoInputTypes.js";

/**
 * A form control wrapper used to wrap MUI form input components.
 * @param props.field - The field API identifier
 * @param props.label - The label of the form control input component
 * @param props.children - The child elements to be rendered within the form control
 * @returns The form control component
 */
export const MUIAutoFormControl = autoInput((props: { field: string; children: ReactElement; label?: InputLabel }) => {
  const { path, metadata } = useFieldMetadata(props.field);
  const {
    fieldState: { error },
  } = useController({
    name: path,
  });

  return (
    <FormControl {...metadata} error={!!error}>
      <FormGroup>
        <FormControlLabel label={props.label ?? metadata.name} control={props.children} />
      </FormGroup>
      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
});
