import { Combobox, Tag } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
/**
 * A hasOne field input component for use within <AutoForm></AutoForm> components
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
export const PolarisAutoHasOneInput = autoInput((props) => {
    const { field, label, placeholder } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasOneInputController(props);
    const optionLabel = useOptionLabelForField(field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, { primary: optionLabel }) : null;
    const selectedRecordTag = selectedOption ? (React.createElement(Tag, { onRemove: () => selectedRecord && onRemoveRecord(selectedRecord), key: `selectedRecordTag_${selectedOption.id}` },
        React.createElement("p", { id: `${selectedOption.id}_${selectedOption.primary}` }, selectedOption.primary ?? `id: ${selectedOption.id}`))) : null;
    return (React.createElement(React.Fragment, null,
        React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { onChange: search.set, value: search.value, label: label ?? metadata.name, placeholder: placeholder, name: path, autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount },
            React.createElement(RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecord?.id === id, onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions }))));
});
//# sourceMappingURL=PolarisAutoHasOneInput.js.map