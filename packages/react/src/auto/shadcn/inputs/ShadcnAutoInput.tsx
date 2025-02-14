import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoBooleanInput } from "./ShadcnAutoBooleanInput.js";
import { makeShadcnAutoDateTimePicker } from "./ShadcnAutoDateTimePicker.js";
import { makeShadcnAutoEncryptedStringInput } from "./ShadcnAutoEncryptedStringInput.js";
import { makeShadcnAutoEnumInput } from "./ShadcnAutoEnumInput.js";
import { makeShadcnAutoFileInput } from "./ShadcnAutoFileInput.js";
import { makeShadcnAutoHiddenInput } from "./ShadcnAutoHiddenInput.js";
import { makeShadcnAutoIdInput } from "./ShadcnAutoIdInput.js";
import { makeShadcnAutoJSONInput } from "./ShadcnAutoJSONInput.js";
import { makeShadcnAutoNumberInput } from "./ShadcnAutoNumberInput.js";
import { makeShadcnAutoPasswordInput } from "./ShadcnAutoPasswordInput.js";
import { makeShadcnAutoRolesInput } from "./ShadcnAutoRolesInput.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";
import { makeShadcnAutoTextAreaInput } from "./ShadcnAutoTextAreaInput.js";
import { makeShadcnAutoRichTextInput } from "./ShadcnautoRichTextInput.js";
import { makeShadcnAutoBelongsToInput } from "./relationships/ShadcnAutoBelongsToInput.js";
import { makeShadcnAutoHasManyInput } from "./relationships/ShadcnAutoHasManyInput.js";
import { makeShadcnAutoHasManyThroughInput } from "./relationships/ShadcnAutoHasManyThroughInput.js";
import { makeShadcnAutoHasOneInput } from "./relationships/ShadcnAutoHasOneInput.js";

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
    | "Textarea"
  >
) => {
  const AutoIdInput = makeShadcnAutoIdInput(elements);
  const AutoStringInput = makeShadcnAutoStringInput(elements);
  const AutoTextAreaInput = makeShadcnAutoTextAreaInput(elements);
  const AutoNumberInput = makeShadcnAutoNumberInput(elements);
  const AutoEncryptedStringInput = makeShadcnAutoEncryptedStringInput(elements);
  const AutoPasswordInput = makeShadcnAutoPasswordInput(elements);
  const AutoBooleanInput = makeShadcnAutoBooleanInput(elements);
  const AutoBelongsToInput = makeShadcnAutoBelongsToInput(elements);
  const AutoHasManyInput = makeShadcnAutoHasManyInput(elements);
  const AutoHasOneInput = makeShadcnAutoHasOneInput(elements);
  const AutoRolesInput = makeShadcnAutoRolesInput(elements);
  const AutoEnumInput = makeShadcnAutoEnumInput(elements);
  const AutoDateTimePicker = makeShadcnAutoDateTimePicker(elements);
  const AutoJSONInput = makeShadcnAutoJSONInput(elements);
  const AutoRichTextInput = makeShadcnAutoRichTextInput(elements);
  const AutoFileInput = makeShadcnAutoFileInput(elements);
  const AutoHasManyThroughInput = makeShadcnAutoHasManyThroughInput(elements);
  const AutoHiddenInput = makeShadcnAutoHiddenInput(elements);

  const AutoInput = autoInput(function AutoInput(props: { field: string; label?: string }) {
    const { metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;

    switch (config.fieldType) {
      case FieldType.Id:
        return <AutoIdInput {...props} />;
      case FieldType.String:
      case FieldType.Email:
      case FieldType.Color:
      case FieldType.Url:
        return <AutoStringInput {...props} />;
      case FieldType.Number:
        return <AutoNumberInput {...props} />;
      case FieldType.DateTime:
        return <AutoDateTimePicker {...props} />;
      case FieldType.Json:
        return <AutoJSONInput {...props} />;
      case FieldType.Enum:
        return <AutoEnumInput {...props} />;
      case FieldType.RoleAssignments:
        return <AutoRolesInput {...props} />;
      case FieldType.HasOne:
        return <AutoHasOneInput {...props} />;
      case FieldType.RichText:
        return <AutoRichTextInput {...props} />;
      case FieldType.File:
        return <AutoFileInput {...props} />;
      case FieldType.HasMany:
        return <AutoHasManyInput {...props} />;
      case FieldType.EncryptedString:
        return <AutoEncryptedStringInput {...props} />;
      case FieldType.BelongsTo:
        return <AutoBelongsToInput {...props} />;
      case FieldType.Password:
        return <AutoPasswordInput {...props} />;
      case FieldType.Boolean:
        return <AutoBooleanInput {...props} />;
      case FieldType.HasManyThrough:
        return <AutoHasManyThroughInput {...props} />;
      default:
        return <AutoStringInput {...props} />;
    }
  });

  AutoInput.displayName = "AutoInput";

  return {
    AutoInput,
    AutoRolesInput,
    AutoFileInput,
    AutoEnumInput,
    AutoJSONInput,
    AutoDateTimePicker,
    AutoPasswordInput,
    AutoBooleanInput,
    AutoEncryptedStringInput,
    AutoStringInput,
    AutoNumberInput,
    AutoIdInput,
    AutoHiddenInput,
    AutoTextAreaInput,
    AutoBelongsToInput,
    AutoHasManyInput,
    AutoHasManyThroughInput,
    AutoHasOneInput,
  };
};
