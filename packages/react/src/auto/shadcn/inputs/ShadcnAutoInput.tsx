import React from "react";
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

export const makeShadcnAutoInput = ({
  Input,
  Label,
  Checkbox,
  Button,
}: Pick<ShadcnElements, "Input" | "Label" | "Checkbox" | "Button">) => {
  // Memoize the input makers
  const memoizedInputs = React.useMemo(
    () => ({
      idInput: makeShadcnAutoIdInput({ Input, Label }),
      textInput: makeShadcnAutoTextInput({ Input, Label }),
      numberInput: makeShadcnAutoNumberInput({ Input, Label }),
      encryptedInput: makeShadcnAutoEncryptedStringInput({ Input, Label, Button }),
      passwordInput: makeShadcnAutoPasswordInput({ Input, Label, Button }),
      booleanInput: makeShadcnAutoBooleanInput({ Checkbox, Label }),
    }),
    [Input, Label, Checkbox, Button]
  );

  const ShadcnAutoInput = React.memo(function ShadcnAutoInput(props: { field: string; label?: string }) {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;

    switch (config.fieldType) {
      case FieldType.Id:
        return memoizedInputs.idInput(props);
      case FieldType.String:
      case FieldType.Email:
      case FieldType.Color:
      case FieldType.Url:
        return memoizedInputs.textInput(props);
      case FieldType.Number:
        return memoizedInputs.numberInput(props);
      case FieldType.EncryptedString:
        return memoizedInputs.encryptedInput(props);
      case FieldType.Password:
        return memoizedInputs.passwordInput(props);
      case FieldType.Boolean:
        return memoizedInputs.booleanInput(props);
      default:
        return memoizedInputs.textInput(props);
    }
  });

  ShadcnAutoInput.displayName = "ShadcnAutoInput";
  return autoInput(ShadcnAutoInput);
};
