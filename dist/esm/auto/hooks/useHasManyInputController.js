import { useCallback, useMemo } from "react";
import { useFieldArray } from "react-hook-form";
import { uniq } from "../../utils.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useRelatedModelOptions } from "./useRelatedModelOptions.js";
export const useHasManyInputController = (props) => {
    const { field } = props;
    const fieldMetadata = useFieldMetadata(field);
    const { metadata, path } = fieldMetadata;
    const inverseFieldApiIdentifier = useMemo(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const { fields, remove, append } = useFieldArray({ name: path });
    const relatedModelOptions = useRelatedModelOptions(props);
    const { selected, relatedModel } = relatedModelOptions;
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
    }, [fields.map((field) => field.__id).join(",")]);
    const onRemoveRecord = useCallback((recordId) => {
        const isSelectedInBackend = retrievedSelectedRecordIds.includes(recordId);
        if (isSelectedInBackend) {
            append({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier });
        }
        else {
            // Only selected in frontend
            removeFromFieldsByRecordId(recordId);
        }
    }, [inverseFieldApiIdentifier, retrievedSelectedRecordIds]);
    const onSelectRecord = useCallback((recordId) => {
        const isAlreadySelected = selectedRecordIds.includes(recordId);
        if (isAlreadySelected) {
            onRemoveRecord(recordId);
            return;
        }
        if (unlinkedRecordIds.includes(recordId)) {
            // Re-linking a record that is
            // retrievedFromBackend -> removedInFrontend -> reselectedInFrontend
            removeFromFieldsByRecordId(recordId);
        }
        else {
            // Adding a new record that was not previously selected
            append({ __id: recordId });
        }
    }, [selectedRecordIds, unlinkedRecordIds, inverseFieldApiIdentifier, onRemoveRecord]);
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
//# sourceMappingURL=useHasManyInputController.js.map