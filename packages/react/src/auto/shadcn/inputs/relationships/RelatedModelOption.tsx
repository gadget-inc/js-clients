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

export type RelatedModelOptionsProps = {
  options: Option[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  autoSelection?: AutoSelection;
  actions?: React.ReactNode[];
  renderOption?: (option: Option) => React.ReactNode;
  allowMultiple?: boolean;
  allowOther?: boolean;
  searchValue?: string;
};

export const makeRelatedModelOption = ({
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  Label,
}: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">) => {
  const RelatedModelOption = React.memo(function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage } = React.useMemo(
      () =>
        makeShadcnListMessages({
          CommandItem,
          CommandEmpty,
          Checkbox,
          Label,
        }),
      [CommandItem, CommandEmpty, Checkbox, Label]
    );

    const listBoxOptions = React.useMemo(
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
          <ListMessage message={`Add "${props.searchValue}"`} />
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
  });

  RelatedModelOption.displayName = "RelatedModelOption";

  return RelatedModelOption;
};
