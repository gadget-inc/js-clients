import type { OptionsType } from "@gadgetinc/client-hooks";
import type { FindManyFunction } from "@gadgetinc/core";
import React from "react";
import type { AutoTableProps } from "../AutoTable.js";
export type PolarisWCAutoTableProps<GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>;
/**
 * Renders a table of records from a given model using Shopify Polaris Web Components
 * @example
 * ```tsx
 * <PolarisWCAutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
export declare const PolarisWCAutoTable: <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: PolarisWCAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) => React.JSX.Element;
