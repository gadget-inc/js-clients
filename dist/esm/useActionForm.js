import { camelize } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useApi } from "./GadgetProvider.js";
import { useAction } from "./useAction.js";
import { useFindBy } from "./useFindBy.js";
import { useFindOne } from "./useFindOne.js";
import { get, set } from "./utils.js";
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (modelManager, findBy, options) => {
    // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
    if (typeof findBy === "string") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindOne(modelManager, findBy, options);
    }
    else {
        const findByKey = Object.keys(findBy)[0];
        const findByValue = Object.values(findBy)[0];
        const finder = modelManager[`findBy${camelize(findByKey)}`];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindBy(finder, findByValue, options);
    }
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
export const useActionForm = (action, options) => {
    const api = useApi();
    const isForExistingRecord = !!options?.record;
    const hasSetInitialValues = useRef(!isForExistingRecord);
    // find the existing record if there is one
    const modelManager = api[action.modelApiIdentifier];
    const [findResult] = useFindExistingRecord(modelManager, options?.record || "1", {
        pause: !isForExistingRecord,
        select: options?.select,
    });
    const isReady = !isForExistingRecord || !!findResult.data;
    let defaultValues = options?.defaultValues;
    if (!defaultValues && findResult.data) {
        defaultValues = { [action.modelApiIdentifier]: { ...findResult.data } };
    }
    // setup the react-hook-form object, passing any options from the props
    const { handleSubmit, ...formHook } = useForm({
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
    const [actionResult, runAction] = useAction(action, { select: options?.select });
    const handleSubmissionError = useCallback((error) => {
        if ("executionErrors" in error) {
            const executionErrors = error.executionErrors;
            for (const executionError of executionErrors) {
                const codeToReplace = "code" in executionError ? executionError.code : "";
                const message = executionError.message.replace(codeToReplace, "");
                formHook.setError("root", { message });
                if ("validationErrors" in executionError) {
                    for (const validationError of executionError.validationErrors) {
                        formHook.setError(`${action.modelApiIdentifier}.${validationError.apiIdentifier}`, { message: validationError.message });
                    }
                }
            }
        }
        options?.onError?.(error);
    }, [action.modelApiIdentifier, formHook, options]);
    const submit = useCallback(async (event) => {
        let submitPromise = Promise.resolve();
        const innerHandleSubmit = handleSubmit((data) => {
            let modelInput = data[action.modelApiIdentifier];
            if (modelInput) {
                modelInput = { ...modelInput };
                delete modelInput.__typename;
                delete modelInput.id;
                delete modelInput.createdAt;
                delete modelInput.updatedAt;
            }
            let variables = {
                id: isForExistingRecord ? findResult.data.id : undefined,
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
            submitPromise = runAction(variables).then((result) => {
                if (result.error) {
                    handleSubmissionError(result.error);
                }
                else {
                    options?.onSuccess?.(result.data);
                }
            }, handleSubmissionError);
        }, (errors) => {
            console.log("[gadget] error submitting form", errors);
            handleSubmissionError(errors);
        });
        await innerHandleSubmit(event);
        await submitPromise;
    }, [handleSubmit, handleSubmissionError, findResult.data, options, action.modelApiIdentifier, isForExistingRecord, runAction]);
    return {
        ...formHook,
        fetching: findResult.fetching || actionResult.fetching,
        fetchingInitialData: findResult.fetching,
        fetchingActionData: actionResult.fetching,
        error: findResult.error || actionResult.error,
        submit,
        isReady,
        submissionCompleted: !!actionResult.data,
        actionData: actionResult.data,
    };
};
//# sourceMappingURL=useActionForm.js.map