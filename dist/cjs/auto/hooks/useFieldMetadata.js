"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata = (fieldApiIdentifier) => {
    const { model, fields } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const metaDataPath = model && model.apiIdentifier
        ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
        : fieldApiIdentifier; // Global action
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath);
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return {
        path: metaDataPath,
        metadata: targetFieldMetadata.metadata,
    };
};
exports.useFieldMetadata = useFieldMetadata;
//# sourceMappingURL=useFieldMetadata.js.map