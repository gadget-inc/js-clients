import { Box } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { zonedTimeToUtc } from "date-fns-tz";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const MUIAutoDateTimePicker = (props) => {
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { path, metadata } = useFieldMetadata(props.field);
    const config = metadata.configuration;
    const { field: fieldProps } = useController({
        name: path,
    });
    return (React.createElement(Box, { sx: { display: "flex" } },
        React.createElement(DatePicker, { label: metadata.name, onChange: (newValue) => {
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