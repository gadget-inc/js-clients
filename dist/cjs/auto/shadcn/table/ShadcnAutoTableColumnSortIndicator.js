"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableColumnSortIndicator = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const makeShadcnAutoTableColumnSortIndicator = (elements) => {
    // TODO - Update these icons to be based on the passed in elements when starting the icon revolution
    const UnsortedIndicator = lucide_react_1.ChevronsUpDown;
    const AscendingIndicator = lucide_react_1.ArrowUp;
    const DescendingIndicator = lucide_react_1.ArrowDown;
    function ShadcnAutoTableColumnSortIndicator(props) {
        const { column, sortState, isHovered } = props;
        const handleSort = (0, react_1.useCallback)(() => {
            sortState.handleColumnSort(column.field);
        }, [sortState, column.field]);
        if (!column.sortable) {
            return null;
        }
        const isSorted = sortState.column === column.field;
        const direction = sortState.direction;
        return (react_1.default.createElement("div", { onClick: handleSort, className: "z-0" },
            !isSorted && react_1.default.createElement(UnsortedIndicator, { className: `${iconSizeClass} ${isHovered ? "" : "opacity-50"}` }),
            isSorted && direction === "Ascending" && react_1.default.createElement(AscendingIndicator, { className: `${iconSizeClass}` }),
            isSorted && direction === "Descending" && react_1.default.createElement(DescendingIndicator, { className: `${iconSizeClass}` })));
    }
    return ShadcnAutoTableColumnSortIndicator;
};
exports.makeShadcnAutoTableColumnSortIndicator = makeShadcnAutoTableColumnSortIndicator;
const iconSizeClass = "h-4 w-4";
//# sourceMappingURL=ShadcnAutoTableColumnSortIndicator.js.map