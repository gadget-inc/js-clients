import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadataFragment } from "../internal/gql/graphql.js";
import type { TableColumn, TableOptions, TableRow, TableSpec } from "./types.js";
export declare const getTableSpec: (fieldMetadataArray: FieldMetadataFragment[], columns: TableOptions["columns"], excludeColumns: TableOptions["excludeColumns"], defaultSelection: Record<string, any>) => TableSpec;
export declare const getTableSelectionMap: (spec: TableSpec) => FieldSelection;
export declare const getTableRows: (spec: Pick<TableSpec, "fieldMetadataTree" | "targetColumns">, columns: TableColumn[], records: GadgetRecord<any>[]) => TableRow[];
export declare const getTableColumns: (spec: Pick<TableSpec, "fieldMetadataTree" | "targetColumns">) => TableColumn[];
export declare const fieldMetadataArrayToFieldMetadataTree: (fieldMetadataArray: FieldMetadataFragment[]) => Record<string, any>;
