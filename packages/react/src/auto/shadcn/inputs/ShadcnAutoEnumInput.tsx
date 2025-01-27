import { XIcon } from "lucide-react";
import React, { ReactNode, useCallback } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";

export const makeShadcnAutoEnumInput = ({
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

  function ShadcnAutoEnumInput(props: { field: string; control?: Control<any>; label?: string }) {
    const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
    const {
      allowMultiple,
      allowOther,
      onSelectionChange,
      selectedOptions,
      allOptions,
      filteredOptions,
      searchQuery,
      label,
      metadata,
      isError,
      errorMessage,
    } = useEnumInputController({ field: fieldApiIdentifier, control });

    const { value: searchValue, setValue: setSearchValue } = searchQuery;

    let selectedTagsElement = null;
    if (selectedOptions.length > 0) {
      selectedTagsElement = (
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((tag) => (
            <Badge key={`option-${tag}`} variant={"outline"}>
              {tag}
              <Button variant="ghost" size="icon" onClick={() => onSelectionChange(tag)}>
                <XIcon />
              </Button>
            </Badge>
          ))}
        </div>
      );
    }

    const formatOptionText = useCallback(
      (option: string) => {
        const trimValue = searchValue.trim().toLocaleLowerCase();
        const matchIndex = option.toLocaleLowerCase().indexOf(trimValue);

        if (!searchValue || matchIndex === -1) return option;

        const start = option.slice(0, matchIndex);
        const highlight = option.slice(matchIndex, matchIndex + trimValue.length);
        const end = option.slice(matchIndex + trimValue.length, option.length);

        return (
          <p>
            {start}
            <span className="font-bold">{highlight}</span>
            {end}
          </p>
        );
      },
      [searchValue]
    );

    const renderOption = useCallback(
      (option: { id: string; label: ReactNode }) => (
        <CommandItem
          key={option.id}
          value={option.id}
          onSelect={() => {
            onSelectionChange(option.id);
          }}
          accessibilityLabel={option.label}
          selected={selectedOptions.includes(String(option.label))}
        >
          {formatOptionText(String(option.label))}
        </CommandItem>
      ),
      [selectedOptions, formatOptionText]
    );

    let addExtraOptionElement = null;

    if (allowOther && searchValue && !allOptions.includes(searchValue) && searchValue.trim().length > 0) {
      addExtraOptionElement = (
        <CommandItem
          onSelect={() => {
            onSelectionChange(searchValue);
            if (allowMultiple) {
              setSearchValue("");
            }
          }}
          value={searchValue}
        >{`Add "${searchValue}"`}</CommandItem>
      );
    }

    let emptyStateElement = null;
    if (!allowOther && (!allOptions.length || allOptions.length === 0) && searchValue) {
      emptyStateElement = <CommandEmpty>{`No options found matching "${searchValue}"`}</CommandEmpty>;
    }

    console.log(filteredOptions, allOptions, "Difference", allowOther);

    return (
      <ShadcnComboInput
        {...props}
        options={filteredOptions.map((option) => ({ id: option, label: option }))}
        path={""}
        metadata={metadata}
        label={label ?? labelProp}
        selectedRecordTag={selectedTagsElement}
        onSelect={() => ""}
        isLoading={false}
        checkSelected={(id) => {
          return selectedOptions.includes(id);
        }}
        errorMessage={errorMessage}
        allowMultiple={allowMultiple}
        records={[]}
        renderOption={renderOption}
        actions={addExtraOptionElement ? [addExtraOptionElement] : []}
        allowOther={allowOther}
      />
    );
  }

  return autoInput(ShadcnAutoEnumInput);
};
