import type { GadgetRecord } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import type { SearchResult } from "../useDebouncedSearch.js";
import type { PaginationResult } from "../useList.js";
import type { ColumnValueType, CustomCellColumn, ErrorWrapper, RelatedFieldColumn } from "../utils.js";
type BaseTableColumn = {
    name: string;
    apiIdentifier: string;
};
export type RecordTableColumnValue = BaseTableColumn & {
    fieldType: GadgetFieldType;
    sortable: boolean;
    relatedField?: RecordTableColumnValue;
    getValue: (record: GadgetRecord<any>) => ColumnValueType;
    isCustomCell: false;
};
export type CustomTableColumnValue = BaseTableColumn & {
    getValue: (record: GadgetRecord<any>) => ReactNode;
    isCustomCell: true;
    sortable: false;
};
export type TableColumn = RecordTableColumnValue | CustomTableColumnValue;
export type TableRow = Record<string, ColumnValueType | ReactNode>;
export interface TableOptions {
    pageSize?: number;
    initialCursor?: string;
    initialDirection?: "forward" | "backward";
    columns?: (string | RelatedFieldColumn | CustomCellColumn)[];
}
export type TableData<Data> = {
    columns: TableColumn[];
    rows: TableRow[];
    data: Data;
    metadata: ModelMetadata;
} | {
    columns: null;
    rows: null;
    data: null;
    metadata: null;
};
export type TableResult<Data> = [
    TableData<Data> & {
        page: PaginationResult;
        fetching: boolean;
        error?: ErrorWrapper;
        search: SearchResult;
    },
    refresh: (opts?: Partial<OperationContext>) => void
];
export {};
