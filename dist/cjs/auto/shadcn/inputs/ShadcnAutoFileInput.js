"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoFileInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const validationSchema_js_1 = require("../../../validationSchema.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
const makeShadcnAutoFileInput = ({ Input, Label, Button, Avatar, AvatarImage, AvatarFallback, }) => {
    function ShadcnAutoFileInput(props) {
        const { field: fieldApiIdentifier, control, ...rest } = props;
        const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata, actionHintParts, } = (0, useFileInputController_js_1.useFileInputController)({
            field: fieldApiIdentifier,
            control,
        });
        const fileUploadContainer = (0, react_1.useMemo)(() => {
            if (!actionHintParts) {
                return null;
            }
            return (react_1.default.createElement("div", null,
                actionHintParts.length > 1 && (react_1.default.createElement(Label, null,
                    react_1.default.createElement("span", { className: "block text-sm text-gray-500 mb-2" }, actionHintParts.map((part, index) => (react_1.default.createElement("span", { key: index, className: "mr-1" }, part)))))),
                react_1.default.createElement(Input, { type: "file", ...props, accept: validations.onlyImages?.acceptedTypes?.join(","), onChange: (e) => {
                        if (e.target.files) {
                            void onFileUpload(Array.from(e.target.files));
                        }
                    } })));
        }, [actionHintParts, validations.onlyImages?.acceptedTypes, props, onFileUpload]);
        const inputLabel = props.label ?? (react_1.default.createElement("div", { style: { display: "flex", gap: "4px" } },
            metadata.name,
            metadata.requiredArgumentForInput ? react_1.default.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
        const filePreview = (0, react_1.useMemo)(() => {
            const value = fieldProps.value;
            if (!value || !(0, validationSchema_js_1.isAutoFileFieldValue)(value))
                return null;
            return (react_1.default.createElement("div", { className: "p-8 pr-16" },
                react_1.default.createElement("div", { className: "flex justify-between items-center gap-8" },
                    react_1.default.createElement("div", { className: "flex items-center gap-4" },
                        react_1.default.createElement(Avatar, null,
                            react_1.default.createElement(AvatarImage, { src: imageThumbnailURL }),
                            react_1.default.createElement(AvatarFallback, null,
                                react_1.default.createElement(lucide_react_1.File, null))),
                        react_1.default.createElement("div", { className: "text-sm" },
                            value.$uploading ? "(Uploading) " : "",
                            value.fileName)),
                    canClearFileValue && (react_1.default.createElement(Button, { variant: "ghost", size: "sm", onClick: () => clearFileValue(), id: `clear-file-${fieldApiIdentifier}` },
                        react_1.default.createElement(lucide_react_1.DeleteIcon, { className: "w-4 h-4" }))))));
        }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);
        return (react_1.default.createElement("div", null,
            inputLabel,
            fileUploadContainer,
            filePreview,
            react_1.default.createElement("div", null, errorMessage && (react_1.default.createElement("div", { style: { marginTop: "4px" } },
                react_1.default.createElement(Label, { className: "text-red-500" }, errorMessage))))));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoFileInput);
};
exports.makeShadcnAutoFileInput = makeShadcnAutoFileInput;
//# sourceMappingURL=ShadcnAutoFileInput.js.map