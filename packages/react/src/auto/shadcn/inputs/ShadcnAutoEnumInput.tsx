import { XIcon } from "lucide-react";
import React, { useCallback } from "react";
import { debounce } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { type AutoEnumInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";

export const makeShadcnSelectedItemBadgeComponent = ({ Badge, Button }: Pick<ShadcnElements, "Badge" | "Button">) => {
  return function ({
    content,
    onRemoveRecord,
    id,
    ariaLabel,
  }: {
    content: React.ReactNode;
    onRemoveRecord: () => void;
    id?: string;
    ariaLabel?: string;
  }) {
    return (
      <Badge variant={"outline"} id={id} className="pr-0.5">
        {content}
        <Button
          aria-label={ariaLabel || `Remove`}
          onClick={(e) => onRemoveRecord()}
          variant="ghost"
          size="icon"
          className="p-0 h-4.5 w-4.5 rounded-sm"
        >
          <XIcon className="size-3" />
        </Button>
      </Badge>
    );
  };
};

export const makeShadcnAutoEnumInput = ({
  Badge,
  Button,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Label,
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Checkbox" | "Command" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "CommandItem" | "CommandList" | "Label"
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

  function ShadcnAutoEnumInput(props: AutoEnumInputProps) {
    const { label: labelProp, placeholder } = props;
    const {
      allowMultiple,
      allowOther,
      onSelectionChange,
      selectedOptions,
      filteredOptions,
      searchQuery,
      label,
      path,
      metadata,
      errorMessage,
    } = useEnumInputController(props);

    const { value: searchValue, setValue: setSearchValue } = searchQuery;

    let selectedTagsElement = null;
    if (selectedOptions.length > 0) {
      selectedTagsElement = (
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((tag) => (
            <SelectedItemBadge
              key={`option-${tag}`}
              content={tag}
              onRemoveRecord={() => onSelectionChange(tag)}
              ariaLabel={`Remove ${tag}`}
            />
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
        options={filteredOptions.map((option) => ({ id: option, primary: option }))}
        path={path}
        metadata={metadata}
        label={labelProp ?? label}
        placeholder={placeholder}
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
        emptyMessage={`No results`}
      />
    );
  }

  return autoInput(ShadcnAutoEnumInput);
};
