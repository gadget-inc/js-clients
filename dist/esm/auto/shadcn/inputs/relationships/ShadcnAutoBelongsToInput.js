import { XIcon } from "lucide-react";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
export const makeShadcnAutoBelongsToInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const ShadcnComboInput = makeShadcnAutoComboInput({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    function ShadcnAutoBelongsToInput(props) {
        //TODO: Implement Load More
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel }, isLoading, errorMessage, selectedRecord, danglingSelectedRecordId, onSelectRecord, onRemoveRecord, } = useBelongsToInputController(props);
        const optionLabel = useOptionLabelForField(props.field, props.optionLabel);
        const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;
        const selectedRecordTag = selectedOption && selectedOption.id ? (React.createElement(Badge, { key: `selectedRecordTag_${selectedOption.id}`, variant: "outline" },
            selectedOption.label,
            React.createElement(Button, { "aria-label": `Remove`, onClick: onRemoveRecord, variant: "ghost", size: "icon" },
                React.createElement(XIcon, null)))) : danglingSelectedRecordId ? (React.createElement(Badge, { key: `selectedRecordTag_${danglingSelectedRecordId}`, variant: "outline" },
            React.createElement("p", { id: `${danglingSelectedRecordId}`, style: { color: "red" } },
                "id: ",
                danglingSelectedRecordId),
            React.createElement(Button, { "aria-label": `Remove`, onClick: onRemoveRecord, variant: "ghost", size: "icon" },
                React.createElement(XIcon, null)))) : null;
        const onSelect = (record) => {
            const recordId = record.id;
            const idIsAlreadySelected = selectedRecord?.id === recordId;
            idIsAlreadySelected
                ? onRemoveRecord() // clear selection
                : onSelectRecord(record); // make single selection
        };
        return (React.createElement(ShadcnComboInput, { ...props, options: options, path: path, metadata: metadata, selectedRecordTag: selectedRecordTag, onSelect: onSelect, isLoading: isLoading, errorMessage: errorMessage, records: relatedModel.records }));
    }
    return autoInput(ShadcnAutoBelongsToInput);
};
//# sourceMappingURL=ShadcnAutoBelongsToInput.js.map