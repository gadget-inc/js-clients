import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";

export const PolarisAutoHasOneInput = autoInput((props: AutoRelationshipInputProps) => {
  const { field } = props;
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel },
    selectedRecord,
    errorMessage,
    isLoading,
    onSelectRecord,
    onRemoveRecord,
  } = useHasOneInputController(props);

  const optionLabel = useOptionLabelForField(field, props.optionLabel);

  const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;

  const selectedRecordTag = selectedOption ? (
    <Tag onRemove={() => selectedRecord && onRemoveRecord(selectedRecord)} key={`selectedRecordTag_${selectedOption.id}`}>
      <p id={`${selectedOption.id}_${selectedOption.label}`}>{selectedOption.label ?? `id: ${selectedOption.id}`}</p>
    </Tag>
  ) : null;

  return (
    <>
      <Combobox
        activator={
          <Combobox.TextField
            onChange={search.set}
            value={search.value}
            label={props.label ?? metadata.name}
            name={path}
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
          checkSelected={(id) => selectedRecord?.id === id}
          onSelect={onSelectRecord}
          records={relatedModel.records}
          options={searchFilterOptions}
        />
      </Combobox>
    </>
  );
});
