import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import { disambiguateDefaultValues, reshapeDataForGraphqlApi, toDefaultValues, useFindExistingRecord, } from "./use-action-form/utils.js";
import { useAction } from "./useAction.js";
import { useGlobalAction } from "./useGlobalAction.js";
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
export const useActionForm = (action, options) => {
    const api = useApi();
    const findExistingRecord = !!options?.findBy;
    const hasSetInitialValues = useRef(!findExistingRecord);
    const isModelAction = "modelApiIdentifier" in action;
    // find the existing record if there is one
    const modelManager = isModelAction ? api[action.modelApiIdentifier] : undefined;
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
    let existingRecordId = undefined;
    if (findResult.data?.id) {
        existingRecordId = findResult.data.id;
    }
    else if (defaultValues?.id) {
        existingRecordId = defaultValues.id;
    }
    else if (isModelAction && defaultValues?.[action.modelApiIdentifier]?.id) {
        existingRecordId = defaultValues?.[action.modelApiIdentifier]?.id;
    }
    // setup the react-hook-form object, passing any options from the props
    const { handleSubmit, formState, ...formHook } = useForm({
        ...options,
        defaultValues: toDefaultValues(isModelAction ? action.modelApiIdentifier : undefined, defaultValues),
    });
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
    const handleSubmissionError = useCallback((error) => {
        if ("executionErrors" in error) {
            const errorWrapper = error;
            const executionErrors = errorWrapper.executionErrors;
            if (executionErrors.length > 0) {
                for (const executionError of executionErrors) {
                    if ("validationErrors" in executionError) {
                        for (const validationError of executionError.validationErrors) {
                            const errorKey = isModelAction
                                ? `${action.modelApiIdentifier}.${validationError.apiIdentifier}`
                                : validationError.apiIdentifier;
                            formHook.setError(errorKey, {
                                message: validationError.message,
                            });
                        }
                    }
                    else {
                        const codeToReplace = "code" in executionError ? `${executionError.code}: ` : "";
                        const message = executionError.message.replace(codeToReplace, "");
                        formHook.setError("root", { message });
                    }
                }
            }
            else if (errorWrapper.networkError) {
                formHook.setError("root", { message: errorWrapper.networkError.message });
            }
        }
        options?.onError?.(error);
    }, [action, formHook, options, isModelAction]);
    const submit = useCallback(async (event) => {
        let result;
        formHook.clearErrors();
        await handleSubmit(async (data) => {
            if (isModelAction) {
                if (!action.hasAmbiguousIdentifier && findResult.data) {
                    data = disambiguateDefaultValues(data, findResult.data, action);
                }
                data = await reshapeDataForGraphqlApi(api, defaultValues, data);
            }
            let variables = {
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
        }, (errors) => {
            handleSubmissionError(errors);
        })(event);
        if (result?.error) {
            handleSubmissionError(result.error);
        }
        return result;
    }, [
        formHook,
        handleSubmit,
        action,
        isModelAction,
        findResult.data,
        existingRecordId,
        options,
        runAction,
        api,
        defaultValues,
        handleSubmissionError,
    ]);
    const proxiedFormState = new Proxy(formState, {
        get: (target, prop) => {
            if (prop === "isSubmitting") {
                return target.isSubmitting || actionResult.fetching;
            }
            else if (prop === "isSubmitSuccessful") {
                return target.isSubmitSuccessful && !actionResult.fetching && !actionResult.error;
            }
            else if (prop === "isLoading") {
                return target.isLoading || findResult.fetching;
            }
            else {
                return target[prop];
            }
        },
    });
    return {
        ...formHook,
        formState: proxiedFormState,
        error: findResult.error || actionResult.error,
        submit: submit,
        actionData: actionResult.data,
    };
};
//# sourceMappingURL=useActionForm.js.map