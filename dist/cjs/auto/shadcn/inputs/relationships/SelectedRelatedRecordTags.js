"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSelectedRecordTags = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const ShadcnAutoEnumInput_js_1 = require("../ShadcnAutoEnumInput.js");
const makeSelectedRecordTags = ({ Badge, Button }) => {
    const SelectedItemBadge = (0, ShadcnAutoEnumInput_js_1.makeShadcnSelectedItemBadgeComponent)({ Badge, Button });
    function SelectedRecordTags(props) {
        const { selectedRecords, optionLabel, onRemoveRecord } = props;
        const options = (0, useRelatedModel_js_1.getRecordsAsOptions)(selectedRecords, { primary: optionLabel });
        if (!options.length) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, options.map((option, index) => {
            return (react_1.default.createElement(SelectedItemBadge, { key: `option-${option.id || index}`, id: `selected-option-${option.primary}`, content: option.primary, ariaLabel: `Remove ${option.primary}`, onRemoveRecord: () => {
                    const record = selectedRecords.find((record) => record.id === option.id);
                    onRemoveRecord(record ?? { id: option.id });
                } }));
        })));
    }
    function getSelectedRecordTags(props) {
        if (!props.selectedRecords.length) {
            return null;
        }
        return react_1.default.createElement(SelectedRecordTags, { ...props });
    }
    return { SelectedRecordTags, getSelectedRecordTags };
};
exports.makeSelectedRecordTags = makeSelectedRecordTags;
//# sourceMappingURL=SelectedRelatedRecordTags.js.map