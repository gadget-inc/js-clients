import { Listbox } from "@shopify/polaris";
import React from "react";
import { ListMessage, NoRecordsMessage, SelectableOption, getErrorMessage } from "./PolarisListMessages.js";
export const RelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
    const listBoxOptions = [
        ...(actions ?? []),
        ...options.map((option) => {
            return props.renderOption ? (props.renderOption(option)) : (React.createElement(SelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, key: option.id }));
        }),
    ];
    return (React.createElement(Listbox, { autoSelection: props.autoSelection, onSelect: (id) => {
            const record = records?.find((record) => record.id === id) ?? { id };
            const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
            onSelect(recordWithoutTimestamps);
        } },
        listBoxOptions.length ? (listBoxOptions) : errorMessage ? (React.createElement(ListMessage, { message: getErrorMessage(errorMessage) })) : (React.createElement(NoRecordsMessage, null)),
        isLoading && React.createElement(Listbox.Loading, { accessibilityLabel: "Loading" })));
};
//# sourceMappingURL=RelatedModelOptions.js.map