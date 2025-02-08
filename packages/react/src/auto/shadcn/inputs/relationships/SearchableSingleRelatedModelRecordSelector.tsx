import { CommandSeparator } from "cmdk";
import { PlusIcon } from "lucide-react";
import { default as React, useCallback } from "react";
import { type useSingleRelatedRecordRelationshipForm } from "src/useSingleRelatedRecordRelationshipForm.js";
import { debounce } from "../../../../utils.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModel.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

export const makeSearchableSingleRelatedModelRecordSelector = ({
  Command,
  CommandItem,
  CommandInput,
  CommandLoading,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  ScrollArea,
}: Pick<
  ShadcnElements,
  | "Command"
  | "CommandItem"
  | "CommandInput"
  | "CommandLoading"
  | "Label"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
  | "Checkbox"
  | "ScrollArea"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandLoading,
    CommandGroup,
    Checkbox,
    ScrollArea,
  });

  function SearchableSingleRelatedModelRecordSelector(props: {
    form: ReturnType<typeof useSingleRelatedRecordRelationshipForm>;
    field: string;
    override?: {
      addNewRecord?: () => void;
    };
  }) {
    const { field } = props;
    const { search, metadata, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing } =
      props.form;

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount) {
          pagination.loadNextPage();
        }
      }, 300),
      [pagination, searchFilterOptions.length]
    );

    return (
      <ShadcnComboInput
        selectedRecordTag={null}
        path={path}
        hideLabel
        metadata={metadata}
        field={field}
        options={searchFilterOptions}
        onSelect={(record) => {
          setValue(path, { ...record, _link: record.id });
        }}
        isLoading={isLoading}
        errorMessage={""}
        actions={[
          <CommandGroup key={"add-record"}>
            <CommandItem
              onSelect={() => {
                props.override?.addNewRecord?.() ?? setIsEditing(true);
              }}
            >
              <div className="flex flex-row items-center gap-2">
                <PlusIcon className="w-4 h-4" />
                Add {relatedModelName}
              </div>
            </CommandItem>
            <CommandSeparator />
          </CommandGroup>,
        ]}
        records={records}
        checkSelected={() => false}
        allowMultiple={false}
        willLoadMoreOptions={pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount}
        onScrolledToBottom={handleScrolledToBottom}
        onChange={search.set}
        defaultValue={search.value}
      />
    );
  }

  return SearchableSingleRelatedModelRecordSelector;
};
