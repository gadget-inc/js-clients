import type { OptionsType } from "@gadgetinc/client-hooks";
import type { FindManyFunction } from "@gadgetinc/core";
import React from "react";
import type { AutoTableProps } from "../AutoTable.js";
export type PolarisAutoTableProps<GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options> & {
    /**
     * Condenses the table to avoid horizontal scrolling. Defaults to `false`.
     */
    condensed?: boolean;
    /**
     * Adds zebra striping to table rows. Defaults to `false`.
     */
    hasZebraStriping?: boolean;
    /**
     * Keeps last column always visible. Defaults to `false`.
     */
    lastColumnSticky?: boolean;
};
/**
 * Renders a table of records from given model using Shopify Polaris
 * @example
 * ```tsx
 * <AutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
export declare const PolarisAutoTable: <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: PolarisAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) => React.JSX.Element;
