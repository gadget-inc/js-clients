import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useRelationshipContext } from "../hooks/useAutoRelationship.js";
export const useMaybeFieldMetadata = (fieldApiIdentifier) => {
    const { fields } = useAutoFormMetadata();
    const { path, metaDataPath } = useGetPaths(fieldApiIdentifier);
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath || isFieldCustomParamOnModelAction(fieldApiIdentifier, field));
    return { path, metadata: targetFieldMetadata?.metadata };
};
export const useFieldMetadata = (fieldApiIdentifier) => {
    const { path, metadata } = useMaybeFieldMetadata(fieldApiIdentifier);
    if (!metadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return { path, metadata };
};
const useGetPaths = (fieldApiIdentifier) => {
    const { model } = useAutoFormMetadata();
    const relationshipContext = useRelationshipContext();
    if (relationshipContext && model) {
        const path = model.apiIdentifier + "." + relationshipContext.transformPath(fieldApiIdentifier);
        const metaDataPath = relationshipContext?.transformMetadataPath
            ? model.apiIdentifier + "." + relationshipContext.transformMetadataPath(fieldApiIdentifier)
            : path;
        return { path, metaDataPath };
    }
    // Non-relationship
    const isModelAction = model && model.apiIdentifier;
    const path = isModelAction
        ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
        : fieldApiIdentifier; // Global action
    return { path, metaDataPath: path };
};
const isFieldCustomParamOnModelAction = (fieldApiIdentifier, fieldCandidate) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;
//# sourceMappingURL=useFieldMetadata.js.map