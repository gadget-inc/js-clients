import { useCallback } from "react";
import { useController } from "react-hook-form";
import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";

export const useBelongsToInputController = (props: AutoRelationshipInputProps) => {
  const { field, control } = props;
  const fieldMetadata = useFieldMetadata(field);
  const { path } = fieldMetadata;

  const relatedModelOptions = useRelatedModelOptions(props);
  const { relatedModel } = relatedModelOptions;

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    name: path + ".id",
    control,
  });

  const isLoading = relatedModel.fetching;
  const errorMessage = fieldError?.message || relatedModel.error?.message;

  const onSelectRecord = useCallback(
    (recordId: string) => {
      fieldProps.onChange(recordId);
    },
    [fieldProps]
  );

  const onRemoveRecord = useCallback(() => {
    fieldProps.onChange(null);
  }, [fieldProps]);

  return {
    fieldMetadata,
    relatedModelOptions,

    onSelectRecord,
    onRemoveRecord,

    selectedRecordId: fieldProps.value,

    isLoading,
    errorMessage,
  };
};
