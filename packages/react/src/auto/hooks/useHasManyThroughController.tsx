import { assert } from "@gadgetinc/api-client-core";
import { useCallback, useMemo } from "react";
import { GadgetFieldType, type GadgetHasManyThroughConfig } from "../../internal/gql/graphql.js";
import { useFieldArray } from "../../useActionForm.js";
import type { AutoRelationshipInputProps, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModel.js";
import { assertFieldType } from "./utils.js";

export const useHasManyThroughController = (props: {
  field: string;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
}) => {
  const fieldMetadata = useFieldMetadata(props.field);
  const { path, metadata } = fieldMetadata;

  assertFieldType({
    fieldApiIdentifier: props.field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.HasManyThrough,
  });

  const configuration = metadata.configuration as GadgetHasManyThroughConfig;
  const joinModelHasManyFieldApiIdentifier = assert(
    configuration.joinModelHasManyFieldApiIdentifier,
    "joinModelHasManyFieldApiIdentifier is required for hasManyThrough fields"
  );

  const relatedModelOptions = useRelatedModelOptions({
    field: props.field,
    optionLabel: props.primaryLabel,
    secondaryLabel: props.secondaryLabel,
    tertiaryLabel: props.tertiaryLabel,
  });

  const fieldArrayPath = path.replace(metadata.apiIdentifier, joinModelHasManyFieldApiIdentifier);

  const fieldArray = useFieldArray({ name: fieldArrayPath, keyName: "_fieldArrayKey" });

  const records: Record<string, any>[] = useMemo(() => {
    return fieldArray.fields.map((field) => {
      const { _fieldArrayKey, ...rest } = field;
      return rest;
    });
  }, [fieldArray.fields]);

  const inverseRelatedModelField = useMemo(() => {
    return (metadata.configuration as GadgetHasManyThroughConfig).inverseRelatedModelField?.apiIdentifier;
  }, [metadata.configuration]);

  return {
    fieldArrayPath,
    fieldMetadata,
    fieldArray,
    records,
    relatedModelOptions,
    inverseRelatedModelField,
    joinModelField: joinModelHasManyFieldApiIdentifier,
    joinModelApiIdentifier: configuration.joinModel?.apiIdentifier,
  };
};

export const useHasManyThroughInputController = (props: AutoRelationshipInputProps) => {
  const { fieldMetadata, fieldArray, records, relatedModelOptions, inverseRelatedModelField } = useHasManyThroughController(props);

  const { relatedModel } = relatedModelOptions;
  const { remove, append } = fieldArray;

  const selectedRecords = useMemo(() => {
    const siblingRecords: any[] = [];
    const seenIds = new Set<string>();

    for (const record of records) {
      if (inverseRelatedModelField && record[inverseRelatedModelField] && !seenIds.has(record[inverseRelatedModelField].id)) {
        siblingRecords.push(record[inverseRelatedModelField]);
        seenIds.add(record[inverseRelatedModelField].id);
      }
    }

    return siblingRecords;
  }, [records, inverseRelatedModelField]);

  const errorMessage = relatedModel.error?.message;
  const isLoading = relatedModel.fetching;

  const onRemoveRecord = useCallback(
    (record: Record<string, any>) => {
      const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
      if (index < 0) {
        return;
      }

      remove(index);
    },
    [inverseRelatedModelField, records, remove]
  );

  const onSelectRecord = useCallback(
    (record: Record<string, any>) => {
      const index = records.findIndex((value) => inverseRelatedModelField && value[inverseRelatedModelField]?.id === record.id);
      if (index >= 0) {
        remove(index);
      } else if (inverseRelatedModelField) {
        append({
          [inverseRelatedModelField]: { ...record, _link: record.id },
        });
      }
    },
    [inverseRelatedModelField, records, remove, append]
  );

  return {
    fieldMetadata,
    relatedModelOptions,
    selectedRecords,
    errorMessage,
    isLoading,
    fieldArray,
    onSelectRecord,
    onRemoveRecord,
  };
};
