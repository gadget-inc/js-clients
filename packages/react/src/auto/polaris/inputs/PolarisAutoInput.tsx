import type { TextFieldProps } from "@shopify/polaris";
import { Checkbox, TextField } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig, GadgetFieldType } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { PolarisDateTimePicker } from "../PolarisDateTimePicker.js";
import { PolarisFileInput } from "../PolarisFileInput.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
import { PolarisJSONInput } from "../PolarisJSONInput.js";
import { PolarisRolesCombobox } from "../PolarisRolesCombobox.js";
import { PolarisBelongsToInput } from "./PolarisBelongsToInput.js";

const FieldTypeToInputType: Partial<Record<GadgetFieldType, TextFieldProps["type"]>> = {
  [FieldType.Number]: "number",
  [FieldType.Email]: "email",
  [FieldType.Password]: "password",
  [FieldType.EncryptedString]: "password",
};

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
    case FieldType.Password:
    case FieldType.EncryptedString:
    case FieldType.Color:
    case FieldType.Url: {
      return (
        <TextField
          label={metadata.name}
          type={FieldTypeToInputType[metadata.fieldType]}
          autoComplete="off"
          {...field}
          error={error?.message}
        />
      );
    }
    case FieldType.Boolean: {
      return <Checkbox label={metadata.name} {...field} error={error?.message} />;
    }
    case FieldType.DateTime: {
      return (
        <PolarisDateTimePicker dateLabel={metadata.name} includeTime={(config as any).includeTime} {...field} error={error?.message} />
      );
    }
    case FieldType.Json: {
      return <PolarisJSONInput label={metadata.name} multiline={4} monospaced autoComplete="off" {...field} />;
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
      return <PolarisRolesCombobox label={metadata.name} {...field} />;
    }
    case FieldType.HasMany:
    case FieldType.HasManyThrough:
    case FieldType.HasOne:
    case FieldType.BelongsTo: {
      return <PolarisBelongsToInput field={metadata.apiIdentifier} />;
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
