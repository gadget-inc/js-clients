"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionLabelsFromRecordLabel = exports.getRecordLabelObject = void 0;
const getRecordLabelObject = (recordLabel) => {
    if (!recordLabel) {
        return undefined;
    }
    if (typeof recordLabel === "object" && !Array.isArray(recordLabel)) {
        return recordLabel;
    }
    return { primary: recordLabel };
};
exports.getRecordLabelObject = getRecordLabelObject;
const getOptionLabelsFromRecordLabel = (recordLabel) => {
    const recordLabelObject = (0, exports.getRecordLabelObject)(recordLabel);
    if (!recordLabelObject) {
        return [];
    }
    return [recordLabelObject.primary, recordLabelObject.secondary, recordLabelObject.tertiary];
};
exports.getOptionLabelsFromRecordLabel = getOptionLabelsFromRecordLabel;
//# sourceMappingURL=AutoRelationshipInputProps.js.map