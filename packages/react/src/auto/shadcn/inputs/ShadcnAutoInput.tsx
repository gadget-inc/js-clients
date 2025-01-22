import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";

export const makeShadcnAutoInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  function ShadcnAutoInput(props: { field: string; label?: string }) {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;

    switch (config.fieldType) {
      case FieldType.Id: {
        return makeShadcnAutoIdInput({ Input, Label })(props);
      }
      case FieldType.String:
      case FieldType.Email:
      case FieldType.Color:
      case FieldType.Url: {
        return makeShadcnAutoTextInput({ Input, Label })(props);
      }

      default:
        throw new Error(`Unsupported field type for Shadcn AutoForm: ${metadata.fieldType}`);
    }
  }

  return autoInput(ShadcnAutoInput);
};
