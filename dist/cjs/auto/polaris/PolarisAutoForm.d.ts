import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import React from "react";
import type { OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
export declare const PolarisFormSkeleton: () => React.JSX.Element;
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export declare const PolarisAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action">) => string | number | true | Iterable<React.ReactNode> | React.JSX.Element;
