import React, { useCallback, useMemo } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyThroughInputController } from "../../../hooks/useHasManyThroughController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./SelectedRelatedRecordTags.js";

export const makeShadcnAutoHasManyThroughInput = ({
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
  const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });

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

  function ShadcnAutoHasManyThroughInput(props: AutoRelationshipInputProps) {
    const { field } = props;
    const {
      fieldMetadata: { path, metadata },
      relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel },
      selectedRecords,
      errorMessage,
      isLoading,
      onRemoveRecord,
      onSelectRecord,
    } = useHasManyThroughInputController(props);

    const optionLabel = useOptionLabelForField(field, props.optionLabel);

    const selectedRecordIds = useMemo(() => {
      return selectedRecords.map((record) => record.id).filter((id) => !!id) as string[];
    }, [selectedRecords]);

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
        selectedRecordTag={
          <SelectedRecordTags selectedRecords={selectedRecords} optionLabel={optionLabel} onRemoveRecord={onRemoveRecord} />
        }
        onSelect={onSelectRecord}
        checkSelected={(id) => {
          return selectedRecordIds.includes(id);
        }}
        allowMultiple
        onScrolledToBottom={handleScrolledToBottom}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
        isLoading={isLoading}
        errorMessage={errorMessage}
        records={relatedModel.records}
      />
    );
  }

  return autoInput(ShadcnAutoHasManyThroughInput);
};
