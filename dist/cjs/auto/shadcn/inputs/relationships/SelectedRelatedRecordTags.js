"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSelectedRecordTags = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const useRelatedModel_js_1 = require("../../../hooks/useRelatedModel.js");
const makeSelectedRecordTags = ({ Badge, Button }) => {
    function SelectedRecordTags(props) {
        const { selectedRecords, optionLabel, onRemoveRecord } = props;
        const options = (0, useRelatedModel_js_1.getRecordsAsOptions)(selectedRecords, { primary: optionLabel });
        if (!options.length) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, options.map((option, index) => {
            return (react_1.default.createElement(Badge, { key: `option-${option.id || index}`, variant: "outline", id: `selected-option-${option.primary}` },
                option.primary,
                react_1.default.createElement(Button, { onClick: (e) => {
                        e.preventDefault();
                        const record = selectedRecords.find((record) => record.id === option.id);
                        onRemoveRecord(record ?? { id: option.id });
                    }, variant: "ghost", "aria-label": `Remove ${option.primary}`, size: "icon" },
                    react_1.default.createElement(lucide_react_1.XIcon, null))));
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