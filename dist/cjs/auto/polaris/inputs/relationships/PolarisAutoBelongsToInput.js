"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useBelongsToController_js_1 = require("../../../hooks/useBelongsToController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
exports.PolarisAutoBelongsToInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel }, isLoading, errorMessage, selectedRecord, danglingSelectedRecordId, onSelectRecord, onRemoveRecord, } = (0, useBelongsToController_js_1.useBelongsToInputController)(props);
    const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(props.field, props.optionLabel);
    const selectedOption = selectedRecord ? (0, useRelatedModel_js_1.getRecordAsOption)(selectedRecord, optionLabel) : null;
    const selectedRecordTag = selectedOption && selectedOption.id ? (react_1.default.createElement(polaris_1.Tag, { onRemove: onRemoveRecord, key: `selectedRecordTag_${selectedOption.id}` },
        react_1.default.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label))) : danglingSelectedRecordId ? (react_1.default.createElement(polaris_1.Tag, { onRemove: onRemoveRecord, key: `selectedRecordTag_${danglingSelectedRecordId}` },
        react_1.default.createElement("p", { id: `${danglingSelectedRecordId}`, style: { color: "red" } },
            "id: ",
            danglingSelectedRecordId))) : null;
    const onSelect = (record) => {
        const recordId = record.id;
        const idIsAlreadySelected = selectedRecord?.id === recordId;
        idIsAlreadySelected
            ? onRemoveRecord() // clear selection
            : onSelectRecord(record); // make single selection
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { requiredIndicator: metadata.requiredArgumentForInput, onChange: search.set, value: search.value, name: path, label: props.label ?? metadata.name, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => id === selectedRecord?.id, onSelect: onSelect, options: searchFilterOptions, records: relatedModel.records }))));
});
//# sourceMappingURL=PolarisAutoBelongsToInput.js.map