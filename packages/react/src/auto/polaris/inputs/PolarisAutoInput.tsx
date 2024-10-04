import React from "react";
import { FieldType } from "../../../metadata.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
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

export const PolarisAutoInput = autoInput((props: { field: string; label?: string }) => {
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
      // TODO - Update implementation of PolarisAutoHasOneInput after 1-1 mapping maintenance system is updated in API
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
    case FieldType.Money: {
      // TODO: implement money input
      return null;
    }

    // Not rendered as an input
    case FieldType.Vector:
    case FieldType.Computed:
      return null;
    default: {
      throw new Error(`Unsupported field type for Polaris AutoForm: ${metadata.fieldType}`);
    }
  }
});
