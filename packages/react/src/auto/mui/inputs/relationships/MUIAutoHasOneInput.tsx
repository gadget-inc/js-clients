import { Alert, Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasOneInputController } from "../../../hooks/useHasOneInputController.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;

export const MUIAutoHasOneInput = autoInput((props: AutoRelationshipInputProps) => {
  const { field } = props;
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, selected, search, pagination, relatedModel },
    selectedRecordIds,
    errorMessage,
    isLoading,

    onSelectRecord,
    onRemoveRecord,
  } = useHasOneInputController(props);

  const hasMultipleRelatedRecords = selected.records && selected.records.length > 1;

  if (showErrorBannerWhenTooManyRelatedRecords && hasMultipleRelatedRecords) {
    return <Alert>{`Multiple related records for hasOne field "${field}"`}</Alert>;
  }

  return (
    <Autocomplete
      renderOption={(props, option) => {
        const isShowMoreButton = option.recordId === "-1";
        const isSelected = selectedRecordIds === option.recordId;
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
      onChange={(e, selectedValue) => onSelectRecord(selectedValue.recordId)}
      onClose={() => search.set()}
      renderInput={(params) => (
        <TextField {...params} value={search.value} label={metadata.name} onChange={(e) => search.set(e.target.value)} name={path} />
      )}
    ></Autocomplete>
  );
});

const showMoreHoverOption = { recordId: "-1", label: "Show more" };
