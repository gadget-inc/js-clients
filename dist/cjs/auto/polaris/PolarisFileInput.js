"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisFileInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
const PolarisFileInput = (props) => {
    const handleDropZoneDrop = (0, react_1.useCallback)((_dropFiles, acceptedFiles, _rejectedFiles) => {
        props.onChange(acceptedFiles[0]);
    }, [props.onChange]);
    const file = props.value;
    const fileUpload = !file && react_1.default.createElement(polaris_1.DropZone.FileUpload, null);
    const uploadedFiles = file && (react_1.default.createElement(polaris_1.InlineStack, null,
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