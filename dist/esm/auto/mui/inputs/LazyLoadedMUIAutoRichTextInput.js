import React from "react";
import { autoInput } from "../../AutoInput.js";
// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));
export const MUIAutoRichTextInput = autoInput((props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedMUIAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedMUIAutoRichTextInput.js.map