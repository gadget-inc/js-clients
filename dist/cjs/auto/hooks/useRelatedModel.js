"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsAsOptions = exports.getRecordAsOption = exports.useRelatedModelOptions = exports.useOptionLabelForField = exports.useRecordLabelObjectFromProps = exports.selectedRecordsToLoadCount = exports.optionRecordsToLoadCount = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useDebouncedSearch_js_1 = require("../../useDebouncedSearch.js");
const useFindMany_js_1 = require("../../useFindMany.js");
const utils_js_1 = require("../../utils.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const AutoRelationshipInputProps_js_1 = require("../interfaces/AutoRelationshipInputProps.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useModelManager_js_1 = require("./useModelManager.js");
exports.optionRecordsToLoadCount = 25;
exports.selectedRecordsToLoadCount = 25;
const useRelatedModelRecords = (props) => {
    const { field } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const isHasManyField = metadata.configuration.fieldType === metadata_js_1.FieldType.HasMany;
    const relationshipFieldConfig = metadata.configuration;
    const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
    const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
    const relatedModelInverseFieldApiId = "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;
    const relatedModelRecords = useAllRelatedModelRecords({
        relatedModel: { apiIdentifier: relatedModelApiIdentifier, namespace: relatedModelNamespace },
        filter: isHasManyField
            ? omitRelatedModelRecordsAssociatedWithOtherRecords({ enabled: false, relatedModelInverseFieldApiId, findBy })
            : undefined,
    });
    return {
        relatedModelRecords,
    };
};
const omitRelatedModelRecordsAssociatedWithOtherRecords = (props) => {
    const { enabled, relatedModelInverseFieldApiId, findBy } = props;
    if (!enabled || !relatedModelInverseFieldApiId) {
        // Show all related model records
        // This allows the current record to steal related records that are already linked
        return undefined;
    }
    return {
        OR: [
            // Unlinked related model records
            { [relatedModelInverseFieldApiId + "Id"]: { isSet: false } },
            // Related model records linked with the current record
            ...(findBy !== undefined ? [{ [relatedModelInverseFieldApiId + "Id"]: { equals: findBy } }] : []),
        ],
    };
};
const useRecordLabelObjectFromProps = (props) => {
    const recordLabelObject = (0, AutoRelationshipInputProps_js_1.getRecordLabelObject)(props.recordLabel);
    const primaryLabel = (0, exports.useOptionLabelForField)(props.field, recordLabelObject?.primary);
    return { ...recordLabelObject, primary: primaryLabel };
};
exports.useRecordLabelObjectFromProps = useRecordLabelObjectFromProps;
const useOptionLabelForField = (field, optionLabel) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const relationshipFieldConfig = metadata.configuration;
    return (0, api_client_core_1.assert)(optionLabel ?? relationshipFieldConfig.relatedModel?.defaultDisplayField.apiIdentifier, "Option label is required for relationships");
};
exports.useOptionLabelForField = useOptionLabelForField;
const useRelatedModelOptions = (props) => {
    const { field } = props;
    const recordLabel = (0, AutoRelationshipInputProps_js_1.getRecordLabelObject)(props.recordLabel);
    const optionLabel = (0, exports.useOptionLabelForField)(field, recordLabel?.primary);
    const { relatedModelRecords } = useRelatedModelRecords(props);
    const { relatedModel, pagination, search } = relatedModelRecords;
    const getOptions = () => {
        const options = (0, utils_js_1.uniqByProperty)((0, exports.getRecordsAsOptions)(relatedModel.records, {
            primary: optionLabel,
            secondary: recordLabel?.secondary,
            tertiary: recordLabel?.tertiary,
        }), "id");
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
            return search.value ? `${option.primary}`.toLowerCase().includes(search.value.toLowerCase()) : true;
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
        : optionLabel({ record }); // Callback on the whole related model record
const getRecordIdsAsString = (records) => records
    ?.map((record) => record.id)
    .sort()
    .join(",");
const getRecordAsOption = (record, recordLabel) => {
    const { primary, secondary, tertiary } = recordLabel;
    return {
        id: record.id,
        primary: getRecordLabel(record, primary ?? "id"),
        secondary: secondary ? getRecordLabel(record, secondary) : undefined,
        tertiary: tertiary ? getRecordLabel(record, tertiary) : undefined,
    };
};
exports.getRecordAsOption = getRecordAsOption;
const getRecordsAsOptions = (records, recordLabel) => {
    return records?.map((record) => (0, exports.getRecordAsOption)(record, recordLabel)) ?? [];
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
    const { value: searchValue, debouncedValue: debouncedSearchValue, set: setSearchValue, } = (0, useDebouncedSearch_js_1.useDebouncedSearch)({
        debounceMilliseconds: 400,
    });
    const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(relatedModelManager, {
        first: exports.optionRecordsToLoadCount,
        ...(props.filter && { filter: props.filter }),
        ...(paginationPage && { after: paginationPage }),
        ...(debouncedSearchValue && { search: debouncedSearchValue }),
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
        setSearchValue(search ?? "");
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
        const sortedUniqueOptions = (0, utils_js_1.sortByProperty)(updatedUniqueOptions, "id", { transform: (value) => parseInt(value) });
        setLoadedRecords(sortedUniqueOptions);
    }, [paginationPage, searchValue, fetching]);
    return {
        relatedModel: {
            records: loadedRecords,
            error,
            fetching: fetching || searchValue !== debouncedSearchValue,
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