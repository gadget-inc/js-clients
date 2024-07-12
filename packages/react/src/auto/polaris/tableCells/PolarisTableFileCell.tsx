import { Icon, InlineStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import React, { useMemo } from "react";
import type { FileValueType } from "../../../useTable.js";
import { imageFileTypes } from "../../hooks/useFileInputController.js";

const MAX_FILE_NAME_LENGTH = 12;

export const PolarisTableFileCell = (props: { value: FileValueType }) => {
  const { value } = props;

  const originalFileName = value.fileName;

  const formattedFileName = useMemo(() => {
    const segments = originalFileName.split(".");

    if (segments.length > 1) {
      let name = segments.slice(0, -1).join(".");
      const extension = segments.pop();

      if (name.length > MAX_FILE_NAME_LENGTH) {
        // Truncate the name if it's too long
        name = name.substring(0, MAX_FILE_NAME_LENGTH) + "(..)";
      }

      // Join the name and extension back together
      return [name, extension].join(".");
    } else {
      // Return the original name if there's no extension
      return originalFileName;
    }
  }, [originalFileName]);

  const icon = imageFileTypes.includes(value.mimeType) ? (
    <Thumbnail size="small" alt={originalFileName} source={value.url} />
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
