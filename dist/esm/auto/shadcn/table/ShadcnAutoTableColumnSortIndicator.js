import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback } from "react";
export const makeShadcnAutoTableColumnSortIndicator = (elements) => {
    // TODO - Update these icons to be based on the passed in elements when starting the icon revolution
    const UnsortedIndicator = ChevronsUpDown;
    const AscendingIndicator = ChevronDown;
    const DescendingIndicator = ChevronUp;
    function ShadcnAutoTableColumnSortIndicator(props) {
        const { column, sortState, isHovered } = props;
        const handleSort = useCallback(() => {
            sortState.handleColumnSort(column.field);
        }, [sortState, column.field]);
        if (!column.sortable) {
            return null;
        }
        const isSorted = sortState.column === column.field;
        const direction = sortState.direction;
        return (React.createElement("div", { onClick: handleSort, className: "cursor-pointer" },
            !isSorted && React.createElement(UnsortedIndicator, { className: `${iconSizeClass} ${isHovered ? "" : "opacity-0"}` }),
            isSorted && direction === "Ascending" && React.createElement(AscendingIndicator, { className: `${iconSizeClass}` }),
            isSorted && direction === "Descending" && React.createElement(DescendingIndicator, { className: `${iconSizeClass}` })));
    }
    return ShadcnAutoTableColumnSortIndicator;
};
const iconSizeClass = "h-4 w-4";
//# sourceMappingURL=ShadcnAutoTableColumnSortIndicator.js.map