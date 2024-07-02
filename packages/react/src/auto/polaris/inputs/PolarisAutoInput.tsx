import React from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisDateTimePicker } from "../PolarisDateTimePicker.js";
import { PolarisFileInput } from "../PolarisFileInput.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
import { PolarisAutoJSONInput } from "./PolarisAutoJsonInput.js";
import { PolarisAutoRelationshipInput } from "./PolarisAutoRelationshipInput.js";
import { PolarisAutoRolesInput } from "./PolarisAutoRolesInput.js";
import { PolarisAutoTextInput } from "./PolarisAutoTextInput.js";
import { PolarisBooleanInput } from "./PolarisBooleanInput.js";

export const PolarisAutoInput = (props: { field: string }) => {
  const { path, metadata } = useFieldMetadata(props.field);

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    name: path,
    rules: { required: metadata.requiredArgumentForInput },
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
    case FieldType.Password:
    case FieldType.EncryptedString: {
      // TODO - Needs updated implementation to handle security concerns
      return <PolarisAutoTextInput field={props.field} />;
    }
    case FieldType.Boolean: {
      return <PolarisBooleanInput field={props.field} />;
    }
    case FieldType.DateTime: {
      return (
        <PolarisDateTimePicker dateLabel={metadata.name} includeTime={(config as any).includeTime} {...field} error={error?.message} />
      );
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
      return <PolarisFileInput label={metadata.name} {...field} />;
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
