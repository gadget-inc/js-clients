"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldApiIdentifier = exports.useRelationshipTransformedMetaDataPaths = exports.useFieldMetadata = exports.useMaybeFieldMetadata = void 0;
const helpers_js_1 = require("../../use-table/helpers.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useAutoRelationship_js_1 = require("../hooks/useAutoRelationship.js");
const useHasManyThroughController_js_1 = require("./useHasManyThroughController.js");
const useMaybeFieldMetadata = (fieldApiIdentifier) => {
    validateNoDotNotationInFieldApiIdentifier(fieldApiIdentifier);
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
    useValidateNoRelationshipFieldsInHasManyThroughForm(metadata);
    return { path, metadata };
};
exports.useFieldMetadata = useFieldMetadata;
const useValidateNoRelationshipFieldsInHasManyThroughForm = (metadata) => {
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    if ((0, helpers_js_1.isRelationshipField)(metadata) && relationshipContext && relationshipContext.hasManyThrough) {
        throw new Error(`"${metadata.apiIdentifier}" is not allowed in a AutoHasManyThroughForm`);
    }
};
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
    const isInHasManyThroughJoinModelInput = (0, useHasManyThroughController_js_1.useIsInHasManyThroughJoinModelInput)();
    if (relationshipContext && relationshipContext.hasManyThrough) {
        // Within AutoHasManyThroughForm - Special consideration needed for fields on the sibling model
        return getFieldApiIdentifierWithinHasManyThroughForm(fieldApiIdentifier, relationshipContext.hasManyThrough, isInHasManyThroughJoinModelInput);
    }
    return fieldApiIdentifier;
};
exports.useFieldApiIdentifier = useFieldApiIdentifier;
const getFieldApiIdentifierWithinHasManyThroughForm = (fieldApiIdentifier, hasManyThrough, isInHasManyThroughJoinModelInput) => {
    const { joinModelApiIdentifier, inverseRelatedModelField } = hasManyThrough;
    if (fieldApiIdentifier.startsWith(`${joinModelApiIdentifier}.`)) {
        // Already properly prefixed
        return fieldApiIdentifier;
    }
    if (isInHasManyThroughJoinModelInput) {
        // Within a AutoHasManyThroughForm, and the field is on the join model
        return `${joinModelApiIdentifier}.${fieldApiIdentifier}`;
    }
    // Within a AutoHasManyThroughForm - Assume field is on sibling model without joinModelApiIdentifier prefix
    // The resulting API request variables will be apply these changes through a nested action on `joinModel.belongsToSiblingModelField`
    return `${joinModelApiIdentifier}.${inverseRelatedModelField}.${fieldApiIdentifier}`;
};
const validateNoDotNotationInFieldApiIdentifier = (fieldApiIdentifier) => {
    if (fieldApiIdentifier.includes(".")) {
        throw new Error(`"${fieldApiIdentifier}" is invalid. The 'field' prop in AutoForm components cannot contain "."`);
    }
};
//# sourceMappingURL=useFieldMetadata.js.map