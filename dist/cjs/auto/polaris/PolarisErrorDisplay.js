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
exports.PolarisErrorDisplay = void 0;
const polaris_1 = require("@shopify/polaris");
const react_1 = __importStar(require("react"));
const PolarisErrorDisplay = (props) => {
    const [showingError, setShowingError] = (0, react_1.useState)(false);
    return (react_1.default.createElement(polaris_1.Banner, { title: "An error occurred", status: "critical", action: props.retry ? { content: "Retry" } : undefined },
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