"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoFileInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
const MUIAutoFormControl_js_1 = require("./MUIAutoFormControl.js");
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
    const { field: fieldApiIdentifier, control, label } = props;
    const { onFileUpload, metadata } = (0, useFileInputController_js_1.useFileInputController)({
        field: fieldApiIdentifier,
        control,
    });
    return (react_1.default.createElement(MUIAutoFormControl_js_1.MUIAutoFormControl, { field: props.field },
        react_1.default.createElement(material_1.Button, { component: "label", variant: "contained" },
            props.label ?? metadata.name,
            " ",
            metadata.requiredArgumentForInput ? "*" : null,
            react_1.default.createElement(VisuallyHiddenInput, { type: "file", onChange: (event) => {
                    if (event.target.files && event.target.files.length > 0) {
                        void onFileUpload([event.target.files[0]]);
                    }
                } }))));
};
exports.MUIAutoFileInput = MUIAutoFileInput;
//# sourceMappingURL=MUIAutoFileInput.js.map