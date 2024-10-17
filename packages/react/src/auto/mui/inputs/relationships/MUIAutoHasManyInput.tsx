import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

export const MUIAutoHasManyInput = (props: AutoRelationshipInputProps) => {
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, search, pagination },

    selectedRecords,

    onSelectRecord,
  } = useHasManyInputController(props);

  const selectedRecordIds = selectedRecords.map((record) => record.id);

  return (
    <Autocomplete
      multiple
      renderOption={(props, option) => {
        const isShowMoreButton = option.recordId === "-1";
        const isSelected = selectedRecordIds.includes(option.recordId);
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
      onChange={(e, selectedValue) => selectedValue.forEach((id) => onSelectRecord(id))}
      onClose={() => search.set()}
      renderInput={(params) => (
        <TextField
          {...params}
          value={search.value}
          label={props.label ?? metadata.name}
          onChange={(e) => search.set(e.target.value)}
          name={path}
        />
      )}
    ></Autocomplete>
  );
};

const showMoreHoverOption = { recordId: "-1", label: "Show more" };
