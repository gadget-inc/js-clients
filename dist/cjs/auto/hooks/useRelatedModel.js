"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsAsOptions = exports.getRecordAsOption = exports.getRecordLabel = exports.useRelatedModelOptions = exports.useOptionLabelForField = exports.useRelatedModelRecords = exports.selectedRecordsToLoadCount = exports.optionRecordsToLoadCount = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const metadata_js_1 = require("../../metadata.js");
const utils_js_1 = require("../../use-action-form/utils.js");
const useFindMany_js_1 = require("../../useFindMany.js");
const useFindOne_js_1 = require("../../useFindOne.js");
const utils_js_2 = require("../../utils.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useModelManager_js_1 = require("./useModelManager.js");
exports.optionRecordsToLoadCount = 25;
exports.selectedRecordsToLoadCount = 25;
const useRelatedModelRecords = (props) => {
    const { field } = props;
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const isBelongsToField = metadata.configuration.fieldType === metadata_js_1.FieldType.BelongsTo;
    const isHasOneField = metadata.configuration.fieldType === metadata_js_1.FieldType.HasOne;
    const relationshipFieldConfig = metadata.configuration;
    const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
    const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
    const relatedModelInverseFieldApiId = "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;
    const relatedModelRecords = useAllRelatedModelRecords({
        relatedModel: { apiIdentifier: relatedModelApiIdentifier, namespace: relatedModelNamespace },
        filter: isBelongsToField || isHasOneField ? undefined : { [relatedModelInverseFieldApiId + "Id"]: { isSet: false } },
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
        const options = (0, utils_js_2.uniqByProperty)((0, exports.getRecordsAsOptions)(relatedModel.records, optionLabel), "id");
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
    const [{ data, fetching: fetchingSelected, error: fetchSelectedRecordError }] = (0, useFindMany_js_1.useFindMany)(relatedModelManager, {
        pause: !currentRecordId, // HasOne/HasMany need the current record to query the inverse field in the related model
        first: exports.selectedRecordsToLoadCount, // Many records can point to the current record in hasOne/hasMany
        filter: { [inverseFieldApiIdentifier + "Id"]: { equals: currentRecordId } }, // Filter by the inverse field belongsTo field value
    });
    const selectedRecords = data &&
        data.map((record) => ({
            id: record.id,
            __typename: record.__typename,
            ...(0, utils_js_1.processDefaultValues)({ hasAmbiguousDefaultValues: false, modelApiIdentifier: inverseFieldApiIdentifier, data: record }),
        }));
    return {
        selected: {
            records: selectedRecords,
            fetching: fetchingSelected,
            error: fetchSelectedRecordError,
        },
    };
};
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
        const updatedUniqueOptions = (0, utils_js_2.uniqByProperty)(allOptions, "id");
        const sortedUniqueOptions = (0, utils_js_2.sortByProperty)(updatedUniqueOptions, "id");
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