import React from "react";
const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));
export const PolarisAutoRichTextInput = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
};
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map