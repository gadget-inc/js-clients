import { FormControl, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import type { ReactElement } from "react";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

/**
 * A form control wrapper used to wrap MUI form input components.
 * @param props.field - The field API identifier
 * @param props.label - The label of the form control input component
 * @param props.children - The child elements to be rendered within the form control
 * @returns The form control component
 */
export const MUIAutoFormControl = (props: { field: string; children: ReactElement; label?: React.ReactNode }) => {
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
};
