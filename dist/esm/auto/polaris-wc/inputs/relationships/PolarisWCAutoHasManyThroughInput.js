import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyThroughInputController } from "../../../hooks/useHasManyThroughController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { PolarisWCCombobox } from "../PolarisWCCombobox.js";
import { PolarisWCRelatedModelOptions } from "./PolarisWCRelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./PolarisWCSelectedRelatedRecordTags.js";
/**
 * A hasManyThrough field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component is used to configure relationships with the sibling model by creating and deleting records in the join model
 * @example
 * ```tsx
 * <AutoForm action={api.student.create}>
 *   <AutoHasManyThroughInput field="courses" />
 * </AutoForm>
 * ```
 * @param props.field - The hasManyThrough field API identifier
 * @param props.label - The label of the hasManyThrough field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasManyThrough field input component
 */
export const PolarisWCAutoHasManyThroughInput = autoInput((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onRemoveRecord, onSelectRecord, } = useHasManyThroughInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedRecordIds = useMemo(() => {
        return selectedRecords.map((record) => record.id).filter((id) => !!id);
    }, [selectedRecords]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";
    const verticalContent = useMemo(() => {
        return getSelectedRelatedRecordTags({
            selectedRecords,
            onRemoveRecord,
            optionLabel,
        });
    }, [selectedRecords, onRemoveRecord, optionLabel]);
    return (React.createElement(PolarisWCCombobox, { label: inputLabel, placeholder: placeholder ?? "Search", value: search.value, onChange: search.set, onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, error: errorMessage, verticalContent: verticalContent },
        React.createElement(PolarisWCRelatedModelOptions, { onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading, showCheckbox: true, canLoadMore: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, onLoadMore: pagination.loadNextPage })));
});
//# sourceMappingURL=PolarisWCAutoHasManyThroughInput.js.map