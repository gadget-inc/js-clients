"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedRelatedRecordTags = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const PolarisWCDismissibleBadge_js_1 = require("../../commonComponents/PolarisWCDismissibleBadge.js");
const getSelectedRelatedRecordTags = (props) => {
    if (!props.selectedRecords.length) {
        // Return undefined instead of a wrapper element to avoid adding extra height to the text field
        return undefined;
    }
    return react_1.default.createElement(PolarisWCSelectedRelatedRecordTags, { ...props });
};
exports.getSelectedRelatedRecordTags = getSelectedRelatedRecordTags;
const PolarisWCSelectedRelatedRecordTags = (props) => {
    const { selectedRecords, optionLabel, onRemoveRecord } = props;
    const options = (0, useRelatedModel_js_1.getRecordsAsOptions)(selectedRecords, { primary: optionLabel });
    return options.length ? (react_1.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, options.map((option) => {
        const onDismiss = () => {
            const record = selectedRecords.find((record) => record.id === option.id);
            onRemoveRecord(record ?? { id: option.id });
        };
        return (react_1.default.createElement(PolarisWCDismissibleBadge_js_1.PolarisWCDismissibleBadge, { key: `option${option.id}`, onDismiss: onDismiss }, option.primary ?? `id: ${option.id}`));
    }))) : null;
};
//# sourceMappingURL=PolarisWCSelectedRelatedRecordTags.js.map