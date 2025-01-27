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
import { makeShadcnAutoRolesInput } from "./ShadcnAutoRolesInput.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";
import { makeShadcnAutoBelongsToInput } from "./relationships/ShadcnAutoBelongsToInput.js";
import { makeShadcnAutoHasManyInput } from "./relationships/ShadcnAutoHasManyInput.js";
export const makeShadcnAutoInput = ({
  Input,
  Label,
  Checkbox,
  Button,
  Badge,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
}: Pick<
  ShadcnElements,
  | "Input"
  | "Label"
  | "Checkbox"
  | "Button"
  | "Badge"
  | "Command"
  | "CommandInput"
  | "CommandItem"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
>) => {
  const inputComponents = {
    idInput: makeShadcnAutoIdInput({ Input, Label }),
    textInput: makeShadcnAutoTextInput({ Input, Label }),
    numberInput: makeShadcnAutoNumberInput({ Input, Label }),
    encryptedInput: makeShadcnAutoEncryptedStringInput({ Input, Label, Button }),
    passwordInput: makeShadcnAutoPasswordInput({ Input, Label, Button }),
    booleanInput: makeShadcnAutoBooleanInput({ Checkbox, Label }),
    belongsToInput: makeShadcnAutoBelongsToInput({
      Label,
      Button,
      Badge,
      Command,
      CommandInput,
      CommandItem,
      CommandList,
      CommandEmpty,
      CommandGroup,
      Checkbox,
    }),
    hasManyInput: makeShadcnAutoHasManyInput({
      Label,
      Button,
      Badge,
      Command,
      CommandInput,
      CommandItem,
      CommandList,
      CommandEmpty,
      CommandGroup,
      Checkbox,
    }),
    rolesInput: makeShadcnAutoRolesInput({
      Label,
      Button,
      Badge,
      Command,
      CommandInput,
      CommandItem,
      CommandList,
      CommandEmpty,
      CommandGroup,
      Checkbox,
    }),
  };

  const ShadcnAutoInput = React.memo(function ShadcnAutoInput(props: { field: string; label?: string }) {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;

    switch (config.fieldType) {
      case FieldType.Id:
        return inputComponents.idInput(props);
      case FieldType.String:
      case FieldType.Email:
      case FieldType.Color:
      case FieldType.Url:
        return inputComponents.textInput(props);
      case FieldType.Number:
        return inputComponents.numberInput(props);

      case FieldType.RoleAssignments:
        return inputComponents.rolesInput(props);
      case FieldType.HasOne:
        return null;
      case FieldType.HasMany:
        return inputComponents.hasManyInput(props);
      case FieldType.HasManyThrough:
        return null;
      case FieldType.EncryptedString:
        return inputComponents.encryptedInput(props);
      case FieldType.BelongsTo:
        return inputComponents.belongsToInput(props);
      case FieldType.Password:
        return inputComponents.passwordInput(props);
      case FieldType.Boolean:
        return inputComponents.booleanInput(props);
      default:
        return inputComponents.textInput(props);
    }
  });

  ShadcnAutoInput.displayName = "ShadcnAutoInput";
  return autoInput(ShadcnAutoInput);
};
