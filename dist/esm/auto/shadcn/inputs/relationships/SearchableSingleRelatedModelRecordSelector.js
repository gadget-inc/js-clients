import { PlusIcon } from "lucide-react";
import { default as React, useCallback } from "react";
import { debounce } from "../../../../utils.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModel.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
export const makeSearchableSingleRelatedModelRecordSelector = ({ Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const ShadcnComboInput = makeShadcnAutoComboInput({
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
        const handleScrolledToBottom = useCallback(debounce(() => {
            if (pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, searchFilterOptions.length]);
        return (React.createElement(ShadcnComboInput, { selectedRecordTag: null, path: path, hideLabel: true, metadata: metadata, field: field, options: searchFilterOptions, onSelect: (record) => {
                setValue(path, { ...record, _link: record.id });
            }, isLoading: isLoading, errorMessage: "", actions: [
                React.createElement(CommandGroup, { key: "add-record" },
                    React.createElement(CommandItem, { onSelect: () => {
                            props.override?.addNewRecord?.() ?? setIsEditing(true);
                        } },
                        React.createElement("div", { className: "flex flex-row items-center gap-2" },
                            React.createElement(PlusIcon, { className: "w-4 h-4" }),
                            "Add ",
                            relatedModelName))),
            ], records: records, checkSelected: () => false, allowMultiple: false, willLoadMoreOptions: pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, defaultValue: search.value }));
    }
    return SearchableSingleRelatedModelRecordSelector;
};
//# sourceMappingURL=SearchableSingleRelatedModelRecordSelector.js.map