import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useBelongsToInputController } from "../../../hooks/useBelongsToInputController.js";
import { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

export const MUIAutoBelongsToInput = (props: AutoRelationshipInputProps) => {
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, pagination, search },

    selectedRecordId,
    onSelectRecord,
  } = useBelongsToInputController(props);

  const selectedRecord = options.find((option) => option.id === selectedRecordId);

  return (
    <Autocomplete
      id={`${selectedRecord?.id}_${selectedRecord?.label}`}
      renderOption={(props, option) => {
        const isShowMoreButton = option.recordId === "-1";
        const isSelected = selectedRecordId === option.recordId;
        return !isShowMoreButton ? (
          <Box component="li" {...props}>
            {isSelected && `✔️ `}
            {option.label}
          </Box>
        ) : pagination.hasNextPage ? (
          <Box
            {...props}
            component="li"
            onClick={() => undefined} // Overriding the default onClick makes this un-selectable
            onMouseOver={() => pagination.loadNextPage()}
          >
            {/* TODO 
              - Implement a ListBox type of component that automatically loads more records when scrolled to the bottom
              - Currently using a `hover to show more` approach since scroll controls need debouncing and scroll position tracking systems
            */}
            <Typography color={"blue"}>{showMoreHoverOption.label}</Typography>
          </Box>
        ) : null; // No more records to load
      }}
      options={[...options, showMoreHoverOption]}
      onChange={(e, selectedValue) => onSelectRecord(selectedValue.id)}
      onClose={() => search.set()}
      renderInput={(params) => (
        <TextField {...params} value={search.value} label={metadata.name} onChange={(e) => search.set(e.target.value)} name={path} />
      )}
    ></Autocomplete>
  );
};

const showMoreHoverOption = { recordId: "-1", label: "Show more" };
