"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasManyThroughForm = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useHasManyThroughForm_js_1 = require("../../../../useHasManyThroughForm.js");
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useAutoRelationship_js_1 = require("../../../hooks/useAutoRelationship.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const utils_js_2 = require("../../utils.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const makeShadcnAutoHasManyThroughForm = ({ Badge, Button, Label, Command, CommandInput, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, Popover, PopoverContent, PopoverTrigger, }) => {
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    const renderOptionLabel = (0, utils_js_2.makeShadcnRenderOptionLabel)({ Label, Badge, Button });
    const SiblingOption = (props) => {
        const { option, onSelect } = props;
        return (react_1.default.createElement(CommandItem, { onSelect: () => {
                onSelect(option);
            } },
            react_1.default.createElement("div", { className: "flex justify-between items-center w-full" },
                react_1.default.createElement("div", { className: "flex flex-row items-center gap-2" },
                    renderOptionLabel(option.label, "primary"),
                    option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")),
                react_1.default.createElement(lucide_react_1.PlusIcon, { className: "w-4 h-4 shrink-0" }))));
    };
    function ShadcnAutoHasManyThroughForm(props) {
        const [open, setOpen] = (0, react_1.useState)(false);
        const { field, append, remove, joinRecords, metadata, primaryLabel, hasChildForm, listboxId, pathPrefix, metaDataPathPrefix, siblingModelName, siblingRecordsLoading, siblingRecords, siblingPagination, search, joinModelField, joinModelApiIdentifier, siblingModelOptions, inverseRelatedModelField, fieldArray, } = (0, useHasManyThroughForm_js_1.useHasManyThroughForm)(props);
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (siblingPagination.hasNextPage && siblingModelOptions.length) {
                siblingPagination.loadNextPage();
            }
        }, 300), [siblingPagination, siblingModelOptions.length]);
        return (react_1.default.createElement("div", { className: "flex flex-col gap-2 " },
            react_1.default.createElement("div", { className: "flex justify-between flex-row" },
                react_1.default.createElement("div", null, props.label ?? react_1.default.createElement(Label, null, siblingModelName)),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Popover, { open: open, onOpenChange: setOpen },
                        react_1.default.createElement(PopoverTrigger, { asChild: true },
                            react_1.default.createElement(Button, { type: "button", variant: "outline", role: "combobox", "aria-expanded": open, "aria-controls": listboxId, className: "w-[300px] flex flex-row items-center justify-between" },
                                react_1.default.createElement(Label, { className: "truncate flex-grow text-left" },
                                    "Add ",
                                    siblingModelName ?? "related model"),
                                react_1.default.createElement(lucide_react_1.ChevronsUpDown, { className: "opacity-50 w-5 h-5 flex-shrink-0" }))),
                        react_1.default.createElement(PopoverContent, { className: "w-[300px] bg-white p-0" },
                            react_1.default.createElement(ShadcnComboInput, { selectedRecordTag: null, path: "", hideLabel: true, metadata: metadata, field: field, options: siblingModelOptions, onSelect: () => void 0, willLoadMoreOptions: siblingPagination.hasNextPage && siblingModelOptions.length ? true : false, isLoading: siblingRecordsLoading, errorMessage: "", records: siblingRecords, onScrolledToBottom: handleScrolledToBottom, onChange: search.set, renderOption: (option) => (react_1.default.createElement(SiblingOption, { onSelect: (option) => {
                                        const record = siblingRecords?.find((record) => record.id === option.id) ?? { id: option.id };
                                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                                        inverseRelatedModelField &&
                                            append({ [inverseRelatedModelField]: { ...recordWithoutTimestamps, _link: record.id } });
                                    }, option: option })) }))))),
            joinRecords.length > 0 ? (react_1.default.createElement("div", { className: "flex flex-col gap-2" }, joinRecords.map(([fieldKey, idx, record]) => {
                const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];
                const siblingOption = (0, useRelatedModel_js_1.getRecordAsOption)(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);
                return (react_1.default.createElement("div", { className: "flex items-center w-full border border-gray-300 rounded-md ", key: fieldKey },
                    react_1.default.createElement("div", { className: "flex flex-col gap-4 w-full" },
                        react_1.default.createElement("div", { className: "flex-1 p-2" },
                            react_1.default.createElement("div", { className: "flex justify-between items-center w-full" },
                                react_1.default.createElement("div", { className: "flex flex-col gap-1" },
                                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                        renderOptionLabel(siblingOption.label, "primary"),
                                        siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary")),
                                    siblingOption?.secondaryLabel && renderOptionLabel(siblingOption.secondaryLabel, "secondary")),
                                react_1.default.createElement(Button, { id: `deleteButton_${pathPrefix}.${idx}`, className: "border ml-auto", variant: "outline", type: "button", size: "icon", onClick: () => remove(idx) },
                                    react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" })))),
                        hasChildForm && (react_1.default.createElement("div", { className: "flex-1 p-2 border-t border-gray-300", onClick: (e) => {
                                e.stopPropagation();
                                e.preventDefault();
                            } },
                            react_1.default.createElement(useAutoRelationship_js_1.RelationshipContext.Provider, { value: {
                                    transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                    transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                    fieldArray,
                                    hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                                } }, props.children))))));
            }))) : (react_1.default.createElement("div", { className: "flex items-center justify-center border border-gray-300 rounded-md p-2 mt-4" },
                react_1.default.createElement(Label, { className: "text-sm text-gray-500" },
                    "No ",
                    siblingModelName,
                    " yet")))));
    }
    return (0, AutoInput_js_1.autoRelationshipForm)(ShadcnAutoHasManyThroughForm);
};
exports.makeShadcnAutoHasManyThroughForm = makeShadcnAutoHasManyThroughForm;
//# sourceMappingURL=ShadcnAutoHasManyThroughForm.js.map