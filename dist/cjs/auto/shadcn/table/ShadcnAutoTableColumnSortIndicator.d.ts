import React from "react";
import type { SortState, TableColumn } from "../../../use-table/types.js";
import { type ShadcnElements } from "../elements.js";
export declare const makeShadcnAutoTableColumnSortIndicator: (elements: ShadcnElements) => (props: {
    column: TableColumn;
    sortState: SortState;
    isHovered: boolean;
}) => React.JSX.Element | null;
