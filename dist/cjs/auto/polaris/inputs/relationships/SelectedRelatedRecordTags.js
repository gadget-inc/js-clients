"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedRelatedRecordTags = exports.getSelectedRelatedRecordTags = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const getSelectedRelatedRecordTags = (props) => {
    if (!props.selectedRecords.length) {
        // A separate component getter is used here to return null instead of <>null</> which adds extra height to the text field
        return null;
    }
    return react_1.default.createElement(exports.SelectedRelatedRecordTags, { ...props });
};
exports.getSelectedRelatedRecordTags = getSelectedRelatedRecordTags;
const SelectedRelatedRecordTags = (props) => {
    const { selectedRecords, optionLabel, onRemoveRecord } = props;
    const options = (0, useRelatedModel_js_1.getRecordsAsOptions)(selectedRecords, optionLabel);
    return options.length
        ? options.map((option) => {
            return (react_1.default.createElement(polaris_1.Tag, { key: `option${option.id}`, onRemove: () => {
                    const record = selectedRecords.find((record) => record.id === option.id);
                    onRemoveRecord(record ?? { id: option.id });
                } }, option.label ?? `id: ${option.id}`));
        })
        : null;
};
exports.SelectedRelatedRecordTags = SelectedRelatedRecordTags;
//# sourceMappingURL=SelectedRelatedRecordTags.js.map