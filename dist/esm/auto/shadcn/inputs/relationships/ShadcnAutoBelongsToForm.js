import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
export const makeShadcnAutoBelongsToForm = ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
        Command,
        CommandItem,
        CommandInput,
        CommandLoading,
        Label,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnAutoBelongsToForm(props) {
        const { field } = props;
        const form = useBelongsToForm(props);
        const { record, actionsOpen, setActionsOpen, isEditing, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName, path, setValue, getValues, metaDataPathPrefix, } = form;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("div", { className: "flex flex-row justify-between items-center" },
                    React.createElement("h2", { className: "text-lg font-medium" }, relatedModelName),
                    hasRecord && (React.createElement(DropdownMenu, { open: actionsOpen, onOpenChange: setActionsOpen },
                        React.createElement(DropdownMenuTrigger, { "data-testid": `${path}-dropdown-menu-trigger`, asChild: true },
                            React.createElement(Button, { variant: "ghost" },
                                React.createElement(EllipsisVerticalIcon, { className: "w-4 h-4" }))),
                        React.createElement(DropdownMenuContent, { className: "bg-white" },
                            React.createElement(DropdownMenuItem, { value: "edit", onSelect: () => {
                                    setIsEditing(true);
                                    setActionsOpen(false);
                                } },
                                "Edit ",
                                relatedModelName.toLocaleLowerCase()),
                            React.createElement(DropdownMenuItem, { value: "remove", onSelect: () => {
                                    const { __typename, id: recordId, ...rest } = record;
                                    const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                    setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                }, variant: "destructive" },
                                "Remove ",
                                relatedModelName.toLocaleLowerCase()))))),
                hasRecord ? (React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("div", { className: "flex flex-row justify-between gap-2 mt-2" },
                        renderOptionLabel(recordOption.label, "primary"),
                        recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary")),
                    recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary"))) : (React.createElement(SearchableSingleRelatedModelRecordSelector, { form: form, field: field }))),
            React.createElement(Dialog, { open: isEditing, onOpenChange: () => setIsEditing(!isEditing) },
                React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                    React.createElement(DialogContent, { className: "bg-white" },
                        React.createElement(DialogHeader, null,
                            React.createElement(DialogTitle, null,
                                "Add ",
                                relatedModelName)),
                        React.createElement("div", null, props.children),
                        React.createElement(DialogFooter, { className: "" },
                            React.createElement(DialogClose, { asChild: true },
                                React.createElement(Button, { type: "button", variant: "secondary" }, "Close")),
                            React.createElement(Button, { type: "button", variant: "default", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setIsEditing(false);
                                } }, "Save")))))));
    }
    return autoRelationshipForm(ShadcnAutoBelongsToForm);
};
//# sourceMappingURL=ShadcnAutoBelongsToForm.js.map