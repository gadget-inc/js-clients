import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

/**
 * A hasMany field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasManyInput field="children" label="Related children" />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field input component
 */
export const MUIAutoHasManyInput = (props: AutoRelationshipInputProps) => {
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, search, pagination },

    selectedRecordIds,

    onSelectRecord,
  } = useHasManyInputController(props);

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
