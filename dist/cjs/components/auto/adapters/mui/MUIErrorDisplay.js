"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIErrorDisplay = void 0;
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
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