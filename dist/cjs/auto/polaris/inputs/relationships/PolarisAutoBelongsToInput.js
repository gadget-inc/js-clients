"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useBelongsToInputController_js_1 = require("../../../hooks/useBelongsToInputController.js");
const useRelatedModelOptions_js_1 = require("../../../hooks/useRelatedModelOptions.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
exports.PolarisAutoBelongsToInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search }, isLoading, errorMessage, selectedRecordId, selectedRelatedModelRecordMissing, onSelectRecord, onRemoveRecord, } = (0, useBelongsToInputController_js_1.useBelongsToInputController)(props);
    const selectedRecordLabel = selectedRecordId
        ? options.find((option) => option.id === selectedRecordId)?.label ?? `id: ${selectedRecordId}`
        : null;
    const selectedRecordTag = selectedRecordId ? (react_1.default.createElement(polaris_1.Tag, { onRemove: onRemoveRecord, key: `selectedRecordTag_${selectedRecordId}` },
        react_1.default.createElement("p", { style: { color: selectedRelatedModelRecordMissing ? "red" : undefined }, id: `${selectedRecordId}_${selectedRecordLabel}` }, selectedRecordLabel))) : null;
    const onSelect = (recordId) => {
        const idIsAlreadySelected = selectedRecordId === recordId;
        idIsAlreadySelected
            ? onRemoveRecord() // clear selection
            : onSelectRecord(recordId); // make single selection
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { requiredIndicator: metadata.requiredArgumentForInput, onChange: search.set, value: search.value, name: path, label: props.label ?? metadata.name, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModelOptions_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => id === selectedRecordId, onSelect: onSelect, options: searchFilterOptions }))));
});
//# sourceMappingURL=PolarisAutoBelongsToInput.js.map