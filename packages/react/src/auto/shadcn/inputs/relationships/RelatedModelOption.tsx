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
};

export const makeRelatedModelOption = (
  elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">
) => {
  const { CommandList, CommandEmpty, CommandGroup } = elements;

  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage } = makeShadcnListMessages(elements);

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
        {isLoading ? (
          <CommandEmpty>Loading...</CommandEmpty>
        ) : props.allowMultiple ? (
          <ListMessage message={`Add "${props.searchValue}"`} onSelect={() => props.onAddExtraOption?.(props.searchValue ?? "")} />
        ) : (
          <NoRecordsMessage />
        )}
        {listBoxOptions.length ? (
          <CommandGroup>{listBoxOptions}</CommandGroup>
        ) : errorMessage ? (
          <ListMessage message={getErrorMessage(errorMessage)} />
        ) : (
          <NoRecordsMessage />
        )}
      </CommandList>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return RelatedModelOption;
};
