import React from "react";
import { autoInput } from "../../AutoInput.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";
/**
 * Prefer using the LazyLoadedMUIAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
export const MUIAutoRichTextInput = autoInput((props) => {
    return (React.createElement(MUIAutoFormControl, { ...props },
        React.createElement(AutoRichTextInput, { ...props })));
});
export default MUIAutoRichTextInput;
//# sourceMappingURL=MUIAutoRichTextInput.js.map