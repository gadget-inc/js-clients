"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyInputController_js_1 = require("../../../hooks/useHasManyInputController.js");
const useRelatedModelOptions_js_1 = require("../../../hooks/useRelatedModelOptions.js");
const RelatedModelOptions_js_1 = require("./RelatedModelOptions.js");
const SelectedRelatedRecordTags_js_1 = require("./SelectedRelatedRecordTags.js");
exports.PolarisAutoHasManyInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, selected, search, pagination }, selectedRecordIds, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasManyInputController_js_1.useHasManyInputController)(props);
    if (selected.records?.hasNextPage) {
        return react_1.default.createElement(polaris_1.Banner, { tone: "warning" }, `Too many related records for ${field}. Cannot edit`);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.Combobox, { activator: react_1.default.createElement(polaris_1.Combobox.TextField, { onChange: search.set, value: search.value, label: props.label ?? metadata.name, name: path, placeholder: "Search", autoComplete: "off", verticalContent: (0, SelectedRelatedRecordTags_js_1.getSelectedRelatedRecordTags)({
                    selectedRecordIds,
                    onRemoveRecord,
                    options,
                }) }), onScrolledToBottom: pagination.loadNextPage, allowMultiple: true, willLoadMoreOptions: pagination.hasNextPage && options.length >= useRelatedModelOptions_js_1.optionRecordsToLoadCount },
            react_1.default.createElement(RelatedModelOptions_js_1.RelatedModelOptions, { onSelect: onSelectRecord, options: searchFilterOptions, checkSelected: (id) => selectedRecordIds.includes(id), errorMessage: errorMessage, isLoading: isLoading }))));
});
//# sourceMappingURL=PolarisAutoHasManyInput.js.map