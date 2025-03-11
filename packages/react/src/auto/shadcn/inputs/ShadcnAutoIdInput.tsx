import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoIdInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";

export const makeShadcnAutoIdInput = (elements: Pick<ShadcnElements, "Input" | "Label">) => {
  const ShadcnAutoStringInput = makeShadcnAutoStringInput(elements);

  function ShadcnAutoIdInput(props: AutoIdInputProps) {
    const { field, label } = props;
    const { name, metadata } = useStringInputController({ field });

    if (metadata.fieldType !== FieldType.Id || field !== "id") {
      throw new Error(`ShadcnAutoIdInput: field ${field} is not of type Id`);
    }

    return <ShadcnAutoStringInput field={field} type="number" step={1} min={1} label={label || "ID"} name={name} />;
  }

  return autoInput(ShadcnAutoIdInput);
};
