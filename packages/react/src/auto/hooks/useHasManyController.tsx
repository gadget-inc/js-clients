import { useCallback, useMemo } from "react";
import { GadgetFieldType, type GadgetHasManyConfig } from "../../internal/gql/graphql.js";
import { useFieldArray } from "../../useActionForm.js";
import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
import { assertFieldType } from "./utils.js";

export const useHasManyController = (props: { field: string }) => {
  const { field } = props;
  const fieldMetadata = useFieldMetadata(field);
  const { path, metadata } = fieldMetadata;

  assertFieldType({
    fieldApiIdentifier: field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.HasMany,
  });

  const fieldArray = useFieldArray({ name: path, keyName: "_fieldArrayKey" });

  const records: Record<string, any>[] = useMemo(() => {
    return fieldArray.fields.map((field) => {
      const { _fieldArrayKey, ...rest } = field;
      return rest;
    });
  }, [fieldArray.fields]);

  return {
    fieldArrayPath: path,
    fieldMetadata,
    fieldArray,
    records,
  };
};

export const useHasManyInputController = (props: AutoRelationshipInputProps) => {
  const { field } = props;
  const { fieldMetadata, fieldArray, records } = useHasManyController({ field });

  const { metadata } = fieldMetadata;
  const inverseFieldApiIdentifier = useMemo(() => {
    return (metadata.configuration as GadgetHasManyConfig).inverseField?.apiIdentifier;
  }, [metadata.configuration]);

  const { remove, append, update } = fieldArray;
  const relatedModelOptions = useRelatedModelOptions({ field, displayRecord: { primary: props.optionLabel } });

  const { relatedModel } = relatedModelOptions;

  const errorMessage = relatedModel.error?.message;
  const isLoading = relatedModel.fetching;

  const selectedRecords = useMemo(() => {
    return (records ?? []).filter((value: { _unlink?: string }) => !("_unlink" in value && value._unlink));
  }, [records]);

  const onRemoveRecord = useCallback(
    (record: Record<string, any>) => {
      const index = records.findIndex((value) => value.id === record.id);

      if (index < 0) {
        return;
      }

      if ("_link" in record) {
        remove(index);
      } else {
        update(index, {
          ...record,
          _unlink: { id: record.id, inverseFieldApiIdentifier },
        });
      }
    },
    [inverseFieldApiIdentifier, records, remove, update]
  );

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      const index = (records ?? []).findIndex((value) => value.id === record.id);

      if (index >= 0) {
        const value = records[index];
        if ("_unlink" in value && value._unlink) {
          const { _unlink, ...rest } = value;
          update(index, rest);
        } else {
          onRemoveRecord(record);
        }
      } else {
        append({
          ...record,
          _link: record.id,
        });
      }
    },
    [records, onRemoveRecord, update, append]
  );

  return {
    fieldMetadata,
    relatedModelOptions,
    selectedRecords,
    errorMessage,
    isLoading,
    onSelectRecord,
    onRemoveRecord,
  };
};
