import { Box } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { useController } from "react-hook-form";
import { zonedTimeToUtc } from "../../../dateTimeUtils.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const MUIAutoDateTimePicker = (props) => {
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { path, metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    const isRequired = metadata.requiredArgumentForInput;
    const label = (props.label ?? metadata.name) + (isRequired ? " *" : "");
    const { field: fieldProps, fieldState } = useController({ name: path });
    return (React.createElement(Box, { sx: { display: "flex" } },
        React.createElement(DatePicker, { label: label, slotProps: { textField: { error: !!fieldState.error, helperText: fieldState.error?.message } }, onChange: (newValue) => {
                props.onChange?.(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
                fieldProps.onChange(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
            } }),
        config.includeTime && (React.createElement(TimePicker, { onChange: (newValue) => {
                props.onChange?.(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
                fieldProps.onChange(zonedTimeToUtc(new Date(newValue ?? ""), localTz));
            } }))));
};
export default MUIAutoDateTimePicker;
//# sourceMappingURL=MUIAutoDateTimePicker.js.map