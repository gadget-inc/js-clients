"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldMetadata = void 0;
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata = (fieldApiIdentifier) => {
    const { model, fields } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const isModelAction = model && model.apiIdentifier;
    const metaDataPath = isModelAction
        ? model.apiIdentifier + "." + fieldApiIdentifier // Model action
        : fieldApiIdentifier; // Global action
    const targetFieldMetadata = fields.find((field) => field.path === metaDataPath || isFieldCustomParamOnModelAction(fieldApiIdentifier, field));
    if (!targetFieldMetadata) {
        throw new Error(`Field "${fieldApiIdentifier}" not found in metadata`);
    }
    return targetFieldMetadata;
};
exports.useFieldMetadata = useFieldMetadata;
const isFieldCustomParamOnModelAction = (fieldApiIdentifier, fieldCandidate) => fieldCandidate.metadata.__typename !== "GadgetModelField" && fieldCandidate.path === fieldApiIdentifier;
//# sourceMappingURL=useFieldMetadata.js.map