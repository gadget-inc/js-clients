import { format } from "date-fns";
import React from "react";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";
export const PolarisAutoTableDateTimeCell = (props) => {
    const { value } = props;
    return value instanceof Date ? React.createElement(PolarisAutoTableTextCell, { value: format(value, "LLL d, y K:mm a") }) : null;
};
//# sourceMappingURL=PolarisAutoTableDateTimeCell.js.map