import type { AutocompleteProps, ChipTypeMap } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { AutoEnumInputProps } from "../../shared/AutoInputTypes.js";

/**
 * An enum option picker for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEnumInput field="enumField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier for the Enum field.
 * @param props.label - The label of the input.
 * @returns The AutoEnumInput component.
 */
export const MUIAutoEnumInput = <
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]
>(
  props: AutoEnumInputProps & Partial<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>>
) => {
  const { allowMultiple, selectedOptions, onSelectionChange, allOptions, label } = useEnumInputController(props);

  return (
    <Autocomplete
      disablePortal
      multiple={allowMultiple}
      options={allOptions}
      renderInput={(params) => <TextField {...params} label={props.label ?? label} />}
      value={allowMultiple ? selectedOptions : selectedOptions[0]}
      onChange={(event, value) => {
        if (value === null || (Array.isArray(value) && value.length === 0)) {
          onSelectionChange(null);
          return;
        }

        if (typeof value === "string") {
          onSelectionChange(value);
        } else {
          for (const option of value) {
            onSelectionChange(option);
          }
        }
      }}
    />
  );
};
