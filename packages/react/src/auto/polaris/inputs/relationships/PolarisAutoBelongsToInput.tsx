import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";

export const PolarisAutoBelongsToInput = (props: AutoRelationshipInputProps) => {
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, searchFilterOptions, pagination, search },

    isLoading,
    errorMessage,

    selectedRecordId,
    selectedRelatedModelRecordMissing,

    onSelectRecord,
    onRemoveRecord,
  } = useBelongsToInputController(props);

  const selectedRecordLabel = selectedRecordId
    ? options.find((option) => option.id === selectedRecordId)?.label ?? `id: ${selectedRecordId}`
    : null;

  const selectedRecordTag = selectedRecordId ? (
    <Tag onRemove={onRemoveRecord} key={`selectedRecordTag_${selectedRecordId}`}>
      <p style={{ color: selectedRelatedModelRecordMissing ? "red" : undefined }} id={`${selectedRecordId}_${selectedRecordLabel}`}>
        {selectedRecordLabel}
      </p>
    </Tag>
  ) : null;

  const onSelect = (recordId: string) => {
    const idIsAlreadySelected = selectedRecordId === recordId;

    idIsAlreadySelected
      ? onRemoveRecord() // clear selection
      : onSelectRecord(recordId); // make single selection
  };

  return (
    <>
      <Combobox
        activator={
          <Combobox.TextField
            requiredIndicator={metadata.requiredArgumentForInput}
            onChange={search.set}
            value={search.value}
            name={path}
            label={props.label ?? metadata.name}
            placeholder="Search"
            autoComplete="off"
            verticalContent={selectedRecordTag}
          />
        }
        onScrolledToBottom={pagination.loadNextPage}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
      >
        <RelatedModelOptions
          isLoading={isLoading}
          errorMessage={errorMessage}
          checkSelected={(id) => id === selectedRecordId}
          onSelect={onSelect}
          options={searchFilterOptions}
        />
      </Combobox>
    </>
  );
};
