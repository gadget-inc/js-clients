export const getRecordLabelObject = (recordLabel) => {
    if (!recordLabel) {
        return undefined;
    }
    if (typeof recordLabel === "object" && !Array.isArray(recordLabel)) {
        return recordLabel;
    }
    return { primary: recordLabel };
};
export const getOptionLabelsFromRecordLabel = (recordLabel) => {
    const recordLabelObject = getRecordLabelObject(recordLabel);
    if (!recordLabelObject) {
        return [];
    }
    return [recordLabelObject.primary, recordLabelObject.secondary, recordLabelObject.tertiary];
};
//# sourceMappingURL=AutoRelationshipInputProps.js.map