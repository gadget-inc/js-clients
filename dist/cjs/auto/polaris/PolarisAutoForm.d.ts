import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import type { FormProps } from "@shopify/polaris";
import React from "react";
import type { AutoFormProps } from "../AutoForm.js";
/**
 * Skeleton loader
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   {isLoading ? <AutoFormSkeleton /> : <AutoFormContent />}
 * </AutoForm>
 * ```
 */
export declare const PolarisAutoFormSkeleton: () => React.JSX.Element;
export type PolarisAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = AutoFormProps<GivenOptions, SchemaT, ActionFunc> & Omit<Partial<FormProps>, "action">;
/**
 * Renders a form for an action on a model using Polaris.
 */
export declare const PolarisAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: PolarisAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => React.JSX.Element;
