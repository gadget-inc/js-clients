import type { FindManyFunction } from "@gadgetinc/api-client-core";
import React from "react";
import type { OptionsType } from "../../utils";
import type { AutoTableProps } from "../AutoTable";
/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export declare const PolarisAutoTable: <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) => React.JSX.Element;
