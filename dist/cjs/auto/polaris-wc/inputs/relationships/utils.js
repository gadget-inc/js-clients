"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOptionLabel = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Renders an option label using Polaris Web Components.
 * @param label - The label to render (string or ReactNode)
 * @param type - The type of label: primary, secondary, or tertiary
 */
const renderOptionLabel = (label, type) => {
    if (typeof label === "string") {
        switch (type) {
            case "primary":
                return react_1.default.createElement("s-text", null, label);
            case "secondary":
                return react_1.default.createElement("s-text", { color: "subdued" }, label);
            case "tertiary":
                return react_1.default.createElement("s-chip", null, label);
            default:
                throw new Error("Invalid option type");
        }
    }
    else {
        return label;
    }
};
exports.renderOptionLabel = renderOptionLabel;
//# sourceMappingURL=utils.js.map