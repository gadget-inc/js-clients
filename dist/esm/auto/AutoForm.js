import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useRef } from "react";
import { filterFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import { useActionForm } from "../useActionForm.js";
import { validationSchema } from "../validationSchema.js";
/**
 * React hook for getting the validation schema for a list of fields
 */
export const useValidationResolver = (metadata) => {
    return useMemo(() => {
        if (!metadata)
            return undefined;
        const action = isActionMetadata(metadata) ? metadata.action : metadata;
        return yupResolver(validationSchema(action.inputFields));
    }, [metadata]);
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
        const includedRootLevelFields = filterFieldList(nonObjectFields, options).map((field) => ({
            path: field.apiIdentifier,
            metadata: field,
        }));
        const includedObjectFields = objectFields.flatMap((objectField) => filterFieldList(objectField.configuration.fields, options).map((innerField) => ({
            path: `${objectField.apiIdentifier}.${innerField.apiIdentifier}`,
            metadata: innerField,
        })));
        return [...includedObjectFields, ...includedRootLevelFields];
    }, [metadata, options]);
};
/**
 * Internal React hook for sharing logic between different `AutoForm` components.
 * @internal
 */
export const useAutoForm = (props) => {
    const { action, record } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
    const modelApiIdentifier = action.type == "action" ? action.modelApiIdentifier : undefined;
    const defaultValues = useMemo(() => props.defaultValues ??
        (action.type === "globalAction"
            ? {}
            : {
                [modelApiIdentifier]: record ?? (!operatesWithRecordId && metadata && isActionMetadata(metadata) && metadata?.defaultRecord),
                id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
            }), [props.defaultValues, action.type, modelApiIdentifier, record, operatesWithRecordId, metadata]);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, isReady }, originalFormMethods, } = useActionForm(action, {
        defaultValues: defaultValues,
        findBy: "findBy" in props ? props.findBy : undefined,
        resolver: useValidationResolver(metadata),
        send: () => {
            const fieldsToSend = fields
                .map(({ path }) => path)
                .filter((item) => {
                if (props.include) {
                    return props.include?.includes(item);
                }
                else if (props.exclude) {
                    return !props.exclude?.includes(item);
                }
                return true;
            });
            if (operatesWithRecordId) {
                fieldsToSend.push("id");
            }
            return fieldsToSend;
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
    return {
        metadata,
        fetchingMetadata,
        metadataError,
        fields,
        submit,
        formError,
        isSubmitSuccessful,
        isLoading,
        originalFormMethods,
    };
};
//# sourceMappingURL=AutoForm.js.map