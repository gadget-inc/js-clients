import type { TextFieldProps } from "@shopify/polaris";
import { Checkbox, TextField } from "@shopify/polaris";
import React from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig, GadgetFieldType } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFormFields } from "../../AutoForm.js";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
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
  const { metadata } = useAutoFormMetadata();
  const fields = useFormFields(metadata, {});
  const fieldMetadata = fields.find((field) => field[1].apiIdentifier === props.field);

  if (!fieldMetadata) {
    throw new Error(`Field ${props.field} not found in metadata`);
  }

  const path = fieldMetadata[0];
  const _field = fieldMetadata[1];

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    name: path,
    rules: { required: _field.requiredArgumentForInput },
  });
  // many polaris components don't take refs because they are weenies, see https://github.com/Shopify/polaris/issues/1083
  // omit the ref from the forwarded along props so that we don't get a warning
  const { ref: _ref, ...field } = fieldProps;

  const config = _field.configuration;
  switch (config.fieldType) {
    case FieldType.String:
    case FieldType.Number:
    case FieldType.Email:
    case FieldType.Password:
    case FieldType.EncryptedString:
    case FieldType.Color:
    case FieldType.Url: {
      return (
        <TextField label={_field.name} type={FieldTypeToInputType[_field.fieldType]} autoComplete="off" {...field} error={error?.message} />
      );
    }
    case FieldType.Boolean: {
      return <Checkbox label={_field.name} {...field} error={error?.message} />;
    }
    case FieldType.DateTime: {
      return <PolarisDateTimePicker dateLabel={_field.name} includeTime={(config as any).includeTime} {...field} error={error?.message} />;
    }
    case FieldType.Json: {
      return <PolarisJSONInput label={_field.name} multiline={4} monospaced autoComplete="off" {...field} />;
    }
    case FieldType.Enum: {
      const config = _field.configuration as GadgetEnumConfig;
      return (
        <PolarisFixedOptionsCombobox
          label={_field.name}
          options={config.options.map((option) => ({ value: option.name, label: option.name }))}
          allowMultiple={config.allowMultiple}
          {...field}
        />
      );
    }
    case FieldType.File: {
      return <PolarisFileInput label={_field.name} {...field} />;
    }
    case FieldType.RoleAssignments: {
      return <PolarisRolesCombobox label={_field.name} {...field} />;
    }
    case FieldType.HasMany:
    case FieldType.HasManyThrough:
    case FieldType.HasOne:
    case FieldType.BelongsTo: {
      return <PolarisBelongsToInput field={_field.apiIdentifier} />;
    }
    case FieldType.RichText: {
      // TODO: implement rich text input
      return null;
    }
    case FieldType.Money: {
      // TODO: implement money input
      return null;
    }
    case FieldType.Vector: {
      return null;
    }
    default: {
      throw new Error(`Unsupported field type for Polaris AutoForm: ${_field.fieldType}`);
    }
  }
};
