import type { GadgetRecord, SortOrder } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import type { SearchResult } from "../useDebouncedSearch.js";
import type { PaginationResult } from "../useList.js";
import type { RecordSelection } from "../useSelectedRecordsController.js";
import type { CellDetailColumn, ColumnValueType, CustomCellRendererColumn, ErrorWrapper } from "../utils.js";

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
  columnPath: string;
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
  columns?: (string | CellDetailColumn | CustomCellRendererColumn)[];
  excludeColumns?: string[];
  actions?: (string | ActionCallback)[];
  excludeActions?: string[];
}

export type ActionCallback = {
  label: string;
} & (
  | { callback: (recordIds: string[], records: GadgetRecord<any>[]) => any }
  | { render: (recordIds: string[], records: GadgetRecord<any>[]) => ReactNode }
);

export type TableData<Data> =
  | {
      columns: TableColumn[];
      rows: TableRow[];
      data: Data;
      metadata: ModelMetadata;
    }
  | {
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
    selection: RecordSelection;
    sort: (colName: string, direction?: SortOrder) => void;
  },
  refresh: (opts?: Partial<OperationContext>) => void
];
