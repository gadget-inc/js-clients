"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useBelongsToController_js_1 = require("../../../hooks/useBelongsToController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const makeShadcnAutoBelongsToInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
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
    function ShadcnAutoBelongsToInput(props) {
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel }, isLoading, errorMessage, selectedRecord, danglingSelectedRecordId, onSelectRecord, onRemoveRecord, } = (0, useBelongsToController_js_1.useBelongsToInputController)(props);
        const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(props.field, props.optionLabel);
        const selectedOption = selectedRecord ? (0, useRelatedModel_js_1.getRecordAsOption)(selectedRecord, { primary: optionLabel }) : null;
        const selectedRecordTag = selectedOption && selectedOption.id ? (react_1.default.createElement(Badge, { key: `selectedRecordTag_${selectedOption.id}`, variant: "outline" },
            selectedOption.primary,
            react_1.default.createElement(Button, { "aria-label": `Remove`, onClick: (e) => {
                    e.preventDefault();
                    onRemoveRecord();
                }, variant: "ghost", size: "icon" },
                react_1.default.createElement(lucide_react_1.XIcon, null)))) : danglingSelectedRecordId ? (react_1.default.createElement(Badge, { key: `selectedRecordTag_${danglingSelectedRecordId}`, variant: "outline" },
            react_1.default.createElement("p", { id: `${danglingSelectedRecordId}`, style: { color: "red" } },
                "id: ",
                danglingSelectedRecordId),
            react_1.default.createElement(Button, { "aria-label": `Remove`, onClick: (e) => {
                    e.preventDefault();
                    onRemoveRecord();
                }, variant: "ghost", size: "icon" },
                react_1.default.createElement(lucide_react_1.XIcon, null)))) : null;
        const onSelect = (record) => {
            const recordId = record.id;
            const idIsAlreadySelected = selectedRecord?.id === recordId;
            idIsAlreadySelected
                ? onRemoveRecord() // clear selection
                : onSelectRecord(record); // make single selection
        };
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, options.length]);
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: searchFilterOptions, path: path, metadata: metadata, onChange: search.set, defaultValue: search.value, selectedRecordTag: selectedRecordTag, onScrolledToBottom: handleScrolledToBottom, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, onSelect: onSelect, isLoading: isLoading, errorMessage: errorMessage, records: relatedModel.records }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoBelongsToInput);
};
exports.makeShadcnAutoBelongsToInput = makeShadcnAutoBelongsToInput;
//# sourceMappingURL=ShadcnAutoBelongsToInput.js.map