import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useRelationshipInputController } from "../../hooks/useRelationshipInputController.js";
import { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";

export const MUIAutoBelongsToInput = (props: AutoRelationshipInputProps) => {
  return <MUIAutoRelationshipInput {...props} />;
};

export const MUIAutoRelationshipInput = (props: AutoRelationshipInputProps) => {
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

  return (
    <Autocomplete
      id={`${selection.id}_${selection.label}`}
      renderOption={(props, option) => {
        const isShowMoreButton = option.recordId === "-1";
        const isSelected = option.recordId === selection.id;
        return isShowMoreButton && relatedModel.hasNextPage ? (
          <Box
            {...props}
            component="li"
            onClick={() => undefined} // Overriding the default onClick makes this un-selectable
            onMouseOver={() => pagination.loadNextPageOfRecords()}
          >
            {/* TODO 
              - Implement a ListBox type of component that automatically loads more records when scrolled to the bottom
              - Currently using a `hover to show more` approach since scroll controls need debouncing and scroll position tracking systems
            */}
            <Typography color={"blue"}>{showMoreHoverOption.label}</Typography>
          </Box>
        ) : (
          <Box component="li" {...props}>
            {isSelected && `✔️ `}
            {option.label}
          </Box>
        );
      }}
      options={[...relatedModel.options, showMoreHoverOption]}
      onChange={(e, selectedValue) => selection.set(selection.id === selectedValue.recordId ? undefined : selectedValue.recordId)}
      onClose={() => search.set()}
      renderInput={(params) => (
        <TextField {...params} value={search.value} label={metadata.name} onChange={(e) => search.set(e.target.value)} name={path} />
      )}
    ></Autocomplete>
  );
};

const showMoreHoverOption = { recordId: "-1", label: "Show more" };
