"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchableSingleRelatedModelRecordSelector = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const SearchableSingleRelatedModelRecordSelector = (props) => {
    const { search, searchOpen, setSearchOpen, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing, } = props.form;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsPopover, { active: searchOpen, activator: react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptionsSearch, { modelName: relatedModelName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                react_1.default.createElement(polaris_1.Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                    react_1.default.createElement(polaris_1.InlineStack, { gap: "200" },
                        react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.PlusCircleIcon }),
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
            }, isLoading: isLoading, autoSelection: polaris_1.AutoSelection.None })));
};
exports.SearchableSingleRelatedModelRecordSelector = SearchableSingleRelatedModelRecordSelector;
//# sourceMappingURL=SearchableSingleRelatedModelRecordSelector.js.map