import React, { useCallback } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeShadcnSelectedItemBadgeComponent } from "../ShadcnAutoEnumInput.js";

export const makeShadcnAutoBelongsToInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,

    CommandEmpty,
    CommandGroup,
    Checkbox,
  });

  const SelectedItemBadge = makeShadcnSelectedItemBadgeComponent({ Badge, Button });

  function ShadcnAutoBelongsToInput(props: AutoRelationshipInputProps) {
    const { field, placeholder } = props;

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

    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;

    const selectedRecordTag =
      selectedOption && selectedOption.id ? (
        <SelectedItemBadge
          key={`selectedRecordTag_${selectedOption.id}`}
          id={`selectedRecordTag_${selectedOption.id}`}
          content={selectedOption.primary}
          onRemoveRecord={() => onRemoveRecord()}
        />
      ) : danglingSelectedRecordId ? (
        <SelectedItemBadge
          key={`selectedRecordTag_${danglingSelectedRecordId}`}
          id={`selectedRecordTag_${danglingSelectedRecordId}`}
          content={
            <p id={`${danglingSelectedRecordId}`} style={{ color: "red" }}>
              id: {danglingSelectedRecordId}
            </p>
          }
          onRemoveRecord={() => onRemoveRecord()}
        />
      ) : null;

    const onSelect = (record: Record<string, any>) => {
      const recordId = record.id;
      const idIsAlreadySelected = selectedRecord?.id === recordId;

      idIsAlreadySelected
        ? onRemoveRecord() // clear selection
        : onSelectRecord(record); // make single selection
    };

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (pagination.hasNextPage && options.length >= optionRecordsToLoadCount) {
          pagination.loadNextPage();
        }
      }, 300),
      [pagination, options.length]
    );

    return (
      <ShadcnComboInput
        {...props}
        options={searchFilterOptions}
        path={path}
        placeholder={placeholder}
        metadata={metadata}
        onChange={search.set}
        defaultValue={search.value}
        selectedRecordTag={selectedRecordTag}
        checkSelected={(id) => selectedRecord?.id === id}
        onScrolledToBottom={handleScrolledToBottom}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
        onSelect={onSelect}
        isLoading={isLoading}
        errorMessage={errorMessage}
        records={relatedModel.records}
      />
    );
  }

  return autoInput(ShadcnAutoBelongsToInput);
};
