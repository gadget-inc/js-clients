import React from "react";
import { autoInput } from "../../AutoInput.js";
const LazyLoadedPolarisAutoRichTextInput = React.lazy(async () => {
    try {
        return await import("./PolarisAutoRichTextInput.js");
    }
    catch (error) {
        console.warn("Optional dependency not found, some features may not be available.");
        throw error;
    }
});
export const PolarisAutoRichTextInput = autoInput((props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map