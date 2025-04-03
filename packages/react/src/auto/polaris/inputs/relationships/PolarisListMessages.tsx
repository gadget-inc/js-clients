import { Listbox, Text } from "@shopify/polaris";
import React from "react";
import { getErrorMessage } from "../../../../utils.js";

export const SelectableOption = (props: { primary?: React.ReactNode; id: string; selected: boolean }) => {
  const { primary, id, selected } = props;

  return !primary ? (
    <Listbox.Option key={id} value={id} selected={selected}>
      {`id: ${id}`}
    </Listbox.Option>
  ) : typeof primary === "string" ? (
    <Listbox.Option key={id} value={id} selected={selected}>
      {primary}
    </Listbox.Option>
  ) : (
    <Listbox.Action key={id} value={id} selected={selected}>
      {primary}
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

export const NoRecordsMessage = () => <ListMessage message="No results" />;

export { getErrorMessage };
