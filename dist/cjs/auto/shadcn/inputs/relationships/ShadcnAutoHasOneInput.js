"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasOneInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasOneController_js_1 = require("../../../hooks/useHasOneController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const makeShadcnAutoHasOneInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandLoading, CommandGroup, Checkbox, ScrollArea, }) => {
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandLoading,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnAutoHasOneInput(props) {
        const { field } = props;
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasOneController_js_1.useHasOneInputController)(props);
        const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
        const selectedOption = selectedRecord ? (0, useRelatedModel_js_1.getRecordAsOption)(selectedRecord, optionLabel) : null;
        const selectedRecordTag = selectedOption ? (react_1.default.createElement(Badge, { variant: "outline", key: `selectedRecordTag_${selectedOption.id}` },
            react_1.default.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label ?? `id: ${selectedOption.id}`),
            react_1.default.createElement(Button, { "aria-label": `Remove`, onClick: () => selectedRecord && onRemoveRecord(selectedRecord), variant: "ghost", size: "icon" },
                react_1.default.createElement(lucide_react_1.XIcon, null)))) : null;
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, options.length]);
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: searchFilterOptions, path: path, metadata: metadata, onChange: search.set, defaultValue: search.value, onScrolledToBottom: handleScrolledToBottom, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, selectedRecordTag: selectedRecordTag, onSelect: onSelectRecord, checkSelected: (id) => selectedRecord?.id === id, isLoading: isLoading, errorMessage: errorMessage, records: relatedModel.records }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoHasOneInput);
};
exports.makeShadcnAutoHasOneInput = makeShadcnAutoHasOneInput;
//# sourceMappingURL=ShadcnAutoHasOneInput.js.map