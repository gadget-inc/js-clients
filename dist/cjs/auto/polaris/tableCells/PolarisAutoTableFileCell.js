"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableFileCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const useAutoTableFileCell_js_1 = require("../../hooks/useAutoTableFileCell.js");
const PolarisAutoTableFileCell = (props) => {
    const { originalFileName, formattedFileName, imageFileIconUrl } = (0, useAutoTableFileCell_js_1.useAutoTableFileCell)(props);
    const icon = imageFileIconUrl ? (react_1.default.createElement(polaris_1.Thumbnail, { size: "small", alt: originalFileName, source: imageFileIconUrl })) : (react_1.default.createElement("div", null,
        react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.NoteIcon })));
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "200", blockAlign: "center", wrap: false },
        icon,
        react_1.default.createElement(polaris_1.Text, { as: "span", truncate: true }, formattedFileName)));
};
exports.PolarisAutoTableFileCell = PolarisAutoTableFileCell;
//# sourceMappingURL=PolarisAutoTableFileCell.js.map