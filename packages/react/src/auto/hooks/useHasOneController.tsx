import { useCallback, useMemo } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController, useWatch } from "../../useActionForm.js";
import type { AutoRelationshipFormProps, AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
import { assertFieldType } from "./utils.js";

export const useHasOneController = (props: Omit<AutoRelationshipFormProps, "children" | "label">) => {
  const { field } = props;
  const fieldMetadata = useFieldMetadata(field);
  const { path, metadata } = fieldMetadata;

  assertFieldType({
    fieldApiIdentifier: field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.HasOne,
  });

  const record: Record<string, any> | undefined = useWatch({ name: path });

  const relatedModelOptions = useRelatedModelOptions(props);

  const errorMessage = relatedModelOptions.relatedModel.error?.message;
  const isLoading = relatedModelOptions.relatedModel.fetching;

  return {
    record,
    fieldMetadata,
    relatedModelOptions,
    errorMessage,
    isLoading,
  };
};

export const useHasOneInputController = (props: AutoRelationshipInputProps) => {
  const { field, control, recordFilter } = props;
  const {
    record: value,
    fieldMetadata,
    relatedModelOptions,
  } = useHasOneController({
    field,
    recordLabel: { primary: props.optionLabel },
    recordFilter,
  });

  const { path } = fieldMetadata;

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    name: path,
    control,
  });

  const selectedRecord = useMemo(() => {
    if (!value) {
      return undefined;
    }

    return "_unlink" in value && value._unlink ? undefined : value;
  }, [value]);

  const { relatedModel } = relatedModelOptions;

  const errorMessage = fieldError?.message || relatedModel.error?.message;
  const isLoading = relatedModel.fetching;

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      const isAlreadySelected = value?.id === record.id;

      if (value && isAlreadySelected) {
        if ("_unlink" in value && value._unlink) {
          const { _unlink, ...rest } = value;
          fieldProps.onChange(rest);
        } else {
          fieldProps.onChange({ ...value, _unlink: record.id });
        }
      } else {
        fieldProps.onChange({ ...record, _link: record.id });
      }
    },
    [value, fieldProps]
  );

  const onRemoveRecord = useCallback(
    (record: Record<string, any>) => {
      if (value && "_unlink" in value && value._unlink) {
        const { _unlink, ...rest } = value;
        fieldProps.onChange(rest);
      } else {
        fieldProps.onChange({ ...value, _unlink: record.id });
      }
    },
    [value, fieldProps]
  );

  return {
    fieldMetadata,
    relatedModelOptions,
    selectedRecord,
    errorMessage,
    isLoading,
    onSelectRecord,
    onRemoveRecord,
  };
};
