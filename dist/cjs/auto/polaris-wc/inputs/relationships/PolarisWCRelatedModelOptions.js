"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCRelatedModelOptionsSearch = exports.PolarisWCRelatedModelOptionsPopover = exports.PolarisWCRelatedModelOptions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PolarisWCPopover_js_1 = require("../../commonComponents/PolarisWCPopover.js");
const utils_js_1 = require("./utils.js");
const getErrorMessage = (errorMessage) => {
    if (errorMessage.includes("The API key is not valid")) {
        return "Invalid API key. Check the Gadget connection settings in the Provider component.";
    }
    if (errorMessage.includes("GGT_INVALID_API_KEY")) {
        return "Invalid API key. Check the Gadget connection settings in the Provider component.";
    }
    return errorMessage;
};
const PolarisWCRelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions, listboxId, showCheckbox } = props;
    const handleClick = (0, react_1.useCallback)((id) => {
        const record = records?.find((record) => record.id === id) ?? { id };
        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
        onSelect(recordWithoutTimestamps);
    }, [records, onSelect]);
    const loadMoreRef = (0, react_1.useRef)(null);
    useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });
    if (errorMessage) {
        return (react_1.default.createElement("div", { style: { padding: "12px", textAlign: "center" } },
            react_1.default.createElement("s-text", { tone: "critical" }, getErrorMessage(errorMessage))));
    }
    return (react_1.default.createElement("div", { id: listboxId, role: "listbox" },
        actions,
        options.map((option) => {
            if (props.renderOption) {
                return props.renderOption(option);
            }
            const isSelected = checkSelected?.(option.id) ?? false;
            return (react_1.default.createElement(PolarisWCSelectableOption, { key: option.id, option: option, selected: isSelected, onClick: () => handleClick(option.id), showCheckbox: showCheckbox }));
        }),
        !isLoading && options.length === 0 && (react_1.default.createElement("div", { style: { padding: "12px", textAlign: "center" } },
            react_1.default.createElement("s-text", null, "No records found"))),
        isLoading ? (react_1.default.createElement("div", { style: { display: "flex", justifyContent: "center", padding: "12px" } },
            react_1.default.createElement("s-spinner", { size: "base" }))) : props.canLoadMore ? (react_1.default.createElement("div", { ref: loadMoreRef, style: { display: "flex", justifyContent: "center", padding: "8px" } },
            react_1.default.createElement("s-spinner", { size: "base" }))) : null));
};
exports.PolarisWCRelatedModelOptions = PolarisWCRelatedModelOptions;
const selectedBg = "var(--p-color-bg-surface-selected, #f1f2f4)";
const hoverBg = "var(--p-color-bg-surface-hover, #f7f7f7)";
const PolarisWCSelectableOption = (props) => {
    const { option, selected, onClick, showCheckbox } = props;
    const showSelectedBackground = !showCheckbox && selected;
    return (react_1.default.createElement("button", { type: "button", role: "option", "aria-selected": selected, onClick: onClick, style: {
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
        showCheckbox && react_1.default.createElement("s-checkbox", { checked: selected }),
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 } },
            (0, utils_js_1.renderOptionLabel)(option.primary, "primary"),
            option.secondary && (0, utils_js_1.renderOptionLabel)(option.secondary, "secondary")),
        option.tertiary && (0, utils_js_1.renderOptionLabel)(option.tertiary, "tertiary")));
};
const PolarisWCRelatedModelOptionsPopover = (props) => {
    const scrollContainerRef = (0, react_1.useRef)(null);
    const { onScrolledToBottom } = props;
    const handleScroll = (0, react_1.useCallback)(() => {
        if (!scrollContainerRef.current || !onScrolledToBottom)
            return;
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 50;
        if (isNearBottom) {
            onScrolledToBottom();
        }
    }, [onScrolledToBottom]);
    return (react_1.default.createElement(PolarisWCPopover_js_1.PolarisWCPopover, { open: props.active, onClose: props.onClose, position: "below-end", anchor: props.activator, maxHeight: "350px", contentProps: {
            style: {
                width: "310px",
                padding: 0,
                overflow: "hidden",
            },
        } },
        react_1.default.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                maxHeight: "350px",
            } },
            props.search && (react_1.default.createElement("div", { style: {
                    borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
                    flexShrink: 0,
                } }, props.search)),
            react_1.default.createElement("div", { ref: scrollContainerRef, onScroll: handleScroll, style: {
                    overflowY: "auto",
                    flex: 1,
                    maxHeight: "292px",
                } },
                react_1.default.createElement(exports.PolarisWCRelatedModelOptions, { options: props.options, records: props.records, onSelect: props.onSelect, isLoading: props.isLoading, renderOption: props.renderOption, actions: props.actions, listboxId: props.listboxId, showCheckbox: props.showCheckbox })))));
};
exports.PolarisWCRelatedModelOptionsPopover = PolarisWCRelatedModelOptionsPopover;
const useDetectScrolledToBottom = (props) => {
    const { loadMoreRef } = props;
    (0, react_1.useEffect)(() => {
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
const PolarisWCRelatedModelOptionsSearch = (props) => {
    const { modelName, value, onChange, onFocus, ariaControls } = props;
    const handleChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        onChange(target.value ?? "");
    }, [onChange]);
    return (react_1.default.createElement("div", { style: { padding: "12px" }, onClick: (e) => e.stopPropagation(), onTouchStart: (e) => e.stopPropagation() },
        react_1.default.createElement("s-text-field", { label: "", value: value, onChange: handleChange, onFocus: onFocus, placeholder: `Find ${modelName}`, autocomplete: "off", "aria-controls": ariaControls })));
};
exports.PolarisWCRelatedModelOptionsSearch = PolarisWCRelatedModelOptionsSearch;
//# sourceMappingURL=PolarisWCRelatedModelOptions.js.map