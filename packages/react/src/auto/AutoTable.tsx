import type { AnyPublicModelManager, FindManyFunction, GadgetRecord } from "@gadgetinc/api-client-core";
import { type DefaultSelection, type Select } from "@gadgetinc/api-client-core";
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
  model: { findMany: FinderFunction } & AnyPublicModelManager<FinderFunction>;
  select?: Options["select"];
  pageSize?: number;
  initialCursor?: string;
  initialDirection?: string;
  live?: boolean;
  columns?: TableOptions["columns"];
  excludeColumns?: string[];
  onClick?: (
    row: TableRow,
    record: GadgetRecord<
      Select<
        Exclude<FinderFunction["schemaType"], null | undefined>,
        DefaultSelection<FinderFunction["selectionType"], Options, FinderFunction["defaultSelection"]>
      >
    >
  ) => void;
  initialSort?: Options["sort"];
  filter?: Options["filter"];
  actions?: TableOptions["actions"];
  excludeActions?: TableOptions["excludeActions"];
  selectable?: boolean;
  emptyState?: React.ReactNode;
  lastColumnSticky?: boolean;
  hasZebraStriping?: boolean;
  resourceName?: { singular: string; plural: string };
  condensed?: boolean;
  searchable?: boolean;
  searchValue?: string;
  paginate?: boolean;
};
