import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
export const MUIAutoBelongsToInput = autoInput((props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, pagination, search }, selectedRecordId, onSelectRecord, } = useBelongsToInputController(props);
    const selectedRecord = options.find((option) => option.id === selectedRecordId);
    return (React.createElement(Autocomplete, { id: `${selectedRecord?.id}_${selectedRecord?.label}`, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = selectedRecordId === option.recordId;
            return !isShowMoreButton ? (React.createElement(Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (React.createElement(Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                React.createElement(Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => onSelectRecord(selectedValue.id), onClose: () => search.set(), renderInput: (params) => (React.createElement(TextField, { ...params, value: search.value, label: props.label ?? metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
});
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoBelongsToInput.js.map