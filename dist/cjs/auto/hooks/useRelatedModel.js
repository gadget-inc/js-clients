"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsAsOptions = exports.getRecordAsOption = exports.getRecordLabel = exports.useRelatedModelOptions = exports.useOptionLabelForField = exports.useRelatedModelRecords = exports.selectedRecordsToLoadCount = exports.optionRecordsToLoadCount = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useFindMany_js_1 = require("../../useFindMany.js");
const utils_js_1 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useModelManager_js_1 = require("./useModelManager.js");
exports.optionRecordsToLoadCount = 25;
exports.selectedRecordsToLoadCount = 25;
const useRelatedModelRecords = (props) => {
    const { field } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const isHasManyField = metadata.configuration.fieldType === metadata_js_1.FieldType.HasMany;
    const relationshipFieldConfig = metadata.configuration;
    const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
    const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
    const relatedModelInverseFieldApiId = "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;
    const relatedModelRecords = useAllRelatedModelRecords({
        relatedModel: { apiIdentifier: relatedModelApiIdentifier, namespace: relatedModelNamespace },
        filter: isHasManyField ? { [relatedModelInverseFieldApiId + "Id"]: { isSet: false } } : undefined,
    });
    return {
        relatedModelRecords,
    };
};
exports.useRelatedModelRecords = useRelatedModelRecords;
const useOptionLabelForField = (field, optionLabel) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const relationshipFieldConfig = metadata.configuration;
    return (0, api_client_core_1.assert)(optionLabel ?? relationshipFieldConfig.relatedModel?.defaultDisplayField.apiIdentifier, "Option label is required for relationships");
};
exports.useOptionLabelForField = useOptionLabelForField;
const useRelatedModelOptions = (props) => {
    const { field } = props;
    const optionLabel = (0, exports.useOptionLabelForField)(field, props.optionLabel);
    const { relatedModelRecords } = (0, exports.useRelatedModelRecords)(props);
    const { relatedModel, pagination, search } = relatedModelRecords;
    const getOptions = () => {
        const options = (0, utils_js_1.uniqByProperty)((0, exports.getRecordsAsOptions)(relatedModel.records, optionLabel), "id");
        return options;
    };
    const [options, setOptions] = (0, react_1.useState)(getOptions());
    const recordIds = getRecordIdsAsString(relatedModel.records);
    (0, react_1.useEffect)(() => {
        if (relatedModel.fetching) {
            return;
        }
        setOptions(getOptions());
    }, [relatedModel.fetching, recordIds]);
    return {
        options,
        searchFilterOptions: options.filter((option) => {
            return search.value ? `${option.label}`.toLowerCase().includes(search.value.toLowerCase()) : true;
        }),
        relatedModel,
        pagination,
        search,
    };
};
exports.useRelatedModelOptions = useRelatedModelOptions;
const getRecordLabel = (record, optionLabel) => typeof optionLabel === "string"
    ? record[optionLabel] // Related model field API id
    : Array.isArray(optionLabel)
        ? optionLabel.map((fieldName) => record[fieldName]).join(" ")
        : optionLabel(record); // Callback on the whole related model record
exports.getRecordLabel = getRecordLabel;
const getRecordIdsAsString = (records) => records
    ?.map((record) => record.id)
    .sort()
    .join(",");
const getRecordAsOption = (record, optionLabel) => {
    return {
        id: record.id,
        label: (0, exports.getRecordLabel)(record, optionLabel),
    };
};
exports.getRecordAsOption = getRecordAsOption;
const getRecordsAsOptions = (records, optionLabel) => {
    return records?.map((record) => (0, exports.getRecordAsOption)(record, optionLabel)) ?? [];
};
exports.getRecordsAsOptions = getRecordsAsOptions;
const useAllRelatedModelRecords = (props) => {
    const { optionLabel, relatedModel } = props;
    let optionLabelSelection = undefined;
    if (optionLabel && typeof optionLabel === "string") {
        optionLabelSelection = { id: true, [optionLabel]: true };
    }
    else if (optionLabel && Array.isArray(optionLabel)) {
        optionLabelSelection = optionLabel.reduce((acc, fieldName) => {
            acc[fieldName] = true;
            return acc;
        }, { id: true });
    }
    const relatedModelManager = (0, useModelManager_js_1.useModelManager)(relatedModel);
    const [loadedRecords, setLoadedRecords] = (0, react_1.useState)([]);
    const [paginationPage, setPaginationPage] = (0, react_1.useState)(undefined);
    const [searchValue, setSearchValue] = (0, react_1.useState)();
    const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(relatedModelManager, {
        first: exports.optionRecordsToLoadCount,
        ...(props.filter && { filter: props.filter }),
        ...(paginationPage && { after: paginationPage }),
        ...(searchValue && { search: searchValue }),
        ...(optionLabelSelection && { select: optionLabelSelection }),
    });
    const hasNextPage = !!newlyFetchedRecords?.hasNextPage;
    const clearPagination = (0, react_1.useCallback)(() => setPaginationPage(undefined), []);
    const loadNextPage = (0, react_1.useCallback)(() => {
        const canFetchNextPage = newlyFetchedRecords && newlyFetchedRecords.length >= exports.optionRecordsToLoadCount && hasNextPage && newlyFetchedRecords.endCursor;
        if (canFetchNextPage) {
            setPaginationPage(newlyFetchedRecords.endCursor);
        }
    }, [newlyFetchedRecords]);
    const setSearch = (0, react_1.useCallback)((search) => {
        clearPagination();
        const emptySearch = search === "";
        setSearchValue(emptySearch ? undefined : search);
    }, []);
    /**
     * This useEffect appends the newly fetched records to the list of records that have already been loaded
     * `numberOfRecordsToLoad` are retrieved per `useFindMany` call
     */
    (0, react_1.useEffect)(() => {
        if (fetching || !newlyFetchedRecords) {
            return;
        }
        const allOptions = [
            ...loadedRecords, // Maintain existing options
            ...newlyFetchedRecords.map((record) => record),
        ];
        const updatedUniqueOptions = (0, utils_js_1.uniqByProperty)(allOptions, "id");
        const sortedUniqueOptions = (0, utils_js_1.sortByProperty)(updatedUniqueOptions, "id");
        setLoadedRecords(sortedUniqueOptions);
    }, [paginationPage, searchValue, fetching]);
    return {
        relatedModel: {
            records: loadedRecords,
            error,
            fetching,
        },
        pagination: {
            clearPagination,
            loadNextPage,
            hasNextPage,
        },
        search: {
            value: searchValue,
            set: setSearch,
        },
    };
};
//# sourceMappingURL=useRelatedModel.js.map