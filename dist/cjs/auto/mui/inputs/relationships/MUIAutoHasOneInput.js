"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoHasOneInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasOneInputController_js_1 = require("../../../hooks/useHasOneInputController.js");
/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;
const MUIAutoHasOneInput = (props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, selected, search, pagination, relatedModel }, selectedRecordIds, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = (0, useHasOneInputController_js_1.useHasOneInputController)(props);
    const hasMultipleRelatedRecords = selected.records && selected.records.length > 1;
    if (showErrorBannerWhenTooManyRelatedRecords && hasMultipleRelatedRecords) {
        return react_1.default.createElement(material_1.Alert, null, `Multiple related records for hasOne field "${field}"`);
    }
    return (react_1.default.createElement(material_1.Autocomplete, { renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = selectedRecordIds === option.recordId;
            return !isShowMoreButton ? (react_1.default.createElement(material_1.Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (react_1.default.createElement(material_1.Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                react_1.default.createElement(material_1.Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => onSelectRecord(selectedValue.recordId), onClose: () => search.set(), renderInput: (params) => (react_1.default.createElement(material_1.TextField, { ...params, value: search.value, label: metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
};
exports.MUIAutoHasOneInput = MUIAutoHasOneInput;
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoHasOneInput.js.map