import { InlineStack } from "@shopify/polaris";
import { CheckIcon, XIcon } from "@shopify/polaris-icons";
import React from "react";

export const PolarisTableBooleanCell = (props: { value: boolean }) => {
  const { value } = props;

  return (
    <InlineStack blockAlign="center">
      {value ? <CheckIcon width={20} /> : <XIcon width={20} fill="var(--p-color-icon-disabled)" />}
    </InlineStack>
  );
};
