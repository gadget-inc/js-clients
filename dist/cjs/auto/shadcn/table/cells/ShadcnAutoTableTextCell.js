"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableTextCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useIsOverflowed_js_1 = require("../../../hooks/useIsOverflowed.js");
require("./ShadcnAutoTableStyles.css");
const makeShadcnAutoTableTextCell = (elements) => {
    const { Label, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } = elements;
    function ShadcnAutoTableTextCell(props) {
        const { value } = props;
        const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : `${value}`;
        const { isOverflowed, childElementRef, containerRef } = (0, useIsOverflowed_js_1.useIsOverflowed)();
        return (react_1.default.createElement("div", { style: { maxWidth: "100%" }, ref: containerRef },
            react_1.default.createElement(TooltipProvider, null,
                react_1.default.createElement(Tooltip, null,
                    isOverflowed && react_1.default.createElement(TooltipContent, { className: "shadcn-auto-table-cell-tooltip-content" }, stringifiedValue),
                    react_1.default.createElement(TooltipTrigger, { className: "shadcn-auto-table-tooltip-trigger" },
                        react_1.default.createElement(Label, null,
                            react_1.default.createElement("span", { ref: childElementRef }, stringifiedValue)))))));
    }
    return ShadcnAutoTableTextCell;
};
exports.makeShadcnAutoTableTextCell = makeShadcnAutoTableTextCell;
//# sourceMappingURL=ShadcnAutoTableTextCell.js.map