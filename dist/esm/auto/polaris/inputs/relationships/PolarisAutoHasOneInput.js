import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
export const PolarisAutoHasOneInput = autoInput((props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasOneInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;
    const selectedRecordTag = selectedOption ? (React.createElement(Tag, { onRemove: () => selectedRecord && onRemoveRecord(selectedRecord), key: `selectedRecordTag_${selectedOption.id}` },
        React.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label ?? `id: ${selectedOption.id}`))) : null;
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { onChange: search.set, value: search.value, label: props.label ?? metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecord?.id === id, onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions }))));
});
//# sourceMappingURL=PolarisAutoHasOneInput.js.map