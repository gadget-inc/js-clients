import { type ActionFunction, type GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { DeepPartial, FieldErrors, FieldValues, UseFormProps } from "react-hook-form";
import type { AnyActionWithId, ContextAwareSelect, RecordIdentifier, UseActionFormHookStateData, UseActionFormResult } from "./use-action-form/types.js";
import type { OmittedKey } from "./use-action-form/utils.js";
import type { OptionsType } from "./utils.js";
export * from "react-hook-form";
type ActionFormOptions<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>, ExtraFormVariables extends FieldValues = {}, DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables, ActionResultData = UseActionFormHookStateData<ActionFunc>> = Omit<UseFormProps<ActionFunc["variablesType"] & ExtraFormVariables, any>, "defaultValues"> & {
    defaultValues?: DeepPartial<DefaultValues & {
        [key in OmittedKey]?: any;
    }>;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> ? ContextAwareSelect<ActionFunc["optionsType"]["select"]> : never;
    /**
     * Which fields to send from the form's values when sending it from the backend.
     */
    send?: string[] | (() => string[]);
    /**
     * Called when the form submits
     */
    onSubmit?: () => void;
    /**
     * Called when the action completes successfully on the backend
     */
    onSuccess?: (actionResult: ActionResultData) => void;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
} & (ActionFunc extends AnyActionWithId<GivenOptions> ? {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
} : {});
/**
 * React hook to manage state for a form that calls a Gadget action. `useActionForm` must be passed an action function from an instance of your generated API client library, like `api.user.create`, `api.blogPost.publish` or `api.someGlobalAction`. `useActionForm` returns a `Form` object from `react-hook-form` which can be used to build great form experiences.
 *
 * `useActionForm` manages the Gadget API calls for the form, and handling validation errors returned by the Gadget backend. If your form is for an existing record, `useActionForm` will also fetch the record from the backend and populate the form with the existing values.
 *
 * `useActionForm` doesn't run the action when called. To actually submit the form, call the `submit` function on the returned `Form` object.
 *
 * @see https://react-hook-form.com/
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 */
export declare const useActionForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>, ExtraFormVariables extends FieldValues = {}, FormContext = any>(action: ActionFunc, options?: ActionFormOptions<GivenOptions, SchemaT, ActionFunc, ExtraFormVariables>) => UseActionFormResult<GivenOptions, SchemaT, ActionFunc, ExtraFormVariables, FormContext>;
