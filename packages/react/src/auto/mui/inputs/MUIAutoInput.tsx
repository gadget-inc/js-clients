import React from "react";
import { useController } from "react-hook-form";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoBooleanInput } from "./MUIAutoBooleanInput.js";
import MUIAutoDateTimePicker from "./MUIAutoDateTimePicker.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";
import { MUIAutoEnumInput } from "./MUIAutoEnumInput.js";
import { MUIAutoFileInput } from "./MUIAutoFileInput.js";
import { MUIAutoJSONInput } from "./MUIAutoJSONInput.js";
import { MUIAutoPasswordInput } from "./MUIAutoPasswordInput.js";
import { MUIAutoRelationshipInput } from "./MUIAutoRelationshipInput.js";
import { MUIAutoRolesInput } from "./MUIAutoRolesInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";

// lazy import for smaller bundle size by default
const MUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));

export const MUIAutoInput = (props: { field: string }) => {
  const { path, metadata } = useFieldMetadata(props.field);

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    name: path,

    rules: { required: metadata.requiredArgumentForInput },
  });

  const config = metadata.configuration;

  switch (config.fieldType) {
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Color:
    case FieldType.Url: {
      return <MUIAutoTextInput field={props.field} />;
    }
    case FieldType.EncryptedString: {
      return <MUIAutoEncryptedStringInput field={props.field} />;
    }
    case FieldType.Password: {
      return <MUIAutoPasswordInput field={props.field} />;
    }
    case FieldType.Boolean: {
      return <MUIAutoBooleanInput field={props.field} />;
    }
    case FieldType.DateTime: {
      return <MUIAutoDateTimePicker field={props.field} />;
    }
    case FieldType.Json: {
      return <MUIAutoJSONInput field={props.field} />;
    }
    case FieldType.Enum: {
      return <MUIAutoEnumInput field={props.field} />;
    }
    case FieldType.File: {
      return <MUIAutoFileInput field={props.field} />;
    }
    case FieldType.RoleAssignments: {
      return <MUIAutoRolesInput field={props.field} />;
    }
    case FieldType.HasMany:
    case FieldType.HasOne:
    case FieldType.BelongsTo: {
      return <MUIAutoRelationshipInput field={props.field} />;
    }
    case FieldType.HasManyThrough: {
      // TODO: implement HasManyThrough input with join model record create/delete/update
      return null;
    }
    case FieldType.RichText: {
      return <MUIAutoRichTextInput field={props.field} />;
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
      throw new Error(`Unsupported field type for MUI AutoForm: ${metadata.fieldType}`);
    }
  }
};
