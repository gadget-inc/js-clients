import { Combobox, Icon, Listbox, Tag, Text } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import { numberOfRecordsToLoad, useRelationshipInputController } from "../../hooks/useRelationshipInputController.js";
export const PolarisAutoBelongsToInput = (props) => {
    return React.createElement(PolarisAutoRelationshipInput, { ...props });
};
export const PolarisAutoRelationshipInput = (props) => {
    const { field, control, optionLabel } = props;
    const { path, isHasMany, relatedModel, metadata, pagination, search, selection } = useRelationshipInputController({
        field: field,
        control: control,
        optionLabel: optionLabel,
    });
    if (isHasMany) {
        // TODO - Update to account for HasMany relationship. Multiselect functionality and more advanced hook
        return null;
    }
    const selectedRecordTag = (React.createElement(Tag, { onRemove: () => selection.set(undefined) },
        React.createElement("p", { style: { color: selection.error ? "red" : undefined }, id: `${selection.id}_${selection.label}` }, selection.label)));
    return (React.createElement(Combobox, { activator: React.createElement(Combobox.TextField, { prefix: React.createElement(Icon, { source: SearchIcon }), onChange: search.set, value: search.value, label: metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: selection.id && selectedRecordTag }), onScrolledToBottom: pagination.loadNextPageOfRecords, onClose: pagination.resetPagination, willLoadMoreOptions: relatedModel.hasNextPage && relatedModel.options.length >= numberOfRecordsToLoad },
        React.createElement(RelatedModelOptions, { relatedModel: relatedModel, selection: selection })));
};
export const RelatedModelOptions = (props) => {
    const { relatedModel, selection } = props;
    return (React.createElement(Listbox, { onSelect: (recordId) => selection.set(selection.id === recordId ? undefined : recordId) },
        relatedModel.options.length ? (relatedModel.options.map((option) => (React.createElement(SelectableOption, { ...option, selected: selection.id === option.recordId, key: option.recordId })))) : (React.createElement(NoRecordsMessage, null)),
        relatedModel.isLoadingRelatedRecords && React.createElement(Listbox.Loading, { accessibilityLabel: "Loading" })));
};
const SelectableOption = (props) => {
    const { label, recordId, selected } = props;
    return (React.createElement(Listbox.Option, { key: recordId, value: recordId, selected: selected }, label));
};
const NoRecordsMessage = () => (React.createElement("div", { style: { padding: "16px" } },
    React.createElement(Text, { as: "p", tone: "subdued" }, "No records found")));
//# sourceMappingURL=PolarisAutoRelationshipInput.js.map