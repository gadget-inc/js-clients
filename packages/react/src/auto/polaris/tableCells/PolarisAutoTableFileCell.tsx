import { Icon, InlineStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import React from "react";
import type { FileValueType } from "../../../utils.js";
import { useAutoTableFileCell } from "../../hooks/useAutoTableFileCell.js";

export const PolarisAutoTableFileCell = (props: { value: FileValueType }) => {
  const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);

  const icon = imageFileIconUrl ? (
    <Thumbnail size="small" alt={originalFileName} source={imageFileIconUrl} />
  ) : (
    <div>
      <Icon source={NoteIcon} />
    </div>
  );

  return (
    <InlineStack gap="200" blockAlign="center" wrap={false}>
      {icon}
      <Text as="span" truncate>
        {formattedFileName}
      </Text>
    </InlineStack>
  );
};
