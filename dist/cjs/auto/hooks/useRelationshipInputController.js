"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRelationshipInputController = exports.numberOfRecordsToLoad = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../GadgetProvider.js");
const metadata_js_1 = require("../../metadata.js");
const useFindMany_js_1 = require("../../useFindMany.js");
const useFindOne_js_1 = require("../../useFindOne.js");
const utils_js_1 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
exports.numberOfRecordsToLoad = 25;
const useRelationshipInputController = (props) => {
    const { field, control, optionLabel } = props;
    const { modelManager, metadata, path } = useRelatedModelManager({ field });
    const isHasMany = metadata.fieldType === metadata_js_1.FieldType.HasMany;
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, react_hook_form_1.useController)({
        name: path + ".id",
        rules: { required: metadata.requiredArgumentForInput },
        control,
    });
    const relatedModelRecords = useRelatedModelRecords({
        modelManager,
        optionLabel,
        fieldProps,
    });
    return {
        path,
        isHasMany,
        fieldProps,
        fieldError,
        metadata,
        ...relatedModelRecords,
    };
};
exports.useRelationshipInputController = useRelationshipInputController;
const useRelatedModelManager = (props) => {
    const { field } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const config = metadata.configuration;
    if (!config || !config.relatedModel) {
        throw new Error(`Related model for field "${field}" not found in metadata`);
    }
    const api = (0, GadgetProvider_js_1.useApi)();
    const modelManager = (0, utils_js_1.getModelManager)(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace);
    if (!modelManager) {
        const relatedModelNamespacedApiId = [...(config.relatedModel.namespace ?? []), config.relatedModel.apiIdentifier].join(".");
        throw new Error(`no model manager for "${relatedModelNamespacedApiId}" found for action function`);
    }
    return { path, metadata, modelManager };
};
const useGetSelectedRelatedModelRecords = (props) => {
    const { modelManager, fieldProps } = props;
    const [selectedRecordId, setSelectedRecordId] = (0, react_1.useState)(fieldProps.value);
    const [{ data: selectedRecord, fetching: fetchingSelectedError, error: fetchSelectedRecordError }] = (0, useFindOne_js_1.useFindOne)(modelManager, selectedRecordId ?? "", {
        pause: !selectedRecordId, // Only fetch with a selected records
    });
    return {
        selectedRecord,
        fetchingSelectedError,
        fetchSelectedRecordError,
        selectedRecordId,
        setSelectedRecordId,
    };
};
const useRelatedModelRecords = (props) => {
    const { modelManager, optionLabel, fieldProps } = props;
    const optionLabelIsFieldName = typeof optionLabel === "string";
    const [options, setOptions] = (0, react_1.useState)([]);
    const [recordPage, setRecordPage] = (0, react_1.useState)(undefined);
    const [searchValue, setSearchValue] = (0, react_1.useState)();
    const selectRecordId = (selectedId) => {
        setSelectedRecordId(selectedId);
        setSearch(undefined);
        fieldProps.onChange(selectedId);
    };
    const { selectedRecord, fetchingSelectedError, fetchSelectedRecordError, selectedRecordId, setSelectedRecordId } = useGetSelectedRelatedModelRecords(props);
    const [{ data: records, fetching: fetchingRecords, error: fetchRecordsError }, _refetch] = (0, useFindMany_js_1.useFindMany)(modelManager, {
        first: exports.numberOfRecordsToLoad,
        ...(recordPage && { after: recordPage }),
        ...(searchValue && { search: searchValue }),
        ...(optionLabelIsFieldName && { select: { id: true, [optionLabel]: true } }),
    });
    const hasNextPage = !!records?.hasNextPage;
    const isLoadingRelatedRecords = !!(fetchingRecords || !records || fetchingSelectedError);
    const resetPagination = () => setRecordPage(undefined);
    const loadNextPageOfRecords = () => {
        if (records && records.length >= exports.numberOfRecordsToLoad && hasNextPage && records.endCursor) {
            setRecordPage(records.endCursor);
        }
    };
    const setSearch = (search) => {
        resetPagination();
        const emptySearch = search === "";
        setSearchValue(emptySearch ? undefined : search);
    };
    const getRecordLabel = (record) => optionLabel
        ? optionLabelIsFieldName
            ? record[optionLabel] // Related model field API id
            : optionLabel(record) // Callback on the whole related model record
        : record.name; // TODO - Incorporate DataModel.defaultDisplayField
    const getRecordsAsOptions = () => records?.map((record) => ({
        recordId: record.id,
        label: getRecordLabel(record),
    })) ?? [];
    const selectedRecordLabel = (0, react_1.useMemo)(() => (selectedRecord ? getRecordLabel(selectedRecord) : `id: ${selectedRecordId}`), [selectedRecord]);
    /**
     * This useEffect appends the newly fetched records to the list of records that have already been loaded
     * `numberOfRecordsToLoad` are retrieved per `useFindMany` call
     */
    (0, react_1.useEffect)(() => {
        const updatedUniqueOptions = (0, utils_js_1.uniqByProperty)([
            ...(selectedRecordId ? [{ recordId: selectedRecordId, label: selectedRecordLabel }] : []),
            ...(recordPage ? options : []),
            ...getRecordsAsOptions(),
        ], "recordId");
        setOptions(updatedUniqueOptions);
    }, [recordPage, isLoadingRelatedRecords, searchValue, selectedRecordId]);
    return {
        relatedModel: {
            options,
            error: fetchRecordsError,
            hasNextPage,
            isLoadingRelatedRecords,
        },
        selection: {
            id: selectedRecordId,
            label: selectedRecordLabel,
            error: fetchSelectedRecordError,
            set: selectRecordId,
        },
        pagination: {
            resetPagination,
            loadNextPageOfRecords,
        },
        search: {
            value: searchValue,
            set: setSearch,
        },
    };
};
//# sourceMappingURL=useRelationshipInputController.js.map