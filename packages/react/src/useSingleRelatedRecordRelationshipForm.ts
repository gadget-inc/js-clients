import { useEffect, useState } from "react";
import { useAutoRelationship, useRelationshipContext } from "./auto/hooks/useAutoRelationship.js";
import { getRecordAsOption, useOptionLabelForField, type useRelatedModelOptions } from "./auto/hooks/useRelatedModel.js";
import type { AutoRelationshipFormProps } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useFormContext } from "./useActionForm.js";
import { get } from "./utils.js";

export const useSingleRelatedRecordRelationshipForm = (
  props: AutoRelationshipFormProps & {
    relationshipController: {
      record: Record<string, any> | undefined;
      relatedModelOptions: ReturnType<typeof useRelatedModelOptions>;
    };
  }
) => {
  const {
    field,
    relationshipController: { record, relatedModelOptions },
  } = props;

  const { path, metadata } = useAutoRelationship({ field });
  const {
    setValue,
    getValues,
    formState: { defaultValues, submitCount, isSubmitSuccessful },
  } = useFormContext();

  const [actionsOpen, setActionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    search,
    searchFilterOptions,
    pagination,
    relatedModel: { records, fetching: isLoading },
  } = relatedModelOptions;

  const relationshipContext = useRelationshipContext();
  const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
  const metaDataPathPrefix = relationshipContext?.transformMetadataPath
    ? relationshipContext.transformMetadataPath(props.field)
    : pathPrefix;

  const defaultRecordId = get(defaultValues, path)?.id;

  // each time the form is submitted if the child record is created we need to set the id to the default record id
  // that comes from the response to the action mutation
  useEffect(() => {
    if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
      setValue(path + ".id", defaultRecordId);
    }
  }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);

  const primaryLabel = useOptionLabelForField(props.field, props.displayRecord?.primary);

  const recordOption = record
    ? getRecordAsOption(record, {
        primary: primaryLabel,
        secondary: props.displayRecord?.secondary,
        tertiary: props.displayRecord?.tertiary,
      })
    : null;
  const relatedModelName = metadata.name ?? "Unknown";

  return {
    actionsOpen,
    defaultRecordId,
    getValues,
    isEditing,
    isLoading,
    metaDataPathPrefix,
    metadata,
    pagination,
    path,
    pathPrefix,
    record,
    recordOption,
    records,
    relatedModelName,
    relatedModelOptions,
    search,
    searchFilterOptions,
    searchOpen,
    setActionsOpen,
    setIsEditing,
    setSearchOpen,
    setValue,
  };
};
