import { CircleX } from "lucide-react";
import * as React from "react";
/**
 * Renders table search controls for the ShadcnAutoTable
 */
export const makeShadcnAutoTableSearch = (elements) => {
    const { Button, Input } = elements;
    function ShadcnAutoTableSearch(props) {
        const { clear, set, value } = props.search;
        return (React.createElement("div", { className: "flex items-center" },
            React.createElement(Input, { placeholder: "Search", onChange: (e) => set(e.target.value), value: value }),
            React.createElement(Button, { disabled: !value, onClick: clear },
                React.createElement(CircleX, null))));
    }
    return ShadcnAutoTableSearch;
};
//# sourceMappingURL=ShadcnAutoTableSearch.js.map