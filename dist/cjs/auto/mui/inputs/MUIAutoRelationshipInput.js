"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoRelationshipInput = exports.MUIAutoBelongsToInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelationshipInputController_js_1 = require("../../hooks/useRelationshipInputController.js");
const MUIAutoBelongsToInput = (props) => {
    return react_1.default.createElement(exports.MUIAutoRelationshipInput, { ...props });
};
exports.MUIAutoBelongsToInput = MUIAutoBelongsToInput;
const MUIAutoRelationshipInput = (props) => {
    const { field, control, optionLabel } = props;
    const { path, isHasMany, relatedModel, metadata, pagination, search, selection } = (0, useRelationshipInputController_js_1.useRelationshipInputController)({
        field: field,
        control: control,
        optionLabel: optionLabel,
    });
    if (isHasMany) {
        // TODO - Update to account for HasMany relationship. Multiselect functionality and more advanced hook
        return null;
    }
    return (react_1.default.createElement(material_1.Autocomplete, { id: `${selection.id}_${selection.label}`, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = option.recordId === selection.id;
            return isShowMoreButton && relatedModel.hasNextPage ? (react_1.default.createElement(material_1.Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPageOfRecords() },
                react_1.default.createElement(material_1.Typography, { color: "blue" }, showMoreHoverOption.label))) : (react_1.default.createElement(material_1.Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label));
        }, options: [...relatedModel.options, showMoreHoverOption], onChange: (e, selectedValue) => selection.set(selection.id === selectedValue.recordId ? undefined : selectedValue.recordId), onClose: () => search.set(), renderInput: (params) => (react_1.default.createElement(material_1.TextField, { ...params, value: search.value, label: metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
};
exports.MUIAutoRelationshipInput = MUIAutoRelationshipInput;
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoRelationshipInput.js.map