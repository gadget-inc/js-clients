"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasOneInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasOneInputController_js_1 = require("../../../hooks/useHasOneInputController.js");
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const SelectedRelatedRecordTags_js_1 = require("./SelectedRelatedRecordTags.js");
/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;
const PolarisAutoHasOneInput = (props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, selected, search, pagination }, selectedRecordIds, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasOneInputController_js_1.useHasOneInputController)(props);
    const hasMultipleRelatedRecords = selected.records && selected.records.length > 1;
    if (showErrorBannerWhenTooManyRelatedRecords && hasMultipleRelatedRecords) {
        return react_1.default.createElement(polaris_1.Banner, { tone: "warning" }, `Multiple related records for hasOne field "${field}"`);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { onChange: search.set, value: search.value, label: metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: (0, SelectedRelatedRecordTags_js_1.getSelectedRelatedRecordTags)({
                    selectedRecordIds,
                    onRemoveRecord,
                    options,
                }) }), onScrolledToBottom: pagination.loadNextPage, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModel_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { isLoading: isLoading, errorMessage: errorMessage, checkSelected: (id) => selectedRecordIds.includes(id), onSelect: onSelectRecord, options: searchFilterOptions }))));
};
exports.PolarisAutoHasOneInput = PolarisAutoHasOneInput;
//# sourceMappingURL=PolarisAutoHasOneInput.js.map