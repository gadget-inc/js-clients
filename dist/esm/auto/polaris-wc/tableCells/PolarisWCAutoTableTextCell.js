import React from "react";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
export const PolarisWCAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    return React.createElement(PolarisWCTruncatedTextWithTooltip, { text: stringifiedValue });
};
//# sourceMappingURL=PolarisWCAutoTableTextCell.js.map