import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";

export const PolarisAutoBelongsToInput = autoInput((props: AutoRelationshipInputProps) => {
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel },
    isLoading,
    errorMessage,
    selectedRecord,
    danglingSelectedRecordId,
    onSelectRecord,
    onRemoveRecord,
  } = useBelongsToInputController(props);

  const optionLabel = useOptionLabelForField(props.field, props.optionLabel);
  const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;

  const selectedRecordTag =
    selectedOption && selectedOption.id ? (
      <Tag onRemove={onRemoveRecord} key={`selectedRecordTag_${selectedOption.id}`}>
        <p id={`${selectedOption.id}_${selectedOption.primary}`}>{selectedOption.primary}</p>
      </Tag>
    ) : danglingSelectedRecordId ? (
      <Tag onRemove={onRemoveRecord} key={`selectedRecordTag_${danglingSelectedRecordId}`}>
        <p id={`${danglingSelectedRecordId}`} style={{ color: "red" }}>
          id: {danglingSelectedRecordId}
        </p>
      </Tag>
    ) : null;

  const onSelect = (record: Record<string, any>) => {
    const recordId = record.id;
    const idIsAlreadySelected = selectedRecord?.id === recordId;

    idIsAlreadySelected
      ? onRemoveRecord() // clear selection
      : onSelectRecord(record); // make single selection
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
          checkSelected={(id) => id === selectedRecord?.id}
          onSelect={onSelect}
          options={searchFilterOptions}
          records={relatedModel.records}
        />
      </Combobox>
    </>
  );
});
