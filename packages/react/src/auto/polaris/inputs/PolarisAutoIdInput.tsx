import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoIdInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

/**
 * An id input component for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoIdInput field="id" />
 * </AutoForm>
 * ```
 * @param props.field The API identifier of the Id field
 * @param props.label The label of the Id field
 * @returns The id input component
 */
export const PolarisAutoIdInput = autoInput((props: AutoIdInputProps) => {
  const { field, label } = props;
  const { name, metadata } = useStringInputController({ field });

  if (metadata.fieldType !== FieldType.Id || field !== "id") {
    throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
  }

  return <PolarisAutoTextInput step={1} field={field} min={1} type="number" label={label || "ID"} name={name} />;
});
