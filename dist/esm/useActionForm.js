import { disambiguateActionVariables } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import { applyDataMask, disambiguateDefaultValues, getReadOnlyPaths, processDefaultValues, reshapeDataForGraphqlApi, toDefaultValues, transformContextAwareToSelect, useFindExistingRecord, } from "./use-action-form/utils.js";
import { useAction } from "./useAction.js";
import { useGlobalAction } from "./useGlobalAction.js";
import { get, getModelManager, set } from "./utils.js";
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
    const findById = options && "findBy" in options ? options.findBy : undefined;
    const throwOnInvalidFindByObject = options && "findBy" in options ? options?.throwOnInvalidFindByObject ?? true : true;
    const pause = options && "pause" in options ? options.pause : undefined;
    const api = useApi();
    const findExistingRecord = !!findById;
    const hasSetInitialValues = useRef(!findExistingRecord);
    const isModelAction = "modelApiIdentifier" in action;
    const actionSelect = options?.select ? transformContextAwareToSelect(options.select) : undefined;
    // find the existing record if there is one
    const modelManager = isModelAction ? getModelManager(api, action.modelApiIdentifier, action.namespace) : undefined;
    const [findResult] = useFindExistingRecord(modelManager, findById || "1", {
        pause: pause || !findExistingRecord,
        select: actionSelect,
        throwOnInvalidFindByObject,
    });
    const isReady = !findExistingRecord || !!findResult.data;
    let defaultValues = options?.defaultValues;
    if (isModelAction && findResult.data) {
        defaultValues = processDefaultValues({
            hasAmbiguousDefaultValues: action.hasAmbiguousIdentifier ?? false,
            modelApiIdentifier: action.modelApiIdentifier,
            defaultValues: options?.defaultValues,
            data: findResult.data,
        });
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
    const originalFormMethods = useForm({
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
    isModelAction ? useAction(action, { select: actionSelect }) : useGlobalAction(action);
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
            if (options?.debug) {
                console.debug("[useActionForm] form submitted", {
                    hasAmbiguousIdentifier: isModelAction && action.hasAmbiguousIdentifier,
                    existingRecordId,
                    defaultValues,
                    data,
                    findResultData: findResult.data,
                });
            }
            if (isModelAction) {
                if (!action.hasAmbiguousIdentifier) {
                    if (findResult.data) {
                        // if we fetched initial data, we can detect which set of data changed, either the shorthand or fully qualified form. disambiguate using the data aware disambiguator
                        data = disambiguateDefaultValues(data, findResult.data, action);
                    }
                    else {
                        // if we didn't fetch initial data, the data won't be in both the shorthand and longhand spots, so use the normal variables disambiguator we use for actions by default
                        data = disambiguateActionVariables(action, data);
                    }
                }
                if (options?.debug) {
                    console.debug("[useActionForm] disambiguated data", {
                        data,
                    });
                }
                if (options?.select || options?.send) {
                    data = applyDataMask({
                        data,
                        modelApiIdentifier: action.modelApiIdentifier,
                        select: options.select,
                        send: options.send,
                    });
                }
                if (options?.debug) {
                    console.debug("[useActionForm] reshaping data for graphql api", {
                        data,
                        defaultValues,
                    });
                }
                data = await reshapeDataForGraphqlApi(api, defaultValues, data);
                if (options?.debug) {
                    console.debug("[useActionForm] reshaped data for graphql api", {
                        data,
                    });
                }
            }
            let variables = {
                ...data,
            };
            if (existingRecordId) {
                variables.id = existingRecordId;
            }
            if (!isModelAction) {
                if (options?.send) {
                    const unmasked = variables;
                    variables = {};
                    for (const key of typeof options.send === "function" ? options.send() : options.send) {
                        set(variables, key, get(unmasked, key));
                    }
                }
            }
            options?.onSubmit?.();
            if (options?.debug) {
                console.debug("[useActionForm] running action", {
                    variables,
                });
            }
            result = await runAction(variables);
            if (!result.error) {
                options?.onSuccess?.(result.data);
                if (isModelAction && result.data) {
                    if (findExistingRecord) {
                        const newDefaultValues = processDefaultValues({
                            data: result.data,
                            defaultValues: options?.defaultValues,
                            modelApiIdentifier: action.modelApiIdentifier,
                            hasAmbiguousDefaultValues: action.hasAmbiguousIdentifier ?? false,
                        });
                        formHook.reset(newDefaultValues, { keepValues: true });
                    }
                    if (options?.select) {
                        const readOnlyPaths = getReadOnlyPaths(options.select);
                        for (const path of readOnlyPaths) {
                            const value = get(result.data, path);
                            formHook.setValue(path, value);
                            formHook.setValue(`${action.modelApiIdentifier}.${path}`, value);
                        }
                    }
                }
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
        isModelAction,
        existingRecordId,
        options,
        runAction,
        action,
        findResult.data,
        api,
        defaultValues,
        findExistingRecord,
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
            else if (prop === "isReady") {
                return isReady;
            }
            else {
                return target[prop];
            }
        },
    });
    if (options?.debug) {
        console.debug("[useActionForm] rendering form hook", {
            isReady,
            hasSetInitialValues: hasSetInitialValues.current,
            hasAmbiguousIdentifier: isModelAction && action.hasAmbiguousIdentifier,
            isModelAction,
            findExistingRecord,
            findResult,
            actionResult,
            defaultValues,
            existingRecordId,
            modelApiIdentifier: isModelAction ? action.modelApiIdentifier : undefined,
            actionSelect,
        });
    }
    return {
        ...formHook,
        formState: proxiedFormState,
        error: findResult.error || actionResult.error,
        submit: submit,
        actionData: actionResult.data,
        originalFormMethods,
    };
};
//# sourceMappingURL=useActionForm.js.map