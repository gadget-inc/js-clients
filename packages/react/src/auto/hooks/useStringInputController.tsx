import { useCallback } from "react";
import type { GadgetFieldType } from "../../internal/gql/graphql.js";
import { FieldType } from "../../metadata.js";
import { useController } from "../../useActionForm.js";
import { type AutoTextInputProps } from "../shared/AutoInputTypes.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export const FieldTypeToInputType: Partial<Record<GadgetFieldType, string>> = {
  [FieldType.Number]: "number",
  [FieldType.Email]: "email",
  [FieldType.Password]: "password",
  [FieldType.EncryptedString]: "password",
} as const;

const PlaceholderValues: Partial<Record<GadgetFieldType, string>> = {
  [FieldType.String]: "Enter text",
  [FieldType.Number]: "Enter number",
  [FieldType.Email]: "example@email.com",
  [FieldType.Password]: "Value",
  [FieldType.EncryptedString]: "Enter text",
  [FieldType.Color]: "Enter color",
  [FieldType.Url]: "example.com",
} as const;

export const useStringInputController = (props: AutoTextInputProps) => {
  const { field: fieldApiIdentifier, ...rest } = props;
  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

  const {
    field: fieldProperties,
    fieldState: { error },
  } = useController({
    name: path,
    ...rest,
  });

  const { value, onChange: fieldPropsOnChange, ...restOfFieldProperties } = fieldProperties;
  const onChange = useCallback(
    (...args: any[]) => {
      fieldPropsOnChange(...args);
      props.afterChange?.(...args);
    },
    [fieldPropsOnChange, props.afterChange]
  );

  const placeholder = PlaceholderValues[metadata.fieldType];

  return {
    id: path,
    label: metadata.name,
    type: FieldTypeToInputType[metadata.fieldType],
    isError: !!error,
    errorMessage: error?.message,
    autoComplete: "off",
    placeholder,
    metadata,
    value: getValue(value, metadata.fieldType),
    onChange,
    ...restOfFieldProperties,
  };
};

const getValue = (value: any, fieldType: GadgetFieldType) => {
  // JSON fields can have null value which is different from an empty string. In that case, use null directly
  return fieldType === FieldType.Json ? value : (value ?? "");
};
