import { Combobox, Icon, Tag } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
export const PolarisAutoBelongsToInput = (props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search }, isLoading, errorMessage, selectedRecordId, selectedRelatedModelRecordMissing, onSelectRecord, onRemoveRecord, } = useBelongsToInputController(props);
    const selectedRecordLabel = selectedRecordId
        ? options.find((option) => option.id === selectedRecordId)?.label ?? `id: ${selectedRecordId}`
        : null;
    const selectedRecordTag = selectedRecordId ? (React.createElement(Tag, { onRemove: onRemoveRecord, key: `selectedRecordTag_${selectedRecordId}` },
        React.createElement("p", { style: { color: selectedRelatedModelRecordMissing ? "red" : undefined }, id: `${selectedRecordId}_${selectedRecordLabel}` }, selectedRecordLabel))) : null;
    const onSelect = (recordId) => {
        const idIsAlreadySelected = selectedRecordId === recordId;
        idIsAlreadySelected
            ? onRemoveRecord() // clear selection
            : onSelectRecord(recordId); // make single selection
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { prefix: React.createElement(Icon, { source: SearchIcon }), onChange: search.set, value: search.value, name: path, label: metadata.name, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => id === selectedRecordId, onSelect: onSelect, options: searchFilterOptions }))));
};
//# sourceMappingURL=PolarisAutoBelongsToInput.js.map