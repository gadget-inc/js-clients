import { Banner, Combobox } from "@shopify/polaris";
import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";
export const PolarisAutoHasManyInput = (props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, selected, search, pagination }, selectedRecordIds, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasManyInputController(props);
    if (selected.records?.hasNextPage) {
        return React.createElement(Banner, { tone: "warning" }, `Too many related records for ${field}. Cannot edit`);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { onChange: search.set, value: search.value, label: metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: getSelectedRelatedRecordTags({
                    selectedRecordIds,
                    onRemoveRecord,
                    options,
                }) }), onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { onSelect: onSelectRecord, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading }))));
};
//# sourceMappingURL=PolarisAutoHasManyInput.js.map