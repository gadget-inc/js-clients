import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useRef } from "react";
import { FieldType, buildAutoFormFieldList, isModelActionMetadata, useActionMetadata } from "../metadata.js";
import { isPlainObject, processDefaultValues } from "../use-action-form/utils.js";
import { pathListToSelection } from "../use-table/helpers.js";
import { useActionForm } from "../useActionForm.js";
import { get, getFlattenedObjectKeys } from "../utils.js";
import { validationSchema } from "../validationSchema.js";
import { validateFindByObjectWithMetadata, validateNonBulkAction, validateTriggersFromApiClient, validateTriggersFromMetadata, } from "./AutoFormActionValidators.js";
import { useFieldsFromChildComponents } from "./AutoFormContext.js";
import { isAutoInput } from "./AutoInput.js";
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata, pathsToValidate) => {
    return useMemo(() => {
        if (!metadata)
            return undefined;
        const action = isModelActionMetadata(metadata) ? metadata.action : metadata;
        return yupResolver(validationSchema(action.inputFields, pathsToValidate));
    }, [metadata, pathsToValidate]);
};
const isMetadataForUpsertAction = (metadata) => {
    if (!metadata) {
        return undefined;
    }
    if (!isModelActionMetadata(metadata)) {
        // Global actions can never be upsert
        return false;
    }
    return metadata.action.isUpsertMetaAction;
};
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export const useFormFields = (metadata, options) => {
    return useMemo(() => {
        if (!metadata)
            return [];
        const action = isModelActionMetadata(metadata) ? metadata.action : metadata;
        const isModelMetadata = metadata.__typename === "GadgetModel";
        const objectFields = isModelMetadata
            ? action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier)
            : [];
        const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = buildAutoFormFieldList(nonObjectFields, options).map(([path, field]) => ({
            path,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => buildAutoFormFieldList(objectField.configuration.fields, {
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
const useFormSelection = (props) => {
    const { modelApiIdentifier, fields, select } = props;
    if (select) {
        return select;
    }
    if (!modelApiIdentifier || !fields.length) {
        return;
    }
    const paths = fields.map((f) => f.path.replace(new RegExp(`^${modelApiIdentifier}\\.`), ""));
    const fieldMetaData = fields.map((f) => f.metadata);
    return pathListToSelection(modelApiIdentifier, paths, fieldMetaData);
};
const validateFormFieldApiIdentifierUniqueness = (actionApiIdentifier, inputApiIdentifiers) => {
    const seenPaths = new Set();
    const seenMetadataApiIds = new Set();
    // Sorted by length because longer names need to be checked later against the shorter names
    const sortedInputApiIdentifiers = [...inputApiIdentifiers].sort((a, b) => a.path.length - b.path.length);
    for (const { path, metadata } of sortedInputApiIdentifiers) {
        const hasSeenPaths = seenPaths.has(path);
        if (hasSeenPaths) {
            throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
        }
        const hasSeenMetadataApiIds = seenMetadataApiIds.has(metadata.apiIdentifier);
        if (hasSeenMetadataApiIds) {
            // Disallow custom params that match model field api IDs
            const prefixRemovedPath = hasSeenMetadataApiIds ? path.replace(`${path.split(".")[0]}.`, "") : "";
            const hasSeenPrefixRemovedPath = prefixRemovedPath && seenPaths.has(prefixRemovedPath);
            if (hasSeenPrefixRemovedPath) {
                throw new Error(`Input "${metadata.apiIdentifier}" is not unique for action "${actionApiIdentifier}"`);
            }
        }
        seenMetadataApiIds.add(metadata.apiIdentifier);
        seenPaths.add(path);
    }
};
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export const useAutoForm = (props) => {
    const { action, record, onSuccess, onFailure, findBy, select } = props;
    let include = props.include;
    let exclude = props.exclude;
    const { hasCustomFormChildren, fieldSet, registerFields } = useFieldsFromChildComponents();
    const hasRegisteredFieldsFromChildren = hasCustomFormChildren && fieldSet.size > 0;
    const registeredFieldsFromChildren = hasCustomFormChildren
        ? extractPathsFromChildren("children" in props ? props.children : undefined)
        : [];
    useEffect(() => {
        registerFields(registeredFieldsFromChildren);
    }, [registeredFieldsFromChildren.join(","), registerFields]);
    if (hasRegisteredFieldsFromChildren) {
        include = Array.from(fieldSet);
        exclude = undefined;
    }
    validateNonBulkAction(action);
    validateTriggersFromApiClient(action);
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);
    validateTriggersFromMetadata(metadata);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, { include, exclude });
    validateFindByObjectWithMetadata(fields, findBy);
    const isDeleteAction = metadata && isModelActionMetadata(metadata) && metadata.action.isDeleteAction;
    const isGlobalAction = action.type === "globalAction";
    const operatesWithRecordId = !!(metadata && isModelActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
    const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
    const isUpsertMetaAction = isMetadataForUpsertAction(metadata);
    const selection = useFormSelection({ modelApiIdentifier, fields, select });
    const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
    const fieldPathsToValidate = useMemo(() => fields.map(({ path }) => path), [fields]);
    const defaultValues = useMemo(() => {
        return (props.defaultValues ??
            (action.type === "globalAction"
                ? {}
                : {
                    [modelApiIdentifier]: record ??
                        (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && isModelActionMetadata(metadata) && metadata.defaultRecord),
                    id: typeof findBy === "string"
                        ? findBy // ID is given directly
                        : undefined, // Set by the retrieved existing record if object based findBy value
                }));
    }, [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata, isUpsertWithFindBy, findBy]);
    const pauseExistingRecordLookup = !("findBy" in props)
        ? true // Always pause without findBy. No need to do a lookup
        : fetchingMetadata || !selection; // Pause until we have the field selection to include in the lookup
    // setup the form state for the action
    const { submit, error: formError, reset, setValue, getValues, findResult, formState: { isSubmitSuccessful, submitCount, isLoading, isReady, isSubmitting, touchedFields, errors }, originalFormMethods, } = useActionForm(action, {
        defaultValues: defaultValues,
        findBy: "findBy" in props ? props.findBy : undefined,
        throwOnInvalidFindByObject: false,
        pause: pauseExistingRecordLookup,
        select: selection,
        resolver: useValidationResolver(metadata, fieldPathsToValidate),
        send: () => {
            const hasManyFieldPaths = new Set(fields.flatMap(({ path, metadata }) => {
                if (metadata.fieldType === FieldType.HasMany || metadata.fieldType === FieldType.HasManyThrough) {
                    return path;
                }
                else {
                    return [];
                }
            }));
            const hasManyThroughFieldMap = {};
            for (const { path, metadata } of fields) {
                if (metadata.fieldType === FieldType.HasManyThrough) {
                    const config = metadata.configuration;
                    const pathParts = path.split(".");
                    const basePath = pathParts.slice(0, -1);
                    hasManyThroughFieldMap[path] = [...basePath, config.joinModelHasManyFieldApiIdentifier].join(".");
                }
            }
            const fieldsToSend = fields
                .filter(({ path, metadata }) => {
                const fieldType = metadata.fieldType;
                const isUntouchedPasswordField = fieldType === FieldType.Password && "findBy" in props && !get(touchedFields, path);
                if (isUntouchedPasswordField) {
                    // Never send the password field if it hasn't been touched. Doing so will clear the record value
                    return false;
                }
                if (fieldType === FieldType.BelongsTo) {
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
                const explicityDefaultedPaths = getFlattenedObjectKeys(props.defaultValues);
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
    // Post submit form reset
    useEffect(() => {
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
    const hasSetInitialValues = useRef(false);
    useEffect(() => {
        if (isReady && !hasSetInitialValues.current && modelApiIdentifier && defaultValues[modelApiIdentifier]) {
            hasSetInitialValues.current = true;
            originalFormMethods.reset(defaultValues);
        }
    }, [isReady, defaultValues, originalFormMethods, modelApiIdentifier]);
    if (!fetchingMetadata) {
        validateFindBy({ operatesWithRecordId, hasFindBy: !!findBy, isUpsertMetaAction: !!isUpsertMetaAction });
    }
    useEffect(() => {
        if (isUpsertWithFindBy) {
            setValue(`${modelApiIdentifier}.id`, findBy); // Upsert actions use model.id instead of use root level api value
        }
    }, [getValues(`${modelApiIdentifier}.id`), isUpsertWithFindBy]);
    // Update the form state with the lookup result when the form conditional changes the set of registered AutoInputs
    useEffect(() => {
        if (!findBy || !hasRegisteredFieldsFromChildren || select || !action || !("modelApiIdentifier" in action)) {
            // No AutoInput children need to be updated
            return;
        }
        if (!findResult || findResult.fetching || findResult.error || !findResult.data) {
            return;
        }
        const newDefaultValues = processDefaultValues({
            data: findResult.data,
            defaultValues: props.defaultValues,
            modelApiIdentifier: action.modelApiIdentifier,
            hasAmbiguousDefaultValues: action.hasAmbiguousIdentifier ?? false,
        });
        reset(newDefaultValues, { keepDirtyValues: true, keepTouched: true });
    }, [Array.from(fieldSet).join(","), findResult?.fetching]);
    return {
        metadata,
        fetchingMetadata,
        metadataError,
        fields: fields.filter(removeIdFieldsUnlessUpsertWithoutFindBy(isUpsertWithFindBy)),
        submit,
        formError,
        pauseExistingRecordLookup,
        isSubmitting,
        isSubmitSuccessful,
        isLoading,
        originalFormMethods,
    };
};
const resetValuesForDefaultValues = (modelApiIdentifier, defaultValues, selection) => {
    const extractResetArrayPathsFromSelection = (selection) => {
        return Object.keys(selection).reduce((acc, key) => {
            const selectionValue = selection[key];
            if (isPlainObject(selectionValue)) {
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
export const extractPathsFromChildren = (children) => {
    const paths = new Set();
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            const grandChildren = child.props.children;
            let childPaths = [];
            if (grandChildren) {
                childPaths = extractPathsFromChildren(grandChildren);
            }
            let field = undefined;
            if (isAutoInput(child)) {
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
    });
    return Array.from(paths);
};
const removeIdFieldsUnlessUpsertWithoutFindBy = (isUpsertWithFindBy) => {
    return (field) => {
        return field.metadata.fieldType === FieldType.Id ? !isUpsertWithFindBy : true;
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