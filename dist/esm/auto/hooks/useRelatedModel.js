import { assert } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useState } from "react";
import { FieldType } from "../../metadata.js";
import { processDefaultValues } from "../../use-action-form/utils.js";
import { useFindMany } from "../../useFindMany.js";
import { useFindOne } from "../../useFindOne.js";
import { sortByProperty, uniqByProperty } from "../../utils.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useModelManager } from "./useModelManager.js";
export const optionRecordsToLoadCount = 25;
export const selectedRecordsToLoadCount = 25;
export const useRelatedModelRecords = (props) => {
    const { field } = props;
    const { metadata } = useFieldMetadata(field);
    const isBelongsToField = metadata.configuration.fieldType === FieldType.BelongsTo;
    const isHasOneField = metadata.configuration.fieldType === FieldType.HasOne;
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
export const useOptionLabelForField = (field, optionLabel) => {
    const { metadata } = useFieldMetadata(field);
    const relationshipFieldConfig = metadata.configuration;
    return assert(optionLabel ?? relationshipFieldConfig.relatedModel?.defaultDisplayField.apiIdentifier, "Option label is required for relationships");
};
export const useRelatedModelOptions = (props) => {
    const { field } = props;
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const { relatedModelRecords } = useRelatedModelRecords(props);
    const { relatedModel, pagination, search } = relatedModelRecords;
    const getOptions = () => {
        const options = uniqByProperty(getRecordsAsOptions(relatedModel.records, optionLabel), "id");
        return options;
    };
    const [options, setOptions] = useState(getOptions());
    const recordIds = getRecordIdsAsString(relatedModel.records);
    useEffect(() => {
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
export const getRecordLabel = (record, optionLabel) => typeof optionLabel === "string"
    ? record[optionLabel] // Related model field API id
    : Array.isArray(optionLabel)
        ? optionLabel.map((fieldName) => record[fieldName]).join(" ")
        : optionLabel(record); // Callback on the whole related model record
const getRecordIdsAsString = (records) => records
    ?.map((record) => record.id)
    .sort()
    .join(",");
export const getRecordAsOption = (record, optionLabel) => {
    return {
        id: record.id,
        label: getRecordLabel(record, optionLabel),
    };
};
export const getRecordsAsOptions = (records, optionLabel) => {
    return records?.map((record) => getRecordAsOption(record, optionLabel)) ?? [];
};
/**
 * For getting the selected record in a BelongsTo relationship
 * Returns the selected record in an array for interoperability with the HasOne/HasMany hook
 *
 * The lookup is done using the `findBy` to lookup on the current model to retrieve the related model record data
 */
const useLinkedChildModelRelatedModelRecords = (props) => {
    const { belongsToFieldApiId, currentRecordId, currentModel } = props;
    const modelManager = useModelManager(currentModel);
    const [{ data: selectedRecord, fetching: fetchingSelected, error: fetchSelectedRecordError }] = useFindOne(modelManager, currentRecordId ?? "", {
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
    const relatedModelManager = useModelManager(relatedModel);
    const { apiIdentifier, inverseFieldApiIdentifier } = relatedModel;
    if (!inverseFieldApiIdentifier) {
        throw new Error(`The inverse field api identifier is invalid for the related model "${apiIdentifier}" in the useLinkedParentModelRelatedModelRecords hook.`);
    }
    const [{ data, fetching: fetchingSelected, error: fetchSelectedRecordError }] = useFindMany(relatedModelManager, {
        pause: !currentRecordId, // HasOne/HasMany need the current record to query the inverse field in the related model
        first: selectedRecordsToLoadCount, // Many records can point to the current record in hasOne/hasMany
        filter: { [inverseFieldApiIdentifier + "Id"]: { equals: currentRecordId } }, // Filter by the inverse field belongsTo field value
    });
    const selectedRecords = data &&
        data.map((record) => ({
            id: record.id,
            __typename: record.__typename,
            ...processDefaultValues({ hasAmbiguousDefaultValues: false, modelApiIdentifier: inverseFieldApiIdentifier, data: record }),
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
    const relatedModelManager = useModelManager(relatedModel);
    const [loadedRecords, setLoadedRecords] = useState([]);
    const [paginationPage, setPaginationPage] = useState(undefined);
    const [searchValue, setSearchValue] = useState();
    const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = useFindMany(relatedModelManager, {
        first: optionRecordsToLoadCount,
        ...(props.filter && { filter: props.filter }),
        ...(paginationPage && { after: paginationPage }),
        ...(searchValue && { search: searchValue }),
        ...(optionLabelSelection && { select: optionLabelSelection }),
    });
    const hasNextPage = !!newlyFetchedRecords?.hasNextPage;
    const clearPagination = useCallback(() => setPaginationPage(undefined), []);
    const loadNextPage = useCallback(() => {
        const canFetchNextPage = newlyFetchedRecords && newlyFetchedRecords.length >= optionRecordsToLoadCount && hasNextPage && newlyFetchedRecords.endCursor;
        if (canFetchNextPage) {
            setPaginationPage(newlyFetchedRecords.endCursor);
        }
    }, [newlyFetchedRecords]);
    const setSearch = useCallback((search) => {
        clearPagination();
        const emptySearch = search === "";
        setSearchValue(emptySearch ? undefined : search);
    }, []);
    /**
     * This useEffect appends the newly fetched records to the list of records that have already been loaded
     * `numberOfRecordsToLoad` are retrieved per `useFindMany` call
     */
    useEffect(() => {
        if (fetching || !newlyFetchedRecords) {
            return;
        }
        const allOptions = [
            ...loadedRecords, // Maintain existing options
            ...newlyFetchedRecords.map((record) => record),
        ];
        const updatedUniqueOptions = uniqByProperty(allOptions, "id");
        const sortedUniqueOptions = sortByProperty(updatedUniqueOptions, "id");
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