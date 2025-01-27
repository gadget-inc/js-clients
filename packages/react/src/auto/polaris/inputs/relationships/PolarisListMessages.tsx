import { Listbox, Text } from "@shopify/polaris";
import React from "react";
import { getErrorMessage } from "../../../../utils.js";
export const SelectableOption = (props: { label: React.ReactNode; id: string; selected: boolean }) => {
  const { label, id, selected } = props;

  return typeof label === "string" ? (
    <Listbox.Option key={id} value={id} selected={selected}>
      {label}
    </Listbox.Option>
  ) : (
    <Listbox.Action key={id} value={id} selected={selected}>
      {label}
    </Listbox.Action>
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

export { getErrorMessage };
