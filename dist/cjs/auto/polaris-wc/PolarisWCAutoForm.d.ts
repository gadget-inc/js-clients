import type { OptionsType } from "@gadgetinc/client-hooks";
import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/core";
import React from "react";
import type { AutoFormProps } from "../AutoForm.js";
/**
 * Skeleton loader for Polaris Web Components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   {isLoading ? <AutoFormSkeleton /> : <AutoFormContent />}
 * </AutoForm>
 * ```
 */
export declare const PolarisWCAutoFormSkeleton: () => React.JSX.Element;
export type PolarisWCAutoFormProps<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>> = AutoFormProps<GivenOptions, SchemaT, ActionFunc>;
/**
 * Renders a form for an action on a model using Polaris Web Components.
 */
export declare const PolarisWCAutoForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: PolarisWCAutoFormProps<GivenOptions, SchemaT, ActionFunc>) => React.JSX.Element;
