import { useCallback, useEffect } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController, useFormContext } from "../../useActionForm.js";
import { get } from "../../utils.js";
import { type AutoBooleanInputProps } from "../shared/AutoInputTypes.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";

export const useBooleanInputController = (props: AutoBooleanInputProps) => {
  const { field: fieldApiIdentifier, control } = props;

  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

  assertFieldType({ fieldApiIdentifier, actualFieldType: metadata.fieldType, expectedFieldType: GadgetFieldType.Boolean });

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    control,
    name: path,
  });

  const {
    formState: { defaultValues },
  } = useFormContext();

  useEffect(() => {
    if (metadata.requiredArgumentForInput) {
      // when the field is required, this defaults to false to match the UI
      // When not required, the field will have a null value unless it is touched by the user
      const defaultValue = get(defaultValues ?? {}, path) ?? false;
      fieldProps.onChange(defaultValue);
    }
  }, [metadata.requiredArgumentForInput, defaultValues]);

  const onChange = useCallback(
    (...args: any[]) => {
      fieldProps.onChange(...args);
      props.afterChange?.(...args);
    },
    [fieldProps.onChange, props.afterChange]
  );

  return {
    id: path,
    path,
    fieldProps: { ...fieldProps, onChange },
    error,
    metadata,
  };
};
