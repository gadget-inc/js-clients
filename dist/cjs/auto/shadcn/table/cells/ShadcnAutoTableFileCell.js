"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableFileCell = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const React = tslib_1.__importStar(require("react"));
const useAutoTableFileCell_js_1 = require("../../../hooks/useAutoTableFileCell.js");
const makeShadcnAutoTableFileCell = (elements) => {
    const { Label, Avatar, AvatarImage, AvatarFallback } = elements;
    function ShadcnAutoTableFileCell(props) {
        const { originalFileName, formattedFileName, imageFileIconUrl } = (0, useAutoTableFileCell_js_1.useAutoTableFileCell)(props);
        return (React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement(Avatar, null,
                imageFileIconUrl && React.createElement(AvatarImage, { src: imageFileIconUrl, alt: originalFileName }),
                React.createElement(AvatarFallback, null, nonImageFileIndicator)),
            React.createElement(Label, null, formattedFileName)));
    }
    return ShadcnAutoTableFileCell;
};
exports.makeShadcnAutoTableFileCell = makeShadcnAutoTableFileCell;
const nonImageFileIndicator = React.createElement(lucide_react_1.File, null);
//# sourceMappingURL=ShadcnAutoTableFileCell.js.map