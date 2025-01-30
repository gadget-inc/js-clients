import { InlineStack, Tag, Text } from "@shopify/polaris";
import React, { useEffect, useRef, useState } from "react";
import type { Nullable, RoleAssignmentsValueType } from "../../../utils.js";
import { useTagsForTableCellRenderer } from "../../hooks/useTagsForTableCellRenderer.js";

export const PolarisAutoTableTagCell = (props: { value: Nullable<string> | Nullable<string>[] | RoleAssignmentsValueType[] }) => {
  const { value } = props;
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({ value });

  useEffect(() => {
    if (ref.current) {
      setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [shortenedTags]);

  const showMoreComponent = <Text as="span">...</Text>;

  return (
    <InlineStack gap="100" wrap={false}>
      <div
        style={{
          width: showMore ? "calc(100% - 20px)" : "auto",
          overflowX: "hidden",
        }}
        ref={ref}
      >
        <InlineStack gap="100" wrap={false}>
          {shortenedTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {hasOmittedTags && showMoreComponent}
        </InlineStack>
      </div>
      {showMore && showMoreComponent}
    </InlineStack>
  );
};
