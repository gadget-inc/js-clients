import type { TextFieldProps } from "@mui/material";
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import React, { ReactElement } from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig, GadgetFieldType } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIFileInput } from "./MUIFileInput.js";
import { MUIJSONInput } from "./MUIJSONInput.js";
import { MUIRolesCombobox } from "./MUIRolesCombobox.js";

const FieldTypeToInputType: Partial<Record<GadgetFieldType, TextFieldProps["type"]>> = {
  [FieldType.Number]: "number",
  [FieldType.Email]: "email",
  [FieldType.Password]: "password",
  [FieldType.EncryptedString]: "password",
};

export const MUIAutoFormControl = (props: { field: string; children: ReactElement }) => {
  const { path, metadata } = useFieldMetadata(props.field);
  const {
    fieldState: { error },
  } = useController({
    name: path,
    rules: { required: metadata.requiredArgumentForInput },
  });

  return (
    <FormControl {...metadata} error={!!error}>
      <FormGroup>
        <FormControlLabel label={metadata.name} control={props.children} />
      </FormGroup>
      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

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
    case FieldType.Password:
    case FieldType.EncryptedString:
    case FieldType.Color:
    case FieldType.Url: {
      return (
        <TextField
          label={metadata.name}
          type={FieldTypeToInputType[metadata.fieldType]}
          autoComplete="off"
          {...fieldProps}
          error={!!error}
          helperText={error?.message}
        />
      );
    }
    case FieldType.Boolean: {
      return (
        <MUIAutoFormControl {...props}>
          <Checkbox {...fieldProps} />
        </MUIAutoFormControl>
      );
    }
    case FieldType.DateTime: {
      return (
        <MUIAutoFormControl {...props}>
          {(config as any).includeTime ? <DateTimePicker {...fieldProps} /> : <DatePicker {...fieldProps} />}
        </MUIAutoFormControl>
      );
    }
    case FieldType.Json: {
      return <MUIJSONInput label={metadata.name} {...fieldProps} />;
    }
    case FieldType.Enum: {
      const config = metadata.configuration as GadgetEnumConfig;
      return (
        <Autocomplete
          disablePortal
          multiple={config.allowMultiple}
          options={config.options.map((option) => ({ id: option.name, label: option.name }))}
          {...fieldProps}
          renderInput={(params) => <TextField {...params} label={metadata.name} />}
        />
      );
    }
    case FieldType.File: {
      return (
        <MUIAutoFormControl {...props}>
          <MUIFileInput label={metadata.name} {...fieldProps} />
        </MUIAutoFormControl>
      );
    }
    case FieldType.RoleAssignments: {
      return <MUIRolesCombobox label={metadata.name} {...fieldProps} />;
    }
    case FieldType.HasMany:
    case FieldType.HasManyThrough:
    case FieldType.HasOne:
    case FieldType.BelongsTo: {
      // TODO: implement relationship field inputs
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
      throw new Error(`Unsupported field type for MUI AutoForm: ${metadata.fieldType}`);
    }
  }
};
