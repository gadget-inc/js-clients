/// <reference types="react" resolution-mode="require"/>
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
import { type ButtonProps, type ShadcnElements } from "./elements.js";
export type ShadcnAutoButtonProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ButtonProps;
export type AutoButtonComponent = <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>>(props: ShadcnAutoButtonProps<GivenOptions, SchemaT, ActionFunc>) => JSX.Element;
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export declare const makeAutoButton: ({ Button, toast }: Pick<ShadcnElements, "Button" | "toast">) => AutoButtonComponent;
