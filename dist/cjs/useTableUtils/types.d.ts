import type { GadgetRecord, SortOrder } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import type { SearchResult } from "../useDebouncedSearch.js";
import type { PaginationResult } from "../useList.js";
import type { RecordSelection } from "../useSelectedRecordsController.js";
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
    initialSort?: {
        [column: string]: SortOrder;
    };
    columns?: (string | RelatedFieldColumn | CustomCellColumn)[];
    excludeColumns?: string[];
    actions?: (string | ActionCallback)[];
    excludeActions?: string[];
}
export type ActionCallback = {
    label: string;
} & ({
    callback: (recordIds: string[], records: GadgetRecord<any>[]) => any;
} | {
    render: (recordIds: string[], records: GadgetRecord<any>[]) => ReactNode;
});
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
type SortState = {
    column: string;
    direction: SortOrder;
    handleColumnSort: (column: string) => void;
    setSort: (column: string, direction: SortOrder) => void;
};
export type TableResult<Data> = [
    TableData<Data> & {
        page: PaginationResult;
        fetching: boolean;
        error?: ErrorWrapper;
        search: SearchResult;
        selection: RecordSelection;
        sort: SortState;
    },
    refresh: (opts?: Partial<OperationContext>) => void
];
export {};
