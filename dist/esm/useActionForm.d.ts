import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { DeepPartial, FieldErrors, FieldValues, UseFormProps } from "react-hook-form";
import type { RecordIdentifier, UseActionFormHookStateData, UseActionFormResult } from "./use-action-form/types.js";
import { type OmittedKey } from "./use-action-form/utils.js";
import type { OptionsType } from "./utils.js";
export * from "react-hook-form";
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
export declare const useActionForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>, ExtraFormVariables extends FieldValues = {}, FormContext = any, ActionResultData = UseActionFormHookStateData<ActionFunc>, DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables>(action: ActionFunc, options?: (Omit<Partial<{
    mode: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
    disabled: boolean;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: ((payload?: unknown) => Promise<ActionFunc["variablesType"] & ExtraFormVariables>) | import("react-hook-form").DefaultValues<ActionFunc["variablesType"] & ExtraFormVariables>;
    values: ActionFunc["variablesType"] & ExtraFormVariables;
    resetOptions: Partial<{
        keepDirtyValues: boolean;
        keepErrors: boolean;
        keepDirty: boolean;
        keepValues: boolean;
        keepDefaultValues: boolean;
        keepIsSubmitted: boolean;
        keepIsSubmitSuccessful: boolean;
        keepTouched: boolean;
        keepIsValid: boolean;
        keepSubmitCount: boolean;
    }> | undefined;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    resolver: import("react-hook-form").Resolver<ActionFunc["variablesType"] & ExtraFormVariables, FormContext>;
    context: FormContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: import("react-hook-form").CriteriaMode;
    delayError: number;
}>, "defaultValues"> & {
    defaultValues?: DeepPartial<DefaultValues & {
        id?: any;
        createdAt?: any;
        updatedAt?: any;
        __typename?: any;
    }> | undefined;
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier | undefined;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: (ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> ? ActionFunc["optionsType"]["select"] : never) | undefined;
    /**
     * Which fields to send from the form's values when sending it from the backend.
     * It can be a list of field API identifiers, or a function that takes the form's values and returns a list of field API identifiers.
     */
    send?: string[] | ((data: ActionFunc["variablesType"]) => string[]) | undefined;
    /**
     * Called when the form submits
     */
    onSubmit?: (() => void) | undefined;
    /**
     * Called when the action completes successfully on the backend
     */
    onSuccess?: ((actionResult: ActionResultData) => void) | undefined;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: ((error: Error | FieldErrors<ActionFunc["variablesType"]>) => void) | undefined;
}) | undefined) => UseActionFormResult<GivenOptions, SchemaT, ActionFunc, ExtraFormVariables, FormContext>;
