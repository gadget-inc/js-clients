import React from "react";
import { autoInput } from "../../AutoInput.js";
const LazyLoadedPolarisAutoRichTextInput = React.lazy(() => import("./PolarisAutoRichTextInput.js"));
export const PolarisAutoRichTextInput = autoInput((props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map