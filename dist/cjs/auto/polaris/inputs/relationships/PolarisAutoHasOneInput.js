"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasOneInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasOneController_js_1 = require("../../../hooks/useHasOneController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
exports.PolarisAutoHasOneInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasOneController_js_1.useHasOneInputController)(props);
    const optionLabel = (0, useRelatedModel_js_1.useOptionLabelForField)(field, props.optionLabel);
    const selectedOption = selectedRecord ? (0, useRelatedModel_js_1.getRecordAsOption)(selectedRecord, optionLabel) : null;
    const selectedRecordTag = selectedOption ? (react_1.default.createElement(polaris_1.Tag, { onRemove: () => selectedRecord && onRemoveRecord(selectedRecord), key: `selectedRecordTag_${selectedOption.id}` },
        react_1.default.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label ?? `id: ${selectedOption.id}`))) : null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { onChange: search.set, value: search.value, label: metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: selectedRecordTag }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecord?.id === id, onSelect: onSelectRecord, records: relatedModel.records, options: searchFilterOptions }))));
});
//# sourceMappingURL=PolarisAutoHasOneInput.js.map