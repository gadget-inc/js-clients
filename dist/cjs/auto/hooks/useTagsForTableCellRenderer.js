"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTagsForTableCellRenderer = void 0;
const react_1 = require("react");
const utils_js_1 = require("../../utils.js");
const MAX_TAGS_COUNT = 5;
const useTagsForTableCellRenderer = (props) => {
    const { value, maxTagCount = MAX_TAGS_COUNT, maxTagLength } = props;
    const { allTags, shortenedTags, originalLength } = (0, react_1.useMemo)(() => {
        let formattedTags = [];
        if (Array.isArray(value)) {
            if ((0, utils_js_1.isRoleAssignmentsArray)(value)) {
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
exports.useTagsForTableCellRenderer = useTagsForTableCellRenderer;
//# sourceMappingURL=useTagsForTableCellRenderer.js.map