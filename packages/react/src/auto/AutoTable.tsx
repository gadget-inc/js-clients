import type { FindManyFunction } from "@gadgetinc/api-client-core";
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
};
