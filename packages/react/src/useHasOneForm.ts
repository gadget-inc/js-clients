import { useCallback, useMemo } from "react";
import { useAutoFormMetadata } from "./auto/AutoFormContext.js";
import { useHasOneController } from "./auto/hooks/useHasOneController.js";
import { useRequiredChildComponentsValidator } from "./auto/hooks/useRequiredChildComponentsValidator.js";
import type { OptionLabel } from "./auto/interfaces/AutoRelationshipInputProps.js";
import { useSingleRelatedRecordRelationshipForm } from "./useSingleRelatedRecordRelationshipForm.js";

export const useHasOneForm = (props: {
  field: string;
  children: React.ReactNode;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
}) => {
  useRequiredChildComponentsValidator(props, "AutoHasOneForm");
  const { record, relatedModelOptions } = useHasOneController(props);

  const form = useSingleRelatedRecordRelationshipForm({ ...props, relationshipController: { record, relatedModelOptions } });

  const { isEditing, setIsEditing, setActionsOpen, setValue, path, metaDataPathPrefix } = form;
  const { fields, model } = useAutoFormMetadata();

  const newRecordInitialValues = useMemo(() => {
    if (!model) {
      return [];
    }
    const fullPathPrefix = model.apiIdentifier + "." + metaDataPathPrefix + ".";
    const fieldsToInitialize = fields
      .filter((field) => field.path.startsWith(fullPathPrefix))
      .map((field) => field.path.replace(fullPathPrefix, ""));

    // Created records always start with all empty fields
    const nullInitialValues = Object.fromEntries(fieldsToInitialize.map((key) => [key, null]));

    return nullInitialValues;
  }, [fields, model?.apiIdentifier, metaDataPathPrefix]);

  /**
   * Initializes the form state to create a new record
   * If the current record was previously linked, then it will be unlinked
   */
  const startCreatingRecord = useCallback(() => {
    setIsEditing(true);
    setActionsOpen(false);

    // Maintain the unlink value if we are replacing the existing related record with a new one
    const unlinkValue = record?._unlink ?? record?.id;

    setValue(path, {
      ...newRecordInitialValues,
      ...(unlinkValue
        ? {
            __replace: true, // To indicate that we are replacing the current record with a new one
            _unlink: unlinkValue,
          }
        : {}),
    });
  }, [setIsEditing, setActionsOpen, newRecordInitialValues, path, setValue, record]);

  const confirmEdit = useCallback(() => {
    setIsEditing(false);
    setActionsOpen(false);
  }, [setIsEditing, setActionsOpen]);

  /**
   * Unlinks existing related records and removes created & selected records from the form state
   */
  const removeRecord = useCallback(() => {
    setIsEditing(false);
    setActionsOpen(false);

    if (!record) {
      return;
    }

    const { _unlink, _link, id: recordId } = record;
    const isRecordSelectedFromDropdown = !!_link;
    const unlinkValue = _unlink ?? recordId;

    setValue(
      path,
      unlinkValue && !isRecordSelectedFromDropdown
        ? { _unlink: unlinkValue } // unlinking he related record that is already linked in the API DB
        : null // Removing the created record in the form that is not in the API DB
    );
  }, [record, path, setValue, setIsEditing, setActionsOpen]);

  const isNewRecordThatUnlinksExisting = useMemo(() => {
    if (!record) {
      return false;
    }
    const hasUnlink = "_unlink" in record && record._unlink;
    if (!hasUnlink) {
      return false;
    }

    const { __typename, _unlink, ...otherFields } = record;
    return Object.keys(otherFields).length > 0;
  }, [record]);

  const hasRecord = !!(record && (!("_unlink" in record && record._unlink) || isNewRecordThatUnlinksExisting));
  const isCreatingRecord = isEditing && !hasRecord;

  return {
    ...form,
    confirmEdit,
    removeRecord,
    setIsEditing,
    startCreatingRecord,
    hasRecord,
    isCreatingRecord,
  };
};
