"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoFileInput = void 0;
const tslib_1 = require("tslib");
const filesize_1 = require("filesize");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
const makeShadcnAutoFileInput = ({ Input, Label }) => {
    function ShadcnAutoFileInput(props) {
        const { field: fieldApiIdentifier, control, ...rest } = props;
        const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata } = (0, useFileInputController_js_1.useFileInputController)({
            field: fieldApiIdentifier,
            control,
        });
        const fileUploadContainer = (0, react_1.useMemo)(() => {
            if (fieldProps.value)
                return null;
            const actionHintParts = ["Accepts"];
            if (validations.onlyImages) {
                actionHintParts.push(`.jpg, .webp, .svg${validations.onlyImages.allowAnimatedImages ? ", .gif" : ""}, and .png`);
            }
            if (validations.fileSize) {
                const validation = validations.fileSize;
                const message = (0, useFileInputController_js_1.getFileSizeValidationMessage)(validation, {
                    inRange: (min, max) => `between ${(0, filesize_1.filesize)(min)} and ${(0, filesize_1.filesize)(max)}`,
                    max: (max) => `smaller than ${(0, filesize_1.filesize)(max)}`,
                    min: (min) => `larger than ${(0, filesize_1.filesize)(min)}`,
                });
                if (message)
                    actionHintParts.push(message);
            }
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(Label, null, actionHintParts.length > 0 && (react_1.default.createElement("span", { className: "block text-sm text-gray-500 mb-2" }, actionHintParts.map((part, index) => (react_1.default.createElement("span", { key: index, className: "mr-1" }, part)))))),
                react_1.default.createElement(Input, { type: "file", ...props })));
        }, [fieldProps.value, validations.fileSize, validations.onlyImages]);
        return react_1.default.createElement("div", null, fileUploadContainer);
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoFileInput);
};
exports.makeShadcnAutoFileInput = makeShadcnAutoFileInput;
//# sourceMappingURL=ShadcnAutoFileInput.js.map