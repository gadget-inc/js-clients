"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
const lodash_1 = require("lodash");
__exportStar(require("react-hook-form"), exports);
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
const toDefaultValues = (modelApiIdentifier, data) => {
    data = (0, lodash_1.omit)(data, ["__typename", "id", "createdAt", "updatedAt"]);
    if (data[modelApiIdentifier]) {
        data[modelApiIdentifier] = (0, lodash_1.omit)(data[modelApiIdentifier], ["__typename", "id", "createdAt", "updatedAt"]);
    }
    return data;
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
    const findExistingRecord = !!options?.findBy;
    const hasSetInitialValues = (0, react_1.useRef)(!findExistingRecord);
    // find the existing record if there is one
    const modelManager = api[action.modelApiIdentifier];
    const [findResult] = useFindExistingRecord(modelManager, options?.findBy || "1", {
        pause: !findExistingRecord,
        select: options?.select,
    });
    const isReady = !findExistingRecord || !!findResult.data;
    let defaultValues = options?.defaultValues;
    if (!defaultValues && findResult.data) {
        defaultValues = { [action.modelApiIdentifier]: { ...toDefaultValues(action.modelApiIdentifier, findResult.data) } };
    }
    const existingRecordId = findResult.data?.id ?? defaultValues?.id;
    // setup the react-hook-form object, passing any options from the props
    const { handleSubmit, formState, ...formHook } = (0, react_hook_form_1.useForm)({
        defaultValues: toDefaultValues(action.modelApiIdentifier, defaultValues),
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
                        formHook.setError(`${action.modelApiIdentifier}.${validationError.apiIdentifier}`, {
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
        options?.onError?.(error);
    }, [action.modelApiIdentifier, formHook, options]);
    const submit = (0, react_1.useCallback)(async (event) => {
        let result;
        formHook.clearErrors();
        await handleSubmit(async (data) => {
            let variables = {
                id: existingRecordId,
                ...data,
            };
            if (options?.send) {
                const unmasked = variables;
                variables = {};
                for (const key of options.send) {
                    (0, utils_js_1.set)(variables, key, (0, utils_js_1.get)(unmasked, key));
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
    }, [handleSubmit, formHook, handleSubmissionError, existingRecordId, options, runAction]);
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
        submit,
        actionData: actionResult.data,
    };
};
exports.useActionForm = useActionForm;
//# sourceMappingURL=useActionForm.js.map