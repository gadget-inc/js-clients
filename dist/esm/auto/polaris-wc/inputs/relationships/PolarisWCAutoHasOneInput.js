import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { PolarisWCDismissibleBadge } from "../../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCCombobox } from "../PolarisWCCombobox.js";
import { PolarisWCRelatedModelOptions } from "./PolarisWCRelatedModelOptions.js";
/**
 * A hasOne field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasOneInput field="child" label="Single related child" />
 * </AutoForm>
 * ```
 * @param props.field - The hasOne field API identifier
 * @param props.label - The label of the hasOne field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasOne field input component
 */
export const PolarisWCAutoHasOneInput = autoInput((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasOneInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;
    const selectedRecordTag = useMemo(() => {
        if (!selectedOption)
            return undefined;
        return (React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } },
            React.createElement(PolarisWCDismissibleBadge, { onDismiss: () => selectedRecord && onRemoveRecord(selectedRecord), key: `selectedRecordTag_${selectedOption.id}` }, selectedOption.primary ?? `id: ${selectedOption.id}`)));
    }, [selectedOption, selectedRecord, onRemoveRecord]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";
    return (React.createElement(PolarisWCCombobox, { label: inputLabel, placeholder: placeholder ?? "Search", value: search.value, onChange: search.set, onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, error: errorMessage, verticalContent: selectedRecordTag },
        React.createElement(PolarisWCRelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecord?.id === id, onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, canLoadMore: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, onLoadMore: pagination.loadNextPage })));
});
//# sourceMappingURL=PolarisWCAutoHasOneInput.js.map