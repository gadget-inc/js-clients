"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldShowOptionLabel = exports.getOptionLabelsFromRecordLabel = exports.getRecordLabelObject = void 0;
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
const shouldShowOptionLabel = (option) => {
    return option ? [option.primary, option.secondary, option.tertiary].some(canLabelBeShown) : false;
};
exports.shouldShowOptionLabel = shouldShowOptionLabel;
const canLabelBeShown = (option) => {
    if (!option) {
        return false;
    }
    if (typeof option === "string") {
        return true;
    }
    if (typeof option === "object" &&
        "props" in option &&
        typeof option.props === "object" &&
        option.props &&
        "children" in option.props &&
        option.props.children) {
        return true;
    }
    return false;
};
//# sourceMappingURL=AutoRelationshipInputProps.js.map