import { format } from "date-fns";
import React from "react";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";
export const PolarisAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    const timeFormat = includeTime ? "LLL d, y K:mm a" : "LLL d, y";
    return value instanceof Date ? React.createElement(PolarisAutoTableTextCell, { value: format(value, timeFormat) }) : null;
};
//# sourceMappingURL=PolarisAutoTableDateTimeCell.js.map