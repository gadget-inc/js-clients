"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedModelOptionsSearch = exports.RelatedModelOptionsPopover = exports.RelatedModelOptions = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisListMessages_js_1 = require("./PolarisListMessages.js");
const RelatedModelOptions = (props) => {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
    const listBoxOptions = [
        ...(actions ?? []),
        ...options.map((option) => {
            return props.renderOption ? (props.renderOption(option)) : (react_1.default.createElement(PolarisListMessages_js_1.SelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, key: option.id }));
        }),
    ];
    return (react_1.default.createElement(polaris_1.Listbox, { autoSelection: props.autoSelection, onSelect: (id) => {
            const record = records?.find((record) => record.id === id) ?? { id };
            const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
            onSelect(recordWithoutTimestamps);
        } },
        listBoxOptions.length ? (listBoxOptions) : errorMessage ? (react_1.default.createElement(PolarisListMessages_js_1.ListMessage, { message: (0, PolarisListMessages_js_1.getErrorMessage)(errorMessage) })) : !isLoading ? (react_1.default.createElement(PolarisListMessages_js_1.NoRecordsMessage, null)) : null,
        isLoading && react_1.default.createElement(polaris_1.Listbox.Loading, { accessibilityLabel: "Loading" })));
};
exports.RelatedModelOptions = RelatedModelOptions;
const RelatedModelOptionsPopover = (props) => {
    return (react_1.default.createElement(polaris_1.Popover, { active: props.active, activator: props.activator, ariaHaspopup: "listbox", preferredAlignment: "right", autofocusTarget: "first-node", onClose: props.onClose },
        react_1.default.createElement(polaris_1.Popover.Pane, { fixed: true },
            react_1.default.createElement("div", { style: {
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
                react_1.default.createElement(polaris_1.Scrollable, { shadow: true, style: {
                        position: "relative",
                        width: "310px",
                        height: "292px",
                        padding: "var(--p-space-200) 0",
                        borderBottomLeftRadius: "var(--p-border-radius-200)",
                        borderBottomRightRadius: "var(--p-border-radius-200)",
                    }, onScrolledToBottom: props.onScrolledToBottom },
                    react_1.default.createElement(exports.RelatedModelOptions, { options: props.options, records: props.records, onSelect: props.onSelect, isLoading: props.isLoading, autoSelection: props.autoSelection, renderOption: props.renderOption, actions: props.actions }))))));
};
exports.RelatedModelOptionsPopover = RelatedModelOptionsPopover;
const RelatedModelOptionsSearch = (props) => {
    const { modelName, label, placeholder, prefix, autoComplete, ...rest } = props;
    return (react_1.default.createElement("div", { style: { padding: "12px" } },
        react_1.default.createElement(StopPropagation, null,
            react_1.default.createElement(polaris_1.TextField, { labelHidden: true, autoComplete: autoComplete ?? "off", label: label ?? modelName, placeholder: placeholder ?? `Find ${props.modelName}`, prefix: prefix ?? react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.SearchIcon }), ...rest }))));
};
exports.RelatedModelOptionsSearch = RelatedModelOptionsSearch;
const StopPropagation = ({ children }) => {
    const stopEventPropagation = (event) => {
        event.stopPropagation();
    };
    return (react_1.default.createElement("div", { onClick: stopEventPropagation, onTouchStart: stopEventPropagation }, children));
};
//# sourceMappingURL=RelatedModelOptions.js.map