import { XIcon } from "lucide-react";
import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
export const makeSelectedRecordTags = ({ Badge, Button }) => {
    function SelectedRecordTags(props) {
        const { selectedRecords, optionLabel, onRemoveRecord } = props;
        const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });
        if (!options.length) {
            return null;
        }
        //TODO: why is the key not the id?
        return (React.createElement(React.Fragment, null, options.map((option, index) => {
            return (React.createElement(Badge, { key: `option-${option.id || index}`, variant: "outline" },
                option.primary,
                React.createElement(Button, { onClick: () => {
                        const record = selectedRecords.find((record) => record.id === option.id);
                        onRemoveRecord(record ?? { id: option.id });
                    }, variant: "ghost", "aria-label": `Remove`, size: "icon" },
                    React.createElement(XIcon, null))));
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