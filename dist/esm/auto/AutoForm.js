import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useRef } from "react";
import { FieldType, filterAutoFormFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import { useActionForm } from "../useActionForm.js";
import { get, getFlattenedObjectKeys } from "../utils.js";
import { validationSchema } from "../validationSchema.js";
import { validateNonBulkAction, validateTriggersFromApiClient, validateTriggersFromMetadata } from "./AutoFormActionValidators.js";
/**
 * React hook for getting the validation schema for a list of fields
 */
const useValidationResolver = (metadata, pathsToValidate) => {
    return useMemo(() => {
        if (!metadata)
            return undefined;
        const action = isActionMetadata(metadata) ? metadata.action : metadata;
        return yupResolver(validationSchema(action.inputFields, pathsToValidate));
    }, [metadata, pathsToValidate]);
};
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export const useFormFields = (metadata, options) => {
    return useMemo(() => {
        if (!metadata)
            return [];
        const action = isActionMetadata(metadata) ? metadata.action : metadata;
        const isModelMetadata = metadata.__typename === "GadgetModel";
        const objectFields = isModelMetadata
            ? action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig" && field.apiIdentifier === metadata.apiIdentifier)
            : [];
        const nonObjectFields = action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
        const includedRootLevelFields = filterAutoFormFieldList(nonObjectFields, options).map((field) => ({
            path: field.apiIdentifier,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => filterAutoFormFieldList(objectField.configuration.fields, {
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
export const useAutoForm = (props) => {
    const { action, record, onSuccess, onFailure, findBy } = props;
    validateNonBulkAction(action);
    validateTriggersFromApiClient(action);
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);
    validateTriggersFromMetadata(metadata);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    const isDeleteAction = metadata && isActionMetadata(metadata) && metadata.action.isDeleteAction;
    const isGlobalAction = action.type === "globalAction";
    const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
    const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
    const isUpsertMetaAction = metadata && isActionMetadata(metadata) && fields.some((field) => field.metadata.fieldType === FieldType.Id);
    const isUpsertWithFindBy = isUpsertMetaAction && !!findBy;
    const hasCustomChildren = !!props.children;
    const fieldPathsToValidate = useMemo(() => hasCustomChildren
        ? [] // With custom children, do not validate fields before sending them to avoid blocking submissions due to missing required fields
        : fields.map(({ path }) => path), [hasCustomChildren, fields]);
    const defaultValues = useMemo(() => props.defaultValues ??
        (action.type === "globalAction"
            ? {}
            : {
                [modelApiIdentifier]: record ??
                    (!(operatesWithRecordId || isUpsertWithFindBy) && metadata && isActionMetadata(metadata) && metadata?.defaultRecord),
                id: findBy,
            }), [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata]);
    // setup the form state for the action
    const { submit, error: formError, reset, setValue, getValues, formState: { isSubmitSuccessful, isLoading, isReady, isSubmitting, touchedFields, errors }, originalFormMethods, } = useActionForm(action, {
        defaultValues: defaultValues,
        findBy: "findBy" in props ? props.findBy : undefined,
        resolver: useValidationResolver(metadata, fieldPathsToValidate),
        send: () => {
            const fieldsToSend = fields
                .filter(({ path, metadata }) => {
                const fieldType = metadata.fieldType;
                const isUntouchedPasswordField = fieldType === FieldType.Password && "findBy" in props && !get(touchedFields, path);
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
                const explicityDefaultedPaths = getFlattenedObjectKeys(props.defaultValues);
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