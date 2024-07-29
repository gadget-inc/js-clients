import type { FindManyFunction } from "@gadgetinc/api-client-core";
import type { TableOptions, TableRow } from "../useTableUtils/types.js";
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
  model: { findMany: FinderFunction };
  select?: Options["select"];
  pageSize?: number;
  initialCursor?: string;
  initialDirection?: string;
  live?: boolean;
  columns?: TableOptions["columns"];
  excludeColumns?: string[];
  onClick?: (row: TableRow) => void;
  initialSort?: Options["sort"];
  filter?: Options["filter"];
  actions?: TableOptions["actions"];
  excludeActions?: TableOptions["excludeActions"];
};
