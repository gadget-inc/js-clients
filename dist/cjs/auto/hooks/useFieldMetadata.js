"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useAutoRelationship_js_1 = require("../hooks/useAutoRelationship.js");
const useFieldMetadata = (fieldApiIdentifier) => {
    const relationshipContext = (0, useAutoRelationship_js_1.useRelationshipContext)();
    const { model, fields } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
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
exports.useFieldMetadata = useFieldMetadata;
//# sourceMappingURL=useFieldMetadata.js.map