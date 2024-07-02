import { AnyModelManager } from "@gadgetinc/api-client-core";
import { useEffect, useMemo, useState } from "react";
import { ControllerRenderProps, useController, type Control } from "react-hook-form";
import { useApi } from "../../GadgetProvider.js";
import { GadgetBelongsToConfig } from "../../internal/gql/graphql.js";
import { FieldType } from "../../metadata.js";
import { useFindMany } from "../../useFindMany.js";
import { useFindOne } from "../../useFindOne.js";
import { getModelManager, uniqByProperty } from "../../utils.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export const numberOfRecordsToLoad = 25;

export const useRelationshipInputController = (props: {
  field: string; // Field API identifier
  control?: Control<any>;
  optionLabel?: string | ((record: Record<string, any>) => string);
}) => {
  const { field, control, optionLabel } = props;

  const { modelManager, metadata, path } = useRelatedModelManager({ field });
  const isHasMany = metadata.fieldType === FieldType.HasMany;

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
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

const useRelatedModelManager = (props: {
  field: string; // Field API identifier
}) => {
  const { field } = props;

  const { path, metadata } = useFieldMetadata(field);
  const config = metadata.configuration as GadgetBelongsToConfig;

  if (!config || !config.relatedModel) {
    throw new Error(`Related model for field "${field}" not found in metadata`);
  }

  const api = useApi();
  const modelManager = getModelManager(api, config.relatedModel.apiIdentifier, config.relatedModel.namespace);

  if (!modelManager) {
    const relatedModelNamespacedApiId = [...(config.relatedModel.namespace ?? []), config.relatedModel.apiIdentifier].join(".");
    throw new Error(`no model manager for "${relatedModelNamespacedApiId}" found for action function`);
  }

  return { path, metadata, modelManager };
};

const useGetSelectedRelatedModelRecords = (props: { modelManager: AnyModelManager; fieldProps: ControllerRenderProps<any, string> }) => {
  const { modelManager, fieldProps } = props;
  const [selectedRecordId, setSelectedRecordId] = useState<string | undefined>(fieldProps.value);

  const [{ data: selectedRecord, fetching: fetchingSelectedError, error: fetchSelectedRecordError }] = useFindOne(
    modelManager as any,
    selectedRecordId ?? "",
    {
      pause: !selectedRecordId, // Only fetch with a selected records
    }
  );

  return {
    selectedRecord,
    fetchingSelectedError,
    fetchSelectedRecordError,

    selectedRecordId,
    setSelectedRecordId,
  };
};

const useRelatedModelRecords = (props: {
  modelManager: AnyModelManager;
  optionLabel?: string | ((record: Record<string, any>) => string);
  fieldProps: ControllerRenderProps<any, string>;
}) => {
  const { modelManager, optionLabel, fieldProps } = props;
  const optionLabelIsFieldName = typeof optionLabel === "string";

  const [options, setOptions] = useState<any[]>([]);
  const [recordPage, setRecordPage] = useState<any>(undefined);
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const selectRecordId = (selectedId?: string) => {
    setSelectedRecordId(selectedId);
    setSearch(undefined);
    fieldProps.onChange(selectedId);
  };

  const { selectedRecord, fetchingSelectedError, fetchSelectedRecordError, selectedRecordId, setSelectedRecordId } =
    useGetSelectedRelatedModelRecords(props);

  const [{ data: records, fetching: fetchingRecords, error: fetchRecordsError }, _refetch] = useFindMany(modelManager as any, {
    first: numberOfRecordsToLoad,
    ...(recordPage && { after: recordPage }),
    ...(searchValue && { search: searchValue }),
    ...(optionLabelIsFieldName && { select: { id: true, [optionLabel]: true } }),
  });

  const hasNextPage = !!records?.hasNextPage;
  const isLoadingRelatedRecords = !!(fetchingRecords || !records || fetchingSelectedError);

  const resetPagination = () => setRecordPage(undefined);

  const loadNextPageOfRecords = () => {
    if (records && records.length >= numberOfRecordsToLoad && hasNextPage && records.endCursor) {
      setRecordPage(records.endCursor);
    }
  };

  const setSearch = (search?: string) => {
    resetPagination();
    const emptySearch = search === "";
    setSearchValue(emptySearch ? undefined : search);
  };

  const getRecordLabel = (record: Record<string, any>): string =>
    optionLabel
      ? optionLabelIsFieldName
        ? record[optionLabel] // Related model field API id
        : optionLabel(record) // Callback on the whole related model record
      : record.name; // TODO - Incorporate DataModel.defaultDisplayField

  const getRecordsAsOptions = () =>
    records?.map((record: Record<string, any>) => ({
      recordId: record.id,
      label: getRecordLabel(record),
    })) ?? [];

  const selectedRecordLabel = useMemo(
    () => (selectedRecord ? getRecordLabel(selectedRecord) : `id: ${selectedRecordId}`),
    [selectedRecord]
  );

  /**
   * This useEffect appends the newly fetched records to the list of records that have already been loaded
   * `numberOfRecordsToLoad` are retrieved per `useFindMany` call
   */
  useEffect(() => {
    const updatedUniqueOptions = uniqByProperty(
      [
        ...(selectedRecordId ? [{ recordId: selectedRecordId, label: selectedRecordLabel }] : []),
        ...(recordPage ? options : []),
        ...getRecordsAsOptions(),
      ],
      "recordId"
    );
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