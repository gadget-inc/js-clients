import React from "react";
export const PolarisWCAutoTableBooleanCell = (props) => {
    const { value } = props;
    return (React.createElement("s-stack", { direction: "inline", alignItems: "center" },
        React.createElement("s-icon", { type: value ? "check" : "x", tone: value ? "success" : "neutral" })));
};
//# sourceMappingURL=PolarisWCAutoTableBooleanCell.js.map