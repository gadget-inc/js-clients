import { Tag } from "@shopify/polaris";
import React from "react";
export const getSelectedRelatedRecordTags = (props) => {
    if (!props.selectedRecordIds.length) {
        // A separate component getter is used here to return null instead of <>null</> which adds extra height to the text field
        return null;
    }
    return React.createElement(SelectedRelatedRecordTags, { ...props });
};
export const SelectedRelatedRecordTags = (props) => {
    const { selectedRecordIds, options, onRemoveRecord } = props;
    return selectedRecordIds.length
        ? selectedRecordIds.map((id) => {
            const option = options.find((option) => option.id === id);
            return (React.createElement(Tag, { key: `option${id}`, onRemove: () => onRemoveRecord(id) }, option ? option.label : `id: ${id}`));
        })
        : null;
};
//# sourceMappingURL=SelectedRelatedRecordTags.js.map