import React from "react";
import { FieldType } from "../../../metadata.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisAutoIdInput = (props: {
  field: string; // The field API identifier
}) => {
  const { field } = props;
  const { name, metadata } = useStringInputController({ field });

  if (metadata.fieldType !== FieldType.Id || field !== "id") {
    throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
  }

  return <PolarisAutoTextInput step={1} field={field} min={1} type="number" label="ID" name={name} />;
};
