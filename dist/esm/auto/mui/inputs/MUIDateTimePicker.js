import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const MUIDateTimePicker = (props) => {
    const { metadata } = useFieldMetadata(props.field);
    return (React.createElement(Box, { sx: { display: "flex" } },
        React.createElement(DatePicker, { label: metadata.name }),
        React.createElement(TimePicker, null)));
};
export default MUIDateTimePicker;
//# sourceMappingURL=MUIDateTimePicker.js.map