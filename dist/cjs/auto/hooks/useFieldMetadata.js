"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldMetadata = void 0;
const AutoForm_js_1 = require("../AutoForm.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata = (fieldApiIdentifier) => {
    const { metadata: autoFormMetadata } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const fields = (0, AutoForm_js_1.useFormFields)(autoFormMetadata, {});
    const targetFieldMetadata = fields.find((field) => field.metadata.apiIdentifier === fieldApiIdentifier);
    if (!targetFieldMetadata) {
        throw new Error(`Field ${fieldApiIdentifier} not found in metadata`);
    }
    return targetFieldMetadata;
};
exports.useFieldMetadata = useFieldMetadata;
//# sourceMappingURL=useFieldMetadata.js.map