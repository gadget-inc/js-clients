"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasOneInputController = void 0;
const react_1 = require("react");
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModelOptions_js_1 = require("./useRelatedModelOptions.js");
const useHasOneInputController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { metadata, path } = fieldMetadata;
    const inverseFieldApiIdentifier = (0, react_1.useMemo)(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const { fields, remove, append, replace } = (0, useActionForm_js_1.useFieldArray)({
        /**
         * Currently, directly using the path will break the submit button.
         * This feels like a good way to store the state of the hasOne selection, but hasOne fields can't send with array values
         */
        name: fieldMetadata.path + "__RemoveOnceWeUpdateHasOneApiToMaintainOneToOneRelationships",
    });
    const relatedModelOptions = (0, useRelatedModelOptions_js_1.useRelatedModelOptions)(props);
    const { options, selected, pagination, search, relatedModel } = relatedModelOptions;
    const errorMessage = relatedModel.error?.message ?? selected.error?.message;
    const isLoading = relatedModel.fetching || selected.fetching;
    const retrievedSelectedRecordIds = selected.records?.map((record) => record.id) ?? [];
    const unlinkedRecordIds = fields.filter((field) => field.__unlinkedInverseField).map((field) => field.__id);
    const selectedRecordIds = (0, utils_js_1.uniq)([
        ...fields.map((field, i) => field.__id), // To be selected upon submit
        ...retrievedSelectedRecordIds, // From related model records in DB
    ].filter((id) => !unlinkedRecordIds.includes(id)));
    const removeFromFieldsByRecordId = (0, react_1.useCallback)((recordId) => {
        const index = fields.findIndex((entry) => entry.__id === recordId);
        if (index > -1) {
            remove(index);
        }
    }, [fields]);
    const getUnselectedExistingRetrievedRecordsFieldValues = (excludedId) => retrievedSelectedRecordIds
        .filter((recordId) => recordId !== excludedId)
        .map((recordId) => ({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier }));
    const onSelectRecord = (0, react_1.useCallback)((recordId) => {
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
    const onRemoveRecord = (0, react_1.useCallback)((recordId) => {
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
exports.useHasOneInputController = useHasOneInputController;
//# sourceMappingURL=useHasOneInputController.js.map