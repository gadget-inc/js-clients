import type { FindManyFunction } from "@gadgetinc/api-client-core";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoTableProps } from "../AutoTable.js";
export type PolarisAutoTableProps<GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>;
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export declare const PolarisAutoTable: <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: PolarisAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) => React.JSX.Element;
