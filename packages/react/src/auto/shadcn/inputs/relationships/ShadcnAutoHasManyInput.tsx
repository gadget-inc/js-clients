import React, { useCallback, useMemo } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./SelectedRelatedRecordTags.js";

export const makeShadcnAutoHasManyInput = ({
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
  const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });

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

  function ShadcnAutoHasManyInput(props: AutoRelationshipInputProps) {
    const { field, placeholder } = props;

    const {
      fieldMetadata: { path, metadata },
      relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel },
      selectedRecords,
      errorMessage,
      isLoading,
      onSelectRecord,
      onRemoveRecord,
    } = useHasManyInputController(props);

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
        placeholder={placeholder}
        selectedRecordTag={
          selectedRecords.length > 0 ? (
            <SelectedRecordTags selectedRecords={selectedRecords} optionLabel={optionLabel} onRemoveRecord={onRemoveRecord} />
          ) : null
        }
        onSelect={onSelectRecord}
        onScrolledToBottom={handleScrolledToBottom}
        defaultValue={search.value}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
        checkSelected={(id) => {
          return selectedRecordIds.includes(id);
        }}
        isLoading={isLoading}
        errorMessage={errorMessage}
        allowMultiple
        records={relatedModel.records}
      />
    );
  }

  return autoInput(ShadcnAutoHasManyInput);
};
