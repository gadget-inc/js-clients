import React, { useCallback, useEffect, useRef } from "react";
import { PolarisWCPopover } from "../../commonComponents/PolarisWCPopover.js";
import { renderOptionLabel } from "./utils.js";
const getErrorMessage = (errorMessage) => {
    if (errorMessage.includes("The API key is not valid")) {
        return "Invalid API key. Check the Gadget connection settings in the Provider component.";
    }
    if (errorMessage.includes("GGT_INVALID_API_KEY")) {
        return "Invalid API key. Check the Gadget connection settings in the Provider component.";
    }
    return errorMessage;
};
export const PolarisWCRelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions, listboxId, showCheckbox } = props;
    const handleClick = useCallback((id) => {
        const record = records?.find((record) => record.id === id) ?? { id };
        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
        onSelect(recordWithoutTimestamps);
    }, [records, onSelect]);
    const loadMoreRef = useRef(null);
    useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });
    if (errorMessage) {
        return (React.createElement("div", { style: { padding: "12px", textAlign: "center" } },
            React.createElement("s-text", { tone: "critical" }, getErrorMessage(errorMessage))));
    }
    return (React.createElement("div", { id: listboxId, role: "listbox" },
        actions,
        options.map((option) => {
            if (props.renderOption) {
                return props.renderOption(option);
            }
            const isSelected = checkSelected?.(option.id) ?? false;
            return (React.createElement(PolarisWCSelectableOption, { key: option.id, option: option, selected: isSelected, onClick: () => handleClick(option.id), showCheckbox: showCheckbox }));
        }),
        !isLoading && options.length === 0 && (React.createElement("div", { style: { padding: "12px", textAlign: "center" } },
            React.createElement("s-text", null, "No records found"))),
        isLoading ? (React.createElement("div", { style: { display: "flex", justifyContent: "center", padding: "12px" } },
            React.createElement("s-spinner", { size: "base" }))) : props.canLoadMore ? (React.createElement("div", { ref: loadMoreRef, style: { display: "flex", justifyContent: "center", padding: "8px" } },
            React.createElement("s-spinner", { size: "base" }))) : null));
};
const selectedBg = "var(--p-color-bg-surface-selected, #f1f2f4)";
const hoverBg = "var(--p-color-bg-surface-hover, #f7f7f7)";
const PolarisWCSelectableOption = (props) => {
    const { option, selected, onClick, showCheckbox } = props;
    const showSelectedBackground = !showCheckbox && selected;
    return (React.createElement("button", { type: "button", role: "option", "aria-selected": selected, onClick: onClick, style: {
            display: "flex",
            width: "100%",
            padding: "8px 12px",
            border: "none",
            background: showSelectedBackground ? selectedBg : "transparent",
            cursor: "pointer",
            textAlign: "left",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
        }, onMouseEnter: (e) => {
            if (showCheckbox || !selected) {
                e.currentTarget.style.background = hoverBg;
            }
        }, onMouseLeave: (e) => {
            e.currentTarget.style.background = showSelectedBackground ? selectedBg : "transparent";
        } },
        showCheckbox && React.createElement("s-checkbox", { checked: selected }),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 } },
            renderOptionLabel(option.primary, "primary"),
            option.secondary && renderOptionLabel(option.secondary, "secondary")),
        option.tertiary && renderOptionLabel(option.tertiary, "tertiary")));
};
export const PolarisWCRelatedModelOptionsPopover = (props) => {
    const scrollContainerRef = useRef(null);
    const handleScroll = useCallback(() => {
        if (!scrollContainerRef.current || !props.onScrolledToBottom)
            return;
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
        if (isNearBottom) {
            props.onScrolledToBottom();
        }
    }, [props.onScrolledToBottom]);
    return (React.createElement(PolarisWCPopover, { open: props.active, onClose: props.onClose, position: "below-end", anchor: props.activator, maxHeight: "350px", contentProps: {
            style: {
                width: "310px",
                padding: 0,
                overflow: "hidden",
            },
        } },
        React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                maxHeight: "350px",
            } },
            props.search && (React.createElement("div", { style: {
                    borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
                    flexShrink: 0,
                } }, props.search)),
            React.createElement("div", { ref: scrollContainerRef, onScroll: handleScroll, style: {
                    overflowY: "auto",
                    flex: 1,
                    maxHeight: "292px",
                } },
                React.createElement(PolarisWCRelatedModelOptions, { options: props.options, records: props.records, onSelect: props.onSelect, isLoading: props.isLoading, renderOption: props.renderOption, actions: props.actions, listboxId: props.listboxId, showCheckbox: props.showCheckbox })))));
};
const useDetectScrolledToBottom = (props) => {
    const { loadMoreRef } = props;
    useEffect(() => {
        if (!loadMoreRef?.current)
            return;
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                props.onLoadMore?.();
            }
        }, {
            root: null,
            threshold: 1,
        });
        observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [props, loadMoreRef, props.onLoadMore]);
};
export const PolarisWCRelatedModelOptionsSearch = (props) => {
    const { modelName, value, onChange, onFocus, ariaControls } = props;
    const handleChange = useCallback((event) => {
        const target = event.currentTarget;
        onChange(target.value ?? "");
    }, [onChange]);
    return (React.createElement("div", { style: { padding: "12px" }, onClick: (e) => e.stopPropagation(), onTouchStart: (e) => e.stopPropagation() },
        React.createElement("s-text-field", { label: "", value: value, onChange: handleChange, onFocus: onFocus, placeholder: `Find ${modelName}`, autocomplete: "off", "aria-controls": ariaControls })));
};
//# sourceMappingURL=PolarisWCRelatedModelOptions.js.map