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
exports.PolarisFileInput = void 0;
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = __importStar(require("react"));
const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
const PolarisFileInput = (props) => {
    const handleDropZoneDrop = (0, react_1.useCallback)((_dropFiles, acceptedFiles, _rejectedFiles) => {
        props.onChange(acceptedFiles[0]);
    }, [props.onChange]);
    const file = props.value;
    const fileUpload = !file && react_1.default.createElement(polaris_1.DropZone.FileUpload, null);
    const uploadedFiles = file && (react_1.default.createElement(polaris_1.HorizontalStack, null,
        react_1.default.createElement(polaris_1.Thumbnail, { size: "small", alt: file.name, source: validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : polaris_icons_1.NoteMinor }),
        react_1.default.createElement("div", null,
            file.name,
            " ",
            react_1.default.createElement(polaris_1.Text, { variant: "bodySm", as: "p" },
                file.size,
                " bytes"))));
    return (react_1.default.createElement(polaris_1.DropZone, { label: props.label, allowMultiple: false, onDrop: handleDropZoneDrop },
        uploadedFiles,
        fileUpload));
};
exports.PolarisFileInput = PolarisFileInput;
//# sourceMappingURL=PolarisFileInput.js.map