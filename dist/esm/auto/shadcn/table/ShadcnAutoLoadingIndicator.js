import { LoaderIcon } from "lucide-react";
import React from "react";
export const makeShadcnAutoLoadingIndicator = (elements) => {
    function ShadcnAutoLoadingIndicator(props) {
        return (React.createElement(React.Fragment, null,
            React.createElement(LoaderIcon, { className: `w-4 h-4 animate-spin ${props.className}` })));
    }
    return ShadcnAutoLoadingIndicator;
};
//# sourceMappingURL=ShadcnAutoLoadingIndicator.js.map