import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, useRef } from "react";
import { filterFieldList, useActionMetadata } from "../metadata.js";
import { useActionForm } from "../useActionForm.js";
import { validationSchema } from "../validationSchema.js";
/**
 * React hook for getting the validation schema for a list of fields
 */
export const useValidationResolver = (metadata) => {
    return useMemo(() => {
        if (!metadata)
            return undefined;
        return yupResolver(validationSchema(metadata.action.inputFields));
    }, [metadata]);
};
/**
 * React hook for getting a list of fields to use in a form (given include/exclude options)
 */
export const useFormFields = (metadata, options) => {
    return useMemo(() => {
        if (!metadata)
            return [];
        const objectFields = metadata.action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig");
        const nonObjectFields = metadata.action.inputFields.filter((field) => field.configuration.__typename !== "GadgetObjectFieldConfig");
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
    const { action, record, findBy } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    const operatesWithRecordId = !!metadata?.action.operatesWithRecordIdentity;
    const defaultValues = useMemo(() => props.defaultValues ?? {
        [action.modelApiIdentifier]: record ?? (!operatesWithRecordId && metadata?.defaultRecord),
        id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
    }, [action.modelApiIdentifier, operatesWithRecordId, metadata?.defaultRecord, record, props.defaultValues]);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, isReady }, originalFormMethods, } = useActionForm(action, {
        defaultValues,
        findBy,
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
        if (isReady && !hasSetInitialValues.current && defaultValues[action.modelApiIdentifier]) {
            hasSetInitialValues.current = true;
            originalFormMethods.reset(defaultValues);
        }
    }, [isReady, defaultValues, originalFormMethods, action.modelApiIdentifier]);
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