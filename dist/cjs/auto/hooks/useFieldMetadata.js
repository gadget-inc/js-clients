"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRelationshipTransformedMetaDataPaths = exports.useFieldMetadata = exports.useMaybeFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useAutoRelationship_js_1 = require("../hooks/useAutoRelationship.js");
const useMaybeFieldMetadata = (fieldApiIdentifier) => {
    const { fields } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const { path, metaDataPath } = useGetPaths(fieldApiIdentifier);
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath || isFieldCustomParamOnModelAction(fieldApiIdentifier, field));
    return { path, metadata: targetFieldMetadata?.metadata };
};
exports.useMaybeFieldMetadata = useMaybeFieldMetadata;
const useFieldMetadata = (fieldApiIdentifier) => {
    const { path, metadata } = (0, exports.useMaybeFieldMetadata)(fieldApiIdentifier);
    if (!metadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return { path, metadata };
};
exports.useFieldMetadata = useFieldMetadata;
const useGetPaths = (fieldApiIdentifier) => {
    const { model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const relationshipTransformedPaths = (0, exports.useRelationshipTransformedMetaDataPaths)(fieldApiIdentifier);
    if (relationshipTransformedPaths && model) {
        const path = model.apiIdentifier + "." + relationshipTransformedPaths.path;
        const metaDataPath = model.apiIdentifier + "." + relationshipTransformedPaths.metaDataPath;
        return { path, metaDataPath };
    }
    // Non-relationship
    const isModelAction = model && model.apiIdentifier;
    const path = isModelAction
        ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
        : fieldApiIdentifier; // Global action
    return { path, metaDataPath: path };
};
const useRelationshipTransformedMetaDataPaths = (fieldApiIdentifier) => {
    const { model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (!relationshipContext || !model) {
        return null;
    }
    const path = relationshipContext.transformPath(fieldApiIdentifier);
    const metaDataPath = relationshipContext?.transformMetadataPath ? relationshipContext.transformMetadataPath(fieldApiIdentifier) : path;
    return { path, metaDataPath };
};
exports.useRelationshipTransformedMetaDataPaths = useRelationshipTransformedMetaDataPaths;
const isFieldCustomParamOnModelAction = (fieldApiIdentifier, fieldCandidate) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;
//# sourceMappingURL=useFieldMetadata.js.map