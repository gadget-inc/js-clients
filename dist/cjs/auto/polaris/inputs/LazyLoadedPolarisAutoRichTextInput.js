"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const LazyLoadedPolarisAutoRichTextInput = react_1.default.lazy(async () => {
    try {
        return await Promise.resolve().then(() => tslib_1.__importStar(require("./PolarisAutoRichTextInput.js")));
    }
    catch (error) {
        console.warn("Optional dependency not found, some features may not be available.");
        throw error;
    }
});
exports.PolarisAutoRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map