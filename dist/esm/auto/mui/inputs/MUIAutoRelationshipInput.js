import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useRelationshipInputController } from "../../hooks/useRelationshipInputController.js";
export const MUIAutoBelongsToInput = (props) => {
    return React.createElement(MUIAutoRelationshipInput, { ...props });
};
export const MUIAutoRelationshipInput = (props) => {
    const { field, control, optionLabel } = props;
    const { path, isHasMany, relatedModel, metadata, pagination, search, selection } = useRelationshipInputController({
        field: field,
        control: control,
        optionLabel: optionLabel,
    });
    if (isHasMany) {
        // TODO - Update to account for HasMany relationship. Multiselect functionality and more advanced hook
        return null;
    }
    return (React.createElement(Autocomplete, { id: `${selection.id}_${selection.label}`, renderOption: (props, option) => {
            const isShowMoreButton = option.recordId === "-1";
            const isSelected = option.recordId === selection.id;
            return isShowMoreButton && relatedModel.hasNextPage ? (React.createElement(Box, { ...props, component: "li", onClick: () => undefined, onMouseOver: () => pagination.loadNextPageOfRecords() },
                React.createElement(Typography, { color: "blue" }, showMoreHoverOption.label))) : (React.createElement(Box, { component: "li", ...props },
                isSelected && `✔️ `,
                option.label));
        }, options: [...relatedModel.options, showMoreHoverOption], onChange: (e, selectedValue) => selection.set(selection.id === selectedValue.recordId ? undefined : selectedValue.recordId), onClose: () => search.set(), renderInput: (params) => (React.createElement(TextField, { ...params, value: search.value, label: metadata.name, onChange: (e) => search.set(e.target.value), name: path })) }));
};
const showMoreHoverOption = { recordId: "-1", label: "Show more" };
//# sourceMappingURL=MUIAutoRelationshipInput.js.map