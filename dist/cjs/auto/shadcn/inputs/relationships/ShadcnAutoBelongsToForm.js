"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoBelongsToForm = void 0;
const tslib_1 = require("tslib");
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useBelongsToForm_js_1 = require("../../../../useBelongsToForm.js");
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const utils_js_2 = require("../../utils.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const makeShadcnAutoBelongsToForm = ({ Badge, Button, Command, CommandItem, CommandInput, CommandLoading, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle, }) => {
    const renderOptionLabel = (0, utils_js_2.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
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
        const { record, actionsOpen, modalOpen, setActionsOpen, setModalOpen, search, searchFilterOptions, pagination, records, isLoading, pathPrefix, hasRecord, recordOption, parentName, path, setValue, getValues, metadata, metaDataPathPrefix, } = (0, useBelongsToForm_js_1.useBelongsToForm)(props);
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && searchFilterOptions.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, searchFilterOptions.length]);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex flex-row justify-between items-center" },
                    react_1.default.createElement("h2", { className: "text-lg font-medium" }, parentName),
                    hasRecord && (react_1.default.createElement(DropdownMenu, { open: actionsOpen, onOpenChange: setActionsOpen },
                        react_1.default.createElement(DropdownMenuTrigger, { "data-testid": `${path}-dropdown-menu-trigger`, asChild: true },
                            react_1.default.createElement(Button, { variant: "ghost" },
                                react_1.default.createElement(lucide_react_1.EllipsisVerticalIcon, { className: "w-4 h-4" }))),
                        react_1.default.createElement(DropdownMenuContent, { className: "bg-white" },
                            react_1.default.createElement(DropdownMenuItem, { value: "edit", onSelect: () => {
                                    setModalOpen(true);
                                    setActionsOpen(false);
                                } },
                                "Edit ",
                                parentName.toLocaleLowerCase()),
                            react_1.default.createElement(DropdownMenuItem, { value: "remove", onSelect: () => {
                                    const { __typename, id: recordId, ...rest } = record;
                                    const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                    setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                }, variant: "destructive" },
                                "Remove ",
                                parentName.toLocaleLowerCase()))))),
                hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                    react_1.default.createElement("div", { className: "flex flex-row justify-between gap-2 mt-2" },
                        renderOptionLabel(recordOption.label, "primary"),
                        recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary")),
                    recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")))) : (react_1.default.createElement(ShadcnComboInput, { selectedRecordTag: null, path: path, hideLabel: true, metadata: metadata, field: field, options: searchFilterOptions, onSelect: (record) => {
                        setValue(path, { ...record, _link: record.id });
                    }, isLoading: isLoading, errorMessage: "", actions: [
                        react_1.default.createElement(CommandGroup, { key: "add-record" },
                            react_1.default.createElement(CommandItem, { onSelect: () => {
                                    setModalOpen(true);
                                } },
                                react_1.default.createElement("div", { className: "flex flex-row items-center gap-2" },
                                    react_1.default.createElement(lucide_react_1.PlusIcon, { className: "w-4 h-4" }),
                                    "Add ",
                                    parentName)),
                            react_1.default.createElement(cmdk_1.CommandSeparator, null)),
                    ], records: records, checkSelected: () => false, allowMultiple: false, willLoadMoreOptions: pagination.hasNextPage && searchFilterOptions.length >= useRelatedModel_js_1.optionRecordsToLoadCount, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, defaultValue: search.value }))),
            react_1.default.createElement(Dialog, { open: modalOpen, onOpenChange: () => setModalOpen(!modalOpen) },
                react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                    react_1.default.createElement(DialogContent, { className: "bg-white" },
                        react_1.default.createElement(DialogHeader, null,
                            react_1.default.createElement(DialogTitle, null,
                                "Add ",
                                parentName)),
                        react_1.default.createElement("div", null, props.children),
                        react_1.default.createElement(DialogFooter, { className: "" },
                            react_1.default.createElement(DialogClose, { asChild: true },
                                react_1.default.createElement(Button, { type: "button", variant: "secondary" }, "Close")),
                            react_1.default.createElement(Button, { type: "button", variant: "default", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setModalOpen(false);
                                } }, "Save")))))));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnAutoBelongsToForm);
};
exports.makeShadcnAutoBelongsToForm = makeShadcnAutoBelongsToForm;
//# sourceMappingURL=ShadcnAutoBelongsToForm.js.map