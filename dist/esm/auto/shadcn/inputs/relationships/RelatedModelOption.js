import React, { useMemo } from "react";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";
export const makeRelatedModelOption = (elements) => {
    const { CommandList, CommandEmpty, CommandGroup } = elements;
    function RelatedModelOption(props) {
        const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
        const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);
        const listBoxOptions = useMemo(() => [
            ...(actions ?? []),
            ...options.map((option) => {
                return props.renderOption ? (props.renderOption(option)) : (React.createElement(ShadcnSelectableOption, { ...option, selected: checkSelected?.(option.id) ?? false, allowMultiple: props.allowMultiple, onSelect: (id) => {
                        const record = records?.find((record) => record.id === id) ?? { id };
                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                        onSelect(recordWithoutTimestamps);
                    }, key: option.id }));
            }),
        ], [actions, options, props.renderOption, records, checkSelected, onSelect]);
        return (React.createElement(CommandList, null,
            isLoading ? (React.createElement(CommandEmpty, null, "Loading...")) : props.allowOther ? (React.createElement(ListMessage, { message: `Add "${props.searchValue}"`, onSelect: () => {
                    props.onAddExtraOption?.(props.searchValue ?? "");
                    props.setSearchValue?.("");
                } })) : (React.createElement(NoRecordsMessage, { message: props.emptyMessage })),
            listBoxOptions.length ? (React.createElement(CommandGroup, null,
                listBoxOptions,
                props.allowOther && props.searchValue && (React.createElement(AddExtraOption, { message: `Add "${props.searchValue}"`, onSelect: () => {
                        props.onAddExtraOption?.(props.searchValue ?? "");
                        props.setSearchValue?.("");
                    } })))) : errorMessage ? (React.createElement(ListMessage, { message: getErrorMessage(errorMessage) })) : (React.createElement(NoRecordsMessage, null))));
    }
    RelatedModelOption.displayName = "RelatedModelOption";
    return RelatedModelOption;
};
//# sourceMappingURL=RelatedModelOption.js.map