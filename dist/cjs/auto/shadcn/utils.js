"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnRenderOptionLabel = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const makeShadcnRenderOptionLabel = ({ Label, Badge, Button }) => {
    function renderOptionLabel(label, type, clickable) {
        if (typeof label === "string") {
            switch (type) {
                case "primary":
                    return react_1.default.createElement(Label, { className: `font-semibold ${clickable ? "cursor-pointer" : "cursor-text"}` }, label);
                case "secondary":
                    return react_1.default.createElement(Label, { className: `text-sm text-gray-500 ${clickable ? "cursor-pointer" : "cursor-text"}` }, label);
                case "tertiary":
                    return (react_1.default.createElement(Badge, { className: `text-xs px-3 py-1 inline-flex items-center justify-center ${clickable ? "cursor-pointer" : "cursor-text"}`, variant: "outline" }, label));
                default:
                    throw new Error("Invalid option type");
            }
        }
        return label;
    }
    return renderOptionLabel;
};
exports.makeShadcnRenderOptionLabel = makeShadcnRenderOptionLabel;
//# sourceMappingURL=utils.js.map