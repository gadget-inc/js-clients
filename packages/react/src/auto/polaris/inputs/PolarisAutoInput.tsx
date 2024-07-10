import React from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
import { PolarisAutoBooleanInput } from "./PolarisAutoBooleanInput.js";
import { PolarisAutoDateTimePicker } from "./PolarisAutoDateTimePicker.js";
import { PolarisAutoEncryptedStringInput } from "./PolarisAutoEncryptedStringInput.js";
import { PolarisAutoFileInput } from "./PolarisAutoFileInput.js";
import { PolarisAutoJSONInput } from "./PolarisAutoJSONInput.js";
import { PolarisAutoPasswordInput } from "./PolarisAutoPasswordInput.js";
import { PolarisAutoRelationshipInput } from "./PolarisAutoRelationshipInput.js";
import { PolarisAutoRolesInput } from "./PolarisAutoRolesInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";

export const PolarisAutoInput = (props: { field: string }) => {
  const { path, metadata } = useFieldMetadata(props.field);

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    name: path,
  });
  // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
  // omit the ref from the forwarded along props so that we don't get a warning
  const { ref: _ref, ...field } = fieldProps;

  const config = metadata.configuration;
  switch (config.fieldType) {
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Color:
    case FieldType.Url: {
      return <PolarisAutoTextInput field={props.field} />;
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
      const config = metadata.configuration as GadgetEnumConfig;
      return (
        <PolarisFixedOptionsCombobox
          label={metadata.name}
          options={config.options.map((option) => ({ value: option.name, label: option.name }))}
          allowMultiple={config.allowMultiple}
          {...field}
        />
      );
    }
    case FieldType.File: {
      return <PolarisAutoFileInput field={props.field} />;
    }
    case FieldType.RoleAssignments: {
      return <PolarisAutoRolesInput field={props.field} {...field} />;
    }
    case FieldType.HasMany:
    case FieldType.HasOne:
    case FieldType.BelongsTo: {
      return <PolarisAutoRelationshipInput field={metadata.apiIdentifier} />;
    }
    case FieldType.HasManyThrough: {
      // TODO: implement HasManyThrough input with join model record create/delete
      return null;
    }
    case FieldType.RichText: {
      // TODO: implement rich text input
      return null;
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
