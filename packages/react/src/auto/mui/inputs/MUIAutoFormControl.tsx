import { FormControl, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import type { ReactElement } from "react";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const MUIAutoFormControl = (props: { field: string; children: ReactElement }) => {
  const { path, metadata } = useFieldMetadata(props.field);
  const {
    fieldState: { error },
  } = useController({
    name: path,
  });

  return (
    <FormControl {...metadata} error={!!error}>
      <FormGroup>
        <FormControlLabel label={metadata.name} control={props.children} />
      </FormGroup>
      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
