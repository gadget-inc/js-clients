import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import { Button } from "@shopify/polaris";
import type { ComponentProps } from "react";
import React from "react";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export declare const PolarisAutoButton: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof Button>) => React.JSX.Element;
