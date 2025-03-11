import type { DefaultSelection, FindManyFunction, GadgetRecord, Select } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import type { TableOptions, TableRow } from "../use-table/types.js";
import type { OptionsType } from "../utils.js";

/**
 * The props to pass to an AutoTable. Includes both the Gadget-land props as well as the adapter specific props.
 **/
export type AutoTableProps<
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
> = {
  /**
   * The Gadget model with records that will be shown in the table.
   */
  model: { findMany: FinderFunction };
  /**
   * The selection object to pass to the table.
   * This will override the default selection based on included columns.
   * This is necessary for representing nested relationship fields in the table
   */
  select?: Options["select"];
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
   * Determines if the table should be live updated when the data changes.
   */
  live?: boolean;

  /**
   * The columns to show in the table represented as (string | CellDetailColumn | CustomCellColumn)[]
   * - As a string, this represents the API identifier of the field to display.
   * - As a CellDetailColumn, this a
   * - As a CustomCellColumn, this represents a custom column to display.
   */
  columns?: TableOptions["columns"];

  /**
   * An array of strings corresponding to model fields to exclude from the table.
   */
  excludeColumns?: string[];

  /**
   * callback function that gets called when a row is clicked.
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
   * The initial column sort order that the table will be initialized with.
   * @example
   * ```tsx
   * <AutoTable model={api.user} initialSort={{ id: "Descending" }} />
   * ```
   */
  initialSort?: Options["sort"];

  /**
   * The model record filter to apply to the table.
   */
  filter?: Options["filter"];

  /**
   * The actions to be shown in the table for selected records, represented as (string | ActionCallback)[]
   * - strings in the array represent the API identifies of actions in the model that can be run on the selected records
   * - ActionCallback is an object with a label and action property. The action property can be a string representing a model action or a function on that will be called with the selected records
   */
  actions?: TableOptions["actions"];

  /**
   * A string array of API identifiers for model actions to be excluded from the table.
   */
  excludeActions?: TableOptions["excludeActions"];

  /**
   * Indicates if the table rows are selectable.
   */
  selectable?: boolean;

  /**
   * The content to display in the table when there are no records to show.
   */
  emptyState?: ReactNode;

  /**
   * The resource name to display in the table.
   */
  resourceName?: { singular: string; plural: string };

  /**
   * Toggle whether the search bar is visible. Defaults to `true`
   */
  searchable?: boolean;

  /**
   * Optional search value to programmatically search for the model records
   */
  searchValue?: string;

  /**
   * Indicates if the table should be paginated.
   */
  paginate?: boolean;
};
