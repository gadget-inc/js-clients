import { X } from "lucide-react";
import * as React from "react";
/**
 * Renders table search controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTableSearch = (elements) => {
    const { Button, Input } = elements;
    function ShadcnAutoTableSearch(props) {
        const { clear, set, value } = props.search;
        return (React.createElement("div", { className: "flex flex-row items-center gap-2 w-full" },
            React.createElement(Input, { placeholder: "Search", onChange: (e) => set(e.target.value), value: value, className: "max-w-[420px]" }),
            value.length > 0 && (React.createElement(Button, { disabled: !value, onClick: clear, variant: "ghost" },
                "Reset ",
                React.createElement(X, null)))));
    }
    return ShadcnAutoTableSearch;
};
//# sourceMappingURL=ShadcnAutoTableSearch.js.map