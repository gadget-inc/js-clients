import { assert } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useState } from "react";
import { FieldType } from "../../metadata.js";
import { useFindMany } from "../../useFindMany.js";
import { useFindOne } from "../../useFindOne.js";
import { sortByProperty, uniqByProperty } from "../../utils.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import type { OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
import type { RelationshipFieldConfig } from "../interfaces/RelationshipFieldConfig.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useModelManager } from "./useModelManager.js";

export const optionRecordsToLoadCount = 25;
export const selectedRecordsToLoadCount = 25;

export const useRelatedModelOptions = (props: {
  field: string; // Field API identifier
  optionLabel?: OptionLabel; // The label to display for each related model record
}) => {
  const { field } = props;
  const { metadata } = useFieldMetadata(field);
  const { findBy, model } = useAutoFormMetadata();

  const currentRecordId = typeof findBy === "string" ? findBy : undefined;
  const isBelongsToField = metadata.configuration.fieldType === FieldType.BelongsTo;
  const relationshipFieldConfig = metadata.configuration as RelationshipFieldConfig;

  const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
  const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
  const relatedModelInverseFieldApiId =
    "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;

  const optionLabel = assert(
    props.optionLabel ?? relationshipFieldConfig.relatedModel?.defaultDisplayField.apiIdentifier,
    "Option label is required for relationships"
  );

  const { selected } = isBelongsToField
    ? // eslint-disable-next-line
      useLinkedChildModelRelatedModelRecords({
        belongsToFieldApiId: field,
        currentRecordId,
        currentModel: { apiIdentifier: model!.apiIdentifier!, namespace: model!.namespace },
      })
    : // eslint-disable-next-line
      useLinkedParentModelRelatedModelRecords({
        currentRecordId,
        relatedModel: {
          apiIdentifier: relatedModelApiIdentifier!,
          namespace: relatedModelNamespace,
          inverseFieldApiIdentifier: relatedModelInverseFieldApiId!,
        },
      });

  const relatedModelRecords = useAllRelatedModelRecords({
    relatedModel: { apiIdentifier: relatedModelApiIdentifier!, namespace: relatedModelNamespace },
    optionLabel,
  });
  const { relatedModel, pagination, search } = relatedModelRecords;

  const getOptions = () => {
    const options = uniqByProperty(
      [
        ...getRecordsAsOptions(selected.records ?? [], optionLabel), // Selected records
        ...getRecordsAsOptions(relatedModel.records, optionLabel), // All related model records
      ],
      "id"
    );

    return options;
  };

  const [options, setOptions] = useState<any[]>(getOptions());

  useEffect(() => {
    if (selected.fetching || relatedModel.fetching) {
      return;
    }

    setOptions(getOptions());
  }, [selected.fetching, relatedModel.fetching, getRecordIdsAsString(selected.records), getRecordIdsAsString(relatedModel.records)]);

  return {
    options,
    searchFilterOptions: options.filter((option) => {
      return search.value ? `${option.label}`.toLowerCase().includes(search.value.toLowerCase()) : true;
    }),

    selected,

    relatedModel,
    pagination,
    search,
  };
};

const getRecordIdsAsString = (records?: { map: (mapperFunction: (record: { id: string }) => string) => string[] }) =>
  records
    ?.map((record) => record.id)
    .sort()
    .join(",");

export const getRecordsAsOptions = (records: Record<string, any>[], optionLabel: OptionLabel) => {
  const getRecordLabel = (record: Record<string, any>, optionLabel: OptionLabel): string =>
    typeof optionLabel === "string"
      ? record[optionLabel] // Related model field API id
      : optionLabel(record); // Callback on the whole related model record

  return (
    records?.map((record: Record<string, any>) => ({
      id: record.id,
      label: getRecordLabel(record, optionLabel),
    })) ?? []
  );
};

/**
 * For getting the selected record in a BelongsTo relationship
 * Returns the selected record in an array for interoperability with the HasOne/HasMany hook
 *
 * The lookup is done using the `findBy` to lookup on the current model to retrieve the related model record data
 */
export const useLinkedChildModelRelatedModelRecords = (props: {
  belongsToFieldApiId: string;
  currentRecordId?: string;
  currentModel: { apiIdentifier: string; namespace?: string[] | string | null };
}) => {
  const { belongsToFieldApiId, currentRecordId, currentModel } = props;

  const modelManager = useModelManager(currentModel);

  const [{ data: selectedRecord, fetching: fetchingSelected, error: fetchSelectedRecordError }] = useFindOne(
    modelManager as any,
    currentRecordId ?? "",
    {
      pause: !currentRecordId, // BelongsTo needs a selected record to query in the related model
      select: {
        id: true,
        [`${belongsToFieldApiId}Id`]: true, // Retrieve the raw field value, regardless of if the ID exists or not
        [belongsToFieldApiId]: { _all: true }, // All of the fields on the related record iff the record exists
      },
    }
  );

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
export const useLinkedParentModelRelatedModelRecords = (props: {
  relatedModel: {
    apiIdentifier: string;
    namespace?: string[] | string | null;
    inverseFieldApiIdentifier: string;
  };
  currentRecordId?: string;
}) => {
  const { currentRecordId, relatedModel } = props;

  const relatedModelManager = useModelManager(relatedModel);

  const { apiIdentifier, inverseFieldApiIdentifier } = relatedModel;
  if (!inverseFieldApiIdentifier) {
    throw new Error(
      `The inverse field api identifier is invalid for the related model "${apiIdentifier}" in the useLinkedParentModelRelatedModelRecords hook.`
    );
  }

  const [{ data: selectedRecords, fetching: fetchingSelected, error: fetchSelectedRecordError }] = useFindMany(relatedModelManager as any, {
    pause: !currentRecordId, // HasOne/HasMany need the current record to query the inverse field in the related model

    first: selectedRecordsToLoadCount, // Many records can point to the current record in hasOne/hasMany
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

export const useAllRelatedModelRecords = (props: {
  optionLabel?: OptionLabel;
  relatedModel: { apiIdentifier: string; namespace?: string[] | string | null };
}) => {
  const { optionLabel, relatedModel } = props;
  const optionLabelIsFieldName = typeof optionLabel === "string";

  const relatedModelManager = useModelManager(relatedModel);

  const [loadedRecords, setLoadedRecords] = useState<any[]>([]);
  const [paginationPage, setPaginationPage] = useState<any>(undefined);
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = useFindMany(relatedModelManager as any, {
    first: optionRecordsToLoadCount,
    ...(paginationPage && { after: paginationPage }),
    ...(searchValue && { search: searchValue }),
    ...(optionLabelIsFieldName && { select: { id: true, [optionLabel]: true } }),
  });

  const hasNextPage = !!newlyFetchedRecords?.hasNextPage;

  const clearPagination = useCallback(() => setPaginationPage(undefined), []);

  const loadNextPage = useCallback(() => {
    const canFetchNextPage =
      newlyFetchedRecords && newlyFetchedRecords.length >= optionRecordsToLoadCount && hasNextPage && newlyFetchedRecords.endCursor;

    if (canFetchNextPage) {
      setPaginationPage(newlyFetchedRecords.endCursor);
    }
  }, [newlyFetchedRecords]);

  const setSearch = useCallback((search?: string) => {
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
