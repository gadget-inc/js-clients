import { type FindManyFunction } from "@gadgetinc/api-client-core";
import * as React from "react";
import { type OptionsType } from "../../utils.js";
import { type AutoTableProps } from "../AutoTable.js";
import type { ShadcnElements } from "./elements.js";
export type ShadcnAutoTableProps<GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>;
/**
 * Renders a table for a model automatically using Shadcn
 */
export declare const makeAutoTable: (elements: ShadcnElements) => <GivenOptions extends OptionsType, SchemaT, FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends FinderFunction["optionsType"]>(props: ShadcnAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) => React.JSX.Element;
