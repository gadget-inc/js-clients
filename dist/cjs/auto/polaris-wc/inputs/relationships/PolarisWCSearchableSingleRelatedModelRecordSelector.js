"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCSearchableSingleRelatedModelRecordSelector = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisWCRelatedModelOptions_js_1 = require("./PolarisWCRelatedModelOptions.js");
const PolarisWCSearchableSingleRelatedModelRecordSelector = (props) => {
    const { search, searchOpen, setSearchOpen, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing, } = props.form;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptionsPopover, { active: searchOpen, activator: react_1.default.createElement(PolarisWCRelatedModelOptions_js_1.PolarisWCRelatedModelOptionsSearch, { modelName: relatedModelName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                react_1.default.createElement("button", { key: "add-new-record", type: "button", onClick: () => {
                        props.override?.addNewRecord?.() ?? setIsEditing(true);
                        setSearchOpen(false);
                    }, style: {
                        display: "flex",
                        width: "100%",
                        padding: "8px 12px",
                        border: "none",
                        borderBottom: "1px solid var(--p-color-border, #dfe3e8)",
                        background: "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                        alignItems: "center",
                        gap: "8px",
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f9fafb)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.background = "transparent";
                    } },
                    react_1.default.createElement("s-icon", { type: "plus" }),
                    react_1.default.createElement("s-text", null,
                        "Add ",
                        relatedModelName)),
            ], options: searchFilterOptions, records: records, onSelect: (record) => {
                if (record.id == "add-new-record") {
                    setValue(path, { ...record, _link: record.id });
                }
                setSearchOpen(false);
            }, isLoading: isLoading })));
};
exports.PolarisWCSearchableSingleRelatedModelRecordSelector = PolarisWCSearchableSingleRelatedModelRecordSelector;
//# sourceMappingURL=PolarisWCSearchableSingleRelatedModelRecordSelector.js.map