import { assert, type FieldSelection } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useState } from "react";
import { FieldType } from "../../metadata.js";
import { useFindMany } from "../../useFindMany.js";
import { sortByProperty, uniqByProperty } from "../../utils.js";
import type { OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
import type { RelationshipFieldConfig } from "../interfaces/RelationshipFieldConfig.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useModelManager } from "./useModelManager.js";

export const optionRecordsToLoadCount = 25;
export const selectedRecordsToLoadCount = 25;

export const useRelatedModelRecords = (props: { field: string; optionLabel?: OptionLabel }) => {
  const { field } = props;
  const { metadata } = useFieldMetadata(field);

  const isBelongsToField = metadata.configuration.fieldType === FieldType.BelongsTo;
  const isHasOneField = metadata.configuration.fieldType === FieldType.HasOne;
  const relationshipFieldConfig = metadata.configuration as RelationshipFieldConfig;

  const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
  const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
  const relatedModelInverseFieldApiId =
    "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;

  const relatedModelRecords = useAllRelatedModelRecords({
    relatedModel: { apiIdentifier: relatedModelApiIdentifier!, namespace: relatedModelNamespace },
    filter: isBelongsToField || isHasOneField ? undefined : { [relatedModelInverseFieldApiId + "Id"]: { isSet: false } },
  });

  return {
    relatedModelRecords,
  };
};

export const useOptionLabelForField = (field: string, optionLabel?: OptionLabel): OptionLabel => {
  const { metadata } = useFieldMetadata(field);
  const relationshipFieldConfig = metadata.configuration as RelationshipFieldConfig;

  return assert(
    optionLabel ?? relationshipFieldConfig.relatedModel?.defaultDisplayField.apiIdentifier,
    "Option label is required for relationships"
  );
};

export const useRelatedModelOptions = (props: {
  field: string; // Field API identifier
  optionLabel?: OptionLabel; // The label to display for each related model record
}) => {
  const { field } = props;

  const optionLabel = useOptionLabelForField(field, props.optionLabel);
  const { relatedModelRecords } = useRelatedModelRecords(props);

  const { relatedModel, pagination, search } = relatedModelRecords;

  const getOptions = () => {
    const options = uniqByProperty(getRecordsAsOptions(relatedModel.records, optionLabel), "id");

    return options;
  };

  const [options, setOptions] = useState<any[]>(getOptions());
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

export const getRecordLabel = (record: Record<string, any>, optionLabel: OptionLabel): string =>
  typeof optionLabel === "string"
    ? record[optionLabel] // Related model field API id
    : Array.isArray(optionLabel)
    ? optionLabel.map((fieldName) => record[fieldName]).join(" ")
    : optionLabel(record); // Callback on the whole related model record

const getRecordIdsAsString = (records?: { map: (mapperFunction: (record: { id: string }) => string) => string[] }) =>
  records
    ?.map((record) => record.id)
    .sort()
    .join(",");

export const getRecordAsOption = (record: Record<string, any>, optionLabel: OptionLabel) => {
  return {
    id: record.id,
    label: getRecordLabel(record, optionLabel),
  };
};

export const getRecordsAsOptions = (records: Record<string, any>[], optionLabel: OptionLabel) => {
  return records?.map((record: Record<string, any>) => getRecordAsOption(record, optionLabel)) ?? [];
};

const useAllRelatedModelRecords = (props: {
  optionLabel?: OptionLabel;
  filter?: Record<string, any>;
  relatedModel: { apiIdentifier: string; namespace?: string[] | string | null };
}) => {
  const { optionLabel, relatedModel } = props;

  let optionLabelSelection: FieldSelection | undefined = undefined;

  if (optionLabel && typeof optionLabel === "string") {
    optionLabelSelection = { id: true, [optionLabel]: true };
  } else if (optionLabel && Array.isArray(optionLabel)) {
    optionLabelSelection = optionLabel.reduce(
      (acc, fieldName) => {
        acc[fieldName] = true;
        return acc;
      },
      { id: true } as FieldSelection
    );
  }

  const relatedModelManager = useModelManager(relatedModel);

  const [loadedRecords, setLoadedRecords] = useState<any[]>([]);
  const [paginationPage, setPaginationPage] = useState<any>(undefined);
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = useFindMany(relatedModelManager as any, {
    first: optionRecordsToLoadCount,
    ...(props.filter && { filter: props.filter }),
    ...(paginationPage && { after: paginationPage }),
    ...(searchValue && { search: searchValue }),
    ...(optionLabelSelection && { select: optionLabelSelection }),
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