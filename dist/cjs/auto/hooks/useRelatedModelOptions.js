"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAllRelatedModelRecords = exports.useLinkedParentModelRelatedModelRecords = exports.useLinkedChildModelRelatedModelRecords = exports.getRecordsAsOptions = exports.useRelatedModelOptions = exports.selectedRecordsToLoadCount = exports.optionRecordsToLoadCount = void 0;
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const useFindMany_js_1 = require("../../useFindMany.js");
const useFindOne_js_1 = require("../../useFindOne.js");
const utils_js_1 = require("../../utils.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useModelManager_js_1 = require("./useModelManager.js");
exports.optionRecordsToLoadCount = 25;
exports.selectedRecordsToLoadCount = 25;
const useRelatedModelOptions = (props) => {
    const { field, optionLabel } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { findBy, model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const currentRecordId = typeof findBy === "string" ? findBy : undefined;
    const isBelongsToField = metadata.configuration.fieldType === metadata_js_1.FieldType.BelongsTo;
    const relationshipFieldConfig = metadata.configuration;
    const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
    const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
    const relatedModelInverseFieldApiId = "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;
    const { selected } = isBelongsToField
        ? // eslint-disable-next-line
            (0, exports.useLinkedChildModelRelatedModelRecords)({
                belongsToFieldApiId: field,
                currentRecordId,
                currentModel: { apiIdentifier: model.apiIdentifier, namespace: model.namespace },
            })
        : // eslint-disable-next-line
            (0, exports.useLinkedParentModelRelatedModelRecords)({
                currentRecordId,
                relatedModel: {
                    apiIdentifier: relatedModelApiIdentifier,
                    namespace: relatedModelNamespace,
                    inverseFieldApiIdentifier: relatedModelInverseFieldApiId,
                },
            });
    const relatedModelRecords = (0, exports.useAllRelatedModelRecords)({
        relatedModel: { apiIdentifier: relatedModelApiIdentifier, namespace: relatedModelNamespace },
        optionLabel,
    });
    const { relatedModel, pagination, search } = relatedModelRecords;
    const getOptions = () => {
        const options = (0, utils_js_1.uniqByProperty)([
            ...(0, exports.getRecordsAsOptions)(selected.records ?? [], optionLabel), // Selected records
            ...(0, exports.getRecordsAsOptions)(relatedModel.records, optionLabel), // All related model records
        ], "id");
        return options;
    };
    const [options, setOptions] = (0, react_1.useState)(getOptions());
    (0, react_1.useEffect)(() => {
        if (selected.fetching || relatedModel.fetching) {
            return;
        }
        setOptions(getOptions());
    }, [selected.fetching, relatedModel.fetching, getRecordIdsAsString(selected.records), getRecordIdsAsString(relatedModel.records)]);
    return {
        options,
        searchFilterOptions: options.filter((option) => {
            // console.log(
            //   "search.value ? option.label.toLowerCase().contains(search.value.toLowerCase()) : true; :",
            //   search.value,
            //   option.label,
            //   typeof option.label,
            //   search.value ? `${option.label}`.toLowerCase().includes(search.value.toLowerCase()) : true
            // );
            return search.value ? `${option.label}`.toLowerCase().includes(search.value.toLowerCase()) : true;
        }),
        selected,
        relatedModel,
        pagination,
        search,
    };
};
exports.useRelatedModelOptions = useRelatedModelOptions;
const getRecordIdsAsString = (records) => records
    ?.map((record) => record.id)
    .sort()
    .join(",");
const getRecordsAsOptions = (records, optionLabel) => {
    const getRecordLabel = (record, optionLabel) => optionLabel
        ? typeof optionLabel === "string"
            ? record[optionLabel] // Related model field API id
            : optionLabel(record) // Callback on the whole related model record
        : record.name; // TODO - Incorporate DataModel.defaultDisplayField
    return (records?.map((record) => ({
        id: record.id,
        label: getRecordLabel(record, optionLabel),
    })) ?? []);
};
exports.getRecordsAsOptions = getRecordsAsOptions;
/**
 * For getting the selected record in a BelongsTo relationship
 * Returns the selected record in an array for interoperability with the HasOne/HasMany hook
 *
 * The lookup is done using the `findBy` to lookup on the current model to retrieve the related model record data
 */
const useLinkedChildModelRelatedModelRecords = (props) => {
    const { belongsToFieldApiId, currentRecordId, currentModel } = props;
    const modelManager = (0, useModelManager_js_1.useModelManager)(currentModel);
    const [{ data: selectedRecord, fetching: fetchingSelected, error: fetchSelectedRecordError }] = (0, useFindOne_js_1.useFindOne)(modelManager, currentRecordId ?? "", {
        pause: !currentRecordId, // BelongsTo needs a selected record to query in the related model
        select: {
            id: true,
            [`${belongsToFieldApiId}Id`]: true, // Retrieve the raw field value, regardless of if the ID exists or not
            [belongsToFieldApiId]: { _all: true }, // All of the fields on the related record iff the record exists
        },
    });
    return {
        selected: {
            records: selectedRecord ? [selectedRecord] : undefined,
            fetching: fetchingSelected,
            error: fetchSelectedRecordError,
        },
    };
};
exports.useLinkedChildModelRelatedModelRecords = useLinkedChildModelRelatedModelRecords;
/**
 * For getting the related child model records in a HasOne/HasMany relationship
 */
const useLinkedParentModelRelatedModelRecords = (props) => {
    const { currentRecordId, relatedModel } = props;
    const relatedModelManager = (0, useModelManager_js_1.useModelManager)(relatedModel);
    const { apiIdentifier, inverseFieldApiIdentifier } = relatedModel;
    if (!inverseFieldApiIdentifier) {
        throw new Error(`The inverse field api identifier is invalid for the related model "${apiIdentifier}" in the useLinkedParentModelRelatedModelRecords hook.`);
    }
    const [{ data: selectedRecords, fetching: fetchingSelected, error: fetchSelectedRecordError }] = (0, useFindMany_js_1.useFindMany)(relatedModelManager, {
        pause: !currentRecordId, // HasOne/HasMany need the current record to query the inverse field in the related model
        first: exports.selectedRecordsToLoadCount, // Many records can point to the current record in hasOne/hasMany
        filter: { [inverseFieldApiIdentifier]: { equals: currentRecordId } }, // Filter by the inverse field belongsTo field value
    });
    return {
        selected: {
            records: selectedRecords,
            fetching: fetchingSelected,
            error: fetchSelectedRecordError,
        },
    };
};
exports.useLinkedParentModelRelatedModelRecords = useLinkedParentModelRelatedModelRecords;
const useAllRelatedModelRecords = (props) => {
    const { optionLabel, relatedModel } = props;
    const optionLabelIsFieldName = typeof optionLabel === "string";
    const relatedModelManager = (0, useModelManager_js_1.useModelManager)(relatedModel);
    const [loadedRecords, setLoadedRecords] = (0, react_1.useState)([]);
    const [paginationPage, setPaginationPage] = (0, react_1.useState)(undefined);
    const [searchValue, setSearchValue] = (0, react_1.useState)();
    const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = (0, useFindMany_js_1.useFindMany)(relatedModelManager, {
        first: exports.optionRecordsToLoadCount,
        ...(paginationPage && { after: paginationPage }),
        ...(searchValue && { search: searchValue }),
        ...(optionLabelIsFieldName && { select: { id: true, [optionLabel]: true } }),
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
    const resetPagination = (0, react_1.useCallback)(() => {
        clearPagination(); // Causes a refetch
        setLoadedRecords([]); // Will be populated with the first page in the useEffect below
    }, [newlyFetchedRecords]);
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
            resetPagination,
        },
        search: {
            value: searchValue,
            set: setSearch,
        },
    };
};
exports.useAllRelatedModelRecords = useAllRelatedModelRecords;
//# sourceMappingURL=useRelatedModelOptions.js.map