import { FieldType } from "../../../metadata.js";

import type { TextFieldProps } from "@mui/material";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

export const MUIAutoIdInput = (
  props: {
    field: string;
  } & Partial<TextFieldProps>
) => {
  const { field } = props;
  const { name, metadata } = useStringInputController({ field });

  if (metadata.fieldType !== FieldType.Id || field !== "id") {
    throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
  }

  return (
    <MUIAutoTextInput
      field={field}
      label="ID"
      name={name}
      InputProps={{
        inputProps: { min: 1, step: 1 },
      }}
      type="number"
    />
  );
};
