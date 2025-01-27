import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";

export const makeShadcnAutoIdInput = (elements: Pick<ShadcnElements, "Input" | "Label">) => {
  const ShadcnAutoTextInput = makeShadcnAutoTextInput(elements);

  function ShadcnAutoIdInput(props: { field: string; label?: string }) {
    const { field, label } = props;
    const { name, metadata } = useStringInputController({ field });

    if (metadata.fieldType !== FieldType.Id || field !== "id") {
      throw new Error(`ShadcnAutoIdInput: field ${field} is not of type Id`);
    }

    return <ShadcnAutoTextInput field={field} type="number" step={1} min={1} label={label || "ID"} name={name} />;
  }

  return autoInput(ShadcnAutoIdInput);
};
