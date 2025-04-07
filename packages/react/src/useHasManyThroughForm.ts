import { assert } from "@gadgetinc/api-client-core";
import { useEffect, useMemo } from "react";
import { useAutoRelationship, useRelationshipContext } from "./auto/hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "./auto/hooks/useHasManyThroughController.js";
import { useRecordLabelObjectFromProps } from "./auto/hooks/useRelatedModel.js";
import type { AutoHasManyThroughFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useFormContext } from "./useActionForm.js";

export const useHasManyThroughForm = (props: AutoHasManyThroughFormProps) => {
  const { field, children, allowMultipleSelections } = props;
  const { metadata } = useAutoRelationship({ field });
  const { setValue } = useFormContext();

  const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } =
    useHasManyThroughController(props);

  const { fields, append, remove } = fieldArray;
  const relationshipContext = useRelationshipContext();
  const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
  const metaDataPathPrefix = relationshipContext?.transformMetadataPath
    ? relationshipContext.transformMetadataPath(props.field)
    : pathPrefix;

  useEffect(() => {
    for (const [index, field] of fields.entries()) {
      if (
        inverseRelatedModelField &&
        (field as any)[inverseRelatedModelField] &&
        (field as any)[inverseRelatedModelField].id &&
        !("_link" in field)
      ) {
        // use setValue so that we don't trigger a re-render
        setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, (field as any)[inverseRelatedModelField].id);
      }
    }
  }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);

  const listboxId = `HasManyThroughListboxInPopover-${field}`;

  if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
    throw new Error("AutoHasManyThroughForm can only be used for HasManyThrough fields");
  }

  const {
    search,
    searchFilterOptions: rawSiblingModelOptions,
    relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords },
    pagination: siblingPagination,
  } = relatedModelOptions;
  const siblingModelName = metadata.name ?? "Unknown";

  const joinRecords = useMemo(() => {
    return fields.flatMap((field, idx): [string, number, Record<string, any>][] => {
      const record = records[idx];

      if (
        !record ||
        !inverseRelatedModelField ||
        !record[inverseRelatedModelField] // Do not consider join records that are not connected to a sibling model record
      ) {
        return [];
      }

      return [[field._fieldArrayKey, idx, record]];
    });
  }, [fields, records, inverseRelatedModelField]);

  const recordLabel = useRecordLabelObjectFromProps(props);

  const siblingModelOptions = useMemo(() => {
    if (!allowMultipleSelections && inverseRelatedModelField) {
      return rawSiblingModelOptions.filter(
        (option) =>
          !joinRecords.some((joinRecord) => {
            const rawJoinRecord = joinRecord[2];
            const siblingFromJoinRecord = rawJoinRecord[inverseRelatedModelField];
            return siblingFromJoinRecord && "id" in siblingFromJoinRecord && siblingFromJoinRecord.id === option.id;
          })
      );
    }
    return rawSiblingModelOptions;
  }, [rawSiblingModelOptions, allowMultipleSelections, inverseRelatedModelField, joinRecords]);

  return {
    fields,
    append,
    remove,
    joinRecords,
    listboxId,
    pathPrefix,
    metaDataPathPrefix,
    recordLabel,
    siblingModelName,
    siblingRecordsLoading,
    siblingRecords,
    siblingPagination,
    search,
    siblingModelOptions,
    metadata,
    joinModelField,
    joinModelApiIdentifier: assert(joinModelApiIdentifier, `The join model in the "${field}" hasManyThrough field is required`),
    inverseRelatedModelField: assert(
      inverseRelatedModelField,
      `The belongsTo field between the join model and sibling model in the "${field}" hasManyThrough field is required`
    ),
    fieldArrayPath,
    fieldArray,
    field,
    records,
    children,
    relatedModelOptions,
  };
};
