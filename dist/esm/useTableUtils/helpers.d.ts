import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import type { TableColumn, TableOptions, TableRow } from "./types.js";
type ColumnsOption = Exclude<TableOptions["columns"], undefined>;
export type TableSpec = {
    targetColumns: ColumnsOption;
    fieldMetadataMap: Map<string, FieldMetadataFragment>;
    defaultSelection: Record<string, any>;
};
export declare const getTableSpec: (fieldMetadataArray: FieldMetadataFragment[], columns: TableOptions["columns"], excludeColumns: TableOptions["excludeColumns"], defaultSelection: Record<string, any>) => TableSpec;
export declare const getTableSelectionMap: (spec: TableSpec) => FieldSelection;
export declare const getTableRows: (spec: TableSpec, records: GadgetRecord<any>[]) => TableRow[];
export declare const getTableColumns: (spec: TableSpec) => TableColumn[];
export {};
