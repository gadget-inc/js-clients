"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const PolarisAutoRelationshipForm_js_1 = require("../polaris/inputs/relationships/PolarisAutoRelationshipForm.js");
const useFieldMetadata = (fieldApiIdentifier) => {
    const relationshipContext = (0, PolarisAutoRelationshipForm_js_1.useRelationshipContext)();
    const { model, fields } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
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
exports.useFieldMetadata = useFieldMetadata;
//# sourceMappingURL=useFieldMetadata.js.map