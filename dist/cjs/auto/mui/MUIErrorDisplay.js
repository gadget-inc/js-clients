"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIErrorDisplay = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const MUIErrorDisplay = (props) => {
    const [showingError, setShowingError] = (0, react_1.useState)(false);
    return (react_1.default.createElement(material_1.Alert, { severity: "error" },
        react_1.default.createElement("p", null,
            "An internal error occurred while trying to render this page.",
            " ",
            !showingError && (react_1.default.createElement("a", { href: "#", onClick: () => setShowingError(true) }, "Show details"))),
        showingError && (react_1.default.createElement("p", null,
            react_1.default.createElement("b", null, "Error details"),
            ":",
            react_1.default.createElement("pre", null, props.error.message),
            react_1.default.createElement("pre", null,
                react_1.default.createElement("code", null, props.error.stack))))));
};
exports.MUIErrorDisplay = MUIErrorDisplay;
//# sourceMappingURL=MUIErrorDisplay.js.map