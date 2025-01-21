import type { AutoSelection } from "@shopify/polaris";
import { Listbox } from "@shopify/polaris";
import React from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";

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

export const RelatedModelOptions = (props: RelatedModelOptionsProps) => {
  const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

  const listBoxOptions = [
    ...(actions ?? []),
    ...options.map((option) => {
      return props.renderOption ? (
        props.renderOption(option)
      ) : (
        <SelectableOption {...option} selected={checkSelected?.(option.id) ?? false} key={option.id} />
      );
    }),
  ];

  return (
    <Listbox
      autoSelection={props.autoSelection}
      onSelect={(id) => {
        const record = records?.find((record) => record.id === id) ?? { id };
        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
        onSelect(recordWithoutTimestamps);
      }}
    >
      {listBoxOptions.length ? (
        listBoxOptions
      ) : errorMessage ? (
        <ListMessage message={getErrorMessage(errorMessage)} />
      ) : (
        <NoRecordsMessage />
      )}
      {isLoading && <Listbox.Loading accessibilityLabel="Loading" />}
    </Listbox>
  );
};
