import React from "react";
import { formatLongDateTimeString } from "../../../dateTimeUtils.js";
import { PolarisWCAutoTableTextCell } from "./PolarisWCAutoTableTextCell.js";
export const PolarisWCAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    return value instanceof Date ? React.createElement(PolarisWCAutoTableTextCell, { value: formatLongDateTimeString(value, includeTime) }) : null;
};
//# sourceMappingURL=PolarisWCAutoTableDateTimeCell.js.map