import type { UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";
import type { GadgetFieldType } from "../../internal/gql/graphql.js";
import { FieldType } from "../../metadata.js";
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

export const useStringInputController = (
  props: {
    field: string; // The field API identifier
  } & Omit<UseControllerProps, "name">
) => {
  const { field: fieldApiIdentifier, ...rest } = props;
  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

  const {
    field: fieldProperties,
    fieldState: { error },
  } = useController({
    name: path,
    ...rest,
  });

  const { value, ...restOfFieldProperties } = fieldProperties;

  const placeholder = PlaceholderValues[metadata.fieldType];

  return {
    label: metadata.name,
    type: FieldTypeToInputType[metadata.fieldType],
    isError: !!error,
    errorMessage: error?.message,
    autoComplete: "off",
    placeholder,
    metadata,
    value: getValue(value, metadata.fieldType),
    ...restOfFieldProperties,
  };
};

const getValue = (value: any, fieldType: GadgetFieldType) => {
  // JSON fields can have null value which is different from an empty string. In that case, use null directly
  return fieldType === FieldType.Json ? value : value ?? "";
};
