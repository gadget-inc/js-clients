import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ButtonProps, ShadcnElements } from "./elements.js";
type FormContainerT = React.ForwardRefExoticComponent<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>>;
export type ShadcnAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<ComponentProps<FormContainerT>, "action" | "defaultValue">;
export declare const makeDefaultPreventedButton: <Elements extends Pick<ShadcnElements, "Button">>(elements: Elements) => React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
