"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const LazyLoadedPolarisAutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./PolarisAutoRichTextInput.js"))));
const PolarisAutoRichTextInput = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
};
exports.PolarisAutoRichTextInput = PolarisAutoRichTextInput;
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map