import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { filterFieldList, useActionMetadata } from "../metadata.js";
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
    // setup the form state for the action
    const { submit, error: formError, formState: { isSubmitSuccessful, isLoading, dirtyFields, touchedFields }, originalFormMethods, } = useActionForm(action, {
        defaultValues: {
            [action.modelApiIdentifier]: record,
            id: "0", // The ID value will be replaced when sending the form to use the record found by `findBy`
        },
        findBy,
        resolver: useValidationResolver(metadata),
        send: (data) => {
            console.log("send - fields:", dirtyFields, touchedFields);
            const fieldsToSend = fields
                .filter((field) => {
                const isDirty = get(dirtyFields, field.path);
                console.log("where - is field dirty:", field.path, isDirty);
                if (!get(dirtyFields, field.path)) {
                    return false;
                }
            })
                .map(({ path }) => path);
            console.log("where - fieldsToSend:", fieldsToSend);
            return [...fieldsToSend, operatesWithRecordId ? "id" : undefined].filter((item) => !!item);
        },
    });
    console.log("fields:", dirtyFields, touchedFields);
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