import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";

/**
 * A belongsTo field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBelongsToInput field="parentModel" label="Parent" />
 * </AutoForm>
 * ```
 * @param props.field - The belongsTo field API identifier
 * @param props.label - The label of the belongTo field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The belongsTo field input component
 */
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
