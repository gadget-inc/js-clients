import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useRelationshipContext } from "../polaris/inputs/relationships/PolarisAutoRelationshipForm.js";
export const useFieldMetadata = (fieldApiIdentifier) => {
    const relationshipContext = useRelationshipContext();
    const { model, fields } = useAutoFormMetadata();
    const path = model
        ? [model.apiIdentifier, relationshipContext?.pathPrefix, fieldApiIdentifier].filter(Boolean).join(".")
        : fieldApiIdentifier;
    const nonIndexedPath = path.replace(/\.\d+\./, ".");
    const targetFieldMetadata = fields.find((field) => field.path === nonIndexedPath);
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return { path, metadata: targetFieldMetadata.metadata };
};
//# sourceMappingURL=useFieldMetadata.js.map