"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasManyThroughInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyThroughController_js_1 = require("../../../hooks/useHasManyThroughController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const SelectedRelatedRecordTags_js_1 = require("./SelectedRelatedRecordTags.js");
const makeShadcnAutoHasManyThroughInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandLoading, CommandGroup, Checkbox, ScrollArea, }) => {
    const { SelectedRecordTags } = (0, SelectedRelatedRecordTags_js_1.makeSelectedRecordTags)({ Badge, Button });
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
    function ShadcnAutoHasManyThroughInput(props) {
        const { field } = props;
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onRemoveRecord, onSelectRecord, } = (0, useHasManyThroughController_js_1.useHasManyThroughInputController)(props);
        const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
        const selectedRecordIds = (0, react_1.useMemo)(() => {
            return selectedRecords.map((record) => record.id).filter((id) => !!id);
        }, [selectedRecords]);
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, options.length]);
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: searchFilterOptions, path: path, metadata: metadata, onChange: search.set, defaultValue: search.value, selectedRecordTag: react_1.default.createElement(SelectedRecordTags, { selectedRecords: selectedRecords, optionLabel: optionLabel, onRemoveRecord: onRemoveRecord }), onSelect: onSelectRecord, checkSelected: (id) => {
                return selectedRecordIds.includes(id);
            }, allowMultiple: true, onScrolledToBottom: handleScrolledToBottom, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, isLoading: isLoading, errorMessage: errorMessage, records: relatedModel.records }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoHasManyThroughInput);
};
exports.makeShadcnAutoHasManyThroughInput = makeShadcnAutoHasManyThroughInput;
//# sourceMappingURL=ShadcnAutoHasManyThroughInput.js.map