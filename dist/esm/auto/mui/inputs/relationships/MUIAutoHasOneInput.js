import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;
export const MUIAutoHasOneInput = autoInput((props) => {
    const { field } = props;
    const { fieldMetadata: { path, metadata }, relatedModelOptions: { options, search, pagination }, selectedRecord, onSelectRecord, onRemoveRecord, } = useHasOneInputController(props);
    return (React.createElement(Autocomplete, { renderOption: (props, option) => {
            const isShowMoreButton = option.id === "-1";
            const isSelected = selectedRecord?.id === option.id;
            return !isShowMoreButton ? (React.createElement(Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label)) : pagination.hasNextPage ? (React.createElement(Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPage() },
                React.createElement(Typography, { color: "blue" }, showMoreHoverOption.label))) : null; // No more records to load
        }, options: [...options, showMoreHoverOption], onChange: (e, selectedValue) => selectedValue && onSelectRecord({ id: selectedValue.id }), onClose: () => search.set(), renderInput: (params) => (React.createElement(TextField, { ...params, value: search.value, label: metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
});
const showMoreHoverOption = { id: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoHasOneInput.js.map