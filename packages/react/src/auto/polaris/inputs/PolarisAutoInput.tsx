import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { type AutoInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisAutoRichTextInput } from "./LazyLoadedPolarisAutoRichTextInput.js";
import { PolarisAutoBooleanInput } from "./PolarisAutoBooleanInput.js";
import { PolarisAutoDateTimePicker } from "./PolarisAutoDateTimePicker.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
import { PolarisAutoEnumInput } from "./PolarisAutoEnumInput.js";
import { PolarisAutoFileInput } from "./PolarisAutoFileInput.js";
import { PolarisAutoIdInput } from "./PolarisAutoIdInput.js";
import { PolarisAutoJSONInput } from "./PolarisAutoJSONInput.js";
import { PolarisAutoNumberInput } from "./PolarisAutoNumberInput.js";
import { PolarisAutoPasswordInput } from "./PolarisAutoPasswordInput.js";
import { PolarisAutoRolesInput } from "./PolarisAutoRolesInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
import { PolarisAutoBelongsToInput } from "./relationships/PolarisAutoBelongsToInput.js";
import { PolarisAutoHasManyInput } from "./relationships/PolarisAutoHasManyInput.js";
import { PolarisAutoHasManyThroughInput } from "./relationships/PolarisAutoHasManyThroughInput.js";
import { PolarisAutoHasOneInput } from "./relationships/PolarisAutoHasOneInput.js";

/**
 * An auto-generated input based on the given field types used within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoInput field="stringField" />
 *   <AutoInput field="booleanField" />
 *   <AutoInput field="numberField" label="Count" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the field.
 * @param props.label - Label of the component.
 * @returns The AutoInput component.
 */
export const PolarisAutoInput = autoInput((props: AutoInputProps) => {
  const { metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;

  switch (config.fieldType) {
    case FieldType.Id: {
      return <PolarisAutoIdInput field={props.field} label={props.label} />;
    }
    case FieldType.String:
    case FieldType.Email:
    case FieldType.Color:
    case FieldType.Url: {
      return <PolarisAutoTextInput field={props.field} label={props.label} />;
    }
    case FieldType.Number: {
      return <PolarisAutoNumberInput field={props.field} label={props.label} />;
    }
    case FieldType.EncryptedString: {
      return <PolarisAutoEncryptedStringInput field={props.field} label={props.label} />;
    }
    case FieldType.Password: {
      return <PolarisAutoPasswordInput field={props.field} label={props.label} />;
    }
    case FieldType.Boolean: {
      return <PolarisAutoBooleanInput field={props.field} label={props.label} />;
    }
    case FieldType.DateTime: {
      return <PolarisAutoDateTimePicker field={props.field} label={props.label} />;
    }
    case FieldType.Json: {
      return <PolarisAutoJSONInput field={props.field} label={props.label} />;
    }
    case FieldType.Enum: {
      return <PolarisAutoEnumInput field={props.field} label={props.label} />;
    }
    case FieldType.File: {
      return <PolarisAutoFileInput field={props.field} label={props.label} />;
    }
    case FieldType.RoleAssignments: {
      return <PolarisAutoRolesInput field={props.field} label={props.label} />;
    }
    case FieldType.BelongsTo: {
      return <PolarisAutoBelongsToInput field={props.field} label={props.label} />;
    }
    case FieldType.HasOne: {
      return <PolarisAutoHasOneInput field={props.field} label={props.label} />;
    }
    case FieldType.HasMany: {
      return <PolarisAutoHasManyInput field={props.field} label={props.label} />;
    }
    case FieldType.HasManyThrough: {
      return <PolarisAutoHasManyThroughInput field={props.field} label={props.label} />;
    }
    case FieldType.RichText: {
      return <PolarisAutoRichTextInput field={props.field} label={props.label} />;
    }

    // Not rendered as an input
    case FieldType.Money:
    case FieldType.Vector:
    case FieldType.Computed:
    default:
      return null;
  }
});
