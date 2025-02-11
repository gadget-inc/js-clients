import { assert, type FieldSelection } from "@gadgetinc/api-client-core";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { FieldType } from "../../metadata.js";
import { type RecordIdentifier } from "../../use-action-form/types.js";
import { useDebouncedSearch } from "../../useDebouncedSearch.js";
import { useFindMany } from "../../useFindMany.js";
import { sortByProperty, uniqByProperty } from "../../utils.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
import type { Option, OptionFilter, OptionLabel } from "../interfaces/AutoRelationshipInputProps.js";
import type { RelationshipFieldConfig } from "../interfaces/RelationshipFieldConfig.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { useModelManager } from "./useModelManager.js";

export const optionRecordsToLoadCount = 25;
export const selectedRecordsToLoadCount = 25;

const useRelatedModelRecords = (props: { field: string; optionLabel?: OptionLabel; optionFilter?: OptionFilter }) => {
  const { field } = props;
  const { metadata } = useFieldMetadata(field);
  const { findBy } = useAutoFormMetadata();

  const isHasManyField = metadata.configuration.fieldType === FieldType.HasMany;
  const relationshipFieldConfig = metadata.configuration as RelationshipFieldConfig;

  const relatedModelApiIdentifier = relationshipFieldConfig.relatedModel?.apiIdentifier;
  const relatedModelNamespace = relationshipFieldConfig.relatedModel?.namespace;
  const relatedModelInverseFieldApiId =
    "inverseField" in relationshipFieldConfig ? relationshipFieldConfig.inverseField?.apiIdentifier : undefined;

  const relatedModelRecords = useAllRelatedModelRecords({
    relatedModel: { apiIdentifier: relatedModelApiIdentifier!, namespace: relatedModelNamespace },

    filter:
      props?.optionFilter ??
      (isHasManyField
        ? omitRelatedModelRecordsAssociatedWithOtherRecords({ enabled: false, relatedModelInverseFieldApiId, findBy })
        : undefined),
  });

  return {
    relatedModelRecords,
  };
};

const omitRelatedModelRecordsAssociatedWithOtherRecords = (props: {
  enabled: boolean;
  relatedModelInverseFieldApiId?: string;
  findBy?: RecordIdentifier;
}) => {
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
  secondaryLabel?: OptionLabel;
  tertiaryLabel?: OptionLabel;
  optionFilter?: OptionFilter;
}) => {
  const { field } = props;

  const optionLabel = useOptionLabelForField(field, props.optionLabel);
  const { relatedModelRecords } = useRelatedModelRecords(props);

  const { relatedModel, pagination, search } = relatedModelRecords;

  const getOptions = () => {
    const options = uniqByProperty(getRecordsAsOptions(relatedModel.records, optionLabel, props.secondaryLabel, props.tertiaryLabel), "id");

    return options as ReturnType<typeof getRecordsAsOptions>;
  };

  const [options, setOptions] = useState<ReturnType<typeof getRecordsAsOptions>>(getOptions());
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

const getRecordLabel = (record: Record<string, any>, optionLabel: OptionLabel): React.ReactNode =>
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

export const getRecordAsOption = (
  record: Record<string, any>,
  optionLabel: OptionLabel,
  secondaryLabel?: OptionLabel,
  tertiaryLabel?: OptionLabel
): Option => {
  return {
    id: record.id as string,
    label: getRecordLabel(record, optionLabel),
    secondaryLabel: secondaryLabel ? getRecordLabel(record, secondaryLabel) : undefined,
    tertiaryLabel: tertiaryLabel ? getRecordLabel(record, tertiaryLabel) : undefined,
  };
};

export const getRecordsAsOptions = (
  records: Record<string, any>[],
  optionLabel: OptionLabel,
  secondaryLabel?: OptionLabel,
  tertiaryLabel?: OptionLabel
) => {
  return records?.map((record: Record<string, any>) => getRecordAsOption(record, optionLabel, secondaryLabel, tertiaryLabel)) ?? [];
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
  const {
    value: searchValue,
    debouncedValue: debouncedSearchValue,
    set: setSearchValue,
  } = useDebouncedSearch({
    debounceMilliseconds: 400,
  });

  const [{ data: newlyFetchedRecords, fetching, error }, _refetch] = useFindMany(relatedModelManager as any, {
    first: optionRecordsToLoadCount,
    ...(props.filter && { filter: props.filter }),
    ...(paginationPage && { after: paginationPage }),
    ...(debouncedSearchValue && { search: debouncedSearchValue }),
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
    setSearchValue(search ?? "");
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