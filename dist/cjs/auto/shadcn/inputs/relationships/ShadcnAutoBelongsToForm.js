"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoBelongsToForm = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const useBelongsToForm_js_1 = require("../../../../useBelongsToForm.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const utils_js_1 = require("../../utils.js");
const SearchableSingleRelatedModelRecordSelector_js_1 = require("./SearchableSingleRelatedModelRecordSelector.js");
const makeShadcnAutoBelongsToForm = ({ Badge, Button, Command, CommandItem, CommandInput, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }) => {
    const renderOptionLabel = (0, utils_js_1.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    const SearchableSingleRelatedModelRecordSelector = (0, SearchableSingleRelatedModelRecordSelector_js_1.makeSearchableSingleRelatedModelRecordSelector)({
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
        const form = (0, useBelongsToForm_js_1.useBelongsToForm)(props);
        const { record, actionsOpen, setActionsOpen, isEditing, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName, path, setValue, getValues, metaDataPathPrefix, } = form;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex flex-row justify-between items-center mb-2" },
                    label ?? react_1.default.createElement("h2", { className: "text-lg font-medium h-9" }, relatedModelName),
                    hasRecord && (react_1.default.createElement(DropdownMenu, { open: actionsOpen, onOpenChange: setActionsOpen },
                        react_1.default.createElement(DropdownMenuTrigger, { "data-testid": `${path}-dropdown-menu-trigger`, className: "focus-visible:outline-none focus-visible:ring-0" },
                            react_1.default.createElement(Button, { variant: "ghost", className: "w-4", onClick: () => setActionsOpen(!actionsOpen) },
                                react_1.default.createElement(lucide_react_1.EllipsisVerticalIcon, { className: "w-4 h-2" }))),
                        react_1.default.createElement(DropdownMenuContent, { className: "bg-background" },
                            react_1.default.createElement(DropdownMenuItem, { value: "edit", onSelect: () => {
                                    setIsEditing(true);
                                    setActionsOpen(false);
                                } },
                                "Edit ",
                                relatedModelName.toLocaleLowerCase()),
                            react_1.default.createElement(DropdownMenuItem, { value: "remove", onSelect: () => {
                                    const { __typename, id: recordId, ...rest } = record;
                                    const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                    setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                }, variant: "destructive" },
                                "Remove ",
                                relatedModelName.toLocaleLowerCase()))))),
                hasRecord ? (react_1.default.createElement("div", { className: "flex flex-row justify-between border-t" },
                    react_1.default.createElement("div", { className: "flex flex-col gap-2 pt-3" },
                        renderOptionLabel(recordOption.primary, "primary"),
                        recordOption.secondary && renderOptionLabel(recordOption.secondary, "secondary")),
                    react_1.default.createElement("div", { className: "mt-2" }, recordOption.tertiary && renderOptionLabel(recordOption.tertiary, "tertiary")))) : (react_1.default.createElement(SearchableSingleRelatedModelRecordSelector, { form: form, field: field }))),
            react_1.default.createElement(Dialog, { open: isEditing, onOpenChange: () => setIsEditing(!isEditing) },
                react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                    react_1.default.createElement(DialogContent, { className: "bg-background" },
                        react_1.default.createElement(DialogHeader, null,
                            react_1.default.createElement(DialogTitle, null,
                                "Add ",
                                relatedModelName)),
                        react_1.default.createElement("div", null, props.children),
                        react_1.default.createElement(DialogFooter, { className: "" },
                            react_1.default.createElement(DialogClose, { asChild: true },
                                react_1.default.createElement(Button, { type: "button", variant: "secondary" }, "Close")),
                            react_1.default.createElement(Button, { type: "button", variant: "default", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setIsEditing(false);
                                } }, "Save")))))));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnAutoBelongsToForm);
};
exports.makeShadcnAutoBelongsToForm = makeShadcnAutoBelongsToForm;
//# sourceMappingURL=ShadcnAutoBelongsToForm.js.map