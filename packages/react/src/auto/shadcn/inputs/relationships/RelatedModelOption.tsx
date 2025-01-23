import React from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";

// TODO: This is Polaris's AutoSelection enum, but it might not be needed for shadcn.
export declare enum AutoSelection {
  /** Default active option is the first selected option. If no options are selected, defaults to first interactive option. */
  FirstSelected = "FIRST_SELECTED",
  /** Default active option is always the first interactive option. */
  First = "FIRST",
  /** Default to the manual selection pattern. */
  None = "NONE",
}

type RelatedModelOptionsProps = {
  options: Option[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  autoSelection?: AutoSelection;
  actions?: React.ReactNode[];
  renderOption?: (option: Option) => React.ReactNode;
};

export const makeRelatedModelOption = ({
  Command,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
}: Pick<ShadcnElements, "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup">) => {
  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage } = makeShadcnListMessages({
      CommandItem,
      CommandList,
      CommandEmpty,
    });

    const listBoxOptions = [
      ...(actions ?? []),
      ...options.map((option) => {
        return props.renderOption ? (
          props.renderOption(option)
        ) : (
          <ShadcnSelectableOption
            {...option}
            selected={checkSelected?.(option.id) ?? false}
            onSelect={(id) => {
              const record = records?.find((record) => record.id === id) ?? { id };
              const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
              onSelect(recordWithoutTimestamps);
            }}
            key={option.id}
          />
        );
      }),
    ];

    return (
      <Command>
        <CommandList>
          {isLoading ? (
            <CommandEmpty>Loading...</CommandEmpty>
          ) : listBoxOptions.length ? (
            <CommandGroup>{listBoxOptions}</CommandGroup>
          ) : errorMessage ? (
            <ListMessage message={getErrorMessage(errorMessage)} />
          ) : (
            <NoRecordsMessage />
          )}
        </CommandList>
      </Command>
    );
  }

  return RelatedModelOption;
};
