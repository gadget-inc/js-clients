"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRelatedModelOption = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const ShadcnListMessages_js_1 = require("./ShadcnListMessages.js");
const makeRelatedModelOption = (elements) => {
    const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;
    function RelatedModelOption(props) {
        const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;
        const { NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = (0, ShadcnListMessages_js_1.makeShadcnListMessages)(elements);
        const listBoxOptions = (0, react_1.useMemo)(() => [
            ...(actions ?? []),
            ...options.map((option) => {
                return props.renderOption ? (props.renderOption(option)) : (react_1.default.createElement(ShadcnSelectableOption, { ...option, label: option.primary, selected: checkSelected?.(option.id) ?? false, allowMultiple: props.allowMultiple, onSelect: (id) => {
                        const record = records?.find((record) => record.id === id) ?? { id };
                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                        onSelect(recordWithoutTimestamps);
                    }, key: option.id }));
            }),
        ], [actions, options, props.renderOption, records, checkSelected, onSelect]);
        const loadMoreRef = (0, react_1.useRef)(null);
        useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });
        return (react_1.default.createElement(CommandList, { className: "absolute top-full w-full bg-background border shadow-md rounded-b-md z-50" },
            isLoading && react_1.default.createElement(CommandEmpty, null, "Loading..."),
            listBoxOptions.length > 0 ? react_1.default.createElement(CommandGroup, null, listBoxOptions) : null,
            props.allowOther && props.searchValue && (react_1.default.createElement(AddExtraOption, { message: `Add "${props.searchValue}"`, onSelect: () => {
                    props.onAddExtraOption?.(props.searchValue ?? "");
                    props.setSearchValue?.("");
                } })),
            errorMessage ? (react_1.default.createElement(NoRecordsMessage, { message: getErrorMessage(errorMessage) })) : (!isLoading && react_1.default.createElement(NoRecordsMessage, { message: props.emptyMessage ?? undefined })),
            props.canLoadMore && (react_1.default.createElement(CommandItem, { ref: loadMoreRef, key: "intersection-trigger", className: "p-1 w-full flex items-center justify-center intersection-trigger" },
                react_1.default.createElement(lucide_react_1.LoaderIcon, { className: "w-4 h-4 animate-spin" })))));
    }
    RelatedModelOption.displayName = "RelatedModelOption";
    return { RelatedModelOption };
};
exports.makeRelatedModelOption = makeRelatedModelOption;
const useDetectScrolledToBottom = (props) => {
    const { loadMoreRef } = props;
    (0, react_1.useEffect)(() => {
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