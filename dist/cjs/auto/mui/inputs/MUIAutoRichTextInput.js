"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoRichTextInput_js_1 = tslib_1.__importDefault(require("../../shared/AutoRichTextInput.js"));
require("../styles/rich-text.css");
const MUIAutoFormControl_js_1 = require("./MUIAutoFormControl.js");
/**
 * Prefer using the LazyLoadedMUIAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
function MUIAutoRichTextInput(props) {
    return (react_1.default.createElement(MUIAutoFormControl_js_1.MUIAutoFormControl, { ...props },
        react_1.default.createElement(AutoRichTextInput_js_1.default, { ...props })));
}
exports.default = MUIAutoRichTextInput;
//# sourceMappingURL=MUIAutoRichTextInput.js.map