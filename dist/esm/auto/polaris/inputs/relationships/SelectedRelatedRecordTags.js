import { Tag } from "@shopify/polaris";
import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
export const getSelectedRelatedRecordTags = (props) => {
    if (!props.selectedRecords.length) {
        // A separate component getter is used here to return null instead of <>null</> which adds extra height to the text field
        return null;
    }
    return React.createElement(SelectedRelatedRecordTags, { ...props });
};
export const SelectedRelatedRecordTags = (props) => {
    const { selectedRecords, optionLabel, onRemoveRecord } = props;
    const options = getRecordsAsOptions(selectedRecords, optionLabel);
    return options.length
        ? options.map((option) => {
            return (React.createElement(Tag, { key: `option${option.id}`, onRemove: () => {
                    const record = selectedRecords.find((record) => record.id === option.id);
                    onRemoveRecord(record ?? { id: option.id });
                } }, option.label));
        })
        : null;
};
//# sourceMappingURL=SelectedRelatedRecordTags.js.map