import type { FieldSelection, GadgetRecord } from "@gadgetinc/api-client-core";
import type { FieldMetadata } from "../metadata.js";
import type { TableColumn, TableOptions, TableRow, TableSpec } from "./types.js";
export declare const getTableSpec: (fieldMetadataArray: FieldMetadata[], columns: TableOptions["columns"], excludeColumns: TableOptions["excludeColumns"], defaultSelection: Record<string, any>) => TableSpec;
export declare const getTableSelectionMap: (spec: TableSpec) => FieldSelection;
export declare const getTableRows: (spec: Pick<TableSpec, "fieldMetadataTree" | "targetColumns">, columns: TableColumn[], records: GadgetRecord<any>[]) => TableRow[];
export declare const getTableColumns: (spec: Pick<TableSpec, "fieldMetadataTree" | "targetColumns">) => TableColumn[];
/**
 * This turns the flat list of field metadata returned by the backend into a nested tree of field metadata.
 * The paths in the object are precomputed to a fixed max depth, for easy lookups later in the table code
 */
export declare const fieldMetadataArrayToFieldMetadataTree: (fieldMetadataArray: FieldMetadata[], depth?: number) => Record<string, any>;
/**
 * This function takes a list of field paths and converts them into a structured field selection for a model
 * It handles:
 * - Basic fields
 * - Relationship fields (hasOne, belongsTo, hasMany)
 * - Nested fields through relationships
 * - Join model relationships in hasManyThrough fields
 *
 * The resulting selection object will always include the 'id' field and handles proper nesting
 * of relationship selections including edges/node structure for hasMany relationships.
 */
export declare const pathListToSelection: (modelIdentifier: string, pathList: string[], fieldMetadataArray: FieldMetadata[]) => FieldSelection;
