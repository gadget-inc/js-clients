import { assert } from "@gadgetinc/api-client-core";
import { useEffect, useMemo } from "react";
import { extractPathsFromChildren } from "./auto/AutoForm.js";
import { useAutoRelationship, useRelationshipContext } from "./auto/hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "./auto/hooks/useHasManyThroughController.js";
import { useOptionLabelForField } from "./auto/hooks/useRelatedModel.js";
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useFormContext } from "./useActionForm.js";

export const useHasManyThroughForm = (props: {
  field: string;
  label?: React.ReactNode;
  children: React.ReactNode;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
}) => {
  const { field, children } = props;
  const { metadata } = useAutoRelationship({ field });
  const { setValue } = useFormContext();
  const childPaths = children && extractPathsFromChildren(children);
  const hasChildForm = childPaths && childPaths.length > 0;

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
    searchFilterOptions: siblingModelOptions,
    relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords },
    pagination: siblingPagination,
  } = relatedModelOptions;
  const siblingModelName = metadata.name ?? "Unknown";

  const joinRecords = useMemo(() => {
    return fields.flatMap((field, idx): [string, number, Record<string, any>][] => {
      const record = records[idx];

      if (!record) {
        return [];
      }

      return [[field._fieldArrayKey, idx, record]];
    });
  }, [fields, records]);

  const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

  return {
    fields,
    append,
    remove,
    joinRecords,
    primaryLabel,
    hasChildForm,
    childPaths,
    listboxId,
    pathPrefix,
    metaDataPathPrefix,
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
