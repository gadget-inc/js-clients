import { InlineStack, Tag, Text } from "@shopify/polaris";
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Nullable, RoleAssignmentsValueType } from "../../../utils.js";
import { isRoleAssignmentsArray } from "../../../utils.js";

const MAX_TAGS_LENGTH = 5;

export const PolarisAutoTableTagCell = (props: { value: Nullable<string> | Nullable<string>[] | RoleAssignmentsValueType[] }) => {
  const { value } = props;
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { tags, originalLength } = useMemo(() => {
    let formattedTags: string[] = [];

    if (Array.isArray(value)) {
      if (isRoleAssignmentsArray(value)) {
        formattedTags = value.map((role) => role.name);
      } else {
        const compactValues = value.filter((tag) => tag !== null && tag !== undefined) as string[];
        formattedTags = compactValues.map((tag) => tag.toString());
      }
    } else {
      if (value !== null && value !== undefined) {
        formattedTags = [value];
      }
    }

    return {
      tags: formattedTags.slice(0, MAX_TAGS_LENGTH),
      originalLength: formattedTags.length,
    };
  }, [value]);

  useEffect(() => {
    if (ref.current) {
      setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [tags]);

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
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {originalLength > MAX_TAGS_LENGTH && showMoreComponent}
        </InlineStack>
      </div>
      {showMore && showMoreComponent}
    </InlineStack>
  );
};
