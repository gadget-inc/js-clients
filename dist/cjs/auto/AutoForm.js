"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoForm = exports.useFormFields = void 0;
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = require("react");
const metadata_js_1 = require("../metadata.js");
const useActionForm_js_1 = require("../useActionForm.js");
const utils_js_1 = require("../utils.js");
const validationSchema_js_1 = require("../validationSchema.js");
const AutoFormActionValidators_js_1 = require("./AutoFormActionValidators.js");
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata, pathsToValidate) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return undefined;
        const action = (0, metadata_js_1.isActionMetadata)(metadata) ? metadata.action : metadata;
        return (0, yup_1.yupResolver)((0, validationSchema_js_1.validationSchema)(action.inputFields, pathsToValidate));
    }, [metadata, pathsToValidate]);
};
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
const useFormFields = (metadata, options) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return [];
        const action = (0, metadata_js_1.isActionMetadata)(metadata) ? metadata.action : metadata;
        const isModelMetadata = metadata.__typename === "GadgetModel";
        const objectFields = isModelMetadata
            ? action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier)
            : [];
        const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = (0, metadata_js_1.filterAutoFormFieldList)(nonObjectFields, options).map((field) => ({
            path: field.apiIdentifier,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => (0, metadata_js_1.filterAutoFormFieldList)(objectField.configuration.fields, {
            ...options,
            isUpsertAction: true, // For upsert meta-actions, we allow IDs, and they are object fields instead of root level
        }).map((innerField) => ({
            path: `${objectField.apiIdentifier}.${innerField.apiIdentifier}`,
            metadata: innerField,
        })));
        const allFormFields = [...includedObjectFields, ...includedRootLevelFields];
        validateFormFieldApiIdentifierUniqueness(action.apiIdentifier, allFormFields.map(({ metadata }) => metadata.apiIdentifier));
        return allFormFields;
    }, [metadata, options]);
};
exports.useFormFields = useFormFields;
const validateFormFieldApiIdentifierUniqueness = (actionApiIdentifier, inputApiIdentifiers) => {
    const seen = new Set();
    for (const apiId of inputApiIdentifiers) {
        if (seen.has(apiId)) {
            throw new Error(`Input "${apiId}" is not unique for action "${actionApiIdentifier}"`);
        }
        seen.add(apiId);
    }
};
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
const useAutoForm = (props) => {
    const { action, record, onSuccess, onFailure, findBy } = props;
    (0, AutoFormActionValidators_js_1.validateNonBulkAction)(action);
    (0, AutoFormActionValidators_js_1.validateTriggersFromApiClient)(action);
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(props.action);
    (0, AutoFormActionValidators_js_1.validateTriggersFromMetadata)(metadata);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, exports.useFormFields)(metadata, props);
    const isDeleteAction = metadata && (0, metadata_js_1.isActionMetadata)(metadata) && metadata.action.isDeleteAction;
    const isGlobalAction = action.type === "globalAction";
    const operatesWithRecordId = !!(metadata && (0, metadata_js_1.isActionMetadata)(metadata) && metadata.action.operatesWithRecordIdentity);
    const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
    const isUpsertMetaAction = metadata && (0, metadata_js_1.isActionMetadata)(metadata) && fields.some((field) => field.metadata.fieldType === metadata_js_1.FieldType.Id);
    const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
    const defaultValues = (0, react_1.useMemo)(() => props.defaultValues ??
        (action.type === "globalAction"
            ? {}
            : {
                [modelApiIdentifier]: record ??
                    (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && (0, metadata_js_1.isActionMetadata)(metadata) && metadata?.defaultRecord),
                id: findBy,
            }), [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata]);
    // setup the form state for the action
    const { submit, error: formError, reset, setValue, getValues, formState: { isSubmitSuccessful, isLoading, isReady, isSubmitting, touchedFields, errors }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: defaultValues,
        findBy: "findBy" in props ? props.findBy : undefined,
        resolver: useValidationResolver(metadata, fields.map(({ path }) => path)),
        send: () => {
            const fieldsToSend = fields
                .filter(({ path, metadata }) => {
                const fieldType = metadata.fieldType;
                const isUntouchedPasswordField = fieldType === metadata_js_1.FieldType.Password && "findBy" in props && !(0, utils_js_1.get)(touchedFields, path);
                if (isUntouchedPasswordField) {
                    // Never send the password field if it hasn't been touched. Doing so will clear the record value
                    return false;
                }
                if (props.include) {
                    return props.include?.includes(metadata.apiIdentifier);
                }
                else if (props.exclude) {
                    return !props.exclude?.includes(metadata.apiIdentifier);
                }
                return true;
            })
                .map(({ path }) => path);
            if (operatesWithRecordId) {
                fieldsToSend.push("id");
            }
            if (props.defaultValues && modelApiIdentifier) {
                // Add any explicitly set default values to the fields to send in the event that they are not included
                const explicityDefaultedPaths = (0, utils_js_1.getFlattenedObjectKeys)(props.defaultValues);
                explicityDefaultedPaths.forEach((path) => {
                    if (!fieldsToSend.includes(path)) {
                        fieldsToSend.push(path);
                    }
                });
            }
            return fieldsToSend;
        },
        onError: onFailure,
        onSuccess: onSuccess ??
            function clearInputValues() {
                const isCreateAction = !operatesWithRecordId && !isDeleteAction && !isGlobalAction && !isUpsertMetaAction;
                const isUpsertWithoutFindBy = isUpsertMetaAction && !isUpsertWithFindBy;
                if (isCreateAction || isGlobalAction || isUpsertWithoutFindBy) {
                    reset();
                }
            },
    });
    // we don't have synchronous access to the default values always -- sometimes we need to load them from the metadata. if we do that, then we need to forcibly set them into the form state once they have been loaded
    const hasSetInitialValues = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (isReady && !hasSetInitialValues.current && modelApiIdentifier && defaultValues[modelApiIdentifier]) {
            hasSetInitialValues.current = true;
            originalFormMethods.reset(defaultValues);
        }
    }, [isReady, defaultValues, originalFormMethods, modelApiIdentifier]);
    if (!fetchingMetadata) {
        validateFindBy({ operatesWithRecordId, hasFindBy: !!findBy, isUpsertMetaAction: !!isUpsertMetaAction });
    }
    (0, react_1.useEffect)(() => {
        if (isUpsertWithFindBy) {
            setValue(`${modelApiIdentifier}.id`, findBy); // Upsert actions use model.id instead of use root level api value
        }
    }, [getValues(`${modelApiIdentifier}.id`), isUpsertWithFindBy]);
    return {
        metadata,
        fetchingMetadata,
        metadataError,
        fields: fields.filter(removeIdFieldsUnlessUpsertWithoutFindBy(isUpsertWithFindBy)),
        submit,
        formError,
        isSubmitting,
        isSubmitSuccessful,
        isLoading,
        originalFormMethods,
    };
};
exports.useAutoForm = useAutoForm;
const removeIdFieldsUnlessUpsertWithoutFindBy = (isUpsertWithFindBy) => {
    return (field) => {
        return field.metadata.fieldType === metadata_js_1.FieldType.Id ? !isUpsertWithFindBy : true;
    };
};
const validateFindBy = (params) => {
    const { operatesWithRecordId, hasFindBy, isUpsertMetaAction } = params;
    if (isUpsertMetaAction) {
        return; // optional findBy value for upsert meta actions
    }
    if (operatesWithRecordId && !hasFindBy) {
        throw new Error("The 'findBy' prop is required for actions that operate with a record identity.");
    }
    else if (!operatesWithRecordId && hasFindBy) {
        throw new Error("The 'findBy' prop is only allowed for actions that operate with a record identity.");
    }
};
//# sourceMappingURL=AutoForm.js.map