import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
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
});
