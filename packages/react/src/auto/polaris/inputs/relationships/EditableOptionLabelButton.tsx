import { BlockStack, InlineStack, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import { shouldShowOptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { renderOptionLabel } from "./utils.js";

export const EditableOptionLabelButton = ({ option }: { option?: DisplayedRecordOption }) => {
  const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);

  return (
    <>
      {showOptionLabel && option ? (
        <InlineStack align="space-between">
          <BlockStack gap="200">
            {renderOptionLabel(option.primary, "primary")}
            {option.secondary && renderOptionLabel(option.secondary, "secondary")}
          </BlockStack>
          {option.tertiary && renderOptionLabel(option.tertiary, "tertiary")}
        </InlineStack>
      ) : (
        <Text variant="bodyMd" as="h3" tone="subdued">
          Click to edit...
        </Text>
      )}
    </>
  );
};
