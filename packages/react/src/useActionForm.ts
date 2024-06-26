import type { ActionFunction, AnyModelManager, GlobalActionFunction } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useRef } from "react";
import type { DeepPartial, FieldErrors, FieldValues, UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import type {
  RecordIdentifier,
  UseActionFormHookStateData,
  UseActionFormResult,
  UseActionFormState,
  UseActionFormSubmit,
} from "./use-action-form/types.js";
import {
  disambiguateDefaultValues,
  reshapeDataForGraphqlApi,
  toDefaultValues,
  useFindExistingRecord,
  type OmittedKey,
} from "./use-action-form/utils.js";
import { useAction } from "./useAction.js";
import { useGlobalAction } from "./useGlobalAction.js";
import type { ErrorWrapper, OptionsType } from "./utils.js";
import { get, set } from "./utils.js";

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
export const useActionForm = <
  GivenOptions extends OptionsType,
  SchemaT,
  ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ExtraFormVariables extends FieldValues = {},
  FormContext = any,
  ActionResultData = UseActionFormHookStateData<ActionFunc>,
  DefaultValues = ActionFunc["variablesType"] & ExtraFormVariables
>(
  action: ActionFunc,
  options?: Omit<UseFormProps<ActionFunc["variablesType"] & ExtraFormVariables, FormContext>, "defaultValues"> & {
    defaultValues?: DeepPartial<DefaultValues & { [key in OmittedKey]?: any }>;
    /**
     * The record identifier to run this action on, if it already exists.
     * Should be undefined for create actions, or a record ID (or finder) for update / etc actions
     **/
    findBy?: RecordIdentifier;
    /**
     * Which fields to select on from the record when retrieving it from the backend.
     */
    select?: ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> ? ActionFunc["optionsType"]["select"] : never;
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
    onSuccess?: (actionResult: ActionResultData) => void;
    /**
     * Called when the form submission errors before sending, during the API call, or if the API call returns an error.
     */
    onError?: (error: Error | FieldErrors<ActionFunc["variablesType"]>) => void;
  }
): UseActionFormResult<GivenOptions, SchemaT, ActionFunc, ExtraFormVariables, FormContext> => {
  const api = useApi();
  const findExistingRecord = !!options?.findBy;
  const hasSetInitialValues = useRef<boolean>(!findExistingRecord);
  const isModelAction = "modelApiIdentifier" in action;

  // find the existing record if there is one
  const modelManager = isModelAction ? ((api as any)[action.modelApiIdentifier] as AnyModelManager) : undefined;
  const [findResult] = useFindExistingRecord(modelManager, options?.findBy || "1", {
    pause: !findExistingRecord,
    select: options?.select,
  });

  const isReady = !findExistingRecord || !!findResult.data;

  let defaultValues = options?.defaultValues;
  if (isModelAction && findResult.data) {
    const modelDefaultValues = toDefaultValues(action.modelApiIdentifier, findResult.data);
    defaultValues = action.hasAmbiguousIdentifier
      ? { ...options?.defaultValues, [action.modelApiIdentifier]: modelDefaultValues }
      : { ...options?.defaultValues, ...modelDefaultValues, [action.modelApiIdentifier]: modelDefaultValues };
  }

  let existingRecordId: string | undefined = undefined;

  if (findResult.data?.id) {
    existingRecordId = findResult.data.id;
  } else if (defaultValues?.id) {
    existingRecordId = defaultValues.id;
  } else if (isModelAction && (defaultValues as any)?.[action.modelApiIdentifier]?.id) {
    existingRecordId = (defaultValues as any)?.[action.modelApiIdentifier]?.id;
  }

  // setup the react-hook-form object, passing any options from the props

  const originalFormMethods = useForm<ActionFunc["variablesType"], FormContext>({
    ...options,
    defaultValues: toDefaultValues(isModelAction ? action.modelApiIdentifier : undefined, defaultValues),
  });
  const { handleSubmit, formState, ...formHook } = originalFormMethods;

  // when the default values arrive from the record find later, reset them into the form. react-hook-form doesn't watch the default values after the first render
  useEffect(() => {
    if (isReady && !hasSetInitialValues.current && defaultValues) {
      hasSetInitialValues.current = true;
      formHook.reset(defaultValues);
    }
  }, [isReady, defaultValues, formHook]);

  // get the action runner to run on submit
  const [actionResult, runAction] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isModelAction ? useAction(action, { select: options?.select }) : useGlobalAction(action);

  const handleSubmissionError = useCallback(
    (error: Error | FieldErrors<ActionFunc["variablesType"]>) => {
      if ("executionErrors" in error) {
        const errorWrapper = error as unknown as ErrorWrapper;
        const executionErrors = errorWrapper.executionErrors;

        if (executionErrors.length > 0) {
          for (const executionError of executionErrors) {
            if ("validationErrors" in executionError) {
              for (const validationError of executionError.validationErrors) {
                const errorKey = isModelAction
                  ? `${action.modelApiIdentifier}.${validationError.apiIdentifier}`
                  : validationError.apiIdentifier;
                formHook.setError(errorKey as any, {
                  message: validationError.message,
                });
              }
            } else {
              const codeToReplace = "code" in executionError ? `${executionError.code}: ` : "";
              const message = executionError.message.replace(codeToReplace, "");

              formHook.setError("root", { message });
            }
          }
        } else if (errorWrapper.networkError) {
          formHook.setError("root", { message: errorWrapper.networkError.message });
        }
      }

      options?.onError?.(error);
    },
    [action, formHook, options, isModelAction]
  );

  const submit = useCallback(
    async (event?: React.BaseSyntheticEvent<object, any, any> | undefined) => {
      let result: any;

      formHook.clearErrors();

      await handleSubmit(
        async (data) => {
          if (isModelAction) {
            if (!action.hasAmbiguousIdentifier && findResult.data) {
              data = disambiguateDefaultValues(data, findResult.data, action);
            }

            data = await reshapeDataForGraphqlApi(api, defaultValues, data);
          }

          let variables: ActionFunc["variablesType"] = {
            ...data,
          };

          if (existingRecordId) {
            variables.id = existingRecordId;
          }

          if (options?.send) {
            const unmasked = variables;
            variables = {};
            for (const key of options.send) {
              set(variables, key, get(unmasked, key));
            }
          }

          options?.onSubmit?.();

          result = await runAction(variables);
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

      return result;
    },
    [
      formHook,
      handleSubmit,
      isModelAction,
      existingRecordId,
      options,
      runAction,
      action,
      findResult.data,
      api,
      defaultValues,
      handleSubmissionError,
    ]
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
  }) as unknown as UseActionFormState<ActionFunc, ActionFunc["variablesType"] & ExtraFormVariables, FormContext>;

  return {
    ...formHook,
    formState: proxiedFormState,
    error: findResult.error || actionResult.error,
    submit: submit as unknown as UseActionFormSubmit<ActionFunc>,
    actionData: actionResult.data,
    originalFormMethods,
  };
};
