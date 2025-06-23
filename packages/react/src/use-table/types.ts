import type { GadgetRecord, SortOrder } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { GadgetFieldType } from "../internal/gql/graphql.js";
import type { FieldMetadata, ModelMetadata } from "../metadata.js";
import type { SearchResult } from "../useDebouncedSearch.js";
import type { PaginationResult } from "../useList.js";
import type { RecordSelection } from "../useSelectedRecordsController.js";
import type { ColumnValueType, ErrorWrapper } from "../utils.js";

export type ColumnType = GadgetFieldType | "CustomRenderer";

export type ColumnsOption = Exclude<TableOptions["columns"], undefined>;

export type TableSpec = {
  targetColumns: ColumnsOption;
  /** Use the `getFieldMetadataByColumnPath` function to get the field metadata by column path for type safety. */
  fieldMetadataTree: Record<string, FieldMetadata | { $field: FieldMetadata }>;
  defaultSelection: Record<string, any>;
};

export type RelationshipType =
  | GadgetFieldType.HasMany
  | GadgetFieldType.HasOne
  | GadgetFieldType.BelongsTo
  | GadgetFieldType.HasManyThrough;

export type TableColumn = {
  /** Identifier for the column */
  identifier: string;
  /** Human-readable header value for the column */
  header: ReactNode;
  /** parent relationship type if the parent field is a relationship */
  relationshipType?: RelationshipType;
  sortable: boolean;
  /** For controlling if the time is shown on DateTime cell renderers   */
  includeTime?: boolean;
  /** Custom style for the cells in the column */
  style?: React.CSSProperties;
} & (
  | {
      type: GadgetFieldType;
      /** Dot-separated path to the field in the record */
      field: string;
    }
  | {
      type: "CustomRenderer";
      /** Custom render function */
      render: CustomCellRenderer;
    }
);

export type TableRow = Record<string, ColumnValueType | ReactNode>;

export interface TableOptions {
  /**
   * The number of records to show per page.
   */
  pageSize?: number;
  /**
   * The initial pagination cursor to control the initial page of records to show.
   * Pagination cursors are returned from the API.
   */
  initialCursor?: string;
  /**
   * The initial column sort order that the table will be initialized with.
   * @example
   * ```tsx
   * <AutoTable model={api.user} initialSort={{ id: "Descending" }} />
   * ```
   */
  initialSort?: { [column: string]: SortOrder };
  /**
   * The columns to show in the table represented as (string | CellDetailColumn | CustomCellColumn)[]
   * - As a string, this represents the API identifier of the field to display.
   * - As a CellDetailColumn, this a
   * - As a CustomCellColumn, this represents a custom column to display.
   */
  columns?: (string | CellDetailColumn | CustomCellColumn)[];
  /**
   * A string array of API identifiers for model actions to be excluded from the table.
   */
  excludeColumns?: string[];
  /**
   * The actions to be shown in the table for selected records, represented as (string | ActionCallback)[]
   * - strings in the array represent the API identifies of actions in the model that can be run on the selected records
   * - ActionCallback is an object with a label and action property. The action property can be a string representing a model action or a function on that will be called with the selected records
   */
  actions?: (string | ActionCallback)[];

  /**
   * A string array of API identifiers for model actions to be excluded from the table.
   */
  excludeActions?: string[];
}

export type ActionCallback = {
  /**
   * Label for the action
   */
  label: string;

  /**
   * Indicates if the action should be promoted in the table
   */
  promoted?: boolean;

  /**
   * The action to be performed when the action is clicked
   * - as a string, this represents the API identifier of the action in the model
   * - as a function, this will be called with the selected records
   */
  action: string | ((records: GadgetRecord<any>[]) => any);
};

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

export type SortState = {
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
  header: ReactNode;
  render: CustomCellRenderer;
  style?: React.CSSProperties;
};

export type CustomCellRenderer = (props: { record: GadgetRecord<any>; index: number }) => ReactNode;

export type CellDetailColumn = {
  header?: ReactNode;
  field: string;
  sortable?: boolean;
  style?: React.CSSProperties;
};

export type FieldMetadataWithRelationshipConfig = FieldMetadata & {
  configuration: Extract<
    FieldMetadata["configuration"],
    { __typename: "GadgetHasOneConfig" | "GadgetHasManyConfig" | "GadgetBelongsToConfig" }
  >;
};
