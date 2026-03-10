import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback } from "react";
import type { SortState, TableColumn } from "../../../use-table/types.js";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoTableColumnSortIndicator = (elements: ShadcnElements) => {
  // TODO - Update these icons to be based on the passed in elements when starting the icon revolution
  const UnsortedIndicator = ChevronsUpDown;
  const AscendingIndicator = ArrowUp;
  const DescendingIndicator = ArrowDown;

  function ShadcnAutoTableColumnSortIndicator(props: { column: TableColumn; sortState: SortState; isHovered: boolean }) {
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

    return (
      <div onClick={handleSort} className="z-0">
        {!isSorted && <UnsortedIndicator className={`${iconSizeClass} ${isHovered ? "" : "opacity-50"}`} />}
        {isSorted && direction === "Ascending" && <AscendingIndicator className={`${iconSizeClass}`} />}
        {isSorted && direction === "Descending" && <DescendingIndicator className={`${iconSizeClass}`} />}
      </div>
    );
  }

  return ShadcnAutoTableColumnSortIndicator;
};

const iconSizeClass = "h-4 w-4";
