import React from "react";
import type { SortState, TableColumn } from "../../../use-table/types.js";
export declare const SortableTableHeader: (props: {
    column: TableColumn;
    isPrimary: boolean;
    sort: SortState;
}) => React.JSX.Element;
