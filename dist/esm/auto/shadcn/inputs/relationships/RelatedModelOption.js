import { LoaderIcon } from "lucide-react";
import React, { useMemo } from "react";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";
export const makeRelatedModelOption = (elements) => {
    const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;
    function RelatedModelOption(props) {
        const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
        const { NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);
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
            isLoading && React.createElement(CommandEmpty, null, "Loading..."),
            listBoxOptions.length > 0 ? React.createElement(CommandGroup, null, listBoxOptions) : null,
            props.allowOther && props.searchValue && (React.createElement(AddExtraOption, { message: `Add "${props.searchValue}"`, onSelect: () => {
                    props.onAddExtraOption?.(props.searchValue ?? "");
                    props.setSearchValue?.("");
                } })),
            errorMessage ? (React.createElement(NoRecordsMessage, { message: getErrorMessage(errorMessage) })) : (!isLoading && React.createElement(NoRecordsMessage, { message: props.emptyMessage ?? undefined })),
            props.loadMoreRef && (React.createElement(CommandItem, { ref: props.loadMoreRef, key: "intersection-trigger", className: "p-1 w-full flex items-center justify-center intersection-trigger" },
                React.createElement(LoaderIcon, { className: "w-4 h-4 animate-spin" })))));
    }
    RelatedModelOption.displayName = "RelatedModelOption";
    return RelatedModelOption;
};
//# sourceMappingURL=RelatedModelOption.js.map