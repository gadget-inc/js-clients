"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionForm = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const useAction_js_1 = require("./useAction.js");
const useFindBy_js_1 = require("./useFindBy.js");
const useFindOne_js_1 = require("./useFindOne.js");
const utils_js_1 = require("./utils.js");
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (modelManager, findBy, options) => {
    // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
    if (typeof findBy === "string") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, useFindOne_js_1.useFindOne)(modelManager, findBy, options);
    }
    else {
        const findByKey = Object.keys(findBy)[0];
        const findByValue = Object.values(findBy)[0];
        const finder = modelManager[`findBy${(0, api_client_core_1.camelize)(findByKey)}`];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindBy_js_1.useFindBy(finder, findByValue, options);
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
const useActionForm = (action, options) => {
    const api = (0, GadgetProvider_js_1.useApi)();
    const isForExistingRecord = !!options?.record;
    const hasSetInitialValues = (0, react_1.useRef)(!isForExistingRecord);
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
    const { handleSubmit, formState, ...formHook } = (0, react_hook_form_1.useForm)({
        defaultValues,
        ...options,
    });
    // when the default values arrive from the record find later, reset them into the form. react-hook-form doesn't watch the default values after the first render
    (0, react_1.useEffect)(() => {
        if (isReady && !hasSetInitialValues.current && defaultValues) {
            hasSetInitialValues.current = true;
            formHook.reset(defaultValues);
        }
    }, [isReady, defaultValues, formHook]);
    // get the action runner to run on submit
    const [actionResult, runAction] = (0, useAction_js_1.useAction)(action, { select: options?.select });
    const handleSubmissionError = (0, react_1.useCallback)((error) => {
        if ("executionErrors" in error) {
            const executionErrors = error.executionErrors;
            for (const executionError of executionErrors) {
                if ("validationErrors" in executionError) {
                    for (const validationError of executionError.validationErrors) {
                        formHook.setError(`${action.modelApiIdentifier}.${validationError.apiIdentifier}`, { message: validationError.message });
                    }
                }
                else {
                    const codeToReplace = "code" in executionError ? `${executionError.code}: ` : "";
                    const message = executionError.message.replace(codeToReplace, "");
                    formHook.setError("root", { message });
                }
            }
        }
        formHook.reset(undefined, {
            keepErrors: true,
            keepValues: true,
            keepDirty: true,
            keepDirtyValues: true,
            keepTouched: true,
            keepIsValid: true,
            keepSubmitCount: true,
        });
        options?.onError?.(error);
    }, [action.modelApiIdentifier, formHook, options]);
    const submit = (0, react_1.useCallback)(async (event) => {
        formHook.reset(undefined, {
            keepValues: true,
            keepDirty: true,
            keepDirtyValues: true,
            keepTouched: true,
            keepIsValid: true,
            keepIsSubmitted: true,
            keepSubmitCount: true,
        });
        await handleSubmit(async (data) => {
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
                    (0, utils_js_1.set)(variables, key, (0, utils_js_1.get)(unmasked, key));
                }
            }
            options?.onSubmit?.();
            const result = await runAction(variables);
            if (result.error) {
                handleSubmissionError(result.error);
            }
            else {
                options?.onSuccess?.(result.data);
            }
        }, (errors) => {
            handleSubmissionError(errors);
        })(event);
    }, [handleSubmit, handleSubmissionError, findResult.data, options, action.modelApiIdentifier, isForExistingRecord, runAction]);
    return {
        ...formHook,
        formState: {
            ...formState,
            isSubmitting: formState.isSubmitting || actionResult.fetching,
            isSubmitSuccessful: formState.isSubmitSuccessful && !!actionResult.data && !actionResult.error,
            isLoading: formState.isLoading || findResult.fetching,
        },
        fetching: findResult.fetching || actionResult.fetching,
        fetchingInitialData: findResult.fetching,
        fetchingActionData: actionResult.fetching,
        error: findResult.error || actionResult.error,
        submit,
        actionData: actionResult.data,
    };
};
exports.useActionForm = useActionForm;
//# sourceMappingURL=useActionForm.js.map