import { useFormFields } from "../AutoForm.js";
import { useAutoFormMetadata } from "../AutoFormContext.js";
export const useFieldMetadata = (fieldApiIdentifier) => {
    const { metadata: autoFormMetadata } = useAutoFormMetadata();
    const fields = useFormFields(autoFormMetadata, {});
    const targetFieldMetadata = fields.find((field) => field[1].apiIdentifier === fieldApiIdentifier);
    if (!targetFieldMetadata) {
        throw new Error(`Field ${fieldApiIdentifier} not found in metadata`);
    }
    const path = targetFieldMetadata[0];
    const fieldMetadata = targetFieldMetadata[1];
    return { path, fieldMetadata };
};
//# sourceMappingURL=useFieldMetadata.js.map