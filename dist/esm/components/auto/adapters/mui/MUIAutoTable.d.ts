import type { FindManyFunction } from "@gadgetinc/api-client-core";
import type { DataGridProps } from "@mui/x-data-grid";
import React from "react";
import type { OptionsType } from "../../../../utils";
import type { AutoTableProps } from "../../AutoTable";
/**
 * Renders a table of records from the backend automatically for a given model using MUI
 */
export declare const MUIAutoTable: <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options> & Omit<Partial<import("@mui/x-data-grid/internals").DataGridPropsWithDefaultValues> & import("@mui/x-data-grid/internals").DataGridPropsWithComplexDefaultValueBeforeProcessing & import("@mui/x-data-grid/internals").DataGridPropsWithoutDefaultValue<any>, import("@mui/x-data-grid/models/props/DataGridProps").DataGridForcedPropsKey> & {
    pagination?: true | undefined;
}) => React.JSX.Element;
