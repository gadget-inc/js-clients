"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisErrorDisplay = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const PolarisErrorDisplay = (props) => {
    const [showingError, setShowingError] = (0, react_1.useState)(false);
    return (react_1.default.createElement(polaris_1.Banner, { title: "An error occurred", tone: "critical", action: props.retry ? { content: "Retry" } : undefined },
        react_1.default.createElement("p", null,
            "An internal error occurred while trying to render this page.",
            " ",
            !showingError && (react_1.default.createElement(polaris_1.Link, { url: "#", onClick: () => setShowingError(true) }, "Show details"))),
        react_1.default.createElement("p", null, "Please refresh and try again."),
        showingError && (react_1.default.createElement("p", null,
            react_1.default.createElement("b", null, "Error details"),
            ":",
            react_1.default.createElement("pre", null, props.error.message),
            react_1.default.createElement("pre", null,
                react_1.default.createElement("code", null, props.error.stack))))));
};
exports.PolarisErrorDisplay = PolarisErrorDisplay;
//# sourceMappingURL=PolarisErrorDisplay.js.map