"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableTagCell = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const useIsOverflowed_js_1 = require("../../../hooks/useIsOverflowed.js");
const useTagsForTableCellRenderer_js_1 = require("../../../hooks/useTagsForTableCellRenderer.js");
const makeShadcnAutoTableTagCell = (elements) => {
    const { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Badge } = elements;
    function TagList(props) {
        const { tags, tagPrefix } = props;
        return (React.createElement(React.Fragment, null, tags.map((tag, i) => (React.createElement(Badge, { key: `${tagPrefix}-${tag}-${i}`, variant: "outline" }, tag)))));
    }
    function ShadcnAutoTableTagCell(props) {
        const { value } = props;
        const { isOverflowed, childElementRef, containerRef } = (0, useIsOverflowed_js_1.useIsOverflowed)();
        const { allTags, shortenedTags, hasOmittedTags } = (0, useTagsForTableCellRenderer_js_1.useTagsForTableCellRenderer)({ value });
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { maxWidth: "100%" }, ref: containerRef },
                React.createElement(TooltipProvider, null,
                    React.createElement(Tooltip, null,
                        (isOverflowed || hasOmittedTags) && (React.createElement(TooltipContent, { className: "shadcn-auto-table-cell-tooltip-content" },
                            React.createElement(TagList, { tags: allTags, tagPrefix: "all-tags" }))),
                        React.createElement(TooltipTrigger, { className: "shadcn-auto-table-tooltip-trigger" },
                            React.createElement("div", { ref: childElementRef, style: { width: "fit-content" } },
                                React.createElement(TagList, { tags: shortenedTags, tagPrefix: "shortened-tags" }))))))));
    }
    return ShadcnAutoTableTagCell;
};
exports.makeShadcnAutoTableTagCell = makeShadcnAutoTableTagCell;
//# sourceMappingURL=ShadcnAutoTableTagCell.js.map