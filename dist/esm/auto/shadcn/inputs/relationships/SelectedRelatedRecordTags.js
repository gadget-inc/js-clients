import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
import { makeShadcnSelectedItemBadgeComponent } from "../ShadcnAutoEnumInput.js";
export const makeSelectedRecordTags = ({ Badge, Button }) => {
    const SelectedItemBadge = makeShadcnSelectedItemBadgeComponent({ Badge, Button });
    function SelectedRecordTags(props) {
        const { selectedRecords, optionLabel, onRemoveRecord } = props;
        const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });
        if (!options.length) {
            return null;
        }
        return (React.createElement(React.Fragment, null, options.map((option, index) => {
            return (React.createElement(SelectedItemBadge, { key: `option-${option.id || index}`, id: `selected-option-${option.primary}`, content: option.primary, ariaLabel: `Remove ${option.primary}`, onRemoveRecord: () => {
                    const record = selectedRecords.find((record) => record.id === option.id);
                    onRemoveRecord(record ?? { id: option.id });
                } }));
        })));
    }
    function getSelectedRecordTags(props) {
        if (!props.selectedRecords.length) {
            return null;
        }
        return React.createElement(SelectedRecordTags, { ...props });
    }
    return { SelectedRecordTags, getSelectedRecordTags };
};
//# sourceMappingURL=SelectedRelatedRecordTags.js.map