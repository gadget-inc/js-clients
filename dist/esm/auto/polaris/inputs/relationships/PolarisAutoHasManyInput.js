import { Combobox } from "@shopify/polaris";
import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";
export const PolarisAutoHasManyInput = autoInput((props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasManyInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedRecordIds = useMemo(() => {
        return selectedRecords.map((record) => record.id).filter((id) => !!id);
    }, [selectedRecords]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { onChange: search.set, value: search.value, label: props.label ?? metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: getSelectedRelatedRecordTags({
                    selectedRecords,
                    onRemoveRecord,
                    optionLabel,
                }) }), onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading }))));
});
//# sourceMappingURL=PolarisAutoHasManyInput.js.map