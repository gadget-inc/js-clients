import { Banner, Link } from "@shopify/polaris";
import React, { useState } from "react";
export const PolarisErrorDisplay = (props) => {
    const [showingError, setShowingError] = useState(false);
    return (React.createElement(Banner, { title: "An error occurred", tone: "critical", action: props.retry ? { content: "Retry" } : undefined },
        React.createElement("p", null,
            "An internal error occurred while trying to render this page.",
            " ",
            !showingError && (React.createElement(Link, { url: "#", onClick: () => setShowingError(true) }, "Show details"))),
        React.createElement("p", null, "Please refresh and try again."),
        showingError && (React.createElement("p", null,
            React.createElement("b", null, "Error details"),
            ":",
            React.createElement("pre", null, props.error.message),
            React.createElement("pre", null,
                React.createElement("code", null, props.error.stack))))));
};
//# sourceMappingURL=PolarisErrorDisplay.js.map