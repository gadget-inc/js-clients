/// <reference types="react" />
import type { ActionFunction, AnyModelManager } from "@gadgetinc/api-client-core";
import type { FieldErrors, UseFormProps } from "react-hook-form";
import type { ErrorWrapper, OptionsType } from "./utils.js";
/**
 * The identity of a record to build a form for
 *
 * - Pass the ID of a record as a string to look up a record by id
 *
 * - Pass a {<fieldValue>: <value>} object to look up a record by some other field. __Note__: a `findBy` function must exist for the field you wish to find the record by.
 *
 *
 * @example
 * // find the user record with ID=123
 * const { isReady, submit } = useActionForm(api.user.update, { record: "123" });
 *
 * @example
 * // find a record by email. `api.user.findByEmail` must exist
 * const { isReady, submit } = useActionForm(api.user.update, { record: { email: "user@gadget.app" } });
 */
export type RecordIdentifier = string | {
    [key: string]: any;
};
/**
 * React hook to manage state for a form that calls a Gadget action. `useActionForm` must be passed an action function from an instance of your generated API client library, like `api.user.create`, `api.blogPost.publish` or `api.someGlobalAction`. `useActionForm` returns a `Form` object from `react-hook-form` which can be used to build great form experiences.
 *
 * `useActionForm` manages the Gadget API calls for the form, and handling validation errors returned by the Gadget backend. If your form is for an existing record, `useActionForm` will also fetch the record from the backend and populate the form with the existing values.
 *
 * `useActionForm` doesn't run the action wne called. To actually submit the form, call the `submit` function on the returned `Form` object.
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 *
 */
export declare const useActionForm: <GivenOptions extends OptionsType, SchemaT, ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends ActionFunc["optionsType"], FormContext = any>(action: ActionFunc, options?: (Partial<{
    mode: keyof import("react-hook-form").ValidationMode;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: ((payload?: unknown) => Promise<ActionFunc["variablesType"]>) | import("react-hook-form").DefaultValues<ActionFunc["variablesType"]>;
    values: ActionFunc["variablesType"];
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
    resolver: import("react-hook-form").Resolver<ActionFunc["variablesType"], FormContext>;
    context: FormContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    progressive: boolean;
    criteriaMode: import("react-hook-form").CriteriaMode;
    delayError: number;
}> & {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    record?: RecordIdentifier | undefined;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: ActionFunc["optionsType"]["select"] | undefined;
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
}) | undefined) => {
    modelManager: AnyModelManager;
    fetching: boolean;
    error: ErrorWrapper | undefined;
    submit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    isReady: any;
    submissionCompleted: boolean;
    watch: import("react-hook-form").UseFormWatch<ActionFunc["variablesType"]>;
    getValues: import("react-hook-form").UseFormGetValues<ActionFunc["variablesType"]>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<ActionFunc["variablesType"]>;
    setError: import("react-hook-form").UseFormSetError<ActionFunc["variablesType"]>;
    clearErrors: import("react-hook-form").UseFormClearErrors<ActionFunc["variablesType"]>;
    setValue: import("react-hook-form").UseFormSetValue<ActionFunc["variablesType"]>;
    trigger: import("react-hook-form").UseFormTrigger<ActionFunc["variablesType"]>;
    formState: import("react-hook-form").FormState<ActionFunc["variablesType"]>;
    resetField: import("react-hook-form").UseFormResetField<ActionFunc["variablesType"]>;
    reset: import("react-hook-form").UseFormReset<ActionFunc["variablesType"]>;
    unregister: import("react-hook-form").UseFormUnregister<ActionFunc["variablesType"]>;
    control: import("react-hook-form").Control<ActionFunc["variablesType"], FormContext>;
    register: import("react-hook-form").UseFormRegister<ActionFunc["variablesType"]>;
    setFocus: import("react-hook-form").UseFormSetFocus<ActionFunc["variablesType"]>;
};
