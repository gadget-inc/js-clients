import { useCallback, useMemo } from "react";
import { useFieldArray } from "../../useActionForm.js";
import { uniq } from "../../utils.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModelOptions.js";
export const useHasOneInputController = (props) => {
    const { field } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { metadata, path } = fieldMetadata;
    const inverseFieldApiIdentifier = useMemo(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
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
    const retrievedSelectedRecordIds = selected.records?.map((record) => record.id) ?? [];
    const unlinkedRecordIds = fields.filter((field) => field.__unlinkedInverseField).map((field) => field.__id);
    const selectedRecordIds = uniq([
        ...fields.map((field, i) => field.__id), // To be selected upon submit
        ...retrievedSelectedRecordIds, // From related model records in DB
    ].filter((id) => !unlinkedRecordIds.includes(id)));
    const removeFromFieldsByRecordId = useCallback((recordId) => {
        const index = fields.findIndex((entry) => entry.__id === recordId);
        if (index > -1) {
            remove(index);
        }
    }, [fields]);
    const getUnselectedExistingRetrievedRecordsFieldValues = (excludedId) => retrievedSelectedRecordIds
        .filter((recordId) => recordId !== excludedId)
        .map((recordId) => ({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier }));
    const onSelectRecord = useCallback((recordId) => {
        const isAlreadySelected = selectedRecordIds.includes(recordId);
        if (isAlreadySelected) {
            onRemoveRecord(recordId);
            return;
        }
        const isRetrievedValueReselect = retrievedSelectedRecordIds.includes(recordId);
        replace(isRetrievedValueReselect
            ? getUnselectedExistingRetrievedRecordsFieldValues(recordId)
            : [{ __id: recordId }, ...getUnselectedExistingRetrievedRecordsFieldValues()]);
    }, [retrievedSelectedRecordIds, selectedRecordIds]);
    const onRemoveRecord = useCallback((recordId) => {
        const isSelectedInBackend = retrievedSelectedRecordIds.includes(recordId);
        if (isSelectedInBackend) {
            append({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier });
        }
        else {
            // Only selected in frontend
            removeFromFieldsByRecordId(recordId);
        }
    }, [retrievedSelectedRecordIds, inverseFieldApiIdentifier]);
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
//# sourceMappingURL=useHasOneInputController.js.map