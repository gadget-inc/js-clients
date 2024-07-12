import { Text } from "@shopify/polaris";
import React from "react";

export const PolarisAutoTableTextCell = (props: { value: any }) => {
  const { value } = props;
  const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;

  return (
    <Text as="span" truncate>
      {stringifiedValue}
    </Text>
  );
};
