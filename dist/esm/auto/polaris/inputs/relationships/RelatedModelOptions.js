import { Icon, Listbox, Popover, Scrollable, TextField } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
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
        listBoxOptions.length ? (listBoxOptions) : errorMessage ? (React.createElement(ListMessage, { message: getErrorMessage(errorMessage) })) : !isLoading ? (React.createElement(NoRecordsMessage, null)) : null,
        isLoading && React.createElement(Listbox.Loading, { accessibilityLabel: "Loading" })));
};
export const RelatedModelOptionsPopover = (props) => {
    return (React.createElement(Popover, { active: props.active, activator: props.activator, ariaHaspopup: "listbox", preferredAlignment: "right", autofocusTarget: "first-node", onClose: props.onClose },
        React.createElement(Popover.Pane, { fixed: true },
            React.createElement("div", { style: {
                    alignItems: "stretch",
                    borderTop: "1px solid #DFE3E8",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                } },
                props.search,
                React.createElement(Scrollable, { shadow: true, style: {
                        position: "relative",
                        width: "310px",
                        height: "292px",
                        padding: "var(--p-space-200) 0",
                        borderBottomLeftRadius: "var(--p-border-radius-200)",
                        borderBottomRightRadius: "var(--p-border-radius-200)",
                    }, onScrolledToBottom: props.onScrolledToBottom },
                    React.createElement(RelatedModelOptions, { options: props.options, records: props.records, onSelect: props.onSelect, isLoading: props.isLoading, autoSelection: props.autoSelection, renderOption: props.renderOption, actions: props.actions }))))));
};
export const RelatedModelOptionsSearch = (props) => {
    const { modelName, label, placeholder, prefix, autoComplete, ...rest } = props;
    return (React.createElement("div", { style: { padding: "12px" } },
        React.createElement(StopPropagation, null,
            React.createElement(TextField, { labelHidden: true, autoComplete: autoComplete ?? "off", label: label ?? modelName, placeholder: placeholder ?? `Find ${props.modelName}`, prefix: prefix ?? React.createElement(Icon, { source: SearchIcon }), ...rest }))));
};
const StopPropagation = ({ children }) => {
    const stopEventPropagation = (event) => {
        event.stopPropagation();
    };
    return (React.createElement("div", { onClick: stopEventPropagation, onTouchStart: stopEventPropagation }, children));
};
//# sourceMappingURL=RelatedModelOptions.js.map