import React, { useMemo } from "react";
import { shouldShowOptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisWCEditableOptionLabelButton = ({ option }) => {
    const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);
    return (React.createElement(React.Fragment, null, showOptionLabel && option ? (React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
            renderOptionLabel(option.primary, "primary"),
            option.secondary && renderOptionLabel(option.secondary, "secondary")),
        option.tertiary && renderOptionLabel(option.tertiary, "tertiary"))) : (React.createElement("s-text", null, "Click to edit..."))));
};
//# sourceMappingURL=PolarisWCEditableOptionLabelButton.js.map