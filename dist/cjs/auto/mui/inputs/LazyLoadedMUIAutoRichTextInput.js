"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyLoadedMUIAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
// lazy import for smaller bundle size by default
exports.LazyLoadedMUIAutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./MUIAutoRichTextInput.js"))));
//# sourceMappingURL=LazyLoadedMUIAutoRichTextInput.js.map