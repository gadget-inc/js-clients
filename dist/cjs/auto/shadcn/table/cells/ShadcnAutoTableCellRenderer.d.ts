import * as React from "react";
import type { TableColumn } from "src/use-table/types.js";
import type { ColumnValueType } from "../../../../utils.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeShadcnAutoTableCellRenderer: (elements: ShadcnElements) => (props: {
    column: TableColumn;
    value: ColumnValueType;
}) => React.JSX.Element | null;
