import React from "react";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisAutoBooleanInput } from "./PolarisAutoBooleanInput.js";
import { PolarisAutoDateTimePicker } from "./PolarisAutoDateTimePicker.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
import { PolarisAutoEnumInput } from "./PolarisAutoEnumInput.js";
import { PolarisAutoFileInput } from "./PolarisAutoFileInput.js";
import { PolarisAutoJSONInput } from "./PolarisAutoJSONInput.js";
import { PolarisAutoNumberInput } from "./PolarisAutoNumberInput.js";
import { PolarisAutoPasswordInput } from "./PolarisAutoPasswordInput.js";
import { PolarisAutoRolesInput } from "./PolarisAutoRolesInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
import { PolarisAutoBelongsToInput } from "./relationships/PolarisAutoBelongsToInput.js";
import { PolarisAutoHasManyInput } from "./relationships/PolarisAutoHasManyInput.js";

// lazy import for smaller bundle size by default
const PolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));

export const PolarisAutoInput = (props: { field: string }) => {
  const { metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;

  switch (config.fieldType) {
    case FieldType.String:
    case FieldType.Email:
    case FieldType.Color:
    case FieldType.Url: {
      return <PolarisAutoTextInput field={props.field} />;
    }
    case FieldType.Number: {
      return <PolarisAutoNumberInput field={props.field} />;
    }
    case FieldType.EncryptedString: {
      return <PolarisAutoEncryptedStringInput field={props.field} />;
    }
    case FieldType.Password: {
      return <PolarisAutoPasswordInput field={props.field} />;
    }
    case FieldType.Boolean: {
      return <PolarisAutoBooleanInput field={props.field} />;
    }
    case FieldType.DateTime: {
      return <PolarisAutoDateTimePicker field={props.field} />;
    }
    case FieldType.Json: {
      return <PolarisAutoJSONInput field={props.field} />;
    }
    case FieldType.Enum: {
      return <PolarisAutoEnumInput field={props.field} />;
    }
    case FieldType.File: {
      return <PolarisAutoFileInput field={props.field} />;
    }
    case FieldType.RoleAssignments: {
      return <PolarisAutoRolesInput field={props.field} />;
    }
    case FieldType.BelongsTo: {
      return <PolarisAutoBelongsToInput field={props.field} />;
    }
    case FieldType.HasOne: {
      // TODO - Update implementation of PolarisAutoHasOneInput after 1-1 mapping maintenance system is updated in API
      // return <PolarisAutoHasOneInput field={props.field} />;
      return null;
    }
    case FieldType.HasMany: {
      return <PolarisAutoHasManyInput field={props.field} />;
    }
    case FieldType.HasManyThrough: {
      // TODO: implement HasManyThrough input with join model record create/delete
      return null;
    }
    case FieldType.RichText: {
      return <PolarisAutoRichTextInput field={props.field} />;
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
};
