import type { TextFieldProps } from "@mui/material";
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import type { ReactElement } from "react";
import React from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig, GadgetFieldType } from "../../internal/gql/graphql.js";
import type { FieldMetadata } from "../../metadata.js";
import { FieldType } from "../../metadata.js";
import { MUIFileInput } from "./MUIFileInput.js";
import { MUIJSONInput } from "./MUIJSONInput.js";
import { MUIRolesCombobox } from "./MUIRolesCombobox.js";

const FieldTypeToInputType: Partial<Record<GadgetFieldType, TextFieldProps["type"]>> = {
  [FieldType.Number]: "number",
  [FieldType.Email]: "email",
  [FieldType.Password]: "password",
  [FieldType.EncryptedString]: "password",
};

export const MUIAutoFormControl = (props: { path: string; control: Control<any>; field: FieldMetadata; children: ReactElement }) => {
  const {
    fieldState: { error },
  } = useController({
    name: props.path,
    control: props.control,
    rules: { required: props.field.requiredArgumentForInput },
  });

  return (
    <FormControl {...props.field} error={!!error}>
      <FormGroup>
        <FormControlLabel label={props.field.name} control={props.children} />
      </FormGroup>
      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export const MUIFormInput = (props: { path: string; field: FieldMetadata; control: Control<any> }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.path,
    control: props.control,
    rules: { required: props.field.requiredArgumentForInput },
  });

  const config = props.field.configuration;
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
          label={props.field.name}
          type={FieldTypeToInputType[props.field.fieldType]}
          autoComplete="off"
          {...field}
          error={!!error}
          helperText={error?.message}
        />
      );
    }
    case FieldType.Boolean: {
      return (
        <MUIAutoFormControl {...props}>
          <Checkbox {...field} />
        </MUIAutoFormControl>
      );
    }
    case FieldType.DateTime: {
      return (
        <MUIAutoFormControl {...props}>
          {(config as any).includeTime ? <DateTimePicker {...field} /> : <DatePicker {...field} />}
        </MUIAutoFormControl>
      );
    }
    case FieldType.Json: {
      return <MUIJSONInput label={props.field.name} {...field} />;
    }
    case FieldType.Enum: {
      const config = props.field.configuration as GadgetEnumConfig;
      return (
        <Autocomplete
          disablePortal
          multiple={config.allowMultiple}
          options={config.options.map((option) => ({ id: option.name, label: option.name }))}
          {...field}
          renderInput={(params) => <TextField {...params} label={props.field.name} />}
        />
      );
    }
    case FieldType.File: {
      return (
        <MUIAutoFormControl {...props}>
          <MUIFileInput label={props.field.name} {...field} />
        </MUIAutoFormControl>
      );
    }
    case FieldType.RoleAssignments: {
      return <MUIRolesCombobox label={props.field.name} {...field} />;
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
    case FieldType.Vector: {
      return null;
    }
    default: {
      throw new Error(`Unsupported field type for MUI AutoForm: ${props.field.fieldType}`);
    }
  }
};
