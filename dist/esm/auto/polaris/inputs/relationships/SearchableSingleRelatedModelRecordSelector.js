import { AutoSelection, Icon, InlineStack, Listbox } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
export const SearchableSingleRelatedModelRecordSelector = (props) => {
    const { search, searchOpen, setSearchOpen, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing, } = props.form;
    return (React.createElement(React.Fragment, null,
        React.createElement(RelatedModelOptionsPopover, { active: searchOpen, activator: React.createElement(RelatedModelOptionsSearch, { modelName: relatedModelName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                React.createElement(Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                    React.createElement(InlineStack, { gap: "200" },
                        React.createElement(Icon, { source: PlusCircleIcon }),
                        "Add ",
                        relatedModelName)),
            ], options: searchFilterOptions, records: records, onSelect: (record) => {
                if (record.id === "add-new-record") {
                    props.override?.addNewRecord?.() ?? setIsEditing(true);
                }
                else {
                    setValue(path, { ...record, _link: record.id });
                }
                setSearchOpen(false);
            }, isLoading: isLoading, autoSelection: AutoSelection.None })));
};
//# sourceMappingURL=SearchableSingleRelatedModelRecordSelector.js.map