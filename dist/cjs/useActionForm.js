"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActionForm = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const utils_js_1 = require("./use-action-form/utils.js");
const useAction_js_1 = require("./useAction.js");
const useGlobalAction_js_1 = require("./useGlobalAction.js");
const utils_js_2 = require("./utils.js");
tslib_1.__exportStar(require("react-hook-form"), exports);
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
    const findExistingRecord = !!options?.findBy;
    const hasSetInitialValues = (0, react_1.useRef)(!findExistingRecord);
    const isModelAction = "modelApiIdentifier" in action;
    // find the existing record if there is one
    const modelManager = isModelAction ? api[action.modelApiIdentifier] : undefined;
    const [findResult] = (0, utils_js_1.useFindExistingRecord)(modelManager, options?.findBy || "1", {
        pause: !findExistingRecord,
        select: options?.select,
    });
    const isReady = !findExistingRecord || !!findResult.data;
    let defaultValues = options?.defaultValues;
    if (isModelAction && findResult.data) {
        const modelDefaultValues = (0, utils_js_1.toDefaultValues)(action.modelApiIdentifier, findResult.data);
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
    const originalFormMethods = (0, react_hook_form_1.useForm)({
        ...options,
        defaultValues: (0, utils_js_1.toDefaultValues)(isModelAction ? action.modelApiIdentifier : undefined, defaultValues),
    });
    const { handleSubmit, formState, ...formHook } = originalFormMethods;
    // when the default values arrive from the record find later, reset them into the form. react-hook-form doesn't watch the default values after the first render
    (0, react_1.useEffect)(() => {
        if (isReady && !hasSetInitialValues.current && defaultValues) {
            hasSetInitialValues.current = true;
            formHook.reset(defaultValues);
        }
    }, [isReady, defaultValues, formHook]);
    // get the action runner to run on submit
    const [actionResult, runAction] = 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    isModelAction ? (0, useAction_js_1.useAction)(action, { select: options?.select }) : (0, useGlobalAction_js_1.useGlobalAction)(action);
    const handleSubmissionError = (0, react_1.useCallback)((error) => {
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
    const submit = (0, react_1.useCallback)(async (event) => {
        let result;
        formHook.clearErrors();
        console.log("where - form state:", formState.dirtyFields, formState.touchedFields, formState.defaultValues);
        await handleSubmit(async (data) => {
            if (isModelAction) {
                if (!action.hasAmbiguousIdentifier && findResult.data) {
                    data = (0, utils_js_1.disambiguateDefaultValues)(data, findResult.data, action);
                }
                data = await (0, utils_js_1.reshapeDataForGraphqlApi)(api, defaultValues, data);
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
                for (const key of typeof options.send === "function" ? options.send(data) : options.send) {
                    (0, utils_js_2.set)(variables, key, (0, utils_js_2.get)(unmasked, key));
                }
            }
            options?.onSubmit?.();
            console.log("where - variables before run action:", data, variables);
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
        originalFormMethods,
    };
};
exports.useActionForm = useActionForm;
//# sourceMappingURL=useActionForm.js.map