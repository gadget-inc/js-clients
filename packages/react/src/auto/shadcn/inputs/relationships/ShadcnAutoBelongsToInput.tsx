import { XIcon } from "lucide-react";
import React, { useCallback } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

export const makeShadcnAutoBelongsToInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
  Checkbox,
  ScrollArea,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandList"
  | "CommandLoading"
  | "CommandEmpty"
  | "CommandGroup"
  | "CommandInput"
  | "Label"
  | "Checkbox"
  | "ScrollArea"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandLoading,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    ScrollArea,
  });

  function ShadcnAutoBelongsToInput(props: AutoRelationshipInputProps) {
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
        <Badge key={`selectedRecordTag_${selectedOption.id}`} variant={"outline"}>
          {selectedOption.primary}
          <Button
            aria-label={`Remove`}
            onClick={(e) => {
              e.preventDefault();
              onRemoveRecord();
            }}
            variant="ghost"
            size="icon"
          >
            <XIcon />
          </Button>
        </Badge>
      ) : danglingSelectedRecordId ? (
        <Badge key={`selectedRecordTag_${danglingSelectedRecordId}`} variant={"outline"}>
          <p id={`${danglingSelectedRecordId}`} style={{ color: "red" }}>
            id: {danglingSelectedRecordId}
          </p>
          <Button
            aria-label={`Remove`}
            onClick={(e) => {
              e.preventDefault();
              onRemoveRecord();
            }}
            variant="ghost"
            size="icon"
          >
            <XIcon />
          </Button>
        </Badge>
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
        metadata={metadata}
        onChange={search.set}
        defaultValue={search.value}
        selectedRecordTag={selectedRecordTag}
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
