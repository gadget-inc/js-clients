import { Box } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { zonedTimeToUtc } from "date-fns-tz";
import React from "react";
import { useController } from "react-hook-form";
import type { GadgetDateTimeConfig } from "../../../internal/gql/graphql.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const MUIAutoDateTimePicker = (props: { field: string; value?: Date; onChange?: (value: Date) => void; error?: string }) => {
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { path, metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;
  const { field: fieldProps } = useController({
    name: path,
  });

  return (
    <Box sx={{ display: "flex" }}>
      <DatePicker
        label={metadata.name}
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
