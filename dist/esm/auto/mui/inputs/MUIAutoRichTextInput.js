import React from "react";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";
import { MUIAutoFormControl } from "./MUIAutoFormControl.js";
export default function MUIAutoRichTextInput(props) {
    return (React.createElement(MUIAutoFormControl, { ...props },
        React.createElement(AutoRichTextInput, { ...props })));
}
//# sourceMappingURL=MUIAutoRichTextInput.js.map