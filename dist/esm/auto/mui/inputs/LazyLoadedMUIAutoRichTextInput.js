import React from "react";
// lazy import for smaller bundle size by default
const LazyLoadedMUIAutoRichTextInput = React.lazy(() => import("./MUIAutoRichTextInput.js"));
export const MUIAutoRichTextInput = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedMUIAutoRichTextInput, { ...props })));
};
//# sourceMappingURL=LazyLoadedMUIAutoRichTextInput.js.map