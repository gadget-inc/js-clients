"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToInputController = exports.useBelongsToController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRelatedModel_js_1 = require("./useRelatedModel.js");
const utils_js_1 = require("./utils.js");
const useBelongsToController = (props) => {
    const { field } = props;
    const fieldMetadata = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { path, metadata } = fieldMetadata;
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.BelongsTo,
    });
    const record = (0, useActionForm_js_1.useWatch)({ name: path });
    const relatedModelOptions = (0, useRelatedModel_js_1.useRelatedModelOptions)(props);
    const isLoading = relatedModelOptions.relatedModel.fetching;
    const errorMessage = relatedModelOptions.relatedModel.error?.message;
    return {
        record,
        fieldMetadata,
        relatedModelOptions,
        isLoading,
        errorMessage,
    };
};
exports.useBelongsToController = useBelongsToController;
const useBelongsToInputController = (props) => {
    const { field, control, optionLabel } = props;
    const { fieldMetadata, relatedModelOptions, isLoading, errorMessage } = (0, exports.useBelongsToController)({
        field,
        recordLabel: { primary: optionLabel },
    });
    const { path } = fieldMetadata;
    const { field: { value, onChange }, } = useBelongsToFieldIdPropertyController({
        name: path,
        control,
    });
    const { danglingSelectedRecordId, selectedRecord, maybeClearDanglingSelectedRecord } = useBelongsToSelectedRecord({
        path,
        relatedModelOptions,
        selectedRecordIdFromController: value,
    });
    const onSelectRecord = (0, react_1.useCallback)((record) => {
        onChange(record.id);
    }, [onChange]);
    const onRemoveRecord = (0, react_1.useCallback)(() => {
        onChange(null);
        maybeClearDanglingSelectedRecord();
    }, [onChange, maybeClearDanglingSelectedRecord]);
    return {
        fieldMetadata,
        relatedModelOptions,
        onSelectRecord,
        onRemoveRecord,
        selectedRecord,
        danglingSelectedRecordId,
        isLoading,
        errorMessage,
    };
};
exports.useBelongsToInputController = useBelongsToInputController;
const useBelongsToFieldIdPropertyController = (props) => {
    const { name, control } = props;
    // use the path of the full belongsTo field here and extract the ID only.
    // This prevents additional changes on the record beyond the relationship link change
    const { field: { value: fullFieldValue, onChange: fullFieldOnChange }, } = (0, useActionForm_js_1.useController)({ name, control });
    const value = fullFieldValue?.id;
    const onChange = (0, react_1.useCallback)((recordId) => {
        fullFieldOnChange({
            // Set the ID only to omit additional properties from being included in the GQL request
            id: recordId,
        });
    }, [fullFieldOnChange]);
    return { field: { value, onChange } };
};
const useBelongsToSelectedRecord = (props) => {
    const { path, relatedModelOptions, selectedRecordIdFromController } = props;
    const { getValues, setValue } = (0, useActionForm_js_1.useFormContext)();
    const selectedRelatedRecord = getValues(path); // The selected record from initial `findBy` lookup
    const rawSelectedRelatedRecordId = getValues(`${path}Id`); // The raw ID in the current record
    const noSelectedRecord = rawSelectedRelatedRecordId === null || // null when on an existing record without a related ID
        rawSelectedRelatedRecordId === undefined; // undefined when on a new record
    // The related record ID if the related record ID is defined but the record does not exist.
    const danglingSelectedRecordId = !noSelectedRecord &&
        selectedRelatedRecord === null && // Null when the related record does not exist
        rawSelectedRelatedRecordId
        ? rawSelectedRelatedRecordId
        : undefined;
    const maybeClearDanglingSelectedRecord = (0, react_1.useCallback)(() => {
        setValue(`${path}Id`, null);
    }, [setValue, path]);
    const selectedRecord = relatedModelOptions.relatedModel.records.find((record) => record.id === selectedRecordIdFromController) ??
        //If the selected record exists, but is not in the list of related records, try to get it from the formContext
        selectedRelatedRecord;
    return {
        noSelectedRecord,
        danglingSelectedRecordId,
        maybeClearDanglingSelectedRecord,
        selectedRecord,
    };
};
//# sourceMappingURL=useBelongsToController.js.map