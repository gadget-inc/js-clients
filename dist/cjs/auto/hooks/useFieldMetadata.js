"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldApiIdentifier = exports.useRelationshipTransformedMetaDataPaths = exports.useFieldMetadata = exports.useMaybeFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useAutoRelationship_js_1 = require("../hooks/useAutoRelationship.js");
const useMaybeFieldMetadata = (fieldApiIdentifier) => {
    fieldApiIdentifier = (0, exports.useFieldApiIdentifier)(fieldApiIdentifier);
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
    fieldApiIdentifier = (0, exports.useFieldApiIdentifier)(fieldApiIdentifier);
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
    fieldApiIdentifier = (0, exports.useFieldApiIdentifier)(fieldApiIdentifier);
    const { model } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (!relationshipContext || !model) {
        return null;
    }
    const path = relationshipContext.transformPath(fieldApiIdentifier);
    const metaDataPath = relationshipContext.transformMetadataPath(fieldApiIdentifier);
    return { path, metaDataPath };
};
exports.useRelationshipTransformedMetaDataPaths = useRelationshipTransformedMetaDataPaths;
const isFieldCustomParamOnModelAction = (fieldApiIdentifier, fieldCandidate) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;
const useFieldApiIdentifier = (fieldApiIdentifier) => {
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if (relationshipContext && relationshipContext.hasManyThrough) {
        // Within AutoHasManyThroughForm - Special consideration needed for fields on the sibling model
        return getFieldApiIdentifierWithinHasManyThroughForm(fieldApiIdentifier, relationshipContext.hasManyThrough);
    }
    return fieldApiIdentifier;
};
exports.useFieldApiIdentifier = useFieldApiIdentifier;
const getFieldApiIdentifierWithinHasManyThroughForm = (fieldApiIdentifier, hasManyThrough) => {
    const { joinModelApiIdentifier, inverseRelatedModelField } = hasManyThrough;
    if (fieldApiIdentifier.startsWith(`${joinModelApiIdentifier}.`)) {
        // Within a AutoHasManyThroughForm, and the field is on the join model
        return fieldApiIdentifier;
    }
    // Within a AutoHasManyThroughForm - Assume field is on sibling model without joinModelApiIdentifier prefix
    // The resulting API request variables will be apply these changes through a nested action on `joinModel.belongsToSiblingModelField`
    return `${joinModelApiIdentifier}.${inverseRelatedModelField}.${fieldApiIdentifier}`;
};
//# sourceMappingURL=useFieldMetadata.js.map