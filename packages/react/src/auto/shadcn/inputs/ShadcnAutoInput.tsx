import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoBooleanInput } from "./ShadcnAutoBooleanInput.js";
import { makeShadcnAutoDateTimePicker } from "./ShadcnAutoDateTimePicker.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
import { makeShadcnAutoEnumInput } from "./ShadcnAutoEnumInput.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoNumberInput } from "./ShadcnAutoNumberInput.js";
import { makeShadcnAutoPasswordInput } from "./ShadcnAutoPasswordInput.js";
import { makeShadcnAutoRolesInput } from "./ShadcnAutoRolesInput.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";
import { makeShadcnAutoBelongsToInput } from "./relationships/ShadcnAutoBelongsToInput.js";
import { makeShadcnAutoHasManyInput } from "./relationships/ShadcnAutoHasManyInput.js";
export const makeShadcnAutoInput = (
  elements: Pick<
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
    | "Calendar"
    | "Popover"
    | "PopoverTrigger"
    | "PopoverContent"
    | "ScrollArea"
    | "ScrollBar"
  >
) => {
  const inputComponents = {
    idInput: makeShadcnAutoIdInput(elements),
    textInput: makeShadcnAutoTextInput(elements),
    numberInput: makeShadcnAutoNumberInput(elements),
    encryptedInput: makeShadcnAutoEncryptedStringInput(elements),
    passwordInput: makeShadcnAutoPasswordInput(elements),
    booleanInput: makeShadcnAutoBooleanInput(elements),
    belongsToInput: makeShadcnAutoBelongsToInput(elements),
    hasManyInput: makeShadcnAutoHasManyInput(elements),
    rolesInput: makeShadcnAutoRolesInput(elements),
    enumInput: makeShadcnAutoEnumInput(elements),
    dateTimeInput: makeShadcnAutoDateTimePicker(elements),
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
      case FieldType.DateTime:
        return inputComponents.dateTimeInput(props);
      case FieldType.Enum:
        return inputComponents.enumInput(props);
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
