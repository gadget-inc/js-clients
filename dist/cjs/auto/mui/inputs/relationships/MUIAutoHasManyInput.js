"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoHasManyInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasManyInputController_js_1 = require("../../../hooks/useHasManyInputController.js");
const MUIAutoHasManyInput = (props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, search, pagination }, selectedRecordIds, onSelectRecord, } = (0, useHasManyInputController_js_1.useHasManyInputController)(props);
    return (react_1.default.createElement(material_1.Autocomplete, { multiple: true, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = selectedRecordIds.includes(option.recordId);
            return !isShowMoreButton ? (react_1.default.createElement(material_1.Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (react_1.default.createElement(material_1.Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                react_1.default.createElement(material_1.Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => selectedValue.forEach((id) => onSelectRecord(id)), onClose: () => search.set(), renderInput: (params) => (react_1.default.createElement(material_1.TextField, { ...params, value: search.value, label: metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
};
exports.MUIAutoHasManyInput = MUIAutoHasManyInput;
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoHasManyInput.js.map