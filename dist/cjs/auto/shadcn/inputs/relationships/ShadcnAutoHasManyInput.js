"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHasManyInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../../utils.js");
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyController_js_1 = require("../../../hooks/useHasManyController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoComboInput_js_1 = require("../ShadcnAutoComboInput.js");
const SelectedRelatedRecordTags_js_1 = require("./SelectedRelatedRecordTags.js");
const makeShadcnAutoHasManyInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const { SelectedRecordTags } = (0, SelectedRelatedRecordTags_js_1.makeSelectedRecordTags)({ Badge, Button });
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
    function ShadcnAutoHasManyInput(props) {
        const { field, placeholder } = props;
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasManyController_js_1.useHasManyInputController)(props);
        const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
        const selectedRecordIds = (0, react_1.useMemo)(() => {
            return selectedRecords.map((record) => record.id).filter((id) => !!id);
        }, [selectedRecords]);
        const handleScrolledToBottom = (0, react_1.useCallback)((0, utils_js_1.debounce)(() => {
            if (pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, options.length]);
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: searchFilterOptions, path: path, metadata: metadata, onChange: search.set, placeholder: placeholder, selectedRecordTag: selectedRecords.length > 0 ? (react_1.default.createElement(SelectedRecordTags, { selectedRecords: selectedRecords, optionLabel: optionLabel, onRemoveRecord: onRemoveRecord })) : null, onSelect: onSelectRecord, onScrolledToBottom: handleScrolledToBottom, defaultValue: search.value, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount, checkSelected: (id) => {
                return selectedRecordIds.includes(id);
            }, isLoading: isLoading, errorMessage: errorMessage, allowMultiple: true, records: relatedModel.records }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoHasManyInput);
};
exports.makeShadcnAutoHasManyInput = makeShadcnAutoHasManyInput;
//# sourceMappingURL=ShadcnAutoHasManyInput.js.map