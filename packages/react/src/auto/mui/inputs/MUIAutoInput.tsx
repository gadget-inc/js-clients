import React from "react";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoInputProps } from "../../shared/AutoInputTypes.js";
import { MUIAutoRichTextInput } from "./LazyLoadedMUIAutoRichTextInput.js";
import { MUIAutoBooleanInput } from "./MUIAutoBooleanInput.js";
import MUIAutoDateTimePicker from "./MUIAutoDateTimePicker.js";
import { MUIAutoEncryptedStringInput } from "./MUIAutoEncryptedStringInput.js";
import { MUIAutoEnumInput } from "./MUIAutoEnumInput.js";
import { MUIAutoFileInput } from "./MUIAutoFileInput.js";
import { MUIAutoIdInput } from "./MUIAutoIdInput.js";
import { MUIAutoJSONInput } from "./MUIAutoJSONInput.js";
import { MUIAutoPasswordInput } from "./MUIAutoPasswordInput.js";
import { MUIAutoRolesInput } from "./MUIAutoRolesInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
import { MUIAutoBelongsToInput } from "./relationships/MUIAutoBelongsToInput.js";
import { MUIAutoHasManyInput } from "./relationships/MUIAutoHasManyInput.js";

/**
 * An automatically generated input component based on the given field's type for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoInput field="stringField" />
 *   <AutoInput field="booleanField" />
 *   <AutoInput field="numberField" label="Count" />
 * </AutoForm>
 * ```
 * @param props.field The API identifier of the field
 * @param props.label The label of the field
 * @returns The input component
 */
export const MUIAutoInput = (props: AutoInputProps) => {
  const { metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;

  switch (config.fieldType) {
    case FieldType.Id: {
      return <MUIAutoIdInput field={props.field} label={props.label} />;
    }
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Color:
    case FieldType.Url: {
      return <MUIAutoTextInput field={props.field} label={props.label} />;
    }
    case FieldType.EncryptedString: {
      return <MUIAutoEncryptedStringInput field={props.field} label={props.label} />;
    }
    case FieldType.Password: {
      return <MUIAutoPasswordInput field={props.field} label={props.label} />;
    }
    case FieldType.Boolean: {
      return <MUIAutoBooleanInput field={props.field} label={props.label} />;
    }
    case FieldType.DateTime: {
      return <MUIAutoDateTimePicker field={props.field} label={props.label} />;
    }
    case FieldType.Json: {
      return <MUIAutoJSONInput field={props.field} label={props.label} />;
    }
    case FieldType.Enum: {
      return <MUIAutoEnumInput field={props.field} label={props.label} />;
    }
    case FieldType.File: {
      return <MUIAutoFileInput field={props.field} label={props.label} />;
    }
    case FieldType.RoleAssignments: {
      return <MUIAutoRolesInput field={props.field} label={props.label} />;
    }
    case FieldType.BelongsTo: {
      return <MUIAutoBelongsToInput field={props.field} label={props.label} />;
    }
    case FieldType.HasOne: {
      // TODO - Update implementation of MUIAutoHasOneInput after 1-1 mapping maintenance system is updated in API
      // return <MUIAutoHasOneInput field={props.field}  label={props.label} />;
      return null;
    }
    case FieldType.HasMany: {
      return <MUIAutoHasManyInput field={props.field} label={props.label} />;
    }
    case FieldType.HasManyThrough: {
      // TODO: implement HasManyThrough input with join model record create/delete/update
      return null;
    }
    case FieldType.RichText: {
      return <MUIAutoRichTextInput field={props.field} label={props.label} />;
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
