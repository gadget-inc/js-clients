import { ChevronsUpDown, PlusIcon, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useHasManyThroughForm } from "../../../../useHasManyThroughForm.js";
import { debounce } from "../../../../utils.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { getRecordAsOption } from "../../../hooks/useRelatedModel.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
export const makeShadcnAutoHasManyThroughForm = ({ Badge, Button, Label, Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, Popover, PopoverContent, PopoverTrigger, }) => {
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
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    const SiblingOption = (props) => {
        const { option, onSelect } = props;
        return (React.createElement(CommandItem, { onSelect: () => {
                onSelect(option);
            } },
            React.createElement("div", { className: "flex justify-between items-center w-full" },
                React.createElement("div", { className: "flex flex-row items-center gap-2" },
                    renderOptionLabel(option.label, "primary"),
                    option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")),
                React.createElement(PlusIcon, { className: "w-4 h-4 shrink-0" }))));
    };
    function ShadcnAutoHasManyThroughForm(props) {
        const [open, setOpen] = useState(false);
        const { field, append, remove, joinRecords, metadata, primaryLabel, hasChildForm, listboxId, pathPrefix, metaDataPathPrefix, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = useHasManyThroughForm(props);
        const handleScrolledToBottom = useCallback(debounce(() => {
            if (siblingPagination.hasNextPage && siblingModelOptions.length) {
                siblingPagination.loadNextPage();
            }
        }, 300), [siblingPagination, siblingModelOptions.length]);
        return (React.createElement("div", { className: "flex flex-col gap-2 " },
            React.createElement("div", { className: "flex justify-between flex-row" },
                React.createElement("div", null, props.label ?? React.createElement(Label, null, siblingModelName)),
                React.createElement("div", null,
                    React.createElement(Popover, { open: open, onOpenChange: setOpen },
                        React.createElement(PopoverTrigger, { asChild: true },
                            React.createElement(Button, { type: "button", variant: "outline", role: "combobox", "aria-expanded": open, "aria-controls": listboxId, className: "w-[300px] flex flex-row items-center justify-between" },
                                React.createElement(Label, { className: "truncate flex-grow text-left" },
                                    "Add ",
                                    siblingModelName ?? "related model"),
                                React.createElement(ChevronsUpDown, { className: "opacity-50 w-5 h-5 flex-shrink-0" }))),
                        React.createElement(PopoverContent, { className: "w-[300px] bg-white p-0" },
                            React.createElement(ShadcnComboInput, { selectedRecordTag: null, path: "", hideLabel: true, metadata: metadata, field: field, options: siblingModelOptions, onSelect: () => void 0, willLoadMoreOptions: siblingPagination.hasNextPage && siblingModelOptions.length ? true : false, isLoading: siblingRecordsLoading, errorMessage: "", records: siblingRecords, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, renderOption: (option) => (React.createElement(SiblingOption, { onSelect: (option) => {
                                        const record = siblingRecords?.find((record) => record.id === option.id) ?? { id: option.id };
                                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                                        inverseRelatedModelField &&
                                            append({ [inverseRelatedModelField]: { ...recordWithoutTimestamps, _link: record.id } });
                                    }, option: option })) }))))),
            joinRecords.length > 0 ? (React.createElement("div", { className: "flex flex-col gap-2" }, joinRecords.map(([fieldKey, idx, record]) => {
                const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
                const siblingOption = getRecordAsOption(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
                return (React.createElement("div", { className: "flex items-center w-full border border-gray-300 rounded-md ", key: fieldKey },
                    React.createElement("div", { className: "flex flex-col gap-4 w-full" },
                        React.createElement("div", { className: "flex-1 p-2" },
                            React.createElement("div", { className: "flex justify-between items-center w-full" },
                                React.createElement("div", { className: "flex flex-col gap-1" },
                                    React.createElement("div", { className: "flex items-center gap-2" },
                                        renderOptionLabel(siblingOption.label, "primary"),
                                        siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary")),
                                    siblingOption?.secondaryLabel && renderOptionLabel(siblingOption.secondaryLabel, "secondary")),
                                React.createElement(Button, { id: `deleteButton_${pathPrefix}.${idx}`, className: "border ml-auto", variant: "outline", type: "button", size: "icon", onClick: () => remove(idx) },
                                    React.createElement(X, { className: "w-4 h-4" })))),
                        hasChildForm && (React.createElement("div", { className: "flex-1 p-2 border-t border-gray-300", onClick: (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                            } },
                            React.createElement(RelationshipContext.Provider, { value: {
                                    transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                    transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                    fieldArray,
                                    hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                                } }, props.children))))));
            }))) : (React.createElement("div", { className: "flex items-center justify-center border border-gray-300 rounded-md p-2 mt-4" },
                React.createElement(Label, { className: "text-sm text-gray-500" },
                    "No ",
                    siblingModelName,
                    " yet")))));
    }
    return autoRelationshipForm(ShadcnAutoHasManyThroughForm);
};
//# sourceMappingURL=ShadcnAutoHasManyThroughForm.js.map