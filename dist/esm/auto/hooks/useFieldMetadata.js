import { useAutoFormMetadata } from "../AutoFormContext.js";
import { useRelationshipContext } from "../hooks/useAutoRelationship.js";
export const useFieldMetadata = (fieldApiIdentifier) => {
    const relationshipContext = useRelationshipContext();
    const { model, fields } = useAutoFormMetadata();
    let path;
    let metaDataPath;
    if (relationshipContext && model) {
        path = model.apiIdentifier + "." + relationshipContext.transformPath(fieldApiIdentifier);
        metaDataPath = relationshipContext?.transformMetadataPath
            ? model.apiIdentifier + "." + relationshipContext.transformMetadataPath(fieldApiIdentifier)
            : path;
    }
    else {
        path = model ? model.apiIdentifier + "." + fieldApiIdentifier : fieldApiIdentifier;
        metaDataPath = path;
    }
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath);
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return { path, metadata: targetFieldMetadata.metadata };
};
//# sourceMappingURL=useFieldMetadata.js.map