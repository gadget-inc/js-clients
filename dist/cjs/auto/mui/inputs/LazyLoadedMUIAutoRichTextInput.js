"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./MUIAutoRichTextInput.js"))));
const MUIAutoRichTextInput = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LazyLoadedMUIAutoRichTextInput, { ...props })));
};
exports.MUIAutoRichTextInput = MUIAutoRichTextInput;
//# sourceMappingURL=LazyLoadedMUIAutoRichTextInput.js.map