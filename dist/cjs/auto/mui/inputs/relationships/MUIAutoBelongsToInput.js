"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useBelongsToInputController_js_1 = require("../../../hooks/useBelongsToInputController.js");
const MUIAutoBelongsToInput = (props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, pagination, search }, selectedRecord, onSelectRecord, } = (0, useBelongsToInputController_js_1.useBelongsToInputController)(props);
    return (react_1.default.createElement(material_1.Autocomplete, { id: `${selectedRecord?.id}_${selectedRecord?.label}`, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = selectedRecord?.id === option.recordId;
            return !isShowMoreButton ? (react_1.default.createElement(material_1.Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (react_1.default.createElement(material_1.Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                react_1.default.createElement(material_1.Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => onSelectRecord(selectedValue.id), onClose: () => search.set(), renderInput: (params) => (react_1.default.createElement(material_1.TextField, { ...params, value: search.value, label: props.label ?? metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
};
exports.MUIAutoBelongsToInput = MUIAutoBelongsToInput;
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoBelongsToInput.js.map