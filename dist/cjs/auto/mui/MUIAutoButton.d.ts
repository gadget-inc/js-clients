import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { LoadingButton } from "@mui/lab";
import type { ComponentProps } from "react";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoButtonProps } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a snackbar notification when the action succeeds or encounters an error by default.
 */
export declare const MUIAutoButton: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoButtonProps<GivenOptions, SchemaT, ActionFunc> & ComponentProps<typeof LoadingButton>) => React.JSX.Element;
