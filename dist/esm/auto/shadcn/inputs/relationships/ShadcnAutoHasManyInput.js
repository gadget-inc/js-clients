import React, { useCallback, useMemo } from "react";
import { debounce } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./SelectedRelatedRecordTags.js";
export const makeShadcnAutoHasManyInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandLoading, CommandEmpty, CommandGroup, Checkbox, ScrollArea, }) => {
    const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });
    const ShadcnComboInput = makeShadcnAutoComboInput({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandLoading,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnAutoHasManyInput(props) {
        const { field } = props;
        const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel }, selectedRecords, errorMessage, isLoading, onSelectRecord, onRemoveRecord, } = useHasManyInputController(props);
        const optionLabel = useOptionLabelForField(field, props.optionLabel);
        const selectedRecordIds = useMemo(() => {
            return selectedRecords.map((record) => record.id).filter((id) => !!id);
        }, [selectedRecords]);
        const handleScrolledToBottom = useCallback(debounce(() => {
            if (pagination.hasNextPage && options.length >= optionRecordsToLoadCount) {
                pagination.loadNextPage();
            }
        }, 300), [pagination, options.length]);
        return (React.createElement(ShadcnComboInput, { ...props, options: searchFilterOptions, path: path, metadata: metadata, onChange: search.set, selectedRecordTag: React.createElement(SelectedRecordTags, { selectedRecords: selectedRecords, optionLabel: optionLabel, onRemoveRecord: onRemoveRecord }), onSelect: onSelectRecord, onScrolledToBottom: handleScrolledToBottom, defaultValue: search.value, willLoadMoreOptions: pagination.hasNextPage && options.length >= optionRecordsToLoadCount, checkSelected: (id) => {
                return selectedRecordIds.includes(id);
            }, isLoading: isLoading, errorMessage: errorMessage, allowMultiple: true, records: relatedModel.records }));
    }
    return autoInput(ShadcnAutoHasManyInput);
};
//# sourceMappingURL=ShadcnAutoHasManyInput.js.map