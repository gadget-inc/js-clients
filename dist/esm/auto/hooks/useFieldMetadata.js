import { useFormFields } from "../AutoForm.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
export const useFieldMetadata = (fieldApiIdentifier) => {
    const { metadata: autoFormMetadata, options } = useAutoFormMetadata();
    const fields = useFormFields(autoFormMetadata, { ...options });
    const targetFieldMetadata = fields.find((field) => field.metadata.apiIdentifier === fieldApiIdentifier);
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return targetFieldMetadata;
};
//# sourceMappingURL=useFieldMetadata.js.map