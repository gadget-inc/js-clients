import { XIcon } from "lucide-react";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
export const makeShadcnAutoHasOneInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
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
    function ShadcnAutoHasOneInput(props) {
        const { field } = props;
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecord, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasOneInputController(props);
        const optionLabel = useOptionLabelForField(field, props.optionLabel);
        const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;
        const selectedRecordTag = selectedOption ? (React.createElement(Badge, { variant: "outline", key: `selectedRecordTag_${selectedOption.id}` },
            React.createElement("p", { id: `${selectedOption.id}_${selectedOption.label}` }, selectedOption.label),
            React.createElement(Button, { "aria-label": `Remove`, onClick: () => selectedRecord && onRemoveRecord(selectedRecord), variant: "ghost", size: "icon" },
                React.createElement(XIcon, null)))) : null;
        return (React.createElement(ShadcnComboInput, { ...props, options: options, path: path, metadata: metadata, selectedRecordTag: selectedRecordTag, onSelect: onSelectRecord, checkSelected: (id) => selectedRecord?.id === id, isLoading: isLoading, errorMessage: errorMessage, records: relatedModel.records }));
    }
    return autoInput(ShadcnAutoHasOneInput);
};
//# sourceMappingURL=ShadcnAutoHasOneInput.js.map