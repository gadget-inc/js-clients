import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
export declare const MUIFormSkeleton: () => React.JSX.Element;
export type MUIAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]> = AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options> & GridProps;
/**
 * Renders a form for an action on a model automatically using MUI
 */
export declare const MUIAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]>(props: MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc, Options>) => string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element;
