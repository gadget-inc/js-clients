import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { filterFieldList, isActionMetadata, useActionMetadata } from "../metadata.js";
import { useActionForm } from "../useActionForm.js";
import { get } from "../utils.js";
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
        const objectFields = action.inputFields.filter((field) => field.configuration.__typename === "GadgetObjectFieldConfig");
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
    const { action, record, findBy } = props;
    const { metadata, fetching: fetchingMetadata, error: metadataError } = useActionMetadata(props.action);
    // filter down the fields to render only what we want to render for this form
    const fields = useFormFields(metadata, props);
    const operatesWithRecordId = !!(metadata && isActionMetadata(metadata) && metadata.action.operatesWithRecordIdentity);
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, dirtyFields }, originalFormMethods, } = useActionForm(action, {
        defaultValues: action.type === "globalAction"
            ? {}
            : {
                [action.modelApiIdentifier]: record,
                id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
            },
        findBy,
        resolver: useValidationResolver(metadata),
        send: () => {
            const fieldsToSend = fields
                .map(({ path }) => path)
                .filter((item) => {
                const isDirty = get(dirtyFields, item);
                return isDirty;
            });
            if (operatesWithRecordId) {
                fieldsToSend.push("id");
            }
            return fieldsToSend;
        },
    });
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