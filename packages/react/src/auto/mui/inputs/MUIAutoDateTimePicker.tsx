import { Box } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { useController } from "react-hook-form";
import { zonedTimeToUtc } from "../../../dateTimeUtils.js";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const MUIAutoDateTimePicker = (props: {
  field: string;
  value?: Date;
  onChange?: (value: Date) => void;
  error?: string;
  label?: string;
}) => {
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
};

export default MUIAutoDateTimePicker;
