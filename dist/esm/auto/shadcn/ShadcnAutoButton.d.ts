import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { ButtonProps, type ShadcnElements } from "./elements.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export declare const makeAutoButton: <Elements extends ShadcnElements>({ Button, toast }: Elements) => <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ButtonProps) => React.JSX.Element;
