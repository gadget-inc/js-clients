import { CommandSeparator } from "cmdk";
import { EllipsisVerticalIcon, PlusIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { debounce } from "../../../../utils.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModel.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
export const makeShadcnAutoBelongsToForm = ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    const ShadcnComboInput = makeShadcnAutoComboInput({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandLoading,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnAutoBelongsToForm(props) {
        const { field } = props;
        const { record, actionsOpen, modalOpen, setActionsOpen, setModalOpen, search, searchFilterOptions, pagination, records, isLoading, pathPrefix, hasRecord, recordOption, parentName, path, setValue, getValues, metadata, metaDataPathPrefix, } = useBelongsToForm(props);
        const handleScrolledToBottom = useCallback(debounce(() => {
            if (pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, searchFilterOptions.length]);
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("div", { className: "flex flex-row justify-between items-center" },
                    React.createElement("h2", { className: "text-lg font-medium" }, parentName),
                    hasRecord && (React.createElement(DropdownMenu, { open: actionsOpen, onOpenChange: setActionsOpen },
                        React.createElement(DropdownMenuTrigger, { "data-testid": `${path}-dropdown-menu-trigger`, asChild: true },
                            React.createElement(Button, { variant: "ghost" },
                                React.createElement(EllipsisVerticalIcon, { className: "w-4 h-4" }))),
                        React.createElement(DropdownMenuContent, { className: "bg-white" },
                            React.createElement(DropdownMenuItem, { value: "edit", onSelect: () => {
                                    setModalOpen(true);
                                    setActionsOpen(false);
                                } },
                                "Edit ",
                                parentName.toLocaleLowerCase()),
                            React.createElement(DropdownMenuItem, { value: "remove", onSelect: () => {
                                    const { __typename, id: recordId, ...rest } = record;
                                    const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                    setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                }, variant: "destructive" },
                                "Remove ",
                                parentName.toLocaleLowerCase()))))),
                hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("div", { className: "flex flex-row justify-between gap-2 mt-2" },
                        renderOptionLabel(recordOption.label, "primary"),
                        recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary")),
                    recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")))) : (React.createElement(ShadcnComboInput, { selectedRecordTag: null, path: path, hideLabel: true, metadata: metadata, field: field, options: searchFilterOptions, onSelect: (record) => {
                        setValue(path, { ...record, _link: record.id });
                    }, isLoading: isLoading, errorMessage: "", actions: [
                        React.createElement(CommandGroup, { key: "add-record" },
                            React.createElement(CommandItem, { onSelect: () => {
                                    setModalOpen(true);
                                } },
                                React.createElement("div", { className: "flex flex-row items-center gap-2" },
                                    React.createElement(PlusIcon, { className: "w-4 h-4" }),
                                    "Add ",
                                    parentName)),
                            React.createElement(CommandSeparator, null)),
                    ], records: records, checkSelected: () => false, allowMultiple: false, willLoadMoreOptions: pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, defaultValue: search.value }))),
            React.createElement(Dialog, { open: modalOpen, onOpenChange: () => setModalOpen(!modalOpen) },
                React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                    React.createElement(DialogContent, { className: "bg-white" },
                        React.createElement(DialogHeader, null,
                            React.createElement(DialogTitle, null,
                                "Add ",
                                parentName)),
                        React.createElement("div", null, props.children),
                        React.createElement(DialogFooter, { className: "" },
                            React.createElement(DialogClose, { asChild: true },
                                React.createElement(Button, { type: "button", variant: "secondary" }, "Close")),
                            React.createElement(Button, { type: "button", variant: "default", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setModalOpen(false);
                                } }, "Save")))))));
    }
    return autoRelationshipForm(ShadcnAutoBelongsToForm);
};
//# sourceMappingURL=ShadcnAutoBelongsToForm.js.map