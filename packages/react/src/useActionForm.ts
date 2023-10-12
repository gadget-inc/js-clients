import type { ActionFunction, AnyModelManager, DefaultSelection, GadgetRecord, Select } from "@gadgetinc/api-client-core";
import { camelize } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useRef } from "react";
import type { FieldErrors, UseFormProps, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import { useAction } from "./useAction.js";
import { useFindBy } from "./useFindBy.js";
import { useFindOne } from "./useFindOne.js";
import type { ErrorWrapper, OptionsType } from "./utils.js";
import { get, set } from "./utils.js";

/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (
  modelManager: AnyModelManager,
  findBy: string | { [key: string]: any },
  options: { select?: Record<string, any>; pause?: boolean }
): [{ data?: GadgetRecord<any>; fetching: boolean; error?: ErrorWrapper }, () => void] => {
  // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
  if (typeof findBy === "string") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFindOne(modelManager as any, findBy, options);
  } else {
    const findByKey = Object.keys(findBy)[0];
    const findByValue = Object.values(findBy)[0];
    const finder = (modelManager as Record<string, any>)[`findBy${camelize(findByKey)}`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (useFindBy as any)(finder, findByValue, options);
  }
};

/**
 * The identity of a record to build a form for
 *
 * - Pass the ID of a record as a string to look up a record by id
 * - Pass a {<fieldValue>: <value>} object to look up a record by some other field. __Note__: a `findBy` function must exist for the field you wish to find the record by.
 *
 * @example
 * // find the user record with ID=123
 * const { isReady, submit } = useActionForm(api.user.update, { record: "123" });
 *
 * @example
 * // find a record by email. `api.user.findByEmail` must exist
 * const { isReady, submit } = useActionForm(api.user.update, { record: { email: "user@gadget.app" } });
 */
export type RecordIdentifier = string | { [key: string]: any };

export type UseActionFormResult<
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  FormContext = any
> = Omit<UseFormReturn<ActionFunc["variablesType"], FormContext>, "handleSubmit"> & {
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
  actionData?: ReturnType<typeof useAction<GivenOptions, SchemaT, ActionFunc, any>>[0]["data"];
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
export const useActionForm = <
  GivenOptions extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any>,
  FormContext = any
>(
  action: ActionFunc,
  options?: UseFormProps<ActionFunc["variablesType"], FormContext> & {
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
    /**
     * The record to run this action on if it has already been fetched.
     * Should be undefined for create actions, or a record for update / etc actions
     * If no record is available, use `findBy` instead.
     */
    record?: ActionFunc["hasReturnType"] extends true
      ? any
      : Partial<
          GadgetRecord<
            Select<
              Exclude<ActionFunc["schemaType"], null | undefined>,
              DefaultSelection<ActionFunc["selectionType"], ActionFunc["optionsType"], ActionFunc["defaultSelection"]>
            >
          >
        >;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: ActionFunc["optionsType"]["select"];
    /**
     * Which fields to send from the form's values when sending it from the backend.
     */
    send?: string[];
    /**
     * Called when the form submits
     */
    onSubmit?: () => void;
    /**
     * Called when the action completes successfully on the backend
     */
    onSuccess?: (actionResult: any) => void;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
  }
): UseActionFormResult<GivenOptions, SchemaT, ActionFunc, FormContext> => {
  const api = useApi();
  const findExistingRecord = !!options?.findBy;
  const hasSetInitialValues = useRef<boolean>(!findExistingRecord);

  // find the existing record if there is one
  const modelManager = (api as any)[action.modelApiIdentifier] as AnyModelManager;
  const [findResult] = useFindExistingRecord(modelManager, options?.findBy || "1", {
    pause: !findExistingRecord,
    select: options?.select,
  });

  const existingRecord = options?.record || findResult.data;
  const isReady = !findExistingRecord || !!existingRecord;

  let defaultValues = options?.defaultValues;
  if (!defaultValues && existingRecord) {
    defaultValues = { [action.modelApiIdentifier]: { ...existingRecord } } as any;
  }

  // setup the react-hook-form object, passing any options from the props
  const { handleSubmit, formState, ...formHook } = useForm<ActionFunc["variablesType"], FormContext>({
    defaultValues,
    ...options,
  });

  // when the default values arrive from the record find later, reset them into the form. react-hook-form doesn't watch the default values after the first render
  useEffect(() => {
    if (isReady && !hasSetInitialValues.current && defaultValues) {
      hasSetInitialValues.current = true;
      formHook.reset(defaultValues);
    }
  }, [isReady, defaultValues, formHook]);

  // get the action runner to run on submit
  const [actionResult, runAction] = useAction(action, { select: options?.select } as any);

  const handleSubmissionError = useCallback(
    (error: Error | FieldErrors<ActionFunc["variablesType"]>) => {
      if ("executionErrors" in error) {
        const executionErrors = (error as unknown as ErrorWrapper).executionErrors;
        for (const executionError of executionErrors) {
          if ("validationErrors" in executionError) {
            for (const validationError of executionError.validationErrors) {
              formHook.setError(`${action.modelApiIdentifier}.${validationError.apiIdentifier}` as any, {
                message: validationError.message,
              });
            }
          } else {
            const codeToReplace = "code" in executionError ? `${executionError.code}: ` : "";
            const message = executionError.message.replace(codeToReplace, "");

            formHook.setError("root", { message });
          }
        }
      }

      options?.onError?.(error);
    },
    [action.modelApiIdentifier, formHook, options]
  );

  const submit = useCallback(
    async (event?: React.BaseSyntheticEvent<object, any, any> | undefined) => {
      let result: any;

      formHook.clearErrors();

      await handleSubmit(
        async (data) => {
          let modelInput = data[action.modelApiIdentifier];
          if (modelInput) {
            modelInput = { ...modelInput };
            delete modelInput.__typename;
            delete modelInput.id;
            delete modelInput.createdAt;
            delete modelInput.updatedAt;
          }

          let variables: Record<string, any> = {
            id: existingRecord ? existingRecord.id : undefined,
            ...data,
            [action.modelApiIdentifier]: modelInput,
          };

          if (options?.send) {
            const unmasked = variables;
            variables = {};
            for (const key of options.send) {
              set(variables, key, get(unmasked, key));
            }
          }

          options?.onSubmit?.();

          result = await runAction(variables as any);
          if (!result.error) {
            options?.onSuccess?.(result.data);
          }
        },
        (errors) => {
          handleSubmissionError(errors);
        }
      )(event);

      if (result?.error) {
        handleSubmissionError(result.error);
      }
    },
    [handleSubmit, formHook, handleSubmissionError, existingRecord, options, action.modelApiIdentifier, runAction]
  );

  const proxiedFormState = new Proxy(formState, {
    get: (target, prop) => {
      if (prop === "isSubmitting") {
        return target.isSubmitting || actionResult.fetching;
      } else if (prop === "isSubmitSuccessful") {
        return target.isSubmitSuccessful && !actionResult.fetching && !actionResult.error;
      } else if (prop === "isLoading") {
        return target.isLoading || findResult.fetching;
      } else {
        return (target as any)[prop];
      }
    },
  });

  return {
    ...formHook,
    formState: proxiedFormState,
    error: findResult.error || actionResult.error,
    submit,
    actionData: actionResult.data,
  };
};
