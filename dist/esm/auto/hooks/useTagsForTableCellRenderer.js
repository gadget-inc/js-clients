import { useMemo } from "react";
import { isRoleAssignmentsArray } from "../../utils.js";
const MAX_TAGS_COUNT = 5;
export const useTagsForTableCellRenderer = (props) => {
    const { value, maxTagCount = MAX_TAGS_COUNT, maxTagLength } = props;
    const { allTags, shortenedTags, originalLength } = useMemo(() => {
        let formattedTags = [];
        if (Array.isArray(value)) {
            if (isRoleAssignmentsArray(value)) {
                formattedTags = value.map((role) => role.name);
            }
            else {
                const compactValues = value.filter((tag) => tag !== null && tag !== undefined);
                formattedTags = compactValues.map((tag) => tag.toString());
            }
        }
        else {
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
    }, [value, maxTagCount, maxTagLength]);
    return {
        allTags,
        shortenedTags,
        originalLength,
        hasOmittedTags: originalLength > maxTagCount,
    };
};
//# sourceMappingURL=useTagsForTableCellRenderer.js.map