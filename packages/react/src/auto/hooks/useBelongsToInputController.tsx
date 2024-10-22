import { useCallback } from "react";
import { useController } from "../../useActionForm.js";
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
    field: { value, onChange },
  } = useController({
    name: path + ".id",
    control,
  });

  const selectedRecord: Record<string, any> | undefined = relatedModelOptions.relatedModel.records.find((record) => record.id === value);

  const isLoading = relatedModel.fetching;
  const errorMessage = relatedModel.error?.message;

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      onChange(record.id);
    },
    [onChange]
  );

  const onRemoveRecord = useCallback(() => {
    onChange(null);
  }, [onChange]);

  return {
    fieldMetadata,
    relatedModelOptions,
    onSelectRecord,
    onRemoveRecord,
    selectedRecord,
    isLoading,
    errorMessage,
  };
};
