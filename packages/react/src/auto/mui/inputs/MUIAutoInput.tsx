import { Autocomplete, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from "@mui/material";
import type { ReactElement } from "react";
import React from "react";
import { useController } from "react-hook-form";
import type { GadgetEnumConfig } from "../../../internal/gql/graphql.js";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoFileInput } from "./MUIAutoFileInput.js";
import { MUIAutoJSONInput } from "./MUIAutoJSONInput.js";
import { MUIAutoRelationshipInput } from "./MUIAutoRelationshipInput.js";
import { MUIAutoRolesInput } from "./MUIAutoRolesInput.js";
import { MUIAutoTextInput } from "./MUIAutoTextInput.js";
import { MUIBooleanInput } from "./MUIBooleanInput.js";
import MUIDateTimePicker from "./MUIDateTimePicker.js";
import { MUIEncryptedStringInput } from "./MUIEncryptedStringInput.js";
import { MUIPasswordInput } from "./MUIPasswordInput.js";

export const MUIAutoFormControl = (props: { field: string; children: ReactElement }) => {
  const { path, metadata } = useFieldMetadata(props.field);
  const {
    fieldState: { error },
  } = useController({
    name: path,
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
    case FieldType.Color:
    case FieldType.Url: {
      return <MUIAutoTextInput field={props.field} />;
    }
    case FieldType.EncryptedString: {
      return <MUIEncryptedStringInput field={props.field} />;
    }
    case FieldType.Password: {
      return <MUIPasswordInput field={props.field} />;
    }
    case FieldType.Boolean: {
      return <MUIBooleanInput field={props.field} />;
    }
    case FieldType.DateTime: {
      return <MUIDateTimePicker field={props.field} />;
    }
    case FieldType.Json: {
      return <MUIAutoJSONInput field={props.field} />;
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
