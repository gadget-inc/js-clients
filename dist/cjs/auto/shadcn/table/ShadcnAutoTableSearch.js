"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoTableSearch = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const React = tslib_1.__importStar(require("react"));
/**
 * Renders table search controls for the ShadcnAutoTable
 */
const makeShadcnAutoTableSearch = (elements) => {
    const { Button, Input } = elements;
    function ShadcnAutoTableSearch(props) {
        const { clear, set, value } = props.search;
        return (React.createElement("div", { className: "flex items-center" },
            React.createElement(Input, { placeholder: "Search", onChange: (e) => set(e.target.value), value: value }),
            React.createElement(Button, { disabled: !value, onClick: clear },
                React.createElement(lucide_react_1.CircleX, null))));
    }
    return ShadcnAutoTableSearch;
};
exports.makeShadcnAutoTableSearch = makeShadcnAutoTableSearch;
//# sourceMappingURL=ShadcnAutoTableSearch.js.map