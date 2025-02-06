import { useAutoRelationship, useRelationshipContext } from "./auto/hooks/useAutoRelationship.js";
import { useBelongsToController } from "./auto/hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "./auto/hooks/useRelatedModel.js";
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useFormContext } from "./useActionForm.js";
import { get } from "./utils.js";

import { useEffect, useState } from "react";
export const useBelongsToForm = (props: {
  field: string;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
}) => {
  const { field } = props;
  const { path, metadata } = useAutoRelationship({ field });
  const {
    setValue,
    getValues,
    formState: { defaultValues, submitCount, isSubmitSuccessful },
  } = useFormContext();

  const { record, relatedModelOptions } = useBelongsToController(props);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    search,
    searchFilterOptions,
    pagination,
    relatedModel: { records, fetching: isLoading },
  } = relatedModelOptions;
  const relationshipContext = useRelationshipContext();
  const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;

  const defaultRecordId = get(defaultValues, path)?.id;

  // each time the form is submitted if the child record is created we need to set the id to the default record id
  // that comes from the response to the action mutation
  useEffect(() => {
    if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
      setValue(path + ".id", defaultRecordId);
    }
  }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);

  const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
  const hasRecord = !!(record && !("_unlink" in record && record._unlink));
  const recordOption = record ? getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;

  const parentName = metadata.name ?? "Unknown";

  const metaDataPathPrefix = relationshipContext?.transformMetadataPath
    ? relationshipContext.transformMetadataPath(props.field)
    : props.field;

  return {
    record,
    relatedModelOptions,
    actionsOpen,
    searchOpen,
    modalOpen,
    primaryLabel,
    hasRecord,
    recordOption,
    parentName,
    metadata,
    defaultRecordId,
    path,
    pathPrefix,
    setValue,
    getValues,
    search,
    searchFilterOptions,
    pagination,
    records,
    isLoading,
    setActionsOpen,
    setSearchOpen,
    setModalOpen,
    metaDataPathPrefix,
  };
};
