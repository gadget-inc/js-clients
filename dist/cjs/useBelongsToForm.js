"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBelongsToForm = void 0;
const useBelongsToController_js_1 = require("./auto/hooks/useBelongsToController.js");
const useRequiredChildComponentsValidator_js_1 = require("./auto/hooks/useRequiredChildComponentsValidator.js");
const useSingleRelatedRecordRelationshipForm_js_1 = require("./useSingleRelatedRecordRelationshipForm.js");
const useBelongsToForm = (props) => {
    (0, useRequiredChildComponentsValidator_js_1.useRequiredChildComponentsValidator)(props, "AutoBelongsToForm");
    const { record, relatedModelOptions } = (0, useBelongsToController_js_1.useBelongsToController)(props);
    const form = (0, useSingleRelatedRecordRelationshipForm_js_1.useSingleRelatedRecordRelationshipForm)({ ...props, relationshipController: { record, relatedModelOptions } });
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    return { ...form, record, hasRecord };
};
exports.useBelongsToForm = useBelongsToForm;
//# sourceMappingURL=useBelongsToForm.js.map