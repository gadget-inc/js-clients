import React from "react";
import { PolarisWCRelatedModelOptionsPopover, PolarisWCRelatedModelOptionsSearch } from "./PolarisWCRelatedModelOptions.js";
export const PolarisWCSearchableSingleRelatedModelRecordSelector = (props) => {
    const { search, searchOpen, setSearchOpen, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing, } = props.form;
    return (React.createElement(React.Fragment, null,
        React.createElement(PolarisWCRelatedModelOptionsPopover, { active: searchOpen, activator: React.createElement(PolarisWCRelatedModelOptionsSearch, { modelName: relatedModelName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                React.createElement("button", { key: "add-new-record", type: "button", onClick: () => {
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
                    React.createElement("s-icon", { type: "plus" }),
                    React.createElement("s-text", null,
                        "Add ",
                        relatedModelName)),
            ], options: searchFilterOptions, records: records, onSelect: (record) => {
                if (record.id == "add-new-record") {
                    setValue(path, { ...record, _link: record.id });
                }
                setSearchOpen(false);
            }, isLoading: isLoading })));
};
//# sourceMappingURL=PolarisWCSearchableSingleRelatedModelRecordSelector.js.map