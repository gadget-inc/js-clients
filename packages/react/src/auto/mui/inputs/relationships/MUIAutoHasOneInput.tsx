import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneController.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;

export const MUIAutoHasOneInput = autoInput((props: AutoRelationshipInputProps) => {
  const { field } = props;
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, search, pagination },
    selectedRecord,
    onSelectRecord,
    onRemoveRecord,
  } = useHasOneInputController(props);

  return (
    <Autocomplete
      renderOption={(props, option) => {
        const isShowMoreButton = option.id === "-1";
        const isSelected = selectedRecord?.id === option.id;
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
      onChange={(e, selectedValue) => selectedValue && onSelectRecord({ id: selectedValue.id })}
      onClose={() => search.set()}
      renderInput={(params) => (
        <TextField {...params} value={search.value} label={metadata.name} onChange={(e) => search.set(e.target.value)} name={path} />
      )}
    ></Autocomplete>
  );
});

const showMoreHoverOption = { id: "-1", label: "Show more" };
