import { Box } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { zonedTimeToUtc } from "../../../dateTimeUtils.js";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { useController } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { AutoDateTimeInputProps } from "../../shared/AutoInputTypes.js";

/**
 * A date and time picker for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field
 * @param props.label - The label of the date and time picker
 * @returns The date and time picker component
 */
export const MUIAutoDateTimePicker = autoInput((props: AutoDateTimeInputProps) => {
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { path, metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;
  const isRequired = metadata.requiredArgumentForInput;
  const label = (props.label ?? metadata.name) + (isRequired ? " *" : "");

  const { field: fieldProps, fieldState } = useController({ name: path });

  return (
    <Box sx={{ display: "flex" }}>
      <DatePicker
        label={label}
        slotProps={{ textField: { error: !!fieldState.error, helperText: fieldState.error?.message } }}
        onChange={(newValue: string | number | Date | null) => {
          props.onChange?.(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
          fieldProps.onChange(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
        }}
      />
      {(config as GadgetDateTimeConfig).includeTime && (
        <TimePicker
          onChange={(newValue: string | number | Date | null) => {
            props.onChange?.(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
            fieldProps.onChange(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
          }}
        />
      )}
    </Box>
  );
});

export default MUIAutoDateTimePicker;
