import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { filterFieldList } from "../../metadata.js";
import { validationSchema } from "../../validationSchema.js";
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
        const includedRootLevelFields = filterFieldList(nonObjectFields, options).map((field) => [field.apiIdentifier, field]);
        const includedObjectFields = objectFields.flatMap((objectField) => filterFieldList(objectField.configuration.fields, options).map((innerField) => [`${objectField.apiIdentifier}.${innerField.apiIdentifier}`, innerField]));
        return [...includedObjectFields, ...includedRootLevelFields];
    }, [metadata, options]);
};
//# sourceMappingURL=AutoForm.js.map