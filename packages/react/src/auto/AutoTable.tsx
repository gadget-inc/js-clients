import type { OptionsType } from "@gadgetinc/client-hooks";
import type { DefaultSelection, FindManyFunction, GadgetRecord, Select } from "@gadgetinc/core";
import type { ReactNode } from "react";
import type { TableOptions, TableRow } from "../use-table/types.js";

/**
 * Props for AutoTable, including Gadget-land and adapter-specific props.
 **/
export type AutoTableProps<
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
> = {
  /**
   * The Gadget model with records that will be shown in the table.
   */
  model: { findMany: FinderFunction };
  /**
   * The selection object to pass to the table.
   * Overrides the default selection based on included columns.
   * Needed for displaying nested relationships in the table.
   */
  select?: Options["select"];
  /**
   * The number of records to show per page.
   */
  pageSize?: number;
  /**
   * The initial pagination cursor to control the first page of records.
   * Pagination cursors are returned from the API.
   */
  initialCursor?: string;
  /**
   * Determines if the table should be live updated when data changes.
   */
  live?: boolean;

  /**
   * The columns to display in the table, represented as (string | CellDetailColumn | CustomCellColumn)[]
   * - A string represents the API identifier of the field.
   * - A CellDetailColumn is a detailed field representation.
   * - A CustomCellColumn is a custom column.
   */
  columns?: TableOptions["columns"];

  /**
   * An array of model fields excluded from the table.
   */
  excludeColumns?: string[];

  /**
   * Callback triggered when a row is clicked.
   */
  onClick?: (
    row: TableRow,
    record: GadgetRecord<
      Select<
        Exclude<FinderFunction["schemaType"], null | undefined>,
        DefaultSelection<FinderFunction["selectionType"], Options, FinderFunction["defaultSelection"]>
      >
    >
  ) => void;

  /**
   * The initial column sort order.
   * @example
   * ```tsx
   * <AutoTable model={api.user} initialSort={{ id: "Descending" }} />
   * ```
   */
  initialSort?: Options["sort"];

  /**
   * The model record filter to apply.
   */
  filter?: Options["filter"];

  /**
   * The actions available for selected records, represented as (string | ActionCallback)[]
   * - A string represents the API identifier of the model action.
   * - ActionCallback contains a label and an action property, which can be an action API identifier or a function.
   */
  actions?: TableOptions["actions"];

  /**
   * API identifiers of model actions to exclude from the table.
   */
  excludeActions?: TableOptions["excludeActions"];

  /**
   * Indicates if table rows are selectable.
   */
  selectable?: boolean;

  /**
   * The content displayed when no records exist.
   */
  emptyState?: ReactNode;

  /**
   * The resource name displayed in the table.
   */
  resourceName?: { singular: string; plural: string };

  /**
   * Controls search bar visibility. Defaults to `true`.
   */
  searchable?: boolean;

  /**
   * A preset search term.
   */
  searchValue?: string;

  /**
   * Indicates if pagination is enabled. Defaults to `true`.
   */
  paginate?: boolean;

  /**
   * The loading skeleton to display when the table is loading.
   */
  loadingSkeleton?: ReactNode;
};
