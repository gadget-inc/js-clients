import { XIcon } from "lucide-react";
import React, { useCallback } from "react";
import type { Control } from "../../../useActionForm.js";
import { debounce } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";

export const makeShadcnAutoEnumInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandLoading,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  ScrollArea,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandList"
  | "CommandEmpty"
  | "CommandLoading"
  | "CommandGroup"
  | "CommandInput"
  | "Label"
  | "Checkbox"
  | "ScrollArea"
  | "Input"
  | "Popover"
  | "PopoverContent"
  | "PopoverTrigger"
  | "Dialog"
  | "DialogContent"
  | "DialogTrigger"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    CommandLoading,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    ScrollArea,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Dialog,
    DialogContent,
    DialogTrigger,
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
              <Button variant="ghost" size="icon" aria-label={`Remove ${tag}`} onClick={() => onSelectionChange(tag)}>
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

    const debouncedSearch = useCallback(
      debounce((value: string) => {
        setSearchValue(value);
      }, 400),
      [setSearchValue]
    );

    return (
      <ShadcnComboInput
        {...props}
        options={filteredOptions.map((option) => ({ id: option, label: option }))}
        path={labelProp ?? label}
        metadata={metadata}
        label={labelProp ?? label}
        onChange={debouncedSearch}
        selectedRecordTag={selectedTagsElement}
        onSelect={(option) => {
          onSelectionChange(option.id);
        }}
        isLoading={false}
        checkSelected={(id) => {
          return selectedOptions.includes(id);
        }}
        id={`${props.field}-combobox-textfield`}
        errorMessage={errorMessage}
        allowMultiple={allowMultiple}
        records={[]}
        allowOther={allowOther}
        onAddExtraOption={(value) => {
          onSelectionChange(value);
          setSearchValue("");
        }}
        formatOptionText={formatOptionText}
        emptyMessage={`No options found matching `}
      />
    );
  }

  return autoInput(ShadcnAutoEnumInput);
};
