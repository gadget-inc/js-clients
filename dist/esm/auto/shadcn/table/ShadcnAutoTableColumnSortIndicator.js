import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback } from "react";
export const makeShadcnAutoTableColumnSortIndicator = (elements) => {
    // TODO - Update these icons to be based on the passed in elements when starting the icon revolution
    const UnsortedIndicator = ChevronsUpDown;
    const AscendingIndicator = ArrowUp;
    const DescendingIndicator = ArrowDown;
    function ShadcnAutoTableColumnSortIndicator(props) {
        const { column, sortState, isHovered } = props;
        const handleSort = useCallback(() => {
            if (column.type === "CustomRenderer") {
                return;
            }
            sortState.handleColumnSort(column.field);
        }, [sortState, column.type, column.type === "CustomRenderer" ? undefined : column.field]);
        if (!column.sortable || column.type === "CustomRenderer") {
            return null;
        }
        const isSorted = sortState.column === column.field;
        const direction = sortState.direction;
        return (React.createElement("div", { onClick: handleSort, className: "z-0" },
            !isSorted && React.createElement(UnsortedIndicator, { className: `${iconSizeClass} ${isHovered ? "" : "opacity-50"}` }),
            isSorted && direction === "Ascending" && React.createElement(AscendingIndicator, { className: `${iconSizeClass}` }),
            isSorted && direction === "Descending" && React.createElement(DescendingIndicator, { className: `${iconSizeClass}` })));
    }
    return ShadcnAutoTableColumnSortIndicator;
};
const iconSizeClass = "h-4 w-4";
//# sourceMappingURL=ShadcnAutoTableColumnSortIndicator.js.map