import React from "react";
import { formatLongDateTimeString } from "../../../dateTimeUtils.js";
import { PolarisAutoTableTextCell } from "./PolarisAutoTableTextCell.js";
export const PolarisAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    return value instanceof Date ? React.createElement(PolarisAutoTableTextCell, { value: formatLongDateTimeString(value, includeTime) }) : null;
};
//# sourceMappingURL=PolarisAutoTableDateTimeCell.js.map