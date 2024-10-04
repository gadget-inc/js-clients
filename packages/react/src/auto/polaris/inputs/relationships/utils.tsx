import { Box, Tag, Text } from "@shopify/polaris";
import React from "react";

export const renderOptionLabel = (label: React.ReactNode, type: "primary" | "secondary" | "tertiary") => {
  if (typeof label === "string") {
    switch (type) {
      case "primary":
        return (
          <Text variant="bodyMd" fontWeight="semibold" as="h3">
            {label}
          </Text>
        );
      case "secondary":
        return (
          <Text variant="bodyMd" as="p" tone="subdued">
            {label}
          </Text>
        );
      case "tertiary":
        return (
          <Box>
            <Tag>{label}</Tag>
          </Box>
        );
      default:
        throw new Error("Invalid option type");
    }
  } else {
    return label;
  }
};
