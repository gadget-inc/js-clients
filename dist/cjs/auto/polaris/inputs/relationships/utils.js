"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOptionLabel = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const renderOptionLabel = (label, type) => {
    if (typeof label === "string") {
        switch (type) {
            case "primary":
                return (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", fontWeight: "semibold", as: "h3" }, label));
            case "secondary":
                return (react_1.default.createElement(polaris_1.Text, { variant: "bodyMd", as: "p", tone: "subdued" }, label));
            case "tertiary":
                return (react_1.default.createElement(polaris_1.Box, null,
                    react_1.default.createElement(polaris_1.Tag, null, label)));
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