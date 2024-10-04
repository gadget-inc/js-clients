import { Listbox } from "@shopify/polaris";
import React from "react";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";

export const RelatedModelOptions = (props: {
  options: { id: string; label: string }[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;

  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
}) => {
  const { checkSelected, onSelect, isLoading, errorMessage, options, records } = props;

  return (
    <Listbox
      onSelect={(id) => {
        const record = records?.find((record) => record.id === id) ?? { id };

        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;

        onSelect(recordWithoutTimestamps);
      }}
    >
      {options.length ? (
        options.map((option) => <SelectableOption {...option} selected={checkSelected?.(option.id) ?? false} key={option.id} />)
      ) : errorMessage ? (
        <ListMessage message={getErrorMessage(errorMessage)} />
      ) : (
        <NoRecordsMessage />
      )}
      {isLoading && <Listbox.Loading accessibilityLabel="Loading" />}
    </Listbox>
  );
};
