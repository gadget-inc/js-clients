import { LoaderIcon } from "lucide-react";
import React, { useEffect, useMemo, useRef } from "react";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";
export const makeRelatedModelOption = (elements) => {
    const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;
    function RelatedModelOption(props) {
        const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
        const { NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);
        const listBoxOptions = useMemo(() => [
            ...(actions ?? []),
            ...options.map((option) => {
                return props.renderOption ? (props.renderOption(option)) : (React.createElement(ShadcnSelectableOption, { ...option, label: option.primary, selected: checkSelected?.(option.id) ?? false, allowMultiple: props.allowMultiple, onSelect: (id) => {
                        const record = records?.find((record) => record.id === id) ?? { id };
                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                        onSelect(recordWithoutTimestamps);
                    }, key: option.id }));
            }),
        ], [actions, options, props.renderOption, records, checkSelected, onSelect]);
        const loadMoreRef = useRef(null);
        useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });
        return (React.createElement(CommandList, { className: "absolute top-full w-full bg-background border shadow-md rounded-b-md z-50" },
            isLoading && React.createElement(CommandEmpty, null, "Loading..."),
            listBoxOptions.length > 0 ? React.createElement(CommandGroup, null, listBoxOptions) : null,
            props.allowOther && props.searchValue && (React.createElement(AddExtraOption, { message: `Add "${props.searchValue}"`, onSelect: () => {
                    props.onAddExtraOption?.(props.searchValue ?? "");
                    props.setSearchValue?.("");
                } })),
            errorMessage ? (React.createElement(NoRecordsMessage, { message: getErrorMessage(errorMessage) })) : (!isLoading && React.createElement(NoRecordsMessage, { message: props.emptyMessage ?? undefined })),
            props.canLoadMore && (React.createElement(CommandItem, { ref: loadMoreRef, key: "intersection-trigger", className: "p-1 w-full flex items-center justify-center intersection-trigger" },
                React.createElement(LoaderIcon, { className: "w-4 h-4 animate-spin" })))));
    }
    RelatedModelOption.displayName = "RelatedModelOption";
    return { RelatedModelOption };
};
const useDetectScrolledToBottom = (props) => {
    const { loadMoreRef } = props;
    useEffect(() => {
        if (!loadMoreRef?.current)
            return;
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                props.onLoadMore?.();
            }
        }, {
            root: null, // null to use viewport as root
            threshold: 1,
        });
        observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [props, loadMoreRef, props.onLoadMore]);
};
//# sourceMappingURL=RelatedModelOption.js.map