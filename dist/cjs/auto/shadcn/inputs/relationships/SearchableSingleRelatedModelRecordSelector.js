"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchableSingleRelatedModelRecordSelector = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../../utils.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const makeSearchableSingleRelatedModelRecordSelector = ({ Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    function SearchableSingleRelatedModelRecordSelector(props) {
        const { field } = props;
        const { search, metadata, pagination, records, isLoading, searchFilterOptions, relatedModelName, path, setValue, setIsEditing } = props.form;
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && searchFilterOptions.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, searchFilterOptions.length]);
        return (react_1.default.createElement(ShadcnComboInput, { selectedRecordTag: null, path: path, hideLabel: true, metadata: metadata, field: field, options: searchFilterOptions, onSelect: (record) => {
                setValue(path, { ...record, _link: record.id });
            }, isLoading: isLoading, errorMessage: "", actions: [
                react_1.default.createElement(CommandGroup, { key: "add-record" },
                    react_1.default.createElement(CommandItem, { onSelect: () => {
                            props.override?.addNewRecord?.() ?? setIsEditing(true);
                        } },
                        react_1.default.createElement("div", { className: "flex flex-row items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.PlusIcon, { className: "w-4 h-4" }),
                            "Add ",
                            relatedModelName))),
            ], records: records, checkSelected: () => false, allowMultiple: false, willLoadMoreOptions: pagination.hasNextPage && searchFilterOptions.length >= useRelatedModel_js_1.optionRecordsToLoadCount, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, defaultValue: search.value }));
    }
    return SearchableSingleRelatedModelRecordSelector;
};
exports.makeSearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector;
//# sourceMappingURL=SearchableSingleRelatedModelRecordSelector.js.map