import { Alert } from "@mui/material";
import React, { useState } from "react";
export const MUIErrorDisplay = (props) => {
    const [showingError, setShowingError] = useState(false);
    return (React.createElement(Alert, { severity: "error" },
        React.createElement("p", null,
            "An internal error occurred while trying to render this page.",
            " ",
            !showingError && (React.createElement("a", { href: "#", onClick: () => setShowingError(true) }, "Show details"))),
        showingError && (React.createElement("p", null,
            React.createElement("b", null, "Error details"),
            ":",
            React.createElement("pre", null, props.error.message),
            React.createElement("pre", null,
                React.createElement("code", null, props.error.stack))))));
};
//# sourceMappingURL=MUIErrorDisplay.js.map