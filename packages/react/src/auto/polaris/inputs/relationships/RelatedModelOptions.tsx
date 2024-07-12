import { Listbox } from "@shopify/polaris";
import React from "react";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";

export const RelatedModelOptions = (props: {
  options: { id: string; label: string }[];
  isLoading?: boolean;
  errorMessage?: string;

  checkSelected?: (id: string) => boolean;
  onSelect: (recordId: string) => void;
}) => {
  const { checkSelected, onSelect, isLoading, errorMessage, options } = props;

  return (
    <Listbox onSelect={onSelect}>
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
