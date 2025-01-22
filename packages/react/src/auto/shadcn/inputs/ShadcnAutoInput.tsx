import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoBooleanInput } from "./ShadcnAutoBooleanInput.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoNumberInput } from "./ShadcnAutoNumberInput.js";
import { makeShadcnAutoPasswordInput } from "./ShadcnAutoPasswordInput.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";

export const makeShadcnAutoInput = ({ Input, Label, Button, Checkbox }: Pick<ShadcnElements, "Input" | "Label" | "Button" | "Checkbox">) =>
  autoInput((props: { field: string; label?: string }) => {
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
      case FieldType.Number: {
        return makeShadcnAutoNumberInput({ Input, Label })(props);
      }
      case FieldType.EncryptedString: {
        return makeShadcnAutoEncryptedStringInput({ Input, Label, Button })(props);
      }
      case FieldType.Password: {
        return makeShadcnAutoPasswordInput({ Input, Label, Button })(props);
      }
      case FieldType.Boolean: {
        return makeShadcnAutoBooleanInput({ Checkbox, Label })(props);
      }

      default:
        //throw new Error(`Unsupported field type for Shadcn AutoForm: ${metadata.fieldType}`);
        return makeShadcnAutoTextInput({ Input, Label })(props);
    }
  });
