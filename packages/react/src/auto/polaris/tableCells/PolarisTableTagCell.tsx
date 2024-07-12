import { InlineStack, Tag } from "@shopify/polaris";
import React, { useMemo } from "react";
import type { RoleAssignmentsValueType } from "../../../useTable.js";
import { isRoleAssignmentsArray } from "../../../useTable.js";

export const PolarisTableTagCell = (props: { value: string | string[] | RoleAssignmentsValueType[] }) => {
  const { value } = props;

  const tags = useMemo(() => {
    if (Array.isArray(value)) {
      if (isRoleAssignmentsArray(value)) {
        return value.map((role) => role.name);
      } else if (typeof value[0] === "string") {
        return value;
      } else {
        return [];
      }
    } else {
      return [value];
    }
  }, [value]);

  return (
    <InlineStack gap="100" wrap={false}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </InlineStack>
  );
};
