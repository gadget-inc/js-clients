import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
export const MUIAutoHasManyInput = autoInput((props) => {
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, search, pagination }, selectedRecordIds, onSelectRecord, } = useHasManyInputController(props);
    return (React.createElement(Autocomplete, { multiple: true, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = selectedRecordIds.includes(option.recordId);
            return !isShowMoreButton ? (React.createElement(Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (React.createElement(Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                React.createElement(Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => selectedValue.forEach((id) => onSelectRecord(id)), onClose: () => search.set(), renderInput: (params) => (React.createElement(TextField, { ...params, value: search.value, label: props.label ?? metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
});
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoHasManyInput.js.map