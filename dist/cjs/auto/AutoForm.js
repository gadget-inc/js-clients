"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPathsFromChildren = exports.useAutoForm = exports.useFormSelection = exports.useFormFields = void 0;
const tslib_1 = require("tslib");
const yup_1 = require("@hookform/resolvers/yup");
const react_1 = tslib_1.__importStar(require("react"));
const metadata_js_1 = require("../metadata.js");
const utils_js_1 = require("../use-action-form/utils.js");
const helpers_js_1 = require("../use-table/helpers.js");
const useActionForm_js_1 = require("../useActionForm.js");
const utils_js_2 = require("../utils.js");
const validationSchema_js_1 = require("../validationSchema.js");
const AutoFormActionValidators_js_1 = require("./AutoFormActionValidators.js");
const AutoInput_js_1 = require("./AutoInput.js");
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata, pathsToValidate) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return undefined;
        const action = (0, metadata_js_1.isModelActionMetadata)(metadata) ? metadata.action : metadata;
        return (0, yup_1.yupResolver)((0, validationSchema_js_1.validationSchema)(action.inputFields, pathsToValidate));
    }, [metadata, pathsToValidate]);
};
const isMetadataForUpsertAction = (metadata) => {
    if (!metadata) {
        return undefined;
    }
    if (!(0, metadata_js_1.isModelActionMetadata)(metadata)) {
        // Global actions can never be upsert
        return false;
    }
    const modelFields = metadata.action.inputFields.find((field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier)?.configuration.fields;
    if (!modelFields) {
        return false;
    }
    // Only upsert actions have an ID field in the model object field object
    // Other actions keep the ID at the root level separate form the model object
    return modelFields.some((field) => field.fieldType === metadata_js_1.FieldType.Id);
};
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
const useFormFields = (metadata, options) => {
    return (0, react_1.useMemo)(() => {
        if (!metadata)
            return [];
        const action = (0, metadata_js_1.isModelActionMetadata)(metadata) ? metadata.action : metadata;
        const isModelMetadata = metadata.__typename === "GadgetModel";
        const objectFields = isModelMetadata
            ? action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier)
            : [];
        const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = (0, metadata_js_1.buildAutoFormFieldList)(nonObjectFields, options).map(([path, field]) => ({
            path,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => (0, metadata_js_1.buildAutoFormFieldList)(objectField.configuration.fields, {
            ...options,
            isUpsertAction: true, // For upsert meta-actions, we allow IDs, and they are object fields instead of root level
        }).map(([innerPath, innerField]) => ({
            path: `${objectField.apiIdentifier}.${innerPath}`,
            metadata: innerField,
        })));
        const allFormFields = [...includedObjectFields, ...includedRootLevelFields];
        validateFormFieldApiIdentifierUniqueness(action.apiIdentifier, allFormFields);
        return allFormFields;
    }, [metadata, options]);
};
exports.useFormFields = useFormFields;
const useFormSelection = (modelApiIdentifier, fields) => {
    if (!modelApiIdentifier)
        return;
    if (!fields.length)
        return;
    const paths = fields.map((f) => f.path.replace(new RegExp(`^${modelApiIdentifier}\\.`), ""));
    const fieldMetaData = fields.map((f) => f.metadata);
    return (0, helpers_js_1.pathListToSelection)(modelApiIdentifier, paths, fieldMetaData);
};
exports.useFormSelection = useFormSelection;
const validateFormFieldApiIdentifierUniqueness = (actionApiIdentifier, inputApiIdentifiers) => {
    const seenPaths = new Set();
    const seenMetadataApiIds = new Set();
    for (const { path, metadata } of inputApiIdentifiers) {
        if (seenMetadataApiIds.has(metadata.apiIdentifier) || seenPaths.has(path)) {
            throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
        }
        seenMetadataApiIds.add(metadata.apiIdentifier);
        seenPaths.add(path);
    }
};
// TODO - re-enable this once the child based field selection is fixed with an approach that avoids React.Children
const enableExtractPathsFromChildren = false;
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
const useAutoForm = (props) => {
    const { action, record, onSuccess, onFailure, findBy, children } = props;
    let include = props.include;
    let exclude = props.exclude;
    if (enableExtractPathsFromChildren && children) {
        include = (0, exports.extractPathsFromChildren)(children);
        exclude = undefined;
    }
    (0, AutoFormActionValidators_js_1.validateNonBulkAction)(action);
    (0, AutoFormActionValidators_js_1.validateTriggersFromApiClient)(action);
    const { metadata, fetching: fetchingMetadata, error: metadataError } = (0, metadata_js_1.useActionMetadata)(props.action);
    (0, AutoFormActionValidators_js_1.validateTriggersFromMetadata)(metadata);
    // filter down the fields to render only what we want to render for this form
    const fields = (0, exports.useFormFields)(metadata, { include, exclude });
    (0, AutoFormActionValidators_js_1.validateFindByObjectWithMetadata)(fields, findBy);
    const isDeleteAction = metadata && (0, metadata_js_1.isModelActionMetadata)(metadata) && metadata.action.isDeleteAction;
    const isGlobalAction = action.type === "globalAction";
    const operatesWithRecordId = !!(metadata && (0, metadata_js_1.isModelActionMetadata)(metadata) && metadata.action.operatesWithRecordIdentity);
    const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
    const isUpsertMetaAction = isMetadataForUpsertAction(metadata);
    const selection = (0, exports.useFormSelection)(modelApiIdentifier, fields);
    const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
    const fieldPathsToValidate = (0, react_1.useMemo)(() => fields.map(({ path }) => path), [fields]);
    const defaultValues = (0, react_1.useMemo)(() => props.defaultValues ??
        (action.type === "globalAction"
            ? {}
            : {
                [modelApiIdentifier]: record ??
                    (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && (0, metadata_js_1.isModelActionMetadata)(metadata) && metadata?.defaultRecord),
                id: typeof findBy === "string"
                    ? findBy // ID is given directly
                    : undefined, // Set by the retrieved existing record if object based findBy value
            }), [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata, findBy]);
    // setup the form state for the action
    const { submit, error: formError, reset, setValue, getValues, formState: { isSubmitSuccessful, submitCount, isLoading, isReady, isSubmitting, touchedFields, errors }, originalFormMethods, } = (0, useActionForm_js_1.useActionForm)(action, {
        defaultValues: defaultValues,
        findBy: "findBy" in props ? props.findBy : undefined,
        throwOnInvalidFindByObject: false,
        pause: "findBy" in props ? fetchingMetadata : undefined,
        select: selection,
        resolver: useValidationResolver(metadata, fieldPathsToValidate),
        send: () => {
            const hasManyFieldPaths = new Set(fields.flatMap(({ path, metadata }) => {
                if (metadata.fieldType === metadata_js_1.FieldType.HasMany || metadata.fieldType === metadata_js_1.FieldType.HasManyThrough) {
                    return path;
                }
                else {
                    return [];
                }
            }));
            const hasManyThroughFieldMap = {};
            for (const { path, metadata } of fields) {
                if (metadata.fieldType === metadata_js_1.FieldType.HasManyThrough) {
                    const config = metadata.configuration;
                    const pathParts = path.split(".");
                    const basePath = pathParts.slice(0, -1);
                    hasManyThroughFieldMap[path] = [...basePath, config.joinModelHasManyFieldApiIdentifier].join(".");
                }
            }
            const fieldsToSend = fields
                .filter(({ path, metadata }) => {
                const fieldType = metadata.fieldType;
                const isUntouchedPasswordField = fieldType === metadata_js_1.FieldType.Password && "findBy" in props && !(0, utils_js_2.get)(touchedFields, path);
                if (isUntouchedPasswordField) {
                    // Never send the password field if it hasn't been touched. Doing so will clear the record value
                    return false;
                }
                if (fieldType === metadata_js_1.FieldType.BelongsTo) {
                    const fullBelongsToValue = getValues(path);
                    const rawBelongsToValueId = getValues(`${path}Id`);
                    if (fullBelongsToValue === null && rawBelongsToValueId) {
                        // Here we have a belongsTo field that points to a related record that doesn't exist
                        // Do not send `belongsToField: null` to the backend because it will clear the belongsTo field
                        return false;
                    }
                }
                const pathParts = path.split(".");
                const isChildOfHasManyField = pathParts.some((_, index) => {
                    const parentPath = pathParts.slice(0, index).join(".");
                    return hasManyFieldPaths.has(parentPath);
                });
                if (isChildOfHasManyField) {
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
                const explicityDefaultedPaths = (0, utils_js_2.getFlattenedObjectKeys)(props.defaultValues);
                explicityDefaultedPaths.forEach((path) => {
                    if (!fieldsToSend.includes(path)) {
                        fieldsToSend.push(path);
                    }
                });
            }
            return fieldsToSend.map((field) => {
                if (hasManyThroughFieldMap[field]) {
                    return hasManyThroughFieldMap[field];
                }
                return field;
            });
        },
        onError: onFailure,
        onSuccess,
        debug: props.debug,
    });
    const isCreateAction = !operatesWithRecordId && !isDeleteAction && !isGlobalAction && !isUpsertMetaAction;
    const isUpsertWithoutFindBy = isUpsertMetaAction && !isUpsertWithFindBy;
    (0, react_1.useEffect)(() => {
        if (isSubmitSuccessful) {
            if (isCreateAction || isUpsertWithoutFindBy || isGlobalAction) {
                const resetValues = modelApiIdentifier && selection ? resetValuesForDefaultValues(modelApiIdentifier, defaultValues, selection) : defaultValues;
                reset(resetValues);
            }
        }
    }, [
        isSubmitSuccessful,
        isCreateAction,
        isUpsertWithoutFindBy,
        isGlobalAction,
        reset,
        defaultValues,
        submitCount,
        selection,
        modelApiIdentifier,
    ]);
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
const resetValuesForDefaultValues = (modelApiIdentifier, defaultValues, selection) => {
    const extractResetArrayPathsFromSelection = (selection) => {
        return Object.keys(selection).reduce((acc, key) => {
            const selectionValue = selection[key];
            if ((0, utils_js_1.isPlainObject)(selectionValue)) {
                if ("edges" in selectionValue) {
                    acc[key] = [];
                }
                else {
                    const subSelectionValue = extractResetArrayPathsFromSelection(selectionValue);
                    if (Object.keys(subSelectionValue).length > 0) {
                        acc[key] = subSelectionValue;
                    }
                }
            }
            return acc;
        }, {});
    };
    return {
        ...defaultValues,
        [modelApiIdentifier]: {
            ...(defaultValues[modelApiIdentifier] ?? {}),
            ...extractResetArrayPathsFromSelection(selection),
        },
    };
};
const extractPathsFromChildren = (children) => {
    const paths = new Set();
    for (const child of react_1.default.Children.toArray(children)) {
        if (react_1.default.isValidElement(child)) {
            const grandChildren = child.props.children;
            let childPaths = [];
            if (grandChildren) {
                childPaths = (0, exports.extractPathsFromChildren)(grandChildren);
            }
            let field = undefined;
            if ((0, AutoInput_js_1.isAutoInput)(child)) {
                const props = child.props;
                field = props.field;
                paths.add(field);
                if (props.selectPaths && Array.isArray(props.selectPaths)) {
                    props.selectPaths.forEach((selectPath) => {
                        paths.add(`${field}.${selectPath}`);
                    });
                }
            }
            if (childPaths.length > 0) {
                for (const childPath of childPaths) {
                    paths.add(field ? `${field}.${childPath}` : childPath);
                }
            }
        }
    }
    return Array.from(paths);
};
exports.extractPathsFromChildren = extractPathsFromChildren;
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