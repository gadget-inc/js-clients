import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
export const makeShadcnAutoBelongsToForm = ({ Badge, Button, Command, CommandItem, CommandInput, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
        Command,
        CommandItem,
        CommandInput,
        Label,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    function ShadcnAutoBelongsToForm(props) {
        const { field, label } = props;
        const form = useBelongsToForm(props);
        const { record, actionsOpen, setActionsOpen, isEditing, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName, path, setValue, getValues, metaDataPathPrefix, } = form;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("div", { className: "flex flex-row justify-between items-center mb-2" },
                    label ?? React.createElement("h2", { className: "text-lg font-medium h-9" }, relatedModelName),
                    hasRecord && (React.createElement(DropdownMenu, { open: actionsOpen, onOpenChange: setActionsOpen },
                        React.createElement(DropdownMenuTrigger, { "data-testid": `${path}-dropdown-menu-trigger`, className: "focus-visible:outline-hidden focus-visible:ring-0" },
                            React.createElement(Button, { variant: "ghost", className: "w-4", onClick: () => setActionsOpen(!actionsOpen) },
                                React.createElement(EllipsisVerticalIcon, { className: "w-4 h-2" }))),
                        React.createElement(DropdownMenuContent, { className: "bg-background" },
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
                hasRecord ? (React.createElement("div", { className: "flex flex-row justify-between border-t" },
                    React.createElement("div", { className: "flex flex-col gap-2 pt-3" },
                        renderOptionLabel(recordOption.primary, "primary"),
                        recordOption.secondary && renderOptionLabel(recordOption.secondary, "secondary")),
                    React.createElement("div", { className: "mt-2" }, recordOption.tertiary && renderOptionLabel(recordOption.tertiary, "tertiary")))) : (React.createElement(SearchableSingleRelatedModelRecordSelector, { form: form, field: field }))),
            React.createElement(Dialog, { open: isEditing, onOpenChange: () => setIsEditing(!isEditing) },
                React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                    React.createElement(DialogContent, { className: "bg-background" },
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