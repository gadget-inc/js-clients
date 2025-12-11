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
    const columnField = column.field;

    const handleSort = useCallback(() => {
      if (!columnField) {
        return;
      }
      sortState.handleColumnSort(columnField);
    }, [sortState, columnField]);

    if (!column.sortable || !columnField) {
      return null;
    }

    const isSorted = sortState.column === columnField;
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
