import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { FormProps } from "@shopify/polaris";
import React from "react";
import type { OptionsType } from "../../../../utils";
import type { AutoFormProps } from "../../AutoForm";
export declare const PolarisFormSkeleton: () => React.JSX.Element;
/**
 * Renders a form for an action on a model automatically using Polaris
 */
export declare const PolarisAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"]>(props: AutoFormProps<GivenOptions, SchemaT, ActionFunc, Options> & Partial<FormProps>) => string | number | boolean | React.ReactFragment | React.JSX.Element;
