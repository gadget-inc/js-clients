import type { GadgetRecord, SortOrder } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { FieldMetadataFragment, GadgetFieldType } from "../internal/gql/graphql.js";
import type { ModelMetadata } from "../metadata.js";
import type { SearchResult } from "../useDebouncedSearch.js";
import type { PaginationResult } from "../useList.js";
import type { RecordSelection } from "../useSelectedRecordsController.js";
import type { ColumnValueType, ErrorWrapper } from "../utils.js";
export type ColumnType = GadgetFieldType | "CustomRenderer";
type ColumnsOption = Exclude<TableOptions["columns"], undefined>;
export type TableSpec = {
    targetColumns: ColumnsOption;
    /** Use the `getFieldMetadataByColumnPath` function to get the field metadata by column path for type safety. */
    fieldMetadataTree: Record<string, FieldMetadataFragment | {
        $field: FieldMetadataFragment;
    }>;
    defaultSelection: Record<string, any>;
};
export type RelationshipType = GadgetFieldType.HasMany | GadgetFieldType.HasOne | GadgetFieldType.BelongsTo;
export type TableColumn = {
    /** Human-readable header value for the column */
    header: string;
    /** Dot-separated path to the field in the record */
    field: string;
    type: ColumnType;
    /** parent relationship type if the parent field is a relationship */
    relationshipType?: RelationshipType;
    sortable: boolean;
};
export type TableRow = Record<string, ColumnValueType | ReactNode>;
export interface TableOptions {
    pageSize?: number;
    initialCursor?: string;
    initialDirection?: "forward" | "backward";
    initialSort?: {
        [column: string]: SortOrder;
    };
    columns?: (string | CellDetailColumn | CustomCellColumn)[];
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
/**
 * @deprecated
 */
export type RelatedFieldColumn = {
    field: string;
    relatedField: string;
};
export type CustomCellColumn = {
    name: string;
    render: (props: {
        record: GadgetRecord<any>;
    }) => ReactNode;
};
export type CellDetailColumn = {
    header?: string;
    field: string;
    sortable?: boolean;
};
export type FieldMetadataFragmentWithRelationshipConfig = FieldMetadataFragment & {
    configuration: Extract<FieldMetadataFragment["configuration"], {
        __typename: "GadgetHasOneConfig" | "GadgetHasManyConfig" | "GadgetBelongsToConfig";
    }>;
};
export {};
