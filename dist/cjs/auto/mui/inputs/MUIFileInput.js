"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIFileInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const VisuallyHiddenInput = (0, material_1.styled)("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});
const MUIFileInput = (props) => {
    return (react_1.default.createElement(material_1.Button, { component: "label", variant: "contained" },
        "Upload file",
        react_1.default.createElement(VisuallyHiddenInput, { type: "file" })));
};
exports.MUIFileInput = MUIFileInput;
//# sourceMappingURL=MUIFileInput.js.map