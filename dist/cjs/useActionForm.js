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
exports.useActionForm = exports.reshapeDataForGraphqlApi = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("./GadgetProvider.js");
const useAction_js_1 = require("./useAction.js");
const useFindBy_js_1 = require("./useFindBy.js");
const useFindOne_js_1 = require("./useFindOne.js");
const useGlobalAction_js_1 = require("./useGlobalAction.js");
const utils_js_1 = require("./utils.js");
__exportStar(require("react-hook-form"), exports);
/** Finds a given record from the backend database by either id or a `{[field: string]: value}` slug */
const useFindExistingRecord = (modelManager, findBy, options) => {
    // for simplicity, we conditionally call either the findBy or findOne hook. this violates the rules of hooks, but is a LOT simpler than mounting and pausing both hooks and massaging the results of each together. this means we don't support the same form toggling from being for a record found by id and then later a record found by some other criteria, but that's a very rare use case. you can workaround this by adding a `key` prop to the component calling `useActionForm`, and having the value change when the find method changes, which will give different instance of the component and avoid the hook order changing.
    if (modelManager && typeof findBy === "string") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, useFindOne_js_1.useFindOne)(modelManager, findBy, options);
    }
    else if (modelManager) {
        const [findByKey, findByValue] = Object.entries(findBy)[0];
        const finder = modelManager[`findBy${(0, api_client_core_1.camelize)(findByKey)}`];
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useFindBy_js_1.useFindBy(finder, findByValue, options);
    }
    else {
        return [
            { fetching: false },
            () => {
                // noop
            },
        ];
    }
};
const OmittedKeys = ["id", "createdAt", "updatedAt", "__typename"];
const omitKeys = (data) => {
    const newData = { ...data };
    for (const key of OmittedKeys) {
        delete newData[key];
    }
    return newData;
};
const toDefaultValues = (modelApiIdentifier, data) => {
    data = omitKeys(data);
    if (modelApiIdentifier && data[modelApiIdentifier] && typeof data[modelApiIdentifier] === "object") {
        data[modelApiIdentifier] = omitKeys(data[modelApiIdentifier]);
    }
    return unwindEdges(data);
};
const unwindEdges = (input) => {
    if (input !== null || (input !== undefined && typeof input === "object")) {
        if (Array.isArray(input)) {
            return input.map(unwindEdges);
        }
        if (input !== null && typeof input === "object") {
            if (input.edges && Array.isArray(input.edges)) {
                return input.edges.map((edge) => unwindEdges(edge.node));
            }
            const result = {};
            for (const key of Object.keys(input)) {
                result[key] = unwindEdges(input[key]);
            }
            return result;
        }
        return input;
    }
};
const disambiguateDefaultValues = (data, initialData, action) => {
    const initialKeys = Object.keys(initialData).filter((key) => !OmittedKeys.includes(key));
    const result = Object.fromEntries(Object.entries(data).flatMap(([key, value]) => {
        if (initialKeys.includes(key)) {
            return [];
        }
        return [[key, value]];
    }));
    const modelData = { ...data[action.modelApiIdentifier] };
    for (const key of Object.keys(modelData)) {
        const initialValue = initialData[key];
        if (!!data[action.modelApiIdentifier] &&
            typeof data[action.modelApiIdentifier] === "object" &&
            key in data[action.modelApiIdentifier] &&
            initialValue !== data[action.modelApiIdentifier][key]) {
            modelData[key] = data[action.modelApiIdentifier][key];
        }
        else if (key in data && initialValue !== data[key]) {
            modelData[key] = data[key];
        }
    }
    result[action.modelApiIdentifier] = modelData;
    return result;
};
function getUpdates(data) {
    const updateList = {};
    function traverse(input, path = undefined, depth = 0) {
        if (Array.isArray(input)) {
            return input.map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return traverse(item, currentPath, depth + 1);
            });
        }
        else if (input !== undefined && input !== null && typeof input === "object") {
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                result[key] = traverse(input[key], currentPath, depth + 1);
            }
            if (depth > 1) {
                const newPath = path?.substring(0, path.length - 2);
                if ("id" in input) {
                    if (!updateList[newPath]) {
                        updateList[newPath] = [];
                    }
                    updateList[newPath].push(input["id"]);
                }
            }
            return result;
        }
        return input;
    }
    traverse(data);
    return updateList;
}
const reshapeDataForGraphqlApi = async (client, defaultValues, data) => {
    const referencedTypes = client[api_client_core_1.$modelRelationships];
    if (!referencedTypes) {
        throw new Error("No Gadget model metadata found -- please ensure you are using the latest version of the API client for your app");
    }
    const updates = getUpdates(defaultValues); // grab the updates from default values to see what needs to be created, updated, or deleted
    function transform(input, depth = 0, path = undefined, fieldType = null, fieldRelationships = null) {
        if (Array.isArray(input)) {
            // If the input is an array, we need to handle it differently
            const results = [];
            const edge = updates[path]; // grab the list of ids from the updates object, based on the path
            const handled = [];
            if (edge) {
                // if there are ids in the updates object, we need to handle them first
                results.push(edge.map((nodeId, nodeIndex) => {
                    // for each id, find the corresponding item in the input array
                    const item = input.find((item) => item.id == nodeId); // find the item in the input array that matches the id
                    if (!item) {
                        // if the item is not found, we need to delete it from the updates object as well as anything that references it
                        const updateEntries = Object.entries(updates); // grab all the entries from the updates object
                        const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path + "." + nodeIndex));
                        if (updateEntry) {
                            // if we find an entry that matches the path, we need to delete it from the updates object
                            const { 0: updatePath, 1: _ } = updateEntry;
                            delete updates[updatePath];
                        }
                        return { delete: { id: nodeId } };
                    }
                    else {
                        const index = input.findIndex((item) => item.id == nodeId);
                        delete updates[path][nodeIndex]; // delete the id from the updates object so it's not handled again
                        handled.push(index);
                        const currentPath = path ? `${path}.${index}` : index.toString();
                        return transform(item, depth + 1, currentPath, fieldType, fieldRelationships); // transform the item
                    }
                }));
            }
            // handle the rest of the array - anything that wasn't in the updates object
            results.push(input
                .filter((_item, index) => !handled.includes(index))
                .map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return transform(item, depth + 1, currentPath, fieldType, fieldRelationships);
            }));
            return results.flatMap((result) => result);
        }
        else if (input != null && typeof input === "object") {
            // if the input is an object, we need to handle it differently
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                const fieldType = fieldRelationships ? fieldRelationships[key] : null;
                const relationships = fieldType ? referencedTypes?.[fieldType.model] : referencedTypes?.[key]; //
                result[key] = transform(input[key], depth + 1, currentPath, fieldType, relationships);
            }
            const { __typename, ...rest } = result;
            let belongsTo = null;
            const belongsToRelationships = fieldRelationships // grab the belongsTo relationships from the fieldRelationships object
                ? Object.entries(fieldRelationships)
                    .filter(([_key, value]) => value.type === "BelongsTo")
                    .reduce((obj, [key, value]) => {
                    obj[key] = value;
                    return obj;
                }, {})
                : null;
            for (const key of Object.keys(belongsToRelationships ?? {})) {
                // for each belongsTo relationship, check if the input has a key that matches the relationship
                if (`${key}Id` in input) {
                    if (belongsTo == null) {
                        belongsTo = {};
                    }
                    belongsTo = { ...belongsTo, [key]: { _link: input[`${key}Id`] } };
                    delete rest[`${key}Id`]; // delete the key from the rest object so it's not handled again
                }
            }
            if (belongsTo) {
                return depth <= 1 ? { ...rest, ...belongsTo } : { ...rest, create: { ...belongsTo } }; // when we're in the root, we need to return the belongsTo object as part of the result otherwise wrap it in a create
            }
            if (depth <= 1) {
                return { ...rest };
            }
            if (fieldType == null) {
                throw new Error(`Can't transform input, no field type found. ${JSON.stringify({
                    input,
                    path,
                    referencedTypes,
                }, null, 2)}`);
            }
            const inputHasId = "id" in input;
            switch (fieldType.type) {
                case "HasMany":
                case "HasOne":
                    return inputHasId ? { update: { ...rest } } : { create: { ...rest } };
                case "BelongsTo":
                    return inputHasId ? { _link: input["id"] } : { create: { ...rest } };
                default:
                    throw new Error(`Can't transform input, Unknown field type ${fieldType}. ${JSON.stringify({
                        input,
                        path,
                        referencedTypes,
                    }, null, 2)}`);
            }
        }
        return input;
    }
    const result = transform(data);
    return result;
};
exports.reshapeDataForGraphqlApi = reshapeDataForGraphqlApi;
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
    const { handleSubmit, formState, ...formHook } = (0, react_hook_form_1.useForm)({
        ...options,
        defaultValues: toDefaultValues(isModelAction ? action.modelApiIdentifier : undefined, defaultValues),
    });
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
        await handleSubmit(async (data) => {
            if (isModelAction) {
                if (!action.hasAmbiguousIdentifier && findResult.data) {
                    data = disambiguateDefaultValues(data, findResult.data, action);
                }
                data = await (0, exports.reshapeDataForGraphqlApi)(api, defaultValues, data);
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
exports.useActionForm = useActionForm;
//# sourceMappingURL=useActionForm.js.map