import type { ActionFunction } from "@gadgetinc/api-client-core";
import type { ComponentProps } from "react";
import React from "react";
import { type OptionsType } from "../../utils.js";
import type { AutoFormProps } from "../AutoForm.js";
import type { ShadcnElements } from "./elements.js";
/**
 * Renders a form for an action on a model automatically using Shadcn
 */
export declare const makeAutoForm: <Elements extends ShadcnElements>({ Form, Input, Button, Alert, Skeleton, AlertTitle, AlertDescription, Label, Checkbox, }: Elements) => <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>>(props: {
    action: ActionFunc;
    record?: any;
    include?: string[] | undefined;
    exclude?: string[] | undefined;
    defaultValues?: (ActionFunc["variablesType"] & Record<string, unknown>) | undefined;
    submitLabel?: React.ReactNode;
    successContent?: React.ReactNode;
    title?: string | false | undefined;
    select?: GivenOptions["select"] | undefined;
    onSuccess?: ((record: import("../../use-action-form/types.js").UseActionFormHookStateData<ActionFunc>) => void) | undefined;
    onFailure?: ((error: Error | import("../../useActionForm.js").FieldErrors<ActionFunc["variablesType"]>) => void) | undefined;
    children?: React.ReactNode;
    debug?: boolean | undefined;
} & (ActionFunc extends import("../../use-action-form/types.js").AnyActionWithId<GivenOptions> ? {
    findBy?: import("../../use-action-form/types.js").RecordIdentifier | undefined;
} : {}) & import("./elements.js").BaseProps) => React.JSX.Element;
