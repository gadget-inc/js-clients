import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { GridProps } from "@mui/material";
import React from "react";
import type { OptionsType } from "../../utils.js";
import { type AutoFormProps } from "../AutoForm.js";
export declare const MUIFormSkeleton: () => React.JSX.Element;
export type MUIAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & GridProps;
/**
 * Renders a form for an action on a model automatically using MUI
 */
export declare const MUIAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: MUIAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => string | number | true | Iterable<React.ReactNode> | React.JSX.Element;
