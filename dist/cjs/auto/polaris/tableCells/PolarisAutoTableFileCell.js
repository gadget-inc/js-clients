"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableFileCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
const MAX_FILE_NAME_LENGTH = 12;
const PolarisAutoTableFileCell = (props) => {
    const { value } = props;
    const originalFileName = value.fileName;
    const formattedFileName = (0, react_1.useMemo)(() => {
        const segments = originalFileName.split(".");
        if (segments.length > 1) {
            let name = segments.slice(0, -1).join(".");
            const extension = segments.pop();
            if (name.length > MAX_FILE_NAME_LENGTH) {
                // Truncate the name if it's too long
                name = name.substring(0, MAX_FILE_NAME_LENGTH) + "(..)";
            }
            // Join the name and extension back together
            return [name, extension].join(".");
        }
        else {
            // Return the original name if there's no extension
            return originalFileName;
        }
    }, [originalFileName]);
    const icon = useFileInputController_js_1.imageFileTypes.includes(value.mimeType) ? (react_1.default.createElement(polaris_1.Thumbnail, { size: "small", alt: originalFileName, source: value.url })) : (react_1.default.createElement("div", null,
        react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.NoteIcon })));
    return (react_1.default.createElement(polaris_1.InlineStack, { gap: "200", blockAlign: "center", wrap: false },
        icon,
        react_1.default.createElement(polaris_1.Text, { as: "span", truncate: true }, formattedFileName)));
};
exports.PolarisAutoTableFileCell = PolarisAutoTableFileCell;
//# sourceMappingURL=PolarisAutoTableFileCell.js.map