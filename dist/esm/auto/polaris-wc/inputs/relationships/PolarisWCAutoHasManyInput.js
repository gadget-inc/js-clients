import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { getRecordsAsOptions, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { PolarisWCDismissibleBadge } from "../../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCCombobox } from "../PolarisWCCombobox.js";
import { PolarisWCRelatedModelOptions } from "./PolarisWCRelatedModelOptions.js";
/**
 * A hasMany field input component for use within <AutoForm></AutoForm> components using Polaris Web Components.
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasManyInput field="children" label="Related children" />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field input component
 */
export const PolarisWCAutoHasManyInput = autoInput((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasManyInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedRecordIds = useMemo(() => {
        return selectedRecords.map((record) => record.id).filter((id) => !!id);
    }, [selectedRecords]);
    // Ensure label is always a string for the web component
    const inputLabel = typeof label === "string" ? label : typeof metadata.name === "string" ? metadata.name : "";
    const verticalContent = useMemo(() => {
        if (selectedRecords.length === 0)
            return undefined;
        const recordOptions = getRecordsAsOptions(selectedRecords, { primary: optionLabel });
        return (React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, recordOptions.map((option) => (React.createElement(PolarisWCDismissibleBadge, { key: `option${option.id}`, onDismiss: () => {
                const record = selectedRecords.find((r) => r.id === option.id);
                onRemoveRecord(record ?? { id: option.id });
            } }, option.primary ?? `id: ${option.id}`)))));
    }, [selectedRecords, onRemoveRecord, optionLabel]);
    return (React.createElement(PolarisWCCombobox, { label: inputLabel, placeholder: placeholder ?? "Search", value: search.value, onChange: search.set, onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, error: errorMessage, verticalContent: verticalContent },
        React.createElement(PolarisWCRelatedModelOptions, { onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading, showCheckbox: true, canLoadMore: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, onLoadMore: pagination.loadNextPage })));
});
//# sourceMappingURL=PolarisWCAutoHasManyInput.js.map