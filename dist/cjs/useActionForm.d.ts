import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { DeepPartial, FieldErrors, FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { useAction } from "./useAction.js";
import { useGlobalAction } from "./useGlobalAction.js";
import type { ErrorWrapper, OptionsType } from "./utils.js";
export * from "react-hook-form";
declare const OmittedKeys: readonly ["__typename", "id", "createdAt", "updatedAt"];
type OmittedKey = (typeof OmittedKeys)[number];
/**
 * The identity of a record to build a form for
 *
 * - Pass the ID of a record as a string to look up a record by id
 * - Pass a {<fieldValue>: <value>} object to look up a record by some other field. __Note__: a `findBy` function must exist for the field you wish to find the record by.
 *
 * @example
 * // find the user record with ID=123
 * const { submit } = useActionForm(api.user.update, { record: "123" });
 *
 * @example
 * // find a record by email. `api.user.findByEmail` must exist
 * const { submit } = useActionForm(api.user.update, { record: { email: "user@gadget.app" } });
 */
export type RecordIdentifier = string | {
    [key: string]: any;
};
export type UseActionFormResult<GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>, FormVariables extends FieldValues, FormContext = any> = Omit<UseFormReturn<FormVariables, FormContext>, "handleSubmit"> & {
    /**
     * Any error that occurred during initial data fetching or action submission
     */
    error?: ErrorWrapper | Error | null;
    /**
     * Function to call to submit the form
     */
    submit: () => Promise<void>;
    /**
     * The data resulting from running the action
     */
    actionData?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> ? ReturnType<typeof useAction<GivenOptions, SchemaT, ActionFunc, any>>[0]["data"] : ReturnType<typeof useGlobalAction<any>>[0]["data"];
};
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
export declare const useActionForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends GlobalActionFunction<any> | ActionFunction<GivenOptions, any, any, SchemaT, any>, ExtraFormVariables = {}, FormContext = any, FormVariables extends FieldValues = ActionFunc["variablesType"] & ExtraFormVariables>(action: ActionFunc, options?: (Omit<Partial<{
    mode: keyof import("react-hook-form").ValidationMode;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: ((payload?: unknown) => Promise<FormVariables>) | import("react-hook-form").DefaultValues<FormVariables>;
    values: FormVariables;
    resetOptions: Partial<{
        keepDirtyValues: boolean;
        keepErrors: boolean;
        keepDirty: boolean;
        keepValues: boolean;
        keepDefaultValues: boolean;
        keepIsSubmitted: boolean;
        keepTouched: boolean;
        keepIsValid: boolean;
        keepSubmitCount: boolean;
    }> | undefined;
    resolver: import("react-hook-form").Resolver<FormVariables, FormContext>;
    context: FormContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: import("react-hook-form").CriteriaMode;
    delayError: number;
}>, "defaultValues"> & {
    defaultValues?: (DeepPartial<FormVariables> & {
        id?: any;
        __typename?: any;
        createdAt?: any;
        updatedAt?: any;
    }) | undefined;
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
     */
    send?: string[] | undefined;
    /**
     * Called when the form submits
     */
    onSubmit?: (() => void) | undefined;
    /**
     * Called when the action completes successfully on the backend
     */
    onSuccess?: ((actionResult: any) => void) | undefined;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: ((error: Error | FieldErrors<ActionFunc["variablesType"]>) => void) | undefined;
}) | undefined) => UseActionFormResult<GivenOptions, SchemaT, ActionFunc, FormVariables, FormContext>;
