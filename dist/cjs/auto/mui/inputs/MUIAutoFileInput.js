"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoFileInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../../GadgetProvider.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
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
const MUIAutoFileInput = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const api = (0, GadgetProvider_js_1.useApi)();
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const uploadFile = (0, react_1.useCallback)(async (files) => {
        const { url, token } = await api.getDirectUploadToken();
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": files[0].type,
            },
            body: files[0],
        });
        fieldProps.onChange({
            directUploadToken: token,
            fileName: files[0].name,
        });
    }, [api, fieldProps]);
    return (react_1.default.createElement(material_1.Button, { component: "label", variant: "contained" },
        metadata.name,
        " ",
        metadata.requiredArgumentForInput ? "*" : null,
        react_1.default.createElement(VisuallyHiddenInput, { type: "file", onChange: (event) => {
                if (event.target.files && event.target.files.length > 0) {
                    void uploadFile([event.target.files[0]]);
                }
            } })));
};
exports.MUIAutoFileInput = MUIAutoFileInput;
//# sourceMappingURL=MUIAutoFileInput.js.map