"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasManyInputController = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const utils_js_1 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModelOptions_js_1 = require("./useRelatedModelOptions.js");
const useHasManyInputController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { metadata, path } = fieldMetadata;
    const inverseFieldApiIdentifier = (0, react_1.useMemo)(() => {
        return metadata.configuration.inverseField?.apiIdentifier;
    }, [metadata.configuration]);
    const { fields, remove, append } = (0, react_hook_form_1.useFieldArray)({ name: path });
    const relatedModelOptions = (0, useRelatedModelOptions_js_1.useRelatedModelOptions)(props);
    const { selected, relatedModel } = relatedModelOptions;
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
    }, [fields.map((field) => field.__id).join(",")]);
    const onRemoveRecord = (0, react_1.useCallback)((recordId) => {
        const isSelectedInBackend = retrievedSelectedRecordIds.includes(recordId);
        if (isSelectedInBackend) {
            append({ __id: recordId, __unlinkedInverseField: inverseFieldApiIdentifier });
        }
        else {
            // Only selected in frontend
            removeFromFieldsByRecordId(recordId);
        }
    }, [inverseFieldApiIdentifier, retrievedSelectedRecordIds]);
    const onSelectRecord = (0, react_1.useCallback)((recordId) => {
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
exports.useHasManyInputController = useHasManyInputController;
//# sourceMappingURL=useHasManyInputController.js.map