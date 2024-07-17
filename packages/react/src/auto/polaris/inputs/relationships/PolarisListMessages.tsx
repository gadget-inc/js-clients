import { Listbox, Text } from "@shopify/polaris";
import React from "react";

export const SelectableOption = (props: { label: string; id: string; selected: boolean }) => {
  const { label, id, selected } = props;
  return (
    <Listbox.Option key={id} value={id} selected={selected}>
      {label}
    </Listbox.Option>
  );
};

export const ListMessage = (props: { message: string }) => (
  <div style={{ padding: "16px" }}>
    <Text as="p" tone="subdued">
      {props.message}
    </Text>
  </div>
);

export const NoRecordsMessage = () => <ListMessage message="No records found" />;

export const getErrorMessage = (errorString: string) => {
  if (errorString.includes("GGT_PERMISSION_DENIED")) return `Missing permissions. Cannot read related model`;

  if (errorString.includes("GGT_INVALID_STORED_DATA")) return `Invalid records found in related model`;

  return "Cannot retrieve records from related model";
};
