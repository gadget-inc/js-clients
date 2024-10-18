import type { TextFieldProps } from "@mui/material";
import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { AutoIdInputProps } from "../../shared/AutoInputTypes.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

export type MUIAutoIdInputProps = AutoIdInputProps & Partial<TextFieldProps>;
/**
 * An id input component for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoIdInput field="id" />
 * </AutoForm>
 * ```
 * @param props.field The API identifier of the Id field
 * @returns The id input component
 */
export const MUIAutoIdInput = autoInput((props: MUIAutoIdInputProps) => {
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
});
