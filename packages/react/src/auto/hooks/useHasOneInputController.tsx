import { useCallback, useMemo } from "react";
import type { GadgetHasOneConfig } from "../../internal/gql/graphql.js";
import { useFieldArray } from "../../useActionForm.js";
import { uniq } from "../../utils.js";
import type { AutoRelationshipInputProps } from "../interfaces/AutoRelationshipInputProps.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModelOptions.js";

export const useHasOneInputController = (props: AutoRelationshipInputProps) => {
  const { field } = props;
  const fieldMetadata = useFieldMetadata(field);
  const { metadata, path } = fieldMetadata;

  const inverseFieldApiIdentifier = useMemo(() => {
    return (metadata.configuration as GadgetHasOneConfig).inverseField?.apiIdentifier;
  }, [metadata.configuration]);

  const { fields, remove, append, replace } = useFieldArray({
    /**
     * Currently, directly using the path will break the submit button.
     * This feels like a good way to store the state of the hasOne selection, but hasOne fields can't send with array values
     */
    name: fieldMetadata.path + "__RemoveOnceWeUpdateHasOneApiToMaintainOneToOneRelationships",
  });
  const relatedModelOptions = useRelatedModelOptions(props);
  const { options, selected, pagination, search, relatedModel } = relatedModelOptions;

  const errorMessage = relatedModel.error?.message ?? selected.error?.message;
  const isLoading = relatedModel.fetching || selected.fetching;

  const retrievedSelectedRecordIds = selected.records?.map((record: { id: string }) => record.id) ?? [];
  const unlinkedRecordIds = fields.filter((field: any) => field.__unlinkedInverseField).map((field: any) => field.__id);

  const selectedRecordIds = uniq(
    [
      ...fields.map((field, i) => (field as any).__id), // To be selected upon submit
      ...retrievedSelectedRecordIds, // From related model records in DB
    ].filter((id) => !unlinkedRecordIds.includes(id))
  );

  const removeFromFieldsByRecordId = useCallback(
    (recordId: string) => {
      const index = fields.findIndex((entry) => (entry as any).__id === recordId);
      if (index > -1) {
        remove(index);
      }
    },
    [fields]
  );

  const getUnselectedExistingRetrievedRecordsFieldValues = (excludedId?: string) =>
    retrievedSelectedRecordIds
      .filter((recordId) => recordId !== excludedId)
      .map((recordId) => ({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier! }));

  const onSelectRecord = useCallback(
    (recordId: string) => {
      const isAlreadySelected = selectedRecordIds.includes(recordId);
      if (isAlreadySelected) {
        onRemoveRecord(recordId);
        return;
      }

      const isRetrievedValueReselect = retrievedSelectedRecordIds.includes(recordId);

      replace(
        isRetrievedValueReselect
          ? getUnselectedExistingRetrievedRecordsFieldValues(recordId)
          : [{ __id: recordId }, ...getUnselectedExistingRetrievedRecordsFieldValues()]
      );
    },
    [retrievedSelectedRecordIds, selectedRecordIds]
  );

  const onRemoveRecord = useCallback(
    (recordId: string) => {
      const isSelectedInBackend = retrievedSelectedRecordIds.includes(recordId);

      if (isSelectedInBackend) {
        append({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier! });
      } else {
        // Only selected in frontend
        removeFromFieldsByRecordId(recordId);
      }
    },
    [retrievedSelectedRecordIds, inverseFieldApiIdentifier]
  );

  return {
    fieldMetadata,

    relatedModelOptions,

    selectedRecordIds,

    errorMessage,
    isLoading,

    onSelectRecord,
    onRemoveRecord,
  };
};
