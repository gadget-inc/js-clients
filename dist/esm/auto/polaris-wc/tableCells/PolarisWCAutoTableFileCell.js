import React from "react";
import { useAutoTableFileCell } from "../../hooks/useAutoTableFileCell.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
export const PolarisWCAutoTableFileCell = (props) => {
    const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);
    return (React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
        React.createElement(FileIcon, { originalFileName: originalFileName, imageFileIconUrl: imageFileIconUrl }),
        React.createElement(PolarisWCTruncatedTextWithTooltip, { text: formattedFileName })));
};
const FileIcon = (props) => {
    const { originalFileName, imageFileIconUrl } = props;
    return (React.createElement("div", { style: { minWidth: "32px" } }, imageFileIconUrl ? (React.createElement("s-clickable", { border: "base", borderRadius: "base", overflow: "hidden", inlineSize: "32px", blockSize: "32px" },
        React.createElement("s-image", { objectFit: "cover", src: imageFileIconUrl, alt: originalFileName }))) : (React.createElement("s-icon", { type: "file" }))));
};
//# sourceMappingURL=PolarisWCAutoTableFileCell.js.map