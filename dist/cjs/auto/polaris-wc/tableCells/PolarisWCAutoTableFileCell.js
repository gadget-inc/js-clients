"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableFileCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useAutoTableFileCell_js_1 = require("../../hooks/useAutoTableFileCell.js");
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
const PolarisWCAutoTableFileCell = (props) => {
    const { originalFileName, formattedFileName, imageFileIconUrl } = (0, useAutoTableFileCell_js_1.useAutoTableFileCell)(props);
    return (react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
        react_1.default.createElement(FileIcon, { originalFileName: originalFileName, imageFileIconUrl: imageFileIconUrl }),
        react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: formattedFileName })));
};
exports.PolarisWCAutoTableFileCell = PolarisWCAutoTableFileCell;
const FileIcon = (props) => {
    const { originalFileName, imageFileIconUrl } = props;
    return (react_1.default.createElement("div", { style: { minWidth: "32px" } }, imageFileIconUrl ? (react_1.default.createElement("s-clickable", { border: "base", borderRadius: "base", overflow: "hidden", inlineSize: "32px", blockSize: "32px" },
        react_1.default.createElement("s-image", { objectFit: "cover", src: imageFileIconUrl, alt: originalFileName }))) : (react_1.default.createElement("s-icon", { type: "file" }))));
};
//# sourceMappingURL=PolarisWCAutoTableFileCell.js.map