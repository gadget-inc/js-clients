import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback } from "react";
import type { SortState, TableColumn } from "../../../use-table/types.js";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoTableColumnSortIndicator = (elements: ShadcnElements) => {
  // TODO - Update these icons to be based on the passed in elements when starting the icon revolution
  const UnsortedIndicator = ChevronsUpDown;
  const AscendingIndicator = ChevronDown;
  const DescendingIndicator = ChevronUp;

  function ShadcnAutoTableColumnSortIndicator(props: { column: TableColumn; sortState: SortState; isHovered: boolean }) {
    const { column, sortState, isHovered } = props;
    const handleSort = useCallback(() => {
      sortState.handleColumnSort(column.field);
    }, [sortState, column.field]);

    if (!column.sortable) {
      return null;
    }

    const isSorted = sortState.column === column.field;
    const direction = sortState.direction;

    return (
      <div onClick={handleSort} className="cursor-pointer">
        {!isSorted && <UnsortedIndicator className={`${iconSizeClass} ${isHovered ? "" : "opacity-0"}`} />}
        {isSorted && direction === "Ascending" && <AscendingIndicator className={`${iconSizeClass}`} />}
        {isSorted && direction === "Descending" && <DescendingIndicator className={`${iconSizeClass}`} />}
      </div>
    );
  }

  return ShadcnAutoTableColumnSortIndicator;
};

const iconSizeClass = "h-4 w-4";
