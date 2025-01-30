import { useMemo } from "react";
import type { Nullable, RoleAssignmentsValueType } from "../../utils.js";
import { isRoleAssignmentsArray } from "../../utils.js";

const MAX_TAGS_COUNT = 5;

export const useTagsForTableCellRenderer = (props: {
  value: Nullable<string> | Nullable<string>[] | RoleAssignmentsValueType[];
  maxTagCount?: number;
  maxTagLength?: number;
}) => {
  const { value, maxTagCount = MAX_TAGS_COUNT, maxTagLength } = props;

  const { allTags, shortenedTags, originalLength } = useMemo(() => {
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
      allTags: formattedTags,
      shortenedTags: formattedTags
        .slice(0, maxTagCount)
        .map((tag) => (maxTagLength && tag.length > maxTagLength ? tag.slice(0, maxTagLength) + "…" : tag)),
      originalLength: formattedTags.length,
    };
  }, [value]);

  return {
    allTags,
    shortenedTags,
    originalLength,
    hasOmittedTags: originalLength > maxTagCount,
  };
};
