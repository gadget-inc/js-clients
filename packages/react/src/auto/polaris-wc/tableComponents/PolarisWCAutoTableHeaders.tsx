// Import Polaris types for web components - this augments JSX.IntrinsicElements for s-* elements
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef } from "react";
import type { SortState, TableColumn } from "../../../use-table/types.js";
import { useHover } from "../../hooks/useHover.js";

// Sortable table header with click-to-sort and sort indicators
export const SortableTableHeader = (props: { column: TableColumn; isPrimary: boolean; sort: SortState }) => {
  const { column, isPrimary, sort } = props;
  const ref = useRef<HTMLElement>(null);

  const columnField = column.type === "CustomRenderer" ? column.identifier : column.field;
  const isSorted = sort.column === columnField;
  const isSortable = column.sortable && column.type !== "CustomRenderer";

  useEffect(() => {
    const el = ref.current;
    if (!el || !isSortable || !columnField) return;

    const handleClick = () => {
      sort.handleColumnSort(columnField);
    };

    // Add cursor style for sortable columns
    el.style.cursor = "pointer";

    el.addEventListener("click", handleClick);
    return () => {
      el.removeEventListener("click", handleClick);
      el.style.cursor = "";
    };
  }, [sort.handleColumnSort, columnField, isSortable]);

  const [isHovered, hoverProps] = useHover();
  // Sort indicator icon
  const SortIndicator = () => {
    if (!isSortable) return null;

    return (
      <span style={{ opacity: isSorted ? 1 : isHovered ? 0.25 : 0 }}>
        {!isSorted ? (
          <s-icon type="sort" tone="neutral" />
        ) : sort.direction === "Ascending" ? (
          <s-icon type="arrow-up" tone="neutral" />
        ) : (
          <s-icon type="arrow-down" tone="neutral" />
        )}
      </span>
    );
  };

  return (
    <s-table-header ref={ref as any} listSlot={isPrimary ? "primary" : undefined}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
          minHeight: "24px",
        }}
        {...hoverProps}
      >
        <span style={{ whiteSpace: "nowrap" }}>{column.header}</span>
        <SortIndicator />
      </div>
    </s-table-header>
  );
};
