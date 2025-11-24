import React, { useRef, useState } from "react";
import type { FieldMetadata } from "../../../metadata.js";
import { useClickOutside } from "../../../useClickOutside.js";
import type { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";
import type { RelatedModelOptionsProps } from "./relationships/RelatedModelOption.js";
import { makeRelatedModelOption } from "./relationships/RelatedModelOption.js";
interface ShadcnComboInputProps extends AutoRelationshipInputProps, RelatedModelOptionsProps {
  selectedRecordTag: React.JSX.Element | null;
  path: string;
  id?: string; // This is used to set the id of the input field
  metadata: FieldMetadata;
  hideLabel?: boolean;
  allowMultiple?: boolean;
  allowOther?: boolean;
  onAddExtraOption?: (value: string) => void;
  formatOptionText?: (option: string) => React.ReactNode;
  emptyMessage?: string;
  defaultValue?: string;
  onScrolledToBottom?: () => void;
  willLoadMoreOptions?: boolean;
  onChange?: (value: string) => void;
}

export const makeShadcnAutoComboInput = ({
  Command,
  CommandInput,
  Label,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Command" | "CommandInput" | "Label" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox"
>) => {
  const { RelatedModelOption } = makeRelatedModelOption({
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    Label,
  });

  function ShadcnAutoComboInput(props: ShadcnComboInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const outsideBoxRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(props.defaultValue || "");
    const id = props.id || `${props.path}-input`;
    const inputLabel = props.label || props.metadata.name;

    const requiredIndicator = props.metadata.requiredArgumentForInput ? <ShadcnRequired>*</ShadcnRequired> : null;

    useClickOutside(outsideBoxRef, () => {
      if (open) {
        setOpen(false);
      }
    });

    return (
      <div ref={outsideBoxRef} className="flex flex-col gap-2">
        {!props.hideLabel && (
          <Label htmlFor={id}>
            {inputLabel} {requiredIndicator}
          </Label>
        )}
        <div className={`relative rounded-md border ${open ? "ring-ring/50 ring-3 transition-shadow duration-200 ease-out" : ""}`}>
          {props.selectedRecordTag && <div className="py-2 px-2 pt-2 pb-1">{props.selectedRecordTag}</div>}
          <Command className="z-50">
            <CommandInput
              name={props.path}
              ref={inputRef}
              data-testid={id}
              value={inputValue}
              onValueChange={(value: string) => {
                setInputValue(value);
                props.onChange?.(value);
              }}
              onFocus={() => setOpen(true)}
              placeholder={props.placeholder}
              className="ml-2 bg-transparent outline-hidden placeholder:text-muted-foreground flex-1 "
            />
            {open && (
              <>
                <RelatedModelOption
                  onAddExtraOption={props.onAddExtraOption}
                  isLoading={props.isLoading}
                  errorMessage={props.errorMessage}
                  options={props.options}
                  records={props.records}
                  actions={props.actions}
                  onSelect={props.onSelect}
                  checkSelected={props.checkSelected}
                  allowMultiple={props.allowMultiple}
                  renderOption={props.renderOption}
                  allowOther={props.allowOther}
                  searchValue={inputValue}
                  setSearchValue={setInputValue}
                  formatOptionText={props.formatOptionText}
                  emptyMessage={props.emptyMessage}
                  canLoadMore={props.willLoadMoreOptions}
                  onLoadMore={props.onScrolledToBottom}
                />
              </>
            )}
          </Command>
        </div>
      </div>
    );
  }

  return ShadcnAutoComboInput;
};
