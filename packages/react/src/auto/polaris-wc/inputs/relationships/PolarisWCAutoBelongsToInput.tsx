import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { PolarisWCDismissibleBadge } from "../../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCCombobox } from "../PolarisWCCombobox.js";
import { PolarisWCRelatedModelOptions } from "./PolarisWCRelatedModelOptions.js";

/**
 * A belongsTo field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
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
export const PolarisWCAutoBelongsToInput = autoInput((props: AutoRelationshipInputProps) => {
  const { field, label, placeholder } = props;
  const {
    fieldMetadata: { metadata, path },
    relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel },
    isLoading,
    errorMessage,
    selectedRecord,
    danglingSelectedRecordId,
    onSelectRecord,
    onRemoveRecord,
  } = useBelongsToInputController(props);

  const optionLabel = useOptionLabelForField(field, props.optionLabel);
  const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;

  const selectedRecordTag = useMemo(() => {
    const tagConfig =
      selectedOption && selectedOption.id
        ? { content: selectedOption.primary, key: `selectedRecordTag_${selectedOption.id}` }
        : danglingSelectedRecordId
          ? {
              content: <span style={{ color: "red" }}>id: {danglingSelectedRecordId}</span>,
              key: `selectedRecordTag_${danglingSelectedRecordId}`,
            }
          : undefined;

    return tagConfig ? (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}>
        <PolarisWCDismissibleBadge onDismiss={onRemoveRecord} key={tagConfig.key}>
          {tagConfig.content}
        </PolarisWCDismissibleBadge>
      </div>
    ) : undefined;
  }, [selectedOption, danglingSelectedRecordId, onRemoveRecord]);

  const onSelect = (record: Record<string, any>) => {
    const recordId = record.id;
    const idIsAlreadySelected = selectedRecord?.id === recordId;

    if (idIsAlreadySelected) {
      onRemoveRecord(); // clear selection
    } else {
      onSelectRecord(record); // make single selection
    }
  };

  // Ensure label is always a string for the web component
  const inputLabel: string = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";

  return (
    <PolarisWCCombobox
      id={path}
      label={inputLabel}
      placeholder={placeholder ?? "Search"}
      value={search.value}
      onChange={search.set}
      required={metadata.requiredArgumentForInput}
      onScrolledToBottom={pagination.loadNextPage}
      willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
      error={errorMessage}
      verticalContent={selectedRecordTag}
    >
      <PolarisWCRelatedModelOptions
        isLoading={isLoading}
        errorMessage={errorMessage}
        checkSelected={(id) => id === selectedRecord?.id}
        onSelect={onSelect}
        options={searchFilterOptions}
        records={relatedModel.records}
        canLoadMore={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
        onLoadMore={pagination.loadNextPage}
      />
    </PolarisWCCombobox>
  );
});
