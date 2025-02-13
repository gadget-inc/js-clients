import { LoaderIcon } from "lucide-react";
import React, { useMemo } from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";

export type RelatedModelOptionsProps = {
  options: Option[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  actions?: React.ReactNode[];
  renderOption?: (option: Option) => React.ReactNode;
  allowMultiple?: boolean;
  allowOther?: boolean;
  searchValue?: string;
  onAddExtraOption?: (value: string) => void;
  formatOptionText?: (option: string) => React.ReactNode;
  setSearchValue?: (value: string) => void;
  emptyMessage?: string;
  loadMoreRef?: React.RefObject<HTMLDivElement>;
};

export const makeRelatedModelOption = (
  elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">
) => {
  const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;

  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);

    const listBoxOptions = useMemo(
      () => [
        ...(actions ?? []),
        ...options.map((option) => {
          return props.renderOption ? (
            props.renderOption(option)
          ) : (
            <ShadcnSelectableOption
              {...option}
              selected={checkSelected?.(option.id) ?? false}
              allowMultiple={props.allowMultiple}
              onSelect={(id) => {
                const record = records?.find((record) => record.id === id) ?? { id };
                const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                onSelect(recordWithoutTimestamps);
              }}
              key={option.id}
            />
          );
        }),
      ],
      [actions, options, props.renderOption, records, checkSelected, onSelect]
    );

    return (
      <CommandList>
        {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
        {listBoxOptions.length > 0 ? <CommandGroup>{listBoxOptions}</CommandGroup> : null}
        {props.allowOther && props.searchValue && (
          <AddExtraOption
            message={`Add "${props.searchValue}"`}
            onSelect={() => {
              props.onAddExtraOption?.(props.searchValue ?? "");
              props.setSearchValue?.("");
            }}
          />
        )}
        {errorMessage ? (
          <NoRecordsMessage message={getErrorMessage(errorMessage)} />
        ) : (
          !isLoading && <NoRecordsMessage message={props.emptyMessage ?? undefined} />
        )}
        {props.loadMoreRef && (
          <CommandItem
            ref={props.loadMoreRef}
            key="intersection-trigger"
            className="p-1 w-full flex items-center justify-center intersection-trigger"
          >
            <LoaderIcon className="w-4 h-4 animate-spin" />
          </CommandItem>
        )}
      </CommandList>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return { RelatedModelOption };
};
