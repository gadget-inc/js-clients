import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
export const PolarisAutoBelongsToInput = autoInput((props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel }, isLoading, errorMessage, selectedRecord, onSelectRecord, onRemoveRecord, } = useBelongsToInputController(props);
    const optionLabel = useOptionLabelForField(props.field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;
    const selectedRecordTag = selectedOption ? (React.createElement(Tag, { onRemove: onRemoveRecord, key: `selectedRecordTag_${selectedOption.id}` },
        React.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label))) : null;
    const onSelect = (record) => {
        const recordId = record.id;
        const idIsAlreadySelected = selectedRecord?.id === recordId;
        idIsAlreadySelected
            ? onRemoveRecord() // clear selection
            : onSelectRecord(record); // make single selection
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { onChange: search.set, value: search.value, name: path, label: props.label ?? metadata.name, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => id === selectedRecord?.id, onSelect: onSelect, options: searchFilterOptions, records: relatedModel.records }))));
});
//# sourceMappingURL=PolarisAutoBelongsToInput.js.map