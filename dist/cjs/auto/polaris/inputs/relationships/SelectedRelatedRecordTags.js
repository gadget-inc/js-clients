"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedRelatedRecordTags = exports.getSelectedRelatedRecordTags = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const getSelectedRelatedRecordTags = (props) => {
    if (!props.selectedRecordIds.length) {
        // A separate component getter is used here to return null instead of <>null</> which adds extra height to the text field
        return null;
    }
    return react_1.default.createElement(exports.SelectedRelatedRecordTags, { ...props });
};
exports.getSelectedRelatedRecordTags = getSelectedRelatedRecordTags;
const SelectedRelatedRecordTags = (props) => {
    const { selectedRecordIds, options, onRemoveRecord } = props;
    return selectedRecordIds.length
        ? selectedRecordIds.map((id) => {
            const option = options.find((option) => option.id === id);
            return (react_1.default.createElement(polaris_1.Tag, { key: `option${id}`, onRemove: () => onRemoveRecord(id) }, option ? option.label : `id: ${id}`));
        })
        : null;
};
exports.SelectedRelatedRecordTags = SelectedRelatedRecordTags;
//# sourceMappingURL=SelectedRelatedRecordTags.js.map