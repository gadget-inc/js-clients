import React, { useCallback } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeShadcnSelectedItemBadgeComponent } from "../ShadcnAutoEnumInput.js";

export const makeShadcnAutoHasOneInput = ({
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

  function ShadcnAutoHasOneInput(props: AutoRelationshipInputProps) {
    const { field, placeholder } = props;
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

    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;

    const selectedRecordTag = selectedOption ? (
      <SelectedItemBadge
        key={`selectedRecordTag_${selectedOption.id}`}
        id={`selectedRecordTag_${selectedOption.id}`}
        content={<p id={`${selectedOption.id}_${selectedOption.primary}`}>{selectedOption.primary ?? `id: ${selectedOption.id}`}</p>}
        onRemoveRecord={() => selectedRecord && onRemoveRecord(selectedRecord)}
      />
    ) : null;

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
        onScrolledToBottom={handleScrolledToBottom}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
        selectedRecordTag={selectedRecordTag}
        onSelect={onSelectRecord}
        checkSelected={(id) => selectedRecord?.id === id}
        isLoading={isLoading}
        errorMessage={errorMessage}
        records={relatedModel.records}
      />
    );
  }

  return autoInput(ShadcnAutoHasOneInput);
};
